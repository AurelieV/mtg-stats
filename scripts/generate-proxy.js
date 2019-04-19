const groupBy = require('lodash.groupby')
const fs = require('fs')

const countByRarity = {
  common: 4,
  uncommon: 2,
  rare: 1,
  mythic: 1,
}

function convertToInt(value) {
  if (/^(\-|\+)?([0-9]+|Infinity)$/.test(value)) return Number(value)
  return NaN
}

function generate(extension, maxNumber) {
  const cardsByRarity = groupBy(
    extension.cards.filter((card) => {
      const number = convertToInt(card.collector_number)
      return number !== NaN && number <= maxNumber
    }),
    (card) => card.rarity
  )
  let print = []
  ;['common', 'uncommon', 'rare', 'mythic'].forEach((rarity) => {
    print = print.concat(
      cardsByRarity[rarity].map((card) => `${countByRarity[rarity]} ${card.name}`)
    )
  })

  console.log(`Generate proxies for ${print.length} cards from ${extension.name}`)
  const fileName = `./proxy/${extension.code}.txt`
  fs.writeFileSync(fileName, print.join('\n'))
  console.log('Done')
}

const extension = require('../extensions/war.json')
const maxNumber = 249
generate(extension, maxNumber)
