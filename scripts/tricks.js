const fs = require("fs");

const ids = [ 
435247, 435241, 435364, 435206, 435186, 435233, 435283, 435297, 435332, 435356, 435182, 435184, 435185, 435320, 435158, 435159, 435187, 435224, 435234, 435250, 435337, 435303, 435338, 435360, 435368, 435195, 435199, 435204, 435235, 435326, 435363, 435190, 435205, 435214, 435217, 435219, 435251, 435281, 435294, 435295, 435277
];
const extension = require("../extensions/xln.json");

async function extractTricks(set, ids) {
    console.log(`Extraction de ${ids.length}/${set.cards.length} cards`);
    const cards = set.cards
        .filter(c => ids.indexOf(c.multiverse_id) > -1)
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