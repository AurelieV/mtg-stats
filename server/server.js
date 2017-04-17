const elasticsearch = require('elasticsearch');
const KLD = require('../extensions/KLD.json');
const AER = require('../extensions/AER.json');
const AKH = require('../extensions/AKH.json');

const client = new elasticsearch.Client({
    host: 'localhost:9200'
});

convertToInt = function (value) {
  if (/^(\-|\+)?([0-9]+|Infinity)$/.test(value))
    return Number(value);
  return NaN;
}

async function createIndex() {
    const index = "cards";
    const alreadyExist = await client.indices.exists({index});
    if (alreadyExist) {
        console.log(`Index ${index} already exist, drop it`);
        await client.indices.delete({index});
    }
    await client.indices.create({
        index,
        body: { mappings: { card: { 
            _all: { "enabled": false  }, 
            properties: { 
                name: { type: "text" },
                cmc: { type: "integer" },
                colors: { type: "keyword" },
                supertypes: { type: "keyword" },
                types: { type: "keyword" },
                subtypes: { type: "keyword" },
                rarity: { type: "keyword" },
                text: { type: "text" },
                power: { type: "integer" },
                toughness: { type: "integer" },
                extension: { type: "keyword" },
                extensionDate: { type: "date", format: "yyyy-MM-dd" },
                block: { type: "keyword" },
                multiverseid: { type: "integer" },
                multicolore: { type: "boolean" },
                cost: { type: "keyword" },
                attackingPower: { type: "integer" },
                attackingToughness: { type: "integer" }
            }
        }
        }}
    });
    console.log(`Index ${index} created`);
}

async function insertExtension(extension) {
    const index = "cards";
    const body = extension.cards.reduce((acc, card) => {
        if (card.rarity === "Basic Land") return acc;
        const power = convertToInt(card.power);
        const toughness = convertToInt(card.toughness);

        const esCard =  {
            name: card.name,
            cmc: card.cmc,
            colors: card.colors || "Colorless",
            multicolore: (card.colors || []).length > 1,
            supertypes: card.supertypes,
            types: card.types,
            subtypes: card.subtypes,
            rarity: card.rarity,
            text: card.text,
            extension: extension.code,
            extensionDate: extension.releaseDate,
            block: extension.block,
            multiverseid: card.multiverseid
        };
        if (power !== NaN) {
            esCard.power = power;
        }
        if (toughness !== NaN) {
            esCard.toughness = toughness;
        }

        return acc.concat([{ index: {_index: index, _type: "card", _id: card.multiverseid} }, esCard])
    }, []);

    console.log(`Start inserting ${extension.cards.length} cards from ${extension.name}`);
    const result = await client.bulk({ body });
    const updated = result.items.filter(item => item.index.result === "updated");
    const created = result.items.filter(item => item.index.result === "created");
    const errored = result.items.filter(item => item.index.status >= 300);

    console.log("Insertion finished");
    console.log(`   * ${updated.length} cards updated`);
    console.log(`   * ${created.length} cards created`);
    console.log(`   * ${errored.length} cards not inserted`);
}

async function insertBlock() {
    await createIndex();
   // await insertExtension(KLD);
   // await insertExtension(AER);
    await insertExtension(AKH);
}

insertBlock();

