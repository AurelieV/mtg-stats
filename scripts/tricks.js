const fs = require("fs");

const ids = [
"59",
"194",
"202",
"56",
"65",
"31",
"110",
"117",
"180",
"46",
"63",
"83",
"94",
"154",
"163",
"2",
"19",
"188",
"22",
"45",
"60",
"67",
"140",
"176",
"7",
"72",
"138",
"142",
"10",
"75",
"77",
"81",
"152",
"155",
"20"
];
const extension = require("../extensions/dom.json");

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