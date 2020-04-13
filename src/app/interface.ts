export interface Set {
  code: string;
  name: string;
  uri: string;
  scryfall_uri: string;
  search_uri: string;
  released_at: string; // "2006-07-21",
  set_type: string;
  card_count: number;
  digital: boolean;
  foil: boolean;
  block_code: string,
  block: string,
  icon_svg_uri: string;
  cards: Card[];
}

export type Color = "W" | "B" | "G" | "R" | "U";

export interface Card {
    id: string;
    image_uris: any;
    cmc: number;
    name: string;
    oracle_text: string;
    rarity: "rare" | "uncommon" | "mythic" | "common";
    types: string;
    mana_cost: string;
    colors: Color[];
    capacity?: String;
}