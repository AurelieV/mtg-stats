const request = require("request-promise-native");
const fs = require("fs");

const baseUrl = "https://api.scryfall.com/";
const setsUrl = baseUrl + "sets/";

async function fetchSet(code) {
    console.log("Fetch extension");
    const extension = await request({
        uri: setsUrl + code,
        json: true
    });

    console.log(`Extension ${extension.name} trouvée!`);
    let cardsData = await request({
        uri: extension.search_uri,
        json: true
    })
    extension.cards = cardsData.data;
    console.log("Début de l'extraction ...");
    while (cardsData.has_more) {
        cardsData = await request({
            uri: cardsData.next_page,
            json: true
        });
        extension.cards = extension.cards.concat(cardsData.data);
    };
    console.log("Extraction terminée");
    console.log(`${extension.cards.length} cartes trouvées`);

    const fileName = `./extensions/${extension.code}.json`
    fs.writeFileSync(fileName, JSON.stringify(extension, null, 4));
    console.log(`Fichier généré extensions/${extension.code}.json`);
}


fetchSet("rna");
