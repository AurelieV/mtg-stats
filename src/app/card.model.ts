export class Card {
    name: string;
    cmc: number;
    manaCost: string;
    colors: string;
    effect?: string;
    rarity: "Rare" | "Uncommon" | "Mythic" | "Common"
}