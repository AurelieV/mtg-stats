const fs = require('fs')
const flatten = require('lodash.flatten')

const references = ['32', '42', '67', '104', '135', '174', '64', '66', '84']
const extension = require('../extensions/iko.json')

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

async function extractTricks(set, references) {
  console.log(`Extraction de ${references.length}/${set.cards.length} cards`)
  const split = references.filter((r) => r.split('-').length > 1)
  if (split.length) {
    console.log(`Don ${split.length} split cards`)
  }
  const cards = references.map((r) => {
    const [collector_number, card_face_id] = r.split('-')
    const card = set.cards.find((c) => c.collector_number == collector_number)
    if (card_face_id) {
      const cardFace = card.card_faces[Number(card_face_id)]
      return { ...card, ...cardFace, cmc: calculateCCM(cardFace.mana_cost) }
    } else {
      return { ...card }
    }
  })
  const tricks = Object.assign({}, extension, { cards })
  const fileName = `./src/app/tricks/${extension.code}-bis.json`
  fs.writeFileSync(fileName, JSON.stringify(tricks, null, 4))
  console.log(`Fichier généré ${fileName}`)
}

extractTricks(extension, references)
