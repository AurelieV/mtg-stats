const elasticsearch = require('elasticsearch');

const client = new elasticsearch.Client({
    host: 'localhost:9200'
});

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
            _all: { "enabled": false }, 
            properties: { 
                name: { type: "text" },
                cmc: { type: "integer" },
                colors: { type: "keyword" },
                supertype: { type: "keyword" },
                types: { type: "keyword" },
                subtypes: { type: "keyword" },
                rarity: { type: "keyword" },
                oracle_text: { type: "text" },
                power: { type: "integer" },
                toughness: { type: "integer" },
                extension: { type: "keyword" },
                extensionDate: { type: "date", format: "yyyy-MM-dd" },
                block: { type: "keyword" },
                multiverse_id: { type: "integer" },
                multicolore: { type: "boolean" },
                mana_cost: { type: "keyword" }
            }
        }
        }}
    });
    console.log(`Index ${index} created`);
}

createIndex();