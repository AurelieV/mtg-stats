const fs = require('fs')
const flatten = require('lodash.flatten')

const references = [
  '16',
	'19',
	'25',
	'26',
	'30',
	'31',
	'41',
	'43',
	'46',
	'47',
	'50',
	'54',
	'58',
	'61',
	'67',
	'68',
	'72',
	'74',
	'75',
	'76',
	'79',
	'81',
	'87',
	'89',
	'90',
	'94',
	'95',
	'104',
	'110',
	'111',
	'127',
	'133',
	'134',
	'141',
	'145',
	'159',
	'171',
	'175',
	'180',
	'192',
	'194',
	'197'
]
const extension = require('../extensions/thb.json')

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
