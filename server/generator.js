const fs = require("fs");
const tmp = require("../AKH-tmp.json")

const colors = {
    W: "White",
    B: "Black",
    U: "Blue",
    R: "Red",
    G: "Green"
};
const rarity = {
    U: "Uncommon",
    C: "Common",
    R: "Rare",
    M: "Mythic",
    L: "Basic Land"
};
const cards = tmp.map((c, i) => {
    const card = {
        name: c.Name,
        cmc: c.Converted,
        supertypes: c.Supertypes.split(" ").filter(t => t),
        subtypes: c.Subtypes.split(" ").filter(t => t),
        types: c.Types.split(" "),
        colors: c.Color !== "X" ? Array.from(c.Color).map(c => colors[c]) : null,
        rarity: rarity[c.Rarity],
        multiverseid: i + 1,
        manaCost: Array.from('' + c.Cost).reduce((cost, c) => cost + `{${c}}`, '')
    }
    if (card.types.indexOf("creature") > -1) {
        const [power, toughness] = c.Text.split("\n")[0].split("/");
        card.power = power;
        card.toughness = toughness;
        card.text = c.Text.split("\n").slice(1).join("\n")
    } else {
        card.text = c.Text
    }

    return card;
});
const AKH = {
    name: "Amonkhet",
    code: "AKH",
    cards
};

fs.writeFileSync("./extensions/AKH.json", JSON.stringify(AKH, null, 4));