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

export interface Card {
    id: string;
    multiverse_ids?: number[];
    mtgo_id?: number;	
    uri: string;
    scryfall_uri: string;
    prints_search_uri: string;
}