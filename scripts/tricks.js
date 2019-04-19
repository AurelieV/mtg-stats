const fs = require('fs')
const flatten = require('lodash.flatten')

const references = [
  '5',
  '9',
  '10',
  '27',
  '59',
  '72',
  '74',
  '120',
  '139',
  '142',
  '210',
  '35',
  '47',
  '98',
  '121',
  '136',
  '162',
  '177',
  '193',
  '14',
  '18',
  '45',
  '62',
  '63',
  '101',
  '131',
  '189',
  '190',
  '104',
  '114',
  '144',
  '153',
  '161',
  '175',
  '15',
  '109',
  '115',
  '152',
  '199',
  '212',
  '225',
]
const extension = require('../extensions/war.json')

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
  const fileName = `./src/app/tricks/${extension.code}.json`
  fs.writeFileSync(fileName, JSON.stringify(tricks, null, 4))
  console.log(`Fichier généré ${fileName}`)
}

extractTricks(extension, references)
