const fs = require("fs");
const flatten = require("lodash.flatten");

const references = [
  "1",
  "9",
  "10",
  "19",
  "32",
  "33",
  "35",
  "37",
  "42",
  "45",
  "46",
  "50",
  "52",
  "56",
  "59",
  "62",
  "64",
  "65",
  "71",
  "79",
  "80",
  "88",
  "96",
  "106",
  "111",
  "117",
  "119",
  "127",
  "128",
  "131",
  "136",
  "144",
  "146",
  "149",
  "162",
  "166",
  "168",
  "174",
  "181",
  "186",
  "192",
  "194",
  "201",
  "216",
  "236",
  "237",
  "242",
];
const extension = require("../extensions/znr.json");

function calculateCCM(costString) {
  const costRegexp = new RegExp(/\{([G, W, B, U, R, \d, \/]+)\}/g);
  let cost = costRegexp.exec(costString);
  let ccm = 0;
  while (cost !== null) {
    const number = Number(cost[1]);
    if (!isNaN(number)) {
      ccm += number;
    } else {
      ccm++;
    }
    cost = costRegexp.exec(costString);
  }

  return ccm;
}

async function extractTricks(set, references) {
  console.log(`Extraction de ${references.length}/${set.cards.length} cards`);
  const split = references.filter((r) => r.split("-").length > 1);
  if (split.length) {
    console.log(`Don ${split.length} split cards`);
  }
  const cards = references
    .map((r) => {
      const [collector_number, card_face_id] = r.split("-");
      const card = set.cards.find(
        (c) => c.collector_number == collector_number
      );
      if (card_face_id) {
        const cardFace = card.card_faces[Number(card_face_id)];
        return { ...card, ...cardFace, cmc: calculateCCM(cardFace.mana_cost) };
      } else if (card.layout === "modal_dfc") {
        const cardFace = card.card_faces[0];
        return { ...card, ...cardFace, cmc: calculateCCM(cardFace.mana_cost) };
      } else {
        return { ...card };
      }
    })
    .map((c) => ({
      name: c.name,
      cmc: c.cmc,
      mana_cost: c.mana_cost,
      colors: c.colors,
      rarity: c.rarity,
      image_uris: c.image_uris,
      capacity: c.capacity,
    }));
  const tricks = Object.assign({ name: extension.name, cards });
  const fileName = `./tricks/${extension.code}.json`;
  fs.writeFileSync(fileName, JSON.stringify(tricks, null, 4));
  console.log(`Fichier généré ${fileName}`);
}

extractTricks(extension, references);
