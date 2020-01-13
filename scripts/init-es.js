const { Client } = require("@elastic/elasticsearch");

const {
  elasticsearch: elasticsearchConfiguration
} = require("../private.json");

const client = new Client({
  cloud: {
    id: elasticsearchConfiguration.cloudId
  },
  auth: {
    username: elasticsearchConfiguration.username,
    password: elasticsearchConfiguration.password
  }
});

async function createIndex() {
  const index = "cards";
  const { body: alreadyExist } = await client.indices.exists({ index });
  if (alreadyExist) {
    console.log(`Index ${index} already exist, drop it`);
    await client.indices.delete({ index });
  }
  try {
    await client.indices.create({
      index,
      body: {
        mappings: {
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
            mana_cost: { type: "keyword" },
            uri: { type: "text" }
          }
        }
      }
    });
    console.log(`Index ${index} created`);
  } catch (err) {
    console.log("err", err);
  }
}

createIndex();
