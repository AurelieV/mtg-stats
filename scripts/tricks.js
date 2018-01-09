const fs = require("fs");

const ids = [
"79",
"50",
"33",
"37",
"39",
"34",
"68",
"146",
"3",
"15",
"46",
"139",
"5",
"83",
"96",
"110",
"113",
"122",
"17",
"31",
"44",
"90",
"93",
"114",
"143",
"124",
];
const extension = require("../extensions/rix.json");

async function extractTricks(set, ids) {
    console.log(`Extraction de ${ids.length}/${set.cards.length} cards`);
    const cards = set.cards
        .filter(c => ids.indexOf(c.collector_number) > -1)
        .map(card => {
            if (card.card_faces) {
                return Object.assign(card, card.card_faces[0]);
            } else {
                return card;
            }
        });
    const tricks = Object.assign({}, extension, {cards});
    const fileName = `./src/app/tricks/${extension.code}.json`
    fs.writeFileSync(fileName, JSON.stringify(tricks, null, 4));
    console.log(`Fichier généré ${fileName}`);
}

extractTricks(extension, ids);