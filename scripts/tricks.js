const fs = require("fs");

const ids = [
    "214",
    "100",
    "1",
    "16",
    "50",
    "81",
    "111",
    "193",
    "199",
    "205",
    "15",
    "165",
    "190",
    "17",
    "26",
    "35",
    "158",
    "102",
    "28",
    "48",
    "82",
    "160",
    "161",
    "44",
    "54",
    "85",
    "110",
    "122",
    "139",
    "152",
    "156",
    "47"
];
const extension = require("../extensions/m19.json");

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