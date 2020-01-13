const { Client } = require("@elastic/elasticsearch");

const {
  elasticsearch: elasticsearchConfiguration
} = require("../private.json");

const client = new Client({
  cloud: {
    id: elasticsearchConfiguration.cloudId
  },
  auth: {
    username: elasticsearchConfiguration.username,
    password: elasticsearchConfiguration.password
  }
});

const surtypes = ['Basic', 'Legendary']

function convertToInt(value) {
  if (/^(\-|\+)?([0-9]+|Infinity)$/.test(value)) return Number(value)
  return NaN
}

function getTypes(card) {
  const typeLine = card.type_line
  let [types, subtypes] = typeLine.split(' — ')
  types = types || ''
  subtypes = subtypes || ''

  let supertype =
    surtypes
      .map((t) => {
        if (types.startsWith(t)) {
          return t
        } else {
          return ''
        }
      })
      .find((t) => !!t) || ''
  if (!!supertype) {
    types = types.slice(supertype.length + 1)
  }
  types = types.split(' ').filter((t) => !!t)
  subtypes = subtypes.split(' ').filter((t) => !!t)

  return { subtypes, types, supertype }
}

function getMainCardInformation(card) {
  return {
    rarity: card.rarity,
    collector_number: card.collector_number,
  }
}

function getExtensionInformation(extension) {
  return {
    extension: extension.code,
    extensionDate: extension.released_at,
    block: extension.block_code,
  }
}

function calculateCCM(costString) {
  const costRegexp = new RegExp(/\{([G, W, B, U, R, \d, \/]+)\}/g)
  let cost = costRegexp.exec(costString)
  let ccm = 0
  while (cost !== null) {
    const number = Number(cost[1])
    if (!isNaN(number)) {
      ccm += number
    } else {
      ccm++
    }
    cost = costRegexp.exec(costString)
  }

  return ccm
}

function getCardInformation(cardFace, card, cardFaceIndex) {
  const { types, supertype, subtypes } = getTypes(cardFace)
  const power = convertToInt(cardFace.power)
  const toughness = convertToInt(cardFace.toughness)
  let uri
  if (card.layout === 'split') {
    uri = card.image_uris.small
  } else {
    uri = cardFace.image_uris.small
  }
  let reference = card.collector_number
  if (cardFaceIndex) {
    reference += cardFaceIndex
  }
  const esCard = {
    name: cardFace.name,
    cmc: calculateCCM(cardFace.mana_cost),
    colors: cardFace.colors || 'Colorless',
    multicolore: (cardFace.colors || []).length > 1,
    supertype,
    types,
    subtypes,
    oracle_text: cardFace.oracle_text,
    mana_cost: cardFace.mana_cost,
    uri,
    reference,
  }
  if (power !== NaN) {
    esCard.power = power
  }
  if (toughness !== NaN) {
    esCard.toughness = toughness
  }

  return esCard
}

async function insertExtension(extension, maxNumber) {
  const index = 'cards'
  const body = extension.cards.reduce((acc, card) => {
    const number = convertToInt(card.collector_number)
    if (number === NaN || number > maxNumber) return acc

    const cardsInfo = []
    switch (card.layout) {
      case 'split':
        cardsInfo.push(getCardInformation(card.card_faces[0], card, '-0'))
        cardsInfo.push(getCardInformation(card.card_faces[0], card, '-1'))
        break
      case 'transform':
      case 'flip':
        cardsInfo.push(getCardInformation(card_faces[0], card, '-0'))
        break
      default:
        cardsInfo.push(getCardInformation(card, card))
    }

    if (cardsInfo[0].supertype === 'Basic') return acc

    const mainInfo = getMainCardInformation(card)
    const extensionInfo = getExtensionInformation(extension)
    cardsInfo.forEach((cardInfo) => {
      acc.push({ create: { _index: index } })
      acc.push({
        ...mainInfo,
        ...extensionInfo,
        ...cardInfo,
      })
    })

    return acc
  }, [])

  console.log(`Start inserting ${extension.cards.length} cards from ${extension.name}`)
  const { body: result } = await client.bulk({ body })
  console.log(result.items[0])
  const updated = result.items.filter((item) => item.create.result === 'updated')
  const created = result.items.filter((item) => item.create.result === 'created')
  const errored = result.items.filter((item) => item.create.status >= 300)

  console.log('Insertion finished')
  console.log(`   * ${updated.length} cards updated`)
  console.log(`   * ${created.length} cards created`)
  console.log(`   * ${errored.length} cards not inserted`)
}

const extension = require('../extensions/thb.json')
const maxNumber = 249
insertExtension(extension, maxNumber)
