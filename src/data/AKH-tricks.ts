export interface Card {
    name: string;
    cmc: number;
    manaCost: string;
    colors: string;
    effect?: string;
    rarity: "Rare" | "Uncommon" | "Mythic" | "Common"
}

export const tricks: Card[] = [
  {
    "manaCost": "{2}{W}",
    "cmc": 3,
    "name": "Aven Mindcensor",
    "colors": "White",
    "rarity": "Rare"
  },
  {
    "manaCost": "{2}{G}",
    "cmc": 3,
    "name": "Pouncing Cheetah",
    "colors": "Green",
    "rarity": "Common"
  },
  {
    "manaCost": "{3}{R}{G}",
    "cmc": 5,
    "name": "Samut, Voice of Dissent",
    "colors": "Red, Green",
    "rarity": "Mythic"
  },
  {
    "manaCost": "{2}{W}",
    "cmc": 3,
    "name": "Vizier of Deferment",
    "colors": "White",
    "rarity": "Uncommon"
  },
  {
    "manaCost": "{3}{W}",
    "cmc": 4,
    "name": "Cast Out",
    "colors": "White",
    "rarity": "Uncommon"
  },
  {
    "manaCost": "{1}{U}{U}",
    "cmc": 3,
    "name": "Cancel",
    "colors": "Blue",
    "rarity": "Common"
  },
  {
    "manaCost": "{1}{R}",
    "cmc": 2,
    "name": "Fling",
    "colors": "Red",
    "rarity": "Common"
  },
  {
    "manaCost": "{3}{R}",
    "cmc": 4,
    "name": "Pursue Glory",
    "colors": "Red",
    "rarity": "Common"
  },
  {
    "manaCost": "{2}{B}",
    "cmc": 3,
    "name": "Splendid Agony",
    "colors": "Black",
    "rarity": "Common"
  },
  {
    "manaCost": "{2}{W}",
    "cmc": 3,
    "name": "Start / Finish",
    "colors": "White",
    "rarity": "Uncommon"
  },
  {
    "manaCost": "{W}",
    "cmc": 1,
    "name": "Time to Reflect",
    "colors": "White",
    "rarity": "Uncommon"
  },
  {
    "manaCost": "{1}{B}",
    "cmc": 2,
    "name": "Destined / Lead",
    "colors": "Black",
    "rarity": "Uncommon"
  },
  {
    "manaCost": "{1}{G}",
    "cmc": 2,
    "name": "Dissenter's Deliverance",
    "colors": "Green",
    "rarity": "Common"
  },
  {
    "manaCost": "{3}{R}",
    "cmc": 4,
    "name": "Electrify",
    "colors": "Red",
    "rarity": "Common"
  },
  {
    "manaCost": "{4}{B}",
    "cmc": 5,
    "name": "Final Reward",
    "colors": "Black",
    "rarity": "Common"
  },
  {
    "manaCost": "{2}{U}",
    "cmc": 3,
    "name": "Galestrike",
    "colors": "Blue",
    "rarity": "Uncommon"
  },
  {
    "manaCost": "{3}{U}",
    "cmc": 4,
    "name": "Hieroglyphic Illumination",
    "colors": "Blue",
    "rarity": "Common"
  },
  {
    "manaCost": "{R}",
    "cmc": 1,
    "name": "Magma Spray",
    "colors": "Red",
    "rarity": "Common"
  },
  {
    "manaCost": "{1}{W}",
    "cmc": 2,
    "name": "Mighty Leap",
    "colors": "White",
    "rarity": "Common"
  },
  {
    "manaCost": "{1}{W}",
    "cmc": 2,
    "name": "Prepare / Fight",
    "colors": "White",
    "rarity": "Rare"
  },
  {
    "manaCost": "{G}",
    "cmc": 1,
    "name": "Stinging Shot",
    "colors": "Green",
    "rarity": "Common"
  },
  {
    "manaCost": "{1}{R}",
    "cmc": 2,
    "name": "Brute Strength",
    "colors": "Red",
    "rarity": "Common"
  },
  {
    "manaCost": "{1}{U}",
    "cmc": 2,
    "name": "Censor",
    "colors": "Blue",
    "rarity": "Uncommon"
  },
  {
    "manaCost": "{1}{U}",
    "cmc": 2,
    "name": "Winds of Rebuke",
    "colors": "Blue",
    "rarity": "Common"
  },
  {
    "manaCost": "{3}{U}",
    "cmc": 4,
    "name": "Decision Paralysis",
    "colors": "Blue",
    "rarity": "Common"
  },
  {
    "manaCost": "{2}{R}",
    "cmc": 3,
    "name": "Glorious End",
    "colors": "Red",
    "rarity": "Rare"
  },
  {
    "manaCost": "{1}{G}",
    "cmc": 2,
    "name": "Haze of Pollen",
    "colors": "Green",
    "rarity": "Common"
  },
  {
    "manaCost": "{2}{U}",
    "cmc": 3,
    "name": "Reduce / Rubble",
    "colors": "Blue",
    "rarity": "Uncommon"
  },
  {
    "manaCost": "{2}{W}",
    "cmc": 3,
    "name": "Renewed Faith",
    "colors": "White",
    "rarity": "Uncommon"
  },
  {
    "manaCost": "{1}{U}",
    "cmc": 2,
    "name": "Failure / Comply",
    "colors": "Blue",
    "rarity": "Rare"
  },
  {
    "manaCost": "{2}{W}",
    "cmc": 3,
    "name": "Forsake the Worldly",
    "colors": "White",
    "rarity": "Common"
  },
  {
    "manaCost": "{X}{G}",
    "cmc": 1,
    "name": "Heaven / Earth",
    "colors": "Green",
    "rarity": "Rare"
  },
  {
    "manaCost": "{1}{W}",
    "cmc": 2,
    "name": "Impeccable Timing",
    "colors": "White",
    "rarity": "Common"
  },
  {
    "manaCost": "{2}{R}",
    "cmc": 3,
    "name": "Onward / Victory",
    "colors": "Red",
    "rarity": "Uncommon"
  },
  {
    "manaCost": "{B}",
    "cmc": 1,
    "name": "Scarab Feast",
    "colors": "Black",
    "rarity": "Common"
  },
  {
    "manaCost": "{4}{R}",
    "cmc": 5,
    "name": "Deem Worthy",
    "colors": "Red",
    "rarity": "Uncommon"
  },
  {
    "manaCost": "{W}",
    "cmc": 1,
    "name": "Djeru's Resolve",
    "colors": "White",
    "rarity": "Common"
  },
  {
    "manaCost": "{1}{U}",
    "cmc": 2,
    "name": "Essence Scatter",
    "colors": "Blue",
    "rarity": "Common"
  },
  {
    "manaCost": "{G}",
    "cmc": 1,
    "name": "Hapatra's Mark",
    "colors": "Green",
    "rarity": "Uncommon"
  },
  {
    "manaCost": "{1}{W}",
    "cmc": 2,
    "name": "In Oketra's Name",
    "colors": "White",
    "rarity": "Common"
  },
  {
    "manaCost": "{X}{U}{U}",
    "cmc": 2,
    "name": "Pull from Tomorrow",
    "colors": "Blue",
    "rarity": "Rare"
  },
  {
    "manaCost": "{1}{B}",
    "cmc": 2,
    "name": "Shadow of the Grave",
    "colors": "Black",
    "rarity": "Rare"
  },
  {
    "manaCost": "{G}",
    "cmc": 1,
    "name": "Shed Weakness",
    "colors": "Green",
    "rarity": "Common"
  },
  {
    "manaCost": "{2}{G}",
    "cmc": 3,
    "name": "Spidery Grasp",
    "colors": "Green",
    "rarity": "Common"
  },
  {
    "manaCost": "{B}",
    "cmc": 1,
    "name": "Supernatural Stamina",
    "colors": "Black",
    "rarity": "Common"
  },
  {
    "manaCost": "{2}{G}",
    "cmc": 3,
    "name": "Synchronized Strike",
    "colors": "Green",
    "rarity": "Uncommon"
  },
  {
    "manaCost": "{3}{U}",
    "cmc": 4,
    "name": "Commit / Memory",
    "colors": "Blue",
    "rarity": "Rare"
  },
  {
    "manaCost": "{4}{U}{U}",
    "cmc": 6,
    "name": "Spring / Mind",
    "colors": "Blue",
    "effect": "Aftermath",
    "rarity": "Rare"
  },
  {
    "manaCost": "{3}{G}",
    "cmc": 4,
    "name": "Shefet Monitor",
    "colors": "Green",
    "effect": "Cycle",
    "rarity": "Uncommon"
  },
  {
    "manaCost": "{1}{W}",
    "cmc": 2,
    "name": "Renewed Faith",
    "colors": "White",
    "effect": "Cycle",
    "rarity": "Uncommon"
  },
  {
    "manaCost": "{3}{R}",
    "cmc": 4,
    "name": "Deem Worthy",
    "colors": "Red",
    "effect": "Cycle",
    "rarity": "Uncommon"
  },
  {
    "manaCost": "{3}{B}",
    "cmc": 4,
    "name": "Stir the Sands",
    "colors": "Black",
    "effect": "Cycle",
    "rarity": "Uncommon"
  },
  {
    "manaCost": "{1}{U}",
    "cmc": 2,
    "name": "Vizier of Tumbling Sands",
    "colors": "Blue",
    "effect": "Cycle",
    "rarity": "Uncommon"
  }
]