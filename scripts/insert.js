const elasticsearch = require('elasticsearch');

const client = new elasticsearch.Client({
    host: 'localhost:9200'
});

const surtypes = [ "Basic", "Legendary" ];

function convertToInt(value) {
  if (/^(\-|\+)?([0-9]+|Infinity)$/.test(value))
    return Number(value);
  return NaN;
}

function getTypes(card) {
    const typeLine = card.type_line;
    let [ types, subtypes ] = typeLine.split(' — ');
    types = types || '';
    subtypes = subtypes || '';

    let supertype = surtypes.map(t => {
        if (types.startsWith(t)) {
            return t;
        } else {
            return '';
        }
    }).find(t => !!t) || '';
    if (!!supertype) {
        types = types.slice(supertype.length + 1);
    }
    types = types.split(" ").filter(t => !!t);
    subtypes = subtypes.split(" ").filter(t => !!t);

    return { subtypes, types, supertype };
}

async function insertExtension(extension, maxNumber) {
    const index = "cards";
    const body = extension.cards.reduce((acc, card) => {
        const number = convertToInt(card.collector_number);
        if (number === NaN || number > maxNumber) return acc;

        let mainCard;
        if (card.card_faces) {
            mainCard = card.card_faces[0];
        } else {
            mainCard = card;
        }
        const { types, supertype, subtypes } = getTypes(mainCard);

        if (supertype === "Basic") return acc;

        const power = convertToInt(mainCard.power);
        const toughness = convertToInt(mainCard.toughness);

        const esCard =  {
            name: mainCard.name,
            cmc: mainCard.cmc,
            colors: mainCard.colors || "Colorless",
            multicolore: (mainCard.colors || []).length > 1,
            supertype,
            types,
            subtypes,
            rarity: card.rarity,
            oracle_text: mainCard.oracle_text,
            extension: extension.code,
            extensionDate: extension.released_at,
            block: extension.block_code,
            multiverse_id: card.multiverse_id,
            mana_cost: card.mana_cost,
            uri: mainCard.image_uris.small,
            collector_number: mainCard.collector_number
        };
        if (power !== NaN) {
            esCard.power = power;
        }
        if (toughness !== NaN) {
            esCard.toughness = toughness;
        }

        return acc.concat([{ index: {_index: index, _type: "card", _id: card.multiverse_id} }, esCard])
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

const extension = require("../extensions/dom.json");
const maxNumber = 249;
insertExtension(extension, maxNumber);


