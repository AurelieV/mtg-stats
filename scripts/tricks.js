const fs = require("fs");
const flatten = require('lodash.flatten')

const references = [
"86",
"1",
"39",
"174",
"20",
"54",
"190",
"8",
"13",
"35",
"45",
"75",
"89",
"113",
"137",
"146",
"176",
"178",
"223-0",
"227-0",
"4",
"151",
"157",
"169",
"191",
"221-0",
"222-0",
"225-0",
"229-0",
"18",
"37",
"64",
"153",
"192",
"223-1",
"24",
"29",
"31",
"99",
"101",
"119",
"138",
"143",
"147",
"171",
"224-0",
"230-0",
"46",
"48",
"57",
"68",
"93",
"127",
"134",
"136",
"209",
"221-1",
"225-1",
"226-1"
];
const extension = require("../extensions/rna.json");

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