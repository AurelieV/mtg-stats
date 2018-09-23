const fs = require("fs");
const flatten = require('lodash.flatten')

const references = [
"38",
"220",
"31",
"44",
"54",
"83",
"139",
"188",
"28",
"94",
"107",
"126",
"227-0",
"229-0",
"230-0",
"32",
"34",
"118",
"151",
"178",
"229-1",
"23",
"52",
"79",
"228-0",
"137",
"179",
"181",
"182",
"199",
"224-1",
"227-1",
"228-1",
"230-1",
"5",
"7",
"35",
"37",
"56",
"75",
"124",
"140",
"152",
"159",
"221-0",
"221-1",
"224-0",
"113"
];
const extension = require("../extensions/grn.json");

function calculateCCM(costString) {
    const costRegexp = new RegExp(/\{([G, W, B, U, R, \d, \/]+)\}/g);
    let cost = costRegexp.exec(costString);
    let ccm = 0;
    while(cost !== null) {
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
    const split = references.filter((r) => r.split('-').length > 1);
    if (split.length) {
        console.log(`Don ${split.length} split cards`)
    }
    const cards = references.map(r => {
        const [collector_number, card_face_id] = r.split('-');
        const card = set.cards.find(c => c.collector_number == collector_number);
        if (card_face_id) {
            const cardFace = card.card_faces[Number(card_face_id)];
            return {...card, ...cardFace, cmc: calculateCCM(cardFace.mana_cost)}
        } else {
            return {...card}
        }
    })
    const tricks = Object.assign({}, extension, {cards});
    const fileName = `./src/app/tricks/${extension.code}.json`
    fs.writeFileSync(fileName, JSON.stringify(tricks, null, 4));
    console.log(`Fichier généré ${fileName}`);
}

extractTricks(extension, references);