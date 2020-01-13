webpackJsonp([1,4],{

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)();
// imports


// module
exports.push([module.i, ".cards {\n    background: white;\n}\n.white {\n    color: black;\n}\n.blue {\n    color: black;\n}\n.black {\n    color: black;\n}\n.red {\n    color: black;\n}\n.green {\n    color: black;\n}\n.multi {\n    color: black;\n}\n.border-top {\n    border-top: 1px solid black;\n}\n\ntd.name {\n    padding-left: 0;\n    padding-right: 5px;\n    padding-top: 2px;\n    padding-bottom: 2px;\n}\n\ntd.cost {\n    padding-right: 10;\n    text-align: right;\n}\n\ntr.last > td {\n    padding-bottom: 10px;\n    border-bottom: 1px solid black;\n}\n\na {\n    margin-top: 10px;\n    float: right;\n}\n\n.title {\n    font-size: 24px;\n    margin-bottom: 10px;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: center;\n        justify-content: center;\n    -ms-flex-align: center;\n        align-items: center;\n}\n\n.title img, .set img {\n    width: 24px;\n    height: 24px;\n    margin-left: 10px;\n}\n\n.set {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: center;\n        justify-content: center;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    -ms-flex-align: center;\n        align-items: center;\n}\n\ntable {\n    padding-bottom: 600px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)();
// imports


// module
exports.push([module.i, ":host {\n    position: relative;\n    cursor: pointer;\n}\n\n:host > img {\n    display: none;\n}\n\n:host:hover > img {\n  display: block;\n  position: absolute;\n  z-index: 10;\n}\n\nimg.small {\n    width: 200px;\n}\n\n:host-context(.card-on-left):hover > img {\n    right: 0;\n}\n\n:host-context(.card-on-top):hover > img {\n    bottom: -200px;\n}\n\n.name {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n        align-items: center;\n}\n\n.rarity {\n    border-radius: 10px;\n    width: 10px;\n    height: 10px;\n    margin-right: 2px;\n}\n.uncommon {\n    background-color: grey;\n}\n.common {\n    background-color: black;\n}\n.rare {\n    background-color: yellow;\n}\n.mythic {\n    background-color: orangered;\n}\n\n.special {\n    font-size: 10px;\n    font-style: italic;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 139:
/***/ (function(module, exports) {

module.exports = {
	"object": "set",
	"id": "5f23a78d-cda1-462a-8be3-a62b40c34913",
	"code": "thb",
	"tcgplayer_id": 2568,
	"name": "Theros Beyond Death",
	"uri": "https://api.scryfall.com/sets/5f23a78d-cda1-462a-8be3-a62b40c34913",
	"scryfall_uri": "https://scryfall.com/sets/thb",
	"search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Athb&unique=prints",
	"released_at": "2020-01-24",
	"set_type": "expansion",
	"card_count": 357,
	"digital": false,
	"foil_only": false,
	"icon_svg_uri": "https://img.scryfall.com/sets/thb.svg?1578286800",
	"cards": [
		{
			"object": "card",
			"id": "59e19bac-176c-4e37-bfc8-27c00de7c37f",
			"oracle_id": "d5b9d250-92f5-40d8-b962-4ae4adb466c8",
			"multiverse_ids": [],
			"tcgplayer_id": 207097,
			"name": "Flicker of Fate",
			"lang": "en",
			"released_at": "2020-01-24",
			"uri": "https://api.scryfall.com/cards/59e19bac-176c-4e37-bfc8-27c00de7c37f",
			"scryfall_uri": "https://scryfall.com/card/thb/16/flicker-of-fate?utm_source=api",
			"layout": "normal",
			"highres_image": false,
			"image_uris": {
				"small": "https://img.scryfall.com/cards/small/front/5/9/59e19bac-176c-4e37-bfc8-27c00de7c37f.jpg?1578661330",
				"normal": "https://img.scryfall.com/cards/normal/front/5/9/59e19bac-176c-4e37-bfc8-27c00de7c37f.jpg?1578661330",
				"large": "https://img.scryfall.com/cards/large/front/5/9/59e19bac-176c-4e37-bfc8-27c00de7c37f.jpg?1578661330",
				"png": "https://img.scryfall.com/cards/png/front/5/9/59e19bac-176c-4e37-bfc8-27c00de7c37f.png?1578661330",
				"art_crop": "https://img.scryfall.com/cards/art_crop/front/5/9/59e19bac-176c-4e37-bfc8-27c00de7c37f.jpg?1578661330",
				"border_crop": "https://img.scryfall.com/cards/border_crop/front/5/9/59e19bac-176c-4e37-bfc8-27c00de7c37f.jpg?1578661330"
			},
			"mana_cost": "{1}{W}",
			"cmc": 2,
			"type_line": "Instant",
			"oracle_text": "Exile target creature or enchantment, then return it to the battlefield under its owner's control.",
			"colors": [
				"W"
			],
			"color_identity": [
				"W"
			],
			"legalities": {
				"standard": "not_legal",
				"future": "legal",
				"historic": "not_legal",
				"pioneer": "not_legal",
				"modern": "not_legal",
				"legacy": "not_legal",
				"pauper": "not_legal",
				"vintage": "not_legal",
				"penny": "not_legal",
				"commander": "not_legal",
				"brawl": "not_legal",
				"duel": "not_legal",
				"oldschool": "not_legal"
			},
			"games": [],
			"reserved": false,
			"foil": true,
			"nonfoil": true,
			"oversized": false,
			"promo": false,
			"reprint": false,
			"variation": false,
			"set": "thb",
			"set_name": "Theros Beyond Death",
			"set_type": "expansion",
			"set_uri": "https://api.scryfall.com/sets/5f23a78d-cda1-462a-8be3-a62b40c34913",
			"set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Athb&unique=prints",
			"scryfall_set_uri": "https://scryfall.com/sets/thb?utm_source=api",
			"rulings_uri": "https://api.scryfall.com/cards/59e19bac-176c-4e37-bfc8-27c00de7c37f/rulings",
			"prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3Ad5b9d250-92f5-40d8-b962-4ae4adb466c8&unique=prints",
			"collector_number": "16",
			"digital": false,
			"rarity": "common",
			"flavor_text": "An infinite journey in an infinitesimal time.",
			"card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
			"artist": "Tomasz Jedruszek",
			"artist_ids": [
				"bba69285-2445-4a4b-a847-59397be972ea"
			],
			"illustration_id": "5fa22c4e-66da-446b-9637-aafb4e95d14b",
			"border_color": "black",
			"frame": "2015",
			"full_art": false,
			"textless": false,
			"booster": true,
			"story_spotlight": false,
			"edhrec_rank": 19245,
			"prices": {
				"usd": "0.24",
				"usd_foil": null,
				"eur": "0.05",
				"tix": null
			},
			"related_uris": {
				"tcgplayer_decks": "https://decks.tcgplayer.com/magic/deck/search?contains=Flicker+of+Fate&page=1&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"edhrec": "https://edhrec.com/route/?cc=Flicker+of+Fate",
				"mtgtop8": "https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Flicker+of+Fate"
			},
			"purchase_uris": {
				"tcgplayer": "https://shop.tcgplayer.com/product/productsearch?id=207097&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"cardmarket": "https://www.cardmarket.com/en/Magic/Products/Singles/Theros-Beyond-Death/Flicker-of-Fate?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
				"cardhoarder": "https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=Flicker+of+Fate&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
			}
		},
		{
			"object": "card",
			"id": "8f1c16dd-38e9-4974-b570-8678c114a549",
			"oracle_id": "e7564d66-767c-4cd9-a5f0-0f2488a4a74b",
			"multiverse_ids": [],
			"tcgplayer_id": 207075,
			"name": "Heliod's Intervention",
			"lang": "en",
			"released_at": "2020-01-24",
			"uri": "https://api.scryfall.com/cards/8f1c16dd-38e9-4974-b570-8678c114a549",
			"scryfall_uri": "https://scryfall.com/card/thb/19/heliods-intervention?utm_source=api",
			"layout": "normal",
			"highres_image": true,
			"image_uris": {
				"small": "https://img.scryfall.com/cards/small/front/8/f/8f1c16dd-38e9-4974-b570-8678c114a549.jpg?1578612841",
				"normal": "https://img.scryfall.com/cards/normal/front/8/f/8f1c16dd-38e9-4974-b570-8678c114a549.jpg?1578612841",
				"large": "https://img.scryfall.com/cards/large/front/8/f/8f1c16dd-38e9-4974-b570-8678c114a549.jpg?1578612841",
				"png": "https://img.scryfall.com/cards/png/front/8/f/8f1c16dd-38e9-4974-b570-8678c114a549.png?1578612841",
				"art_crop": "https://img.scryfall.com/cards/art_crop/front/8/f/8f1c16dd-38e9-4974-b570-8678c114a549.jpg?1578612841",
				"border_crop": "https://img.scryfall.com/cards/border_crop/front/8/f/8f1c16dd-38e9-4974-b570-8678c114a549.jpg?1578612841"
			},
			"mana_cost": "{X}{W}{W}",
			"cmc": 2,
			"type_line": "Instant",
			"oracle_text": "Choose one —\n• Destroy X target artifacts and/or enchantments.\n• Target player gains twice X life.",
			"colors": [
				"W"
			],
			"color_identity": [
				"W"
			],
			"legalities": {
				"standard": "not_legal",
				"future": "legal",
				"historic": "not_legal",
				"pioneer": "not_legal",
				"modern": "not_legal",
				"legacy": "not_legal",
				"pauper": "not_legal",
				"vintage": "not_legal",
				"penny": "not_legal",
				"commander": "not_legal",
				"brawl": "not_legal",
				"duel": "not_legal",
				"oldschool": "not_legal"
			},
			"games": [],
			"reserved": false,
			"foil": true,
			"nonfoil": true,
			"oversized": false,
			"promo": false,
			"reprint": false,
			"variation": false,
			"set": "thb",
			"set_name": "Theros Beyond Death",
			"set_type": "expansion",
			"set_uri": "https://api.scryfall.com/sets/5f23a78d-cda1-462a-8be3-a62b40c34913",
			"set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Athb&unique=prints",
			"scryfall_set_uri": "https://scryfall.com/sets/thb?utm_source=api",
			"rulings_uri": "https://api.scryfall.com/cards/8f1c16dd-38e9-4974-b570-8678c114a549/rulings",
			"prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3Ae7564d66-767c-4cd9-a5f0-0f2488a4a74b&unique=prints",
			"collector_number": "19",
			"digital": false,
			"rarity": "rare",
			"flavor_text": "\"I bring a dawn that no night can follow.\"",
			"card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
			"artist": "Daarken",
			"artist_ids": [
				"e607a0d4-fc12-4c01-9e3f-501f5269b9cb"
			],
			"illustration_id": "e94878cf-ed0c-4d1b-a751-a86a00439a51",
			"border_color": "black",
			"frame": "2015",
			"full_art": false,
			"textless": false,
			"booster": true,
			"story_spotlight": false,
			"edhrec_rank": 18218,
			"preview": {
				"source": "Kotaku",
				"source_uri": "https://www.kotaku.com.au/2020/01/mtg-death-beyond-theros-preview-next-two-cards/",
				"previewed_at": "2020-01-09"
			},
			"prices": {
				"usd": "1.00",
				"usd_foil": null,
				"eur": "0.56",
				"tix": null
			},
			"related_uris": {
				"tcgplayer_decks": "https://decks.tcgplayer.com/magic/deck/search?contains=Heliod%27s+Intervention&page=1&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"edhrec": "https://edhrec.com/route/?cc=Heliod%27s+Intervention",
				"mtgtop8": "https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Heliod%27s+Intervention"
			},
			"purchase_uris": {
				"tcgplayer": "https://shop.tcgplayer.com/product/productsearch?id=207075&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"cardmarket": "https://www.cardmarket.com/en/Magic/Products/Singles/Theros-Beyond-Death/Heliods-Intervention?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
				"cardhoarder": "https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=Heliod%27s+Intervention&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
			}
		},
		{
			"object": "card",
			"id": "47772a34-c72f-44e8-b272-4ef2d2af5c82",
			"oracle_id": "cca60afe-b044-4401-8322-170aa015873c",
			"multiverse_ids": [],
			"tcgplayer_id": 206201,
			"name": "Indomitable Will",
			"lang": "en",
			"released_at": "2020-01-24",
			"uri": "https://api.scryfall.com/cards/47772a34-c72f-44e8-b272-4ef2d2af5c82",
			"scryfall_uri": "https://scryfall.com/card/thb/25/indomitable-will?utm_source=api",
			"layout": "normal",
			"highres_image": false,
			"image_uris": {
				"small": "https://img.scryfall.com/cards/small/front/4/7/47772a34-c72f-44e8-b272-4ef2d2af5c82.jpg?1576245362",
				"normal": "https://img.scryfall.com/cards/normal/front/4/7/47772a34-c72f-44e8-b272-4ef2d2af5c82.jpg?1576245362",
				"large": "https://img.scryfall.com/cards/large/front/4/7/47772a34-c72f-44e8-b272-4ef2d2af5c82.jpg?1576245362",
				"png": "https://img.scryfall.com/cards/png/front/4/7/47772a34-c72f-44e8-b272-4ef2d2af5c82.png?1576245362",
				"art_crop": "https://img.scryfall.com/cards/art_crop/front/4/7/47772a34-c72f-44e8-b272-4ef2d2af5c82.jpg?1576245362",
				"border_crop": "https://img.scryfall.com/cards/border_crop/front/4/7/47772a34-c72f-44e8-b272-4ef2d2af5c82.jpg?1576245362"
			},
			"mana_cost": "{1}{W}",
			"cmc": 2,
			"type_line": "Enchantment — Aura",
			"oracle_text": "Flash\nEnchant creature\nEnchanted creature gets +1/+2.",
			"colors": [
				"W"
			],
			"color_identity": [
				"W"
			],
			"legalities": {
				"standard": "not_legal",
				"future": "legal",
				"historic": "not_legal",
				"pioneer": "not_legal",
				"modern": "legal",
				"legacy": "legal",
				"pauper": "legal",
				"vintage": "legal",
				"penny": "legal",
				"commander": "legal",
				"brawl": "not_legal",
				"duel": "legal",
				"oldschool": "not_legal"
			},
			"games": [],
			"reserved": false,
			"foil": true,
			"nonfoil": true,
			"oversized": false,
			"promo": false,
			"reprint": true,
			"variation": false,
			"set": "thb",
			"set_name": "Theros Beyond Death",
			"set_type": "expansion",
			"set_uri": "https://api.scryfall.com/sets/5f23a78d-cda1-462a-8be3-a62b40c34913",
			"set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Athb&unique=prints",
			"scryfall_set_uri": "https://scryfall.com/sets/thb?utm_source=api",
			"rulings_uri": "https://api.scryfall.com/cards/47772a34-c72f-44e8-b272-4ef2d2af5c82/rulings",
			"prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3Acca60afe-b044-4401-8322-170aa015873c&unique=prints",
			"collector_number": "25",
			"digital": false,
			"rarity": "common",
			"flavor_text": "\"Charge bravely. Fight selflessly. Act honorably. Iroas will watch over you.\" —Verenis, priest of Iroas",
			"card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
			"artist": "Micah Epstein",
			"artist_ids": [
				"957ec398-9a5e-4f54-9090-37a06d57b96c"
			],
			"illustration_id": "9ab8da4d-db32-430b-9931-cedcca69083c",
			"border_color": "black",
			"frame": "2015",
			"full_art": false,
			"textless": false,
			"booster": true,
			"story_spotlight": false,
			"edhrec_rank": 13693,
			"preview": {
				"source": "Wizards of the Coast",
				"source_uri": "https://magic.wizards.com/en/articles/archive/card-image-gallery/theros-beyond-death",
				"previewed_at": "2019-12-12"
			},
			"prices": {
				"usd": "0.09",
				"usd_foil": "0.22",
				"eur": "0.02",
				"tix": null
			},
			"related_uris": {
				"tcgplayer_decks": "https://decks.tcgplayer.com/magic/deck/search?contains=Indomitable+Will&page=1&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"edhrec": "https://edhrec.com/route/?cc=Indomitable+Will",
				"mtgtop8": "https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Indomitable+Will"
			},
			"purchase_uris": {
				"tcgplayer": "https://shop.tcgplayer.com/product/productsearch?id=206201&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"cardmarket": "https://www.cardmarket.com/en/Magic/Products/Singles/Theros-Beyond-Death/Indomitable-Will?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
				"cardhoarder": "https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=Indomitable+Will&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
			}
		},
		{
			"object": "card",
			"id": "88c8e4dc-5378-48d6-85b2-f5ea9ec7cf36",
			"oracle_id": "d553ae4d-b2a9-47eb-8c2e-ffab8cc31b26",
			"multiverse_ids": [],
			"tcgplayer_id": 207103,
			"name": "Karametra's Blessing",
			"lang": "en",
			"released_at": "2020-01-24",
			"uri": "https://api.scryfall.com/cards/88c8e4dc-5378-48d6-85b2-f5ea9ec7cf36",
			"scryfall_uri": "https://scryfall.com/card/thb/26/karametras-blessing?utm_source=api",
			"layout": "normal",
			"highres_image": false,
			"image_uris": {
				"small": "https://img.scryfall.com/cards/small/front/8/8/88c8e4dc-5378-48d6-85b2-f5ea9ec7cf36.jpg?1578670450",
				"normal": "https://img.scryfall.com/cards/normal/front/8/8/88c8e4dc-5378-48d6-85b2-f5ea9ec7cf36.jpg?1578670450",
				"large": "https://img.scryfall.com/cards/large/front/8/8/88c8e4dc-5378-48d6-85b2-f5ea9ec7cf36.jpg?1578670450",
				"png": "https://img.scryfall.com/cards/png/front/8/8/88c8e4dc-5378-48d6-85b2-f5ea9ec7cf36.png?1578670450",
				"art_crop": "https://img.scryfall.com/cards/art_crop/front/8/8/88c8e4dc-5378-48d6-85b2-f5ea9ec7cf36.jpg?1578670450",
				"border_crop": "https://img.scryfall.com/cards/border_crop/front/8/8/88c8e4dc-5378-48d6-85b2-f5ea9ec7cf36.jpg?1578670450"
			},
			"mana_cost": "{W}",
			"cmc": 1,
			"type_line": "Instant",
			"oracle_text": "Target creature gets +2/+2 until end of turn. If it's an enchanted creature or enchantment creature, it also gains hexproof and indestructible until end of turn. (It can't be the target of spells or abilities your opponents control. Damage and effects that say \"destroy\" don't destroy it.)",
			"colors": [
				"W"
			],
			"color_identity": [
				"W"
			],
			"legalities": {
				"standard": "not_legal",
				"future": "legal",
				"historic": "not_legal",
				"pioneer": "not_legal",
				"modern": "not_legal",
				"legacy": "not_legal",
				"pauper": "not_legal",
				"vintage": "not_legal",
				"penny": "not_legal",
				"commander": "not_legal",
				"brawl": "not_legal",
				"duel": "not_legal",
				"oldschool": "not_legal"
			},
			"games": [],
			"reserved": false,
			"foil": true,
			"nonfoil": true,
			"oversized": false,
			"promo": false,
			"reprint": false,
			"variation": false,
			"set": "thb",
			"set_name": "Theros Beyond Death",
			"set_type": "expansion",
			"set_uri": "https://api.scryfall.com/sets/5f23a78d-cda1-462a-8be3-a62b40c34913",
			"set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Athb&unique=prints",
			"scryfall_set_uri": "https://scryfall.com/sets/thb?utm_source=api",
			"rulings_uri": "https://api.scryfall.com/cards/88c8e4dc-5378-48d6-85b2-f5ea9ec7cf36/rulings",
			"prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3Ad553ae4d-b2a9-47eb-8c2e-ffab8cc31b26&unique=prints",
			"collector_number": "26",
			"digital": false,
			"rarity": "common",
			"card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
			"artist": "Wisnu Tan",
			"artist_ids": [
				"f2d36cdd-a4e9-43ba-b2ad-9d514f6706d4"
			],
			"illustration_id": "a048c0aa-d3d3-42ec-865a-3a320a761f7d",
			"border_color": "black",
			"frame": "2015",
			"full_art": false,
			"textless": false,
			"booster": true,
			"story_spotlight": false,
			"prices": {
				"usd": "0.17",
				"usd_foil": null,
				"eur": "0.05",
				"tix": null
			},
			"related_uris": {
				"tcgplayer_decks": "https://decks.tcgplayer.com/magic/deck/search?contains=Karametra%27s+Blessing&page=1&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"edhrec": "https://edhrec.com/route/?cc=Karametra%27s+Blessing",
				"mtgtop8": "https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Karametra%27s+Blessing"
			},
			"purchase_uris": {
				"tcgplayer": "https://shop.tcgplayer.com/product/productsearch?id=207103&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"cardmarket": "https://www.cardmarket.com/en/Magic/Products/Singles/Theros-Beyond-Death/Karametras-Blessing?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
				"cardhoarder": "https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=Karametra%27s+Blessing&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
			}
		},
		{
			"object": "card",
			"id": "86586fe3-1a6e-4648-b3ff-b0d9340e66ff",
			"oracle_id": "08740dda-0629-4b6f-bbcc-c8088105b5e7",
			"multiverse_ids": [],
			"tcgplayer_id": 206784,
			"name": "Omen of the Sun",
			"lang": "en",
			"released_at": "2020-01-24",
			"uri": "https://api.scryfall.com/cards/86586fe3-1a6e-4648-b3ff-b0d9340e66ff",
			"scryfall_uri": "https://scryfall.com/card/thb/30/omen-of-the-sun?utm_source=api",
			"layout": "normal",
			"highres_image": false,
			"image_uris": {
				"small": "https://img.scryfall.com/cards/small/front/8/6/86586fe3-1a6e-4648-b3ff-b0d9340e66ff.jpg?1578062553",
				"normal": "https://img.scryfall.com/cards/normal/front/8/6/86586fe3-1a6e-4648-b3ff-b0d9340e66ff.jpg?1578062553",
				"large": "https://img.scryfall.com/cards/large/front/8/6/86586fe3-1a6e-4648-b3ff-b0d9340e66ff.jpg?1578062553",
				"png": "https://img.scryfall.com/cards/png/front/8/6/86586fe3-1a6e-4648-b3ff-b0d9340e66ff.png?1578062553",
				"art_crop": "https://img.scryfall.com/cards/art_crop/front/8/6/86586fe3-1a6e-4648-b3ff-b0d9340e66ff.jpg?1578062553",
				"border_crop": "https://img.scryfall.com/cards/border_crop/front/8/6/86586fe3-1a6e-4648-b3ff-b0d9340e66ff.jpg?1578062553"
			},
			"mana_cost": "{2}{W}",
			"cmc": 3,
			"type_line": "Enchantment",
			"oracle_text": "Flash\nWhen Omen of the Sun enters the battlefield, create two 1/1 white Human Soldier creature tokens and you gain 2 life.\n{2}{W}, Sacrifice Omen of the Sun: Scry 2.",
			"colors": [
				"W"
			],
			"color_identity": [
				"W"
			],
			"legalities": {
				"standard": "not_legal",
				"future": "legal",
				"historic": "not_legal",
				"pioneer": "not_legal",
				"modern": "not_legal",
				"legacy": "not_legal",
				"pauper": "not_legal",
				"vintage": "not_legal",
				"penny": "not_legal",
				"commander": "not_legal",
				"brawl": "not_legal",
				"duel": "not_legal",
				"oldschool": "not_legal"
			},
			"games": [],
			"reserved": false,
			"foil": true,
			"nonfoil": true,
			"oversized": false,
			"promo": false,
			"reprint": false,
			"variation": false,
			"set": "thb",
			"set_name": "Theros Beyond Death",
			"set_type": "expansion",
			"set_uri": "https://api.scryfall.com/sets/5f23a78d-cda1-462a-8be3-a62b40c34913",
			"set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Athb&unique=prints",
			"scryfall_set_uri": "https://scryfall.com/sets/thb?utm_source=api",
			"rulings_uri": "https://api.scryfall.com/cards/86586fe3-1a6e-4648-b3ff-b0d9340e66ff/rulings",
			"prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A08740dda-0629-4b6f-bbcc-c8088105b5e7&unique=prints",
			"collector_number": "30",
			"digital": false,
			"rarity": "common",
			"flavor_text": "\"My time will come, when every soul will bask in my glory and obey my law.\"",
			"card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
			"artist": "Piotr Dura",
			"artist_ids": [
				"aff176e8-1d15-432e-ad1d-207a474decba"
			],
			"illustration_id": "c7f12f34-3d3b-4595-bf9d-98c19809fa12",
			"border_color": "black",
			"frame": "2015",
			"full_art": false,
			"textless": false,
			"booster": true,
			"story_spotlight": false,
			"edhrec_rank": 19328,
			"preview": {
				"source": "Lords of Limited",
				"source_uri": "https://twitter.com/LordsofLimited/status/1213143394387673090",
				"previewed_at": "2020-01-03"
			},
			"prices": {
				"usd": "0.19",
				"usd_foil": "2.00",
				"eur": "0.05",
				"tix": null
			},
			"related_uris": {
				"tcgplayer_decks": "https://decks.tcgplayer.com/magic/deck/search?contains=Omen+of+the+Sun&page=1&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"edhrec": "https://edhrec.com/route/?cc=Omen+of+the+Sun",
				"mtgtop8": "https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Omen+of+the+Sun"
			},
			"purchase_uris": {
				"tcgplayer": "https://shop.tcgplayer.com/product/productsearch?id=206784&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"cardmarket": "https://www.cardmarket.com/en/Magic/Products/Singles/Theros-Beyond-Death/Omen-of-the-Sun?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
				"cardhoarder": "https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=Omen+of+the+Sun&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
			}
		},
		{
			"object": "card",
			"id": "5f114a10-0b00-4f3a-bd73-d4c791fbf4d5",
			"oracle_id": "9962a9cc-6e9f-461e-a9d3-8c28ec34caf1",
			"multiverse_ids": [],
			"tcgplayer_id": 207105,
			"name": "Phalanx Tactics",
			"lang": "en",
			"released_at": "2020-01-24",
			"uri": "https://api.scryfall.com/cards/5f114a10-0b00-4f3a-bd73-d4c791fbf4d5",
			"scryfall_uri": "https://scryfall.com/card/thb/31/phalanx-tactics?utm_source=api",
			"layout": "normal",
			"highres_image": false,
			"image_uris": {
				"small": "https://img.scryfall.com/cards/small/front/5/f/5f114a10-0b00-4f3a-bd73-d4c791fbf4d5.jpg?1578670079",
				"normal": "https://img.scryfall.com/cards/normal/front/5/f/5f114a10-0b00-4f3a-bd73-d4c791fbf4d5.jpg?1578670079",
				"large": "https://img.scryfall.com/cards/large/front/5/f/5f114a10-0b00-4f3a-bd73-d4c791fbf4d5.jpg?1578670079",
				"png": "https://img.scryfall.com/cards/png/front/5/f/5f114a10-0b00-4f3a-bd73-d4c791fbf4d5.png?1578670079",
				"art_crop": "https://img.scryfall.com/cards/art_crop/front/5/f/5f114a10-0b00-4f3a-bd73-d4c791fbf4d5.jpg?1578670079",
				"border_crop": "https://img.scryfall.com/cards/border_crop/front/5/f/5f114a10-0b00-4f3a-bd73-d4c791fbf4d5.jpg?1578670079"
			},
			"mana_cost": "{1}{W}",
			"cmc": 2,
			"type_line": "Instant",
			"oracle_text": "Target creature you control gets +2/+1 until end of turn. Each other creature you control gets +1/+1 until end of turn.",
			"colors": [
				"W"
			],
			"color_identity": [
				"W"
			],
			"legalities": {
				"standard": "not_legal",
				"future": "legal",
				"historic": "not_legal",
				"pioneer": "not_legal",
				"modern": "not_legal",
				"legacy": "not_legal",
				"pauper": "not_legal",
				"vintage": "not_legal",
				"penny": "not_legal",
				"commander": "not_legal",
				"brawl": "not_legal",
				"duel": "not_legal",
				"oldschool": "not_legal"
			},
			"games": [],
			"reserved": false,
			"foil": true,
			"nonfoil": true,
			"oversized": false,
			"promo": false,
			"reprint": false,
			"variation": false,
			"set": "thb",
			"set_name": "Theros Beyond Death",
			"set_type": "expansion",
			"set_uri": "https://api.scryfall.com/sets/5f23a78d-cda1-462a-8be3-a62b40c34913",
			"set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Athb&unique=prints",
			"scryfall_set_uri": "https://scryfall.com/sets/thb?utm_source=api",
			"rulings_uri": "https://api.scryfall.com/cards/5f114a10-0b00-4f3a-bd73-d4c791fbf4d5/rulings",
			"prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A9962a9cc-6e9f-461e-a9d3-8c28ec34caf1&unique=prints",
			"collector_number": "31",
			"digital": false,
			"rarity": "uncommon",
			"flavor_text": "Every soldier has a place to stand and a role to play.",
			"card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
			"artist": "Bayard Wu",
			"artist_ids": [
				"b089963c-610a-4d50-9206-d64b7caedef1"
			],
			"illustration_id": "626dad0c-1fdd-4ea5-ba29-9f7476e98538",
			"border_color": "black",
			"frame": "2015",
			"full_art": false,
			"textless": false,
			"booster": true,
			"story_spotlight": false,
			"edhrec_rank": 19336,
			"prices": {
				"usd": "0.17",
				"usd_foil": null,
				"eur": "0.08",
				"tix": null
			},
			"related_uris": {
				"tcgplayer_decks": "https://decks.tcgplayer.com/magic/deck/search?contains=Phalanx+Tactics&page=1&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"edhrec": "https://edhrec.com/route/?cc=Phalanx+Tactics",
				"mtgtop8": "https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Phalanx+Tactics"
			},
			"purchase_uris": {
				"tcgplayer": "https://shop.tcgplayer.com/product/productsearch?id=207105&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"cardmarket": "https://www.cardmarket.com/en/Magic/Products/Singles/Theros-Beyond-Death/Phalanx-Tactics?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
				"cardhoarder": "https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=Phalanx+Tactics&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
			}
		},
		{
			"object": "card",
			"id": "75d6eb18-a49d-4fa5-a333-78aafbc4abcb",
			"oracle_id": "ff281103-7a9b-4eb1-b81e-b8cd137b6e98",
			"multiverse_ids": [],
			"tcgplayer_id": 207051,
			"name": "Triumphant Surge",
			"lang": "en",
			"released_at": "2020-01-24",
			"uri": "https://api.scryfall.com/cards/75d6eb18-a49d-4fa5-a333-78aafbc4abcb",
			"scryfall_uri": "https://scryfall.com/card/thb/41/triumphant-surge?utm_source=api",
			"layout": "normal",
			"highres_image": false,
			"image_uris": {
				"small": "https://img.scryfall.com/cards/small/front/7/5/75d6eb18-a49d-4fa5-a333-78aafbc4abcb.jpg?1578669933",
				"normal": "https://img.scryfall.com/cards/normal/front/7/5/75d6eb18-a49d-4fa5-a333-78aafbc4abcb.jpg?1578669933",
				"large": "https://img.scryfall.com/cards/large/front/7/5/75d6eb18-a49d-4fa5-a333-78aafbc4abcb.jpg?1578669933",
				"png": "https://img.scryfall.com/cards/png/front/7/5/75d6eb18-a49d-4fa5-a333-78aafbc4abcb.png?1578669933",
				"art_crop": "https://img.scryfall.com/cards/art_crop/front/7/5/75d6eb18-a49d-4fa5-a333-78aafbc4abcb.jpg?1578669933",
				"border_crop": "https://img.scryfall.com/cards/border_crop/front/7/5/75d6eb18-a49d-4fa5-a333-78aafbc4abcb.jpg?1578669933"
			},
			"mana_cost": "{3}{W}",
			"cmc": 4,
			"type_line": "Instant",
			"oracle_text": "Destroy target creature with power 4 or greater. You gain 3 life.",
			"colors": [
				"W"
			],
			"color_identity": [
				"W"
			],
			"legalities": {
				"standard": "not_legal",
				"future": "legal",
				"historic": "not_legal",
				"pioneer": "not_legal",
				"modern": "not_legal",
				"legacy": "not_legal",
				"pauper": "not_legal",
				"vintage": "not_legal",
				"penny": "not_legal",
				"commander": "not_legal",
				"brawl": "not_legal",
				"duel": "not_legal",
				"oldschool": "not_legal"
			},
			"games": [],
			"reserved": false,
			"foil": true,
			"nonfoil": true,
			"oversized": false,
			"promo": false,
			"reprint": false,
			"variation": false,
			"set": "thb",
			"set_name": "Theros Beyond Death",
			"set_type": "expansion",
			"set_uri": "https://api.scryfall.com/sets/5f23a78d-cda1-462a-8be3-a62b40c34913",
			"set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Athb&unique=prints",
			"scryfall_set_uri": "https://scryfall.com/sets/thb?utm_source=api",
			"rulings_uri": "https://api.scryfall.com/cards/75d6eb18-a49d-4fa5-a333-78aafbc4abcb/rulings",
			"prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3Aff281103-7a9b-4eb1-b81e-b8cd137b6e98&unique=prints",
			"collector_number": "41",
			"digital": false,
			"rarity": "common",
			"flavor_text": "Not even death can quench a hero's inner fire.",
			"card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
			"artist": "Daarken",
			"artist_ids": [
				"e607a0d4-fc12-4c01-9e3f-501f5269b9cb"
			],
			"illustration_id": "98aeca12-d26d-404a-b5c8-d716339cdaae",
			"border_color": "black",
			"frame": "2015",
			"full_art": false,
			"textless": false,
			"booster": true,
			"story_spotlight": true,
			"preview": {
				"source": "Wizards of the Coast",
				"source_uri": "https://twitter.com/MTG_Arena/status/1215029793764212736",
				"previewed_at": "2020-01-09"
			},
			"prices": {
				"usd": null,
				"usd_foil": null,
				"eur": "0.05",
				"tix": null
			},
			"related_uris": {
				"tcgplayer_decks": "https://decks.tcgplayer.com/magic/deck/search?contains=Triumphant+Surge&page=1&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"edhrec": "https://edhrec.com/route/?cc=Triumphant+Surge",
				"mtgtop8": "https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Triumphant+Surge"
			},
			"purchase_uris": {
				"tcgplayer": "https://shop.tcgplayer.com/product/productsearch?id=207051&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"cardmarket": "https://www.cardmarket.com/en/Magic/Products/Singles/Theros-Beyond-Death/Triumphant-Surge?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
				"cardhoarder": "https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=Triumphant+Surge&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
			}
		},
		{
			"object": "card",
			"id": "d568c679-8421-4184-a73c-b18c4164fea5",
			"oracle_id": "13cf3ef7-d88e-4cc7-a4d8-cedc671f356a",
			"multiverse_ids": [],
			"tcgplayer_id": 206765,
			"name": "Ashiok's Erasure",
			"lang": "en",
			"released_at": "2020-01-24",
			"uri": "https://api.scryfall.com/cards/d568c679-8421-4184-a73c-b18c4164fea5",
			"scryfall_uri": "https://scryfall.com/card/thb/43/ashioks-erasure?utm_source=api",
			"layout": "normal",
			"highres_image": false,
			"image_uris": {
				"small": "https://img.scryfall.com/cards/small/front/d/5/d568c679-8421-4184-a73c-b18c4164fea5.jpg?1577965431",
				"normal": "https://img.scryfall.com/cards/normal/front/d/5/d568c679-8421-4184-a73c-b18c4164fea5.jpg?1577965431",
				"large": "https://img.scryfall.com/cards/large/front/d/5/d568c679-8421-4184-a73c-b18c4164fea5.jpg?1577965431",
				"png": "https://img.scryfall.com/cards/png/front/d/5/d568c679-8421-4184-a73c-b18c4164fea5.png?1577965431",
				"art_crop": "https://img.scryfall.com/cards/art_crop/front/d/5/d568c679-8421-4184-a73c-b18c4164fea5.jpg?1577965431",
				"border_crop": "https://img.scryfall.com/cards/border_crop/front/d/5/d568c679-8421-4184-a73c-b18c4164fea5.jpg?1577965431"
			},
			"mana_cost": "{2}{U}{U}",
			"cmc": 4,
			"type_line": "Enchantment",
			"oracle_text": "Flash\nWhen Ashiok's Erasure enters the battlefield, exile target spell.\nYour opponents can't cast spells with the same name as the exiled card.\nWhen Ashiok's Erasure leaves the battlefield, return the exiled card to its owner's hand.",
			"colors": [
				"U"
			],
			"color_identity": [
				"U"
			],
			"legalities": {
				"standard": "not_legal",
				"future": "legal",
				"historic": "not_legal",
				"pioneer": "not_legal",
				"modern": "not_legal",
				"legacy": "not_legal",
				"pauper": "not_legal",
				"vintage": "not_legal",
				"penny": "not_legal",
				"commander": "not_legal",
				"brawl": "not_legal",
				"duel": "not_legal",
				"oldschool": "not_legal"
			},
			"games": [],
			"reserved": false,
			"foil": true,
			"nonfoil": true,
			"oversized": false,
			"promo": false,
			"reprint": false,
			"variation": false,
			"set": "thb",
			"set_name": "Theros Beyond Death",
			"set_type": "expansion",
			"set_uri": "https://api.scryfall.com/sets/5f23a78d-cda1-462a-8be3-a62b40c34913",
			"set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Athb&unique=prints",
			"scryfall_set_uri": "https://scryfall.com/sets/thb?utm_source=api",
			"rulings_uri": "https://api.scryfall.com/cards/d568c679-8421-4184-a73c-b18c4164fea5/rulings",
			"prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A13cf3ef7-d88e-4cc7-a4d8-cedc671f356a&unique=prints",
			"collector_number": "43",
			"digital": false,
			"rarity": "rare",
			"card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
			"artist": "Zezhou Chen",
			"artist_ids": [
				"810677e5-a502-4c03-b726-78cd808a75d4"
			],
			"illustration_id": "f78b95ff-24e1-4593-b4bf-bcc2b12895c5",
			"border_color": "black",
			"frame": "2015",
			"full_art": false,
			"textless": false,
			"booster": true,
			"story_spotlight": false,
			"edhrec_rank": 18655,
			"preview": {
				"source": "Wizards of the Coast",
				"source_uri": "https://twitter.com/MTGArenaJP/status/1212179135189176321",
				"previewed_at": "2019-12-31"
			},
			"prices": {
				"usd": "0.49",
				"usd_foil": "3.92",
				"eur": "0.34",
				"tix": null
			},
			"related_uris": {
				"tcgplayer_decks": "https://decks.tcgplayer.com/magic/deck/search?contains=Ashiok%27s+Erasure&page=1&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"edhrec": "https://edhrec.com/route/?cc=Ashiok%27s+Erasure",
				"mtgtop8": "https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Ashiok%27s+Erasure"
			},
			"purchase_uris": {
				"tcgplayer": "https://shop.tcgplayer.com/product/productsearch?id=206765&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"cardmarket": "https://www.cardmarket.com/en/Magic/Products/Singles/Theros-Beyond-Death/Ashioks-Erasure?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
				"cardhoarder": "https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=Ashiok%27s+Erasure&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
			}
		},
		{
			"object": "card",
			"id": "fa0e1a22-8f27-4c5b-a65c-c35abd2ff05b",
			"oracle_id": "a3805bb3-544c-4142-a6df-c60fa38d625a",
			"multiverse_ids": [],
			"tcgplayer_id": 207155,
			"name": "Chain to Memory",
			"lang": "en",
			"released_at": "2020-01-24",
			"uri": "https://api.scryfall.com/cards/fa0e1a22-8f27-4c5b-a65c-c35abd2ff05b",
			"scryfall_uri": "https://scryfall.com/card/thb/46/chain-to-memory?utm_source=api",
			"layout": "normal",
			"highres_image": false,
			"image_uris": {
				"small": "https://img.scryfall.com/cards/small/front/f/a/fa0e1a22-8f27-4c5b-a65c-c35abd2ff05b.jpg?1578663504",
				"normal": "https://img.scryfall.com/cards/normal/front/f/a/fa0e1a22-8f27-4c5b-a65c-c35abd2ff05b.jpg?1578663504",
				"large": "https://img.scryfall.com/cards/large/front/f/a/fa0e1a22-8f27-4c5b-a65c-c35abd2ff05b.jpg?1578663504",
				"png": "https://img.scryfall.com/cards/png/front/f/a/fa0e1a22-8f27-4c5b-a65c-c35abd2ff05b.png?1578663504",
				"art_crop": "https://img.scryfall.com/cards/art_crop/front/f/a/fa0e1a22-8f27-4c5b-a65c-c35abd2ff05b.jpg?1578663504",
				"border_crop": "https://img.scryfall.com/cards/border_crop/front/f/a/fa0e1a22-8f27-4c5b-a65c-c35abd2ff05b.jpg?1578663504"
			},
			"mana_cost": "{U}",
			"cmc": 1,
			"type_line": "Instant",
			"oracle_text": "Target creature gets -4/-0 until end of turn. Scry 2.",
			"colors": [
				"U"
			],
			"color_identity": [
				"U"
			],
			"legalities": {
				"standard": "not_legal",
				"future": "legal",
				"historic": "not_legal",
				"pioneer": "not_legal",
				"modern": "not_legal",
				"legacy": "not_legal",
				"pauper": "not_legal",
				"vintage": "not_legal",
				"penny": "not_legal",
				"commander": "not_legal",
				"brawl": "not_legal",
				"duel": "not_legal",
				"oldschool": "not_legal"
			},
			"games": [],
			"reserved": false,
			"foil": true,
			"nonfoil": true,
			"oversized": false,
			"promo": false,
			"reprint": false,
			"variation": false,
			"set": "thb",
			"set_name": "Theros Beyond Death",
			"set_type": "expansion",
			"set_uri": "https://api.scryfall.com/sets/5f23a78d-cda1-462a-8be3-a62b40c34913",
			"set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Athb&unique=prints",
			"scryfall_set_uri": "https://scryfall.com/sets/thb?utm_source=api",
			"rulings_uri": "https://api.scryfall.com/cards/fa0e1a22-8f27-4c5b-a65c-c35abd2ff05b/rulings",
			"prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3Aa3805bb3-544c-4142-a6df-c60fa38d625a&unique=prints",
			"collector_number": "46",
			"digital": false,
			"rarity": "common",
			"flavor_text": "Those who do not learn from their mistakes are bound to relive them.",
			"card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
			"artist": "Paul Scott Canavan",
			"artist_ids": [
				"c19bfb77-5099-4f7c-8585-6eaf367712c9"
			],
			"illustration_id": "e1eb39e0-0d77-485a-af1d-bea494c91c94",
			"border_color": "black",
			"frame": "2015",
			"full_art": false,
			"textless": false,
			"booster": true,
			"story_spotlight": false,
			"prices": {
				"usd": null,
				"usd_foil": null,
				"eur": null,
				"tix": null
			},
			"related_uris": {
				"tcgplayer_decks": "https://decks.tcgplayer.com/magic/deck/search?contains=Chain+to+Memory&page=1&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"edhrec": "https://edhrec.com/route/?cc=Chain+to+Memory",
				"mtgtop8": "https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Chain+to+Memory"
			},
			"purchase_uris": {
				"tcgplayer": "https://shop.tcgplayer.com/product/productsearch?id=207155&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"cardmarket": "https://www.cardmarket.com/en/Magic/Products/Singles/Theros-Beyond-Death/Chain-to-Memory?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
				"cardhoarder": "https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=Chain+to+Memory&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
			}
		},
		{
			"object": "card",
			"id": "1200f68a-a8ea-4777-b6b0-de48b2203fd1",
			"oracle_id": "0146de73-29bf-415a-b450-11074553f715",
			"multiverse_ids": [],
			"tcgplayer_id": 207126,
			"name": "Deny the Divine",
			"lang": "en",
			"released_at": "2020-01-24",
			"uri": "https://api.scryfall.com/cards/1200f68a-a8ea-4777-b6b0-de48b2203fd1",
			"scryfall_uri": "https://scryfall.com/card/thb/47/deny-the-divine?utm_source=api",
			"layout": "normal",
			"highres_image": false,
			"image_uris": {
				"small": "https://img.scryfall.com/cards/small/front/1/2/1200f68a-a8ea-4777-b6b0-de48b2203fd1.jpg?1578670545",
				"normal": "https://img.scryfall.com/cards/normal/front/1/2/1200f68a-a8ea-4777-b6b0-de48b2203fd1.jpg?1578670545",
				"large": "https://img.scryfall.com/cards/large/front/1/2/1200f68a-a8ea-4777-b6b0-de48b2203fd1.jpg?1578670545",
				"png": "https://img.scryfall.com/cards/png/front/1/2/1200f68a-a8ea-4777-b6b0-de48b2203fd1.png?1578670545",
				"art_crop": "https://img.scryfall.com/cards/art_crop/front/1/2/1200f68a-a8ea-4777-b6b0-de48b2203fd1.jpg?1578670545",
				"border_crop": "https://img.scryfall.com/cards/border_crop/front/1/2/1200f68a-a8ea-4777-b6b0-de48b2203fd1.jpg?1578670545"
			},
			"mana_cost": "{2}{U}",
			"cmc": 3,
			"type_line": "Instant",
			"oracle_text": "Counter target creature or enchantment spell. If that spell is countered this way, exile it instead of putting it into its owner's graveyard.",
			"colors": [
				"U"
			],
			"color_identity": [
				"U"
			],
			"legalities": {
				"standard": "not_legal",
				"future": "legal",
				"historic": "not_legal",
				"pioneer": "not_legal",
				"modern": "not_legal",
				"legacy": "not_legal",
				"pauper": "not_legal",
				"vintage": "not_legal",
				"penny": "not_legal",
				"commander": "not_legal",
				"brawl": "not_legal",
				"duel": "not_legal",
				"oldschool": "not_legal"
			},
			"games": [],
			"reserved": false,
			"foil": true,
			"nonfoil": true,
			"oversized": false,
			"promo": false,
			"reprint": false,
			"variation": false,
			"set": "thb",
			"set_name": "Theros Beyond Death",
			"set_type": "expansion",
			"set_uri": "https://api.scryfall.com/sets/5f23a78d-cda1-462a-8be3-a62b40c34913",
			"set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Athb&unique=prints",
			"scryfall_set_uri": "https://scryfall.com/sets/thb?utm_source=api",
			"rulings_uri": "https://api.scryfall.com/cards/1200f68a-a8ea-4777-b6b0-de48b2203fd1/rulings",
			"prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A0146de73-29bf-415a-b450-11074553f715&unique=prints",
			"collector_number": "47",
			"digital": false,
			"rarity": "common",
			"flavor_text": "\"A great wave crashed, and a mighty wind blew out the stars.\"\n—The Cosmogony",
			"card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
			"artist": "Yigit Koroglu",
			"artist_ids": [
				"a24479f8-6d9e-40f9-bede-f29899922b97"
			],
			"illustration_id": "86a13f59-2820-4ab0-9932-4b49d2b7284c",
			"border_color": "black",
			"frame": "2015",
			"full_art": false,
			"textless": false,
			"booster": true,
			"story_spotlight": false,
			"prices": {
				"usd": "0.09",
				"usd_foil": null,
				"eur": "0.05",
				"tix": null
			},
			"related_uris": {
				"tcgplayer_decks": "https://decks.tcgplayer.com/magic/deck/search?contains=Deny+the+Divine&page=1&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"edhrec": "https://edhrec.com/route/?cc=Deny+the+Divine",
				"mtgtop8": "https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Deny+the+Divine"
			},
			"purchase_uris": {
				"tcgplayer": "https://shop.tcgplayer.com/product/productsearch?id=207126&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"cardmarket": "https://www.cardmarket.com/en/Magic/Products/Singles/Theros-Beyond-Death/Deny-the-Divine?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
				"cardhoarder": "https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=Deny+the+Divine&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
			}
		},
		{
			"object": "card",
			"id": "c1e9c025-1cdb-4da8-8d28-14ad5efb512d",
			"oracle_id": "02d78e76-8151-4851-bb4e-e0a1fa98756f",
			"multiverse_ids": [],
			"tcgplayer_id": 206755,
			"name": "Glimpse of Freedom",
			"lang": "en",
			"released_at": "2020-01-24",
			"uri": "https://api.scryfall.com/cards/c1e9c025-1cdb-4da8-8d28-14ad5efb512d",
			"scryfall_uri": "https://scryfall.com/card/thb/50/glimpse-of-freedom?utm_source=api",
			"layout": "normal",
			"highres_image": false,
			"image_uris": {
				"small": "https://img.scryfall.com/cards/small/front/c/1/c1e9c025-1cdb-4da8-8d28-14ad5efb512d.jpg?1577965473",
				"normal": "https://img.scryfall.com/cards/normal/front/c/1/c1e9c025-1cdb-4da8-8d28-14ad5efb512d.jpg?1577965473",
				"large": "https://img.scryfall.com/cards/large/front/c/1/c1e9c025-1cdb-4da8-8d28-14ad5efb512d.jpg?1577965473",
				"png": "https://img.scryfall.com/cards/png/front/c/1/c1e9c025-1cdb-4da8-8d28-14ad5efb512d.png?1577965473",
				"art_crop": "https://img.scryfall.com/cards/art_crop/front/c/1/c1e9c025-1cdb-4da8-8d28-14ad5efb512d.jpg?1577965473",
				"border_crop": "https://img.scryfall.com/cards/border_crop/front/c/1/c1e9c025-1cdb-4da8-8d28-14ad5efb512d.jpg?1577965473"
			},
			"mana_cost": "{1}{U}",
			"cmc": 2,
			"type_line": "Instant",
			"oracle_text": "Draw a card.\nEscape—{2}{U}, Exile five other cards from your graveyard. (You may cast this card from your graveyard for its escape cost.)",
			"colors": [
				"U"
			],
			"color_identity": [
				"U"
			],
			"legalities": {
				"standard": "not_legal",
				"future": "legal",
				"historic": "not_legal",
				"pioneer": "not_legal",
				"modern": "not_legal",
				"legacy": "not_legal",
				"pauper": "not_legal",
				"vintage": "not_legal",
				"penny": "not_legal",
				"commander": "not_legal",
				"brawl": "not_legal",
				"duel": "not_legal",
				"oldschool": "not_legal"
			},
			"games": [],
			"reserved": false,
			"foil": true,
			"nonfoil": true,
			"oversized": false,
			"promo": false,
			"reprint": false,
			"variation": false,
			"set": "thb",
			"set_name": "Theros Beyond Death",
			"set_type": "expansion",
			"set_uri": "https://api.scryfall.com/sets/5f23a78d-cda1-462a-8be3-a62b40c34913",
			"set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Athb&unique=prints",
			"scryfall_set_uri": "https://scryfall.com/sets/thb?utm_source=api",
			"rulings_uri": "https://api.scryfall.com/cards/c1e9c025-1cdb-4da8-8d28-14ad5efb512d/rulings",
			"prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A02d78e76-8151-4851-bb4e-e0a1fa98756f&unique=prints",
			"collector_number": "50",
			"digital": false,
			"rarity": "uncommon",
			"flavor_text": "\"Freedom lies in accepting a single path.\" —Nyklos, Meletian philosopher",
			"card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
			"artist": "Clint Cearley",
			"artist_ids": [
				"03b75350-d5a0-4e3a-b3b4-8d4a5554385b"
			],
			"illustration_id": "7aa52a1d-9018-4687-aeed-1581e447d252",
			"border_color": "black",
			"frame": "2015",
			"full_art": false,
			"textless": false,
			"booster": true,
			"story_spotlight": false,
			"edhrec_rank": 19249,
			"preview": {
				"source": "Wizards of the Coast",
				"source_uri": "https://www.facebook.com/MagicTheGathering.kr/photos/a.535740456483745/2735125056545263/",
				"previewed_at": "2020-01-01"
			},
			"prices": {
				"usd": "0.15",
				"usd_foil": "1.87",
				"eur": "0.10",
				"tix": null
			},
			"related_uris": {
				"tcgplayer_decks": "https://decks.tcgplayer.com/magic/deck/search?contains=Glimpse+of+Freedom&page=1&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"edhrec": "https://edhrec.com/route/?cc=Glimpse+of+Freedom",
				"mtgtop8": "https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Glimpse+of+Freedom"
			},
			"purchase_uris": {
				"tcgplayer": "https://shop.tcgplayer.com/product/productsearch?id=206755&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"cardmarket": "https://www.cardmarket.com/en/Magic/Products/Singles/Theros-Beyond-Death/Glimpse-of-Freedom?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
				"cardhoarder": "https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=Glimpse+of+Freedom&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
			}
		},
		{
			"object": "card",
			"id": "aadc1809-d6bb-455c-b6ce-dd11521808b6",
			"oracle_id": "1a61929e-14bd-4f21-b173-00818d49743d",
			"multiverse_ids": [],
			"tcgplayer_id": 206207,
			"name": "Memory Drain",
			"lang": "en",
			"released_at": "2020-01-24",
			"uri": "https://api.scryfall.com/cards/aadc1809-d6bb-455c-b6ce-dd11521808b6",
			"scryfall_uri": "https://scryfall.com/card/thb/54/memory-drain?utm_source=api",
			"layout": "normal",
			"highres_image": false,
			"image_uris": {
				"small": "https://img.scryfall.com/cards/small/front/a/a/aadc1809-d6bb-455c-b6ce-dd11521808b6.jpg?1576245420",
				"normal": "https://img.scryfall.com/cards/normal/front/a/a/aadc1809-d6bb-455c-b6ce-dd11521808b6.jpg?1576245420",
				"large": "https://img.scryfall.com/cards/large/front/a/a/aadc1809-d6bb-455c-b6ce-dd11521808b6.jpg?1576245420",
				"png": "https://img.scryfall.com/cards/png/front/a/a/aadc1809-d6bb-455c-b6ce-dd11521808b6.png?1576245420",
				"art_crop": "https://img.scryfall.com/cards/art_crop/front/a/a/aadc1809-d6bb-455c-b6ce-dd11521808b6.jpg?1576245420",
				"border_crop": "https://img.scryfall.com/cards/border_crop/front/a/a/aadc1809-d6bb-455c-b6ce-dd11521808b6.jpg?1576245420"
			},
			"mana_cost": "{2}{U}{U}",
			"cmc": 4,
			"type_line": "Instant",
			"oracle_text": "Counter target spell. Scry 2.",
			"colors": [
				"U"
			],
			"color_identity": [
				"U"
			],
			"legalities": {
				"standard": "not_legal",
				"future": "legal",
				"historic": "not_legal",
				"pioneer": "not_legal",
				"modern": "not_legal",
				"legacy": "not_legal",
				"pauper": "not_legal",
				"vintage": "not_legal",
				"penny": "not_legal",
				"commander": "not_legal",
				"brawl": "not_legal",
				"duel": "not_legal",
				"oldschool": "not_legal"
			},
			"games": [],
			"reserved": false,
			"foil": true,
			"nonfoil": true,
			"oversized": false,
			"promo": false,
			"reprint": false,
			"variation": false,
			"set": "thb",
			"set_name": "Theros Beyond Death",
			"set_type": "expansion",
			"set_uri": "https://api.scryfall.com/sets/5f23a78d-cda1-462a-8be3-a62b40c34913",
			"set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Athb&unique=prints",
			"scryfall_set_uri": "https://scryfall.com/sets/thb?utm_source=api",
			"rulings_uri": "https://api.scryfall.com/cards/aadc1809-d6bb-455c-b6ce-dd11521808b6/rulings",
			"prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A1a61929e-14bd-4f21-b173-00818d49743d&unique=prints",
			"collector_number": "54",
			"digital": false,
			"rarity": "common",
			"flavor_text": "Alythos sat and stared blankly out over the glassy oceans of Nerono, trying in vain to remember what he knew he had forgotten.",
			"card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
			"artist": "Pindurski",
			"artist_ids": [
				"f333a7f0-7330-40e9-8c58-667eea2f0f60"
			],
			"illustration_id": "6a991ecb-b3f6-4c70-a819-88bbf545ec6a",
			"border_color": "black",
			"frame": "2015",
			"full_art": false,
			"textless": false,
			"booster": true,
			"story_spotlight": false,
			"edhrec_rank": 19306,
			"preview": {
				"source": "Wizards of the Coast",
				"source_uri": "https://magic.wizards.com/en/articles/archive/card-image-gallery/theros-beyond-death",
				"previewed_at": "2019-12-12"
			},
			"prices": {
				"usd": "0.13",
				"usd_foil": "0.21",
				"eur": "0.08",
				"tix": null
			},
			"related_uris": {
				"tcgplayer_decks": "https://decks.tcgplayer.com/magic/deck/search?contains=Memory+Drain&page=1&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"edhrec": "https://edhrec.com/route/?cc=Memory+Drain",
				"mtgtop8": "https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Memory+Drain"
			},
			"purchase_uris": {
				"tcgplayer": "https://shop.tcgplayer.com/product/productsearch?id=206207&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"cardmarket": "https://www.cardmarket.com/en/Magic/Products/Singles/Theros-Beyond-Death/Memory-Drain?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
				"cardhoarder": "https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=Memory+Drain&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
			}
		},
		{
			"object": "card",
			"id": "a5f30ecd-d009-4d44-aef4-c926ed55a521",
			"oracle_id": "41960d32-ddb5-42be-94b2-3a2e77ca148d",
			"multiverse_ids": [],
			"tcgplayer_id": 206769,
			"name": "Omen of the Sea",
			"lang": "en",
			"released_at": "2020-01-24",
			"uri": "https://api.scryfall.com/cards/a5f30ecd-d009-4d44-aef4-c926ed55a521",
			"scryfall_uri": "https://scryfall.com/card/thb/58/omen-of-the-sea?utm_source=api",
			"layout": "normal",
			"highres_image": false,
			"image_uris": {
				"small": "https://img.scryfall.com/cards/small/front/a/5/a5f30ecd-d009-4d44-aef4-c926ed55a521.jpg?1578103754",
				"normal": "https://img.scryfall.com/cards/normal/front/a/5/a5f30ecd-d009-4d44-aef4-c926ed55a521.jpg?1578103754",
				"large": "https://img.scryfall.com/cards/large/front/a/5/a5f30ecd-d009-4d44-aef4-c926ed55a521.jpg?1578103754",
				"png": "https://img.scryfall.com/cards/png/front/a/5/a5f30ecd-d009-4d44-aef4-c926ed55a521.png?1578103754",
				"art_crop": "https://img.scryfall.com/cards/art_crop/front/a/5/a5f30ecd-d009-4d44-aef4-c926ed55a521.jpg?1578103754",
				"border_crop": "https://img.scryfall.com/cards/border_crop/front/a/5/a5f30ecd-d009-4d44-aef4-c926ed55a521.jpg?1578103754"
			},
			"mana_cost": "{1}{U}",
			"cmc": 2,
			"type_line": "Enchantment",
			"oracle_text": "Flash\nWhen Omen of the Sea enters the battlefield, scry 2, then draw a card.\n{2}{U}, Sacrifice Omen of the Sea: Scry 2.",
			"colors": [
				"U"
			],
			"color_identity": [
				"U"
			],
			"legalities": {
				"standard": "not_legal",
				"future": "legal",
				"historic": "not_legal",
				"pioneer": "not_legal",
				"modern": "not_legal",
				"legacy": "not_legal",
				"pauper": "not_legal",
				"vintage": "not_legal",
				"penny": "not_legal",
				"commander": "not_legal",
				"brawl": "not_legal",
				"duel": "not_legal",
				"oldschool": "not_legal"
			},
			"games": [],
			"reserved": false,
			"foil": true,
			"nonfoil": true,
			"oversized": false,
			"promo": false,
			"reprint": false,
			"variation": false,
			"set": "thb",
			"set_name": "Theros Beyond Death",
			"set_type": "expansion",
			"set_uri": "https://api.scryfall.com/sets/5f23a78d-cda1-462a-8be3-a62b40c34913",
			"set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Athb&unique=prints",
			"scryfall_set_uri": "https://scryfall.com/sets/thb?utm_source=api",
			"rulings_uri": "https://api.scryfall.com/cards/a5f30ecd-d009-4d44-aef4-c926ed55a521/rulings",
			"prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A41960d32-ddb5-42be-94b2-3a2e77ca148d&unique=prints",
			"collector_number": "58",
			"digital": false,
			"rarity": "common",
			"flavor_text": "\"My time will come, when the rising tide will surge above the tallest mountain.\"",
			"card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
			"artist": "Piotr Dura",
			"artist_ids": [
				"aff176e8-1d15-432e-ad1d-207a474decba"
			],
			"illustration_id": "f5630245-2fa9-4857-850a-66ead0be6766",
			"border_color": "black",
			"frame": "2015",
			"full_art": false,
			"textless": false,
			"booster": true,
			"story_spotlight": false,
			"edhrec_rank": 17828,
			"preview": {
				"source": "Wizards of the Coast",
				"source_uri": "https://www.weibo.com/2643025570/InBRh2X2S",
				"previewed_at": "2020-01-02"
			},
			"prices": {
				"usd": "0.20",
				"usd_foil": "2.00",
				"eur": "0.03",
				"tix": null
			},
			"related_uris": {
				"tcgplayer_decks": "https://decks.tcgplayer.com/magic/deck/search?contains=Omen+of+the+Sea&page=1&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"edhrec": "https://edhrec.com/route/?cc=Omen+of+the+Sea",
				"mtgtop8": "https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Omen+of+the+Sea"
			},
			"purchase_uris": {
				"tcgplayer": "https://shop.tcgplayer.com/product/productsearch?id=206769&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"cardmarket": "https://www.cardmarket.com/en/Magic/Products/Singles/Theros-Beyond-Death/Omen-of-the-Sea?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
				"cardhoarder": "https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=Omen+of+the+Sea&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
			}
		},
		{
			"object": "card",
			"id": "cc4ba296-950c-4e39-ab5e-06be07e4a190",
			"oracle_id": "cb7e076c-a695-4c79-9f20-498370c81380",
			"multiverse_ids": [],
			"tcgplayer_id": 207157,
			"name": "Riptide Turtle",
			"lang": "en",
			"released_at": "2020-01-24",
			"uri": "https://api.scryfall.com/cards/cc4ba296-950c-4e39-ab5e-06be07e4a190",
			"scryfall_uri": "https://scryfall.com/card/thb/61/riptide-turtle?utm_source=api",
			"layout": "normal",
			"highres_image": false,
			"image_uris": {
				"small": "https://img.scryfall.com/cards/small/front/c/c/cc4ba296-950c-4e39-ab5e-06be07e4a190.jpg?1578664689",
				"normal": "https://img.scryfall.com/cards/normal/front/c/c/cc4ba296-950c-4e39-ab5e-06be07e4a190.jpg?1578664689",
				"large": "https://img.scryfall.com/cards/large/front/c/c/cc4ba296-950c-4e39-ab5e-06be07e4a190.jpg?1578664689",
				"png": "https://img.scryfall.com/cards/png/front/c/c/cc4ba296-950c-4e39-ab5e-06be07e4a190.png?1578664689",
				"art_crop": "https://img.scryfall.com/cards/art_crop/front/c/c/cc4ba296-950c-4e39-ab5e-06be07e4a190.jpg?1578664689",
				"border_crop": "https://img.scryfall.com/cards/border_crop/front/c/c/cc4ba296-950c-4e39-ab5e-06be07e4a190.jpg?1578664689"
			},
			"mana_cost": "{1}{U}",
			"cmc": 2,
			"type_line": "Creature — Turtle",
			"oracle_text": "Flash\nDefender",
			"power": "0",
			"toughness": "5",
			"colors": [
				"U"
			],
			"color_identity": [
				"U"
			],
			"legalities": {
				"standard": "not_legal",
				"future": "legal",
				"historic": "not_legal",
				"pioneer": "not_legal",
				"modern": "not_legal",
				"legacy": "not_legal",
				"pauper": "not_legal",
				"vintage": "not_legal",
				"penny": "not_legal",
				"commander": "not_legal",
				"brawl": "not_legal",
				"duel": "not_legal",
				"oldschool": "not_legal"
			},
			"games": [],
			"reserved": false,
			"foil": true,
			"nonfoil": true,
			"oversized": false,
			"promo": false,
			"reprint": false,
			"variation": false,
			"set": "thb",
			"set_name": "Theros Beyond Death",
			"set_type": "expansion",
			"set_uri": "https://api.scryfall.com/sets/5f23a78d-cda1-462a-8be3-a62b40c34913",
			"set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Athb&unique=prints",
			"scryfall_set_uri": "https://scryfall.com/sets/thb?utm_source=api",
			"rulings_uri": "https://api.scryfall.com/cards/cc4ba296-950c-4e39-ab5e-06be07e4a190/rulings",
			"prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3Acb7e076c-a695-4c79-9f20-498370c81380&unique=prints",
			"collector_number": "61",
			"digital": false,
			"rarity": "common",
			"flavor_text": "\"As the storm waves crushed my sailors, I cried out to Thassa. The next time I saw them, hard shells encased them, and they swam away to safety.\"\n—Siona, captain of the Pyleas",
			"card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
			"artist": "Brian Valeza",
			"artist_ids": [
				"bb2a9339-bbe4-445f-9736-3c43379ee076"
			],
			"illustration_id": "74b2cfc1-3117-41b2-bf5b-2f99fc8121ef",
			"border_color": "black",
			"frame": "2015",
			"full_art": false,
			"textless": false,
			"booster": true,
			"story_spotlight": false,
			"prices": {
				"usd": "0.24",
				"usd_foil": null,
				"eur": "0.03",
				"tix": null
			},
			"related_uris": {
				"tcgplayer_decks": "https://decks.tcgplayer.com/magic/deck/search?contains=Riptide+Turtle&page=1&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"edhrec": "https://edhrec.com/route/?cc=Riptide+Turtle",
				"mtgtop8": "https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Riptide+Turtle"
			},
			"purchase_uris": {
				"tcgplayer": "https://shop.tcgplayer.com/product/productsearch?id=207157&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"cardmarket": "https://www.cardmarket.com/en/Magic/Products/Singles/Theros-Beyond-Death/Riptide-Turtle?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
				"cardhoarder": "https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=Riptide+Turtle&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
			}
		},
		{
			"object": "card",
			"id": "68c53625-6928-494a-af87-7eee2f6643a5",
			"oracle_id": "8a7643e4-b824-441a-bbe6-349fc7a3e11e",
			"multiverse_ids": [],
			"tcgplayer_id": 207168,
			"name": "Starlit Mantle",
			"lang": "en",
			"released_at": "2020-01-24",
			"uri": "https://api.scryfall.com/cards/68c53625-6928-494a-af87-7eee2f6643a5",
			"scryfall_uri": "https://scryfall.com/card/thb/67/starlit-mantle?utm_source=api",
			"layout": "normal",
			"highres_image": false,
			"image_uris": {
				"small": "https://img.scryfall.com/cards/small/front/6/8/68c53625-6928-494a-af87-7eee2f6643a5.jpg?1578665235",
				"normal": "https://img.scryfall.com/cards/normal/front/6/8/68c53625-6928-494a-af87-7eee2f6643a5.jpg?1578665235",
				"large": "https://img.scryfall.com/cards/large/front/6/8/68c53625-6928-494a-af87-7eee2f6643a5.jpg?1578665235",
				"png": "https://img.scryfall.com/cards/png/front/6/8/68c53625-6928-494a-af87-7eee2f6643a5.png?1578665235",
				"art_crop": "https://img.scryfall.com/cards/art_crop/front/6/8/68c53625-6928-494a-af87-7eee2f6643a5.jpg?1578665235",
				"border_crop": "https://img.scryfall.com/cards/border_crop/front/6/8/68c53625-6928-494a-af87-7eee2f6643a5.jpg?1578665235"
			},
			"mana_cost": "{1}{U}",
			"cmc": 2,
			"type_line": "Enchantment — Aura",
			"oracle_text": "Flash\nEnchant creature you control\nWhen Starlit Mantle enters the battlefield, enchanted creature gains hexproof until end of turn. (It can't be the target of spells or abilities your opponents control.)\nEnchanted creature gets +1/+1.",
			"colors": [
				"U"
			],
			"color_identity": [
				"U"
			],
			"legalities": {
				"standard": "not_legal",
				"future": "legal",
				"historic": "not_legal",
				"pioneer": "not_legal",
				"modern": "not_legal",
				"legacy": "not_legal",
				"pauper": "not_legal",
				"vintage": "not_legal",
				"penny": "not_legal",
				"commander": "not_legal",
				"brawl": "not_legal",
				"duel": "not_legal",
				"oldschool": "not_legal"
			},
			"games": [],
			"reserved": false,
			"foil": true,
			"nonfoil": true,
			"oversized": false,
			"promo": false,
			"reprint": false,
			"variation": false,
			"set": "thb",
			"set_name": "Theros Beyond Death",
			"set_type": "expansion",
			"set_uri": "https://api.scryfall.com/sets/5f23a78d-cda1-462a-8be3-a62b40c34913",
			"set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Athb&unique=prints",
			"scryfall_set_uri": "https://scryfall.com/sets/thb?utm_source=api",
			"rulings_uri": "https://api.scryfall.com/cards/68c53625-6928-494a-af87-7eee2f6643a5/rulings",
			"prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A8a7643e4-b824-441a-bbe6-349fc7a3e11e&unique=prints",
			"collector_number": "67",
			"digital": false,
			"rarity": "common",
			"card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
			"artist": "Chris Rahn",
			"artist_ids": [
				"7742047e-0f80-4c0f-a530-d07460165e86"
			],
			"illustration_id": "f4998e5a-df1c-415a-8f49-9079c4e435af",
			"border_color": "black",
			"frame": "2015",
			"full_art": false,
			"textless": false,
			"booster": true,
			"story_spotlight": false,
			"prices": {
				"usd": "0.12",
				"usd_foil": null,
				"eur": "0.04",
				"tix": null
			},
			"related_uris": {
				"tcgplayer_decks": "https://decks.tcgplayer.com/magic/deck/search?contains=Starlit+Mantle&page=1&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"edhrec": "https://edhrec.com/route/?cc=Starlit+Mantle",
				"mtgtop8": "https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Starlit+Mantle"
			},
			"purchase_uris": {
				"tcgplayer": "https://shop.tcgplayer.com/product/productsearch?id=207168&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"cardmarket": "https://www.cardmarket.com/en/Magic/Products/Singles/Theros-Beyond-Death/Starlit-Mantle?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
				"cardhoarder": "https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=Starlit+Mantle&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
			}
		},
		{
			"object": "card",
			"id": "0aec4d0f-ba1e-45f8-9764-9bcc3fa50e51",
			"oracle_id": "319d5cf8-ab72-401e-b04e-c13a7a6c1aac",
			"multiverse_ids": [],
			"tcgplayer_id": 207180,
			"name": "Stern Dismissal",
			"lang": "en",
			"released_at": "2020-01-24",
			"uri": "https://api.scryfall.com/cards/0aec4d0f-ba1e-45f8-9764-9bcc3fa50e51",
			"scryfall_uri": "https://scryfall.com/card/thb/68/stern-dismissal?utm_source=api",
			"layout": "normal",
			"highres_image": false,
			"image_uris": {
				"small": "https://img.scryfall.com/cards/small/front/0/a/0aec4d0f-ba1e-45f8-9764-9bcc3fa50e51.jpg?1578670686",
				"normal": "https://img.scryfall.com/cards/normal/front/0/a/0aec4d0f-ba1e-45f8-9764-9bcc3fa50e51.jpg?1578670686",
				"large": "https://img.scryfall.com/cards/large/front/0/a/0aec4d0f-ba1e-45f8-9764-9bcc3fa50e51.jpg?1578670686",
				"png": "https://img.scryfall.com/cards/png/front/0/a/0aec4d0f-ba1e-45f8-9764-9bcc3fa50e51.png?1578670686",
				"art_crop": "https://img.scryfall.com/cards/art_crop/front/0/a/0aec4d0f-ba1e-45f8-9764-9bcc3fa50e51.jpg?1578670686",
				"border_crop": "https://img.scryfall.com/cards/border_crop/front/0/a/0aec4d0f-ba1e-45f8-9764-9bcc3fa50e51.jpg?1578670686"
			},
			"mana_cost": "{U}",
			"cmc": 1,
			"type_line": "Instant",
			"oracle_text": "Return target creature or enchantment an opponent controls to its owner's hand.",
			"colors": [
				"U"
			],
			"color_identity": [
				"U"
			],
			"legalities": {
				"standard": "not_legal",
				"future": "legal",
				"historic": "not_legal",
				"pioneer": "not_legal",
				"modern": "not_legal",
				"legacy": "not_legal",
				"pauper": "not_legal",
				"vintage": "not_legal",
				"penny": "not_legal",
				"commander": "not_legal",
				"brawl": "not_legal",
				"duel": "not_legal",
				"oldschool": "not_legal"
			},
			"games": [],
			"reserved": false,
			"foil": true,
			"nonfoil": true,
			"oversized": false,
			"promo": false,
			"reprint": false,
			"variation": false,
			"set": "thb",
			"set_name": "Theros Beyond Death",
			"set_type": "expansion",
			"set_uri": "https://api.scryfall.com/sets/5f23a78d-cda1-462a-8be3-a62b40c34913",
			"set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Athb&unique=prints",
			"scryfall_set_uri": "https://scryfall.com/sets/thb?utm_source=api",
			"rulings_uri": "https://api.scryfall.com/cards/0aec4d0f-ba1e-45f8-9764-9bcc3fa50e51/rulings",
			"prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A319d5cf8-ab72-401e-b04e-c13a7a6c1aac&unique=prints",
			"collector_number": "68",
			"digital": false,
			"rarity": "common",
			"flavor_text": "Cities offer tribute to Ephara and carve her image into their walls, imploring her to protect them from the dangers of the wild.",
			"card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
			"artist": "Lie Setiawan",
			"artist_ids": [
				"6f771d3f-310e-4aa4-841f-5ba4ba9f025a"
			],
			"illustration_id": "956104ce-c729-434f-8a0c-aa502f5a4b3f",
			"border_color": "black",
			"frame": "2015",
			"full_art": false,
			"textless": false,
			"booster": true,
			"story_spotlight": false,
			"prices": {
				"usd": "0.14",
				"usd_foil": null,
				"eur": "0.05",
				"tix": null
			},
			"related_uris": {
				"tcgplayer_decks": "https://decks.tcgplayer.com/magic/deck/search?contains=Stern+Dismissal&page=1&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"edhrec": "https://edhrec.com/route/?cc=Stern+Dismissal",
				"mtgtop8": "https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Stern+Dismissal"
			},
			"purchase_uris": {
				"tcgplayer": "https://shop.tcgplayer.com/product/productsearch?id=207180&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"cardmarket": "https://www.cardmarket.com/en/Magic/Products/Singles/Theros-Beyond-Death/Stern-Dismissal?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
				"cardhoarder": "https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=Stern+Dismissal&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
			}
		},
		{
			"object": "card",
			"id": "2c1241d0-20d4-4eab-970d-74e476f023b4",
			"oracle_id": "f7c89d03-606e-4284-90dd-64b1fbebfb4d",
			"multiverse_ids": [],
			"tcgplayer_id": 206962,
			"name": "Thassa's Intervention",
			"lang": "en",
			"released_at": "2020-01-24",
			"uri": "https://api.scryfall.com/cards/2c1241d0-20d4-4eab-970d-74e476f023b4",
			"scryfall_uri": "https://scryfall.com/card/thb/72/thassas-intervention?utm_source=api",
			"layout": "normal",
			"highres_image": false,
			"image_uris": {
				"small": "https://img.scryfall.com/cards/small/front/2/c/2c1241d0-20d4-4eab-970d-74e476f023b4.jpg?1578571153",
				"normal": "https://img.scryfall.com/cards/normal/front/2/c/2c1241d0-20d4-4eab-970d-74e476f023b4.jpg?1578571153",
				"large": "https://img.scryfall.com/cards/large/front/2/c/2c1241d0-20d4-4eab-970d-74e476f023b4.jpg?1578571153",
				"png": "https://img.scryfall.com/cards/png/front/2/c/2c1241d0-20d4-4eab-970d-74e476f023b4.png?1578571153",
				"art_crop": "https://img.scryfall.com/cards/art_crop/front/2/c/2c1241d0-20d4-4eab-970d-74e476f023b4.jpg?1578571153",
				"border_crop": "https://img.scryfall.com/cards/border_crop/front/2/c/2c1241d0-20d4-4eab-970d-74e476f023b4.jpg?1578571153"
			},
			"mana_cost": "{X}{U}{U}",
			"cmc": 2,
			"type_line": "Instant",
			"oracle_text": "Choose one-\n• Look at the top X cards of your library. Put up to two of them into your hand and the rest on the bottom of your library in a random order.\n• Counter target spell unless its controller pays twice {X}.",
			"colors": [
				"U"
			],
			"color_identity": [
				"U"
			],
			"legalities": {
				"standard": "not_legal",
				"future": "legal",
				"historic": "not_legal",
				"pioneer": "not_legal",
				"modern": "not_legal",
				"legacy": "not_legal",
				"pauper": "not_legal",
				"vintage": "not_legal",
				"penny": "not_legal",
				"commander": "not_legal",
				"brawl": "not_legal",
				"duel": "not_legal",
				"oldschool": "not_legal"
			},
			"games": [],
			"reserved": false,
			"foil": true,
			"nonfoil": true,
			"oversized": false,
			"promo": false,
			"reprint": false,
			"variation": false,
			"set": "thb",
			"set_name": "Theros Beyond Death",
			"set_type": "expansion",
			"set_uri": "https://api.scryfall.com/sets/5f23a78d-cda1-462a-8be3-a62b40c34913",
			"set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Athb&unique=prints",
			"scryfall_set_uri": "https://scryfall.com/sets/thb?utm_source=api",
			"rulings_uri": "https://api.scryfall.com/cards/2c1241d0-20d4-4eab-970d-74e476f023b4/rulings",
			"prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3Af7c89d03-606e-4284-90dd-64b1fbebfb4d&unique=prints",
			"collector_number": "72",
			"digital": false,
			"rarity": "rare",
			"flavor_text": "\"I bring a flood that nothing can withstand.\"",
			"card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
			"artist": "Zack Stella",
			"artist_ids": [
				"17bc7f55-958b-43f4-bb40-09746d05b3f9"
			],
			"illustration_id": "cc8de088-6e93-42b4-b768-01a6d8dac630",
			"border_color": "black",
			"frame": "2015",
			"full_art": false,
			"textless": false,
			"booster": true,
			"story_spotlight": false,
			"edhrec_rank": 19127,
			"preview": {
				"source": "Matias Leveratto",
				"source_uri": "https://twitter.com/levunga/status/1214924197773893632",
				"previewed_at": "2020-01-09"
			},
			"prices": {
				"usd": "1.43",
				"usd_foil": "9.99",
				"eur": "0.77",
				"tix": null
			},
			"related_uris": {
				"tcgplayer_decks": "https://decks.tcgplayer.com/magic/deck/search?contains=Thassa%27s+Intervention&page=1&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"edhrec": "https://edhrec.com/route/?cc=Thassa%27s+Intervention",
				"mtgtop8": "https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Thassa%27s+Intervention"
			},
			"purchase_uris": {
				"tcgplayer": "https://shop.tcgplayer.com/product/productsearch?id=206962&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"cardmarket": "https://www.cardmarket.com/en/Magic/Products/Singles/Theros-Beyond-Death/Thassas-Intervention?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
				"cardhoarder": "https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=Thassa%27s+Intervention&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
			}
		},
		{
			"object": "card",
			"id": "2422973d-36ee-4b8c-9a47-fcd160aa9f63",
			"oracle_id": "70e58068-90d2-4720-a11c-5d243046b4a3",
			"multiverse_ids": [],
			"tcgplayer_id": 206631,
			"name": "Thirst for Meaning",
			"lang": "en",
			"released_at": "2020-01-24",
			"uri": "https://api.scryfall.com/cards/2422973d-36ee-4b8c-9a47-fcd160aa9f63",
			"scryfall_uri": "https://scryfall.com/card/thb/74/thirst-for-meaning?utm_source=api",
			"layout": "normal",
			"highres_image": false,
			"image_uris": {
				"small": "https://img.scryfall.com/cards/small/front/2/4/2422973d-36ee-4b8c-9a47-fcd160aa9f63.jpg?1577706938",
				"normal": "https://img.scryfall.com/cards/normal/front/2/4/2422973d-36ee-4b8c-9a47-fcd160aa9f63.jpg?1577706938",
				"large": "https://img.scryfall.com/cards/large/front/2/4/2422973d-36ee-4b8c-9a47-fcd160aa9f63.jpg?1577706938",
				"png": "https://img.scryfall.com/cards/png/front/2/4/2422973d-36ee-4b8c-9a47-fcd160aa9f63.png?1577706938",
				"art_crop": "https://img.scryfall.com/cards/art_crop/front/2/4/2422973d-36ee-4b8c-9a47-fcd160aa9f63.jpg?1577706938",
				"border_crop": "https://img.scryfall.com/cards/border_crop/front/2/4/2422973d-36ee-4b8c-9a47-fcd160aa9f63.jpg?1577706938"
			},
			"mana_cost": "{2}{U}",
			"cmc": 3,
			"type_line": "Instant",
			"oracle_text": "Draw three cards. Then discard two cards unless you discard an enchantment card.",
			"colors": [
				"U"
			],
			"color_identity": [
				"U"
			],
			"legalities": {
				"standard": "not_legal",
				"future": "legal",
				"historic": "not_legal",
				"pioneer": "not_legal",
				"modern": "not_legal",
				"legacy": "not_legal",
				"pauper": "not_legal",
				"vintage": "not_legal",
				"penny": "not_legal",
				"commander": "not_legal",
				"brawl": "not_legal",
				"duel": "not_legal",
				"oldschool": "not_legal"
			},
			"games": [],
			"reserved": false,
			"foil": true,
			"nonfoil": true,
			"oversized": false,
			"promo": false,
			"reprint": false,
			"variation": false,
			"set": "thb",
			"set_name": "Theros Beyond Death",
			"set_type": "expansion",
			"set_uri": "https://api.scryfall.com/sets/5f23a78d-cda1-462a-8be3-a62b40c34913",
			"set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Athb&unique=prints",
			"scryfall_set_uri": "https://scryfall.com/sets/thb?utm_source=api",
			"rulings_uri": "https://api.scryfall.com/cards/2422973d-36ee-4b8c-9a47-fcd160aa9f63/rulings",
			"prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A70e58068-90d2-4720-a11c-5d243046b4a3&unique=prints",
			"collector_number": "74",
			"digital": false,
			"rarity": "common",
			"flavor_text": "A sip of recollection, an ocean of regrets.",
			"card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
			"artist": "Brian Valeza",
			"artist_ids": [
				"bb2a9339-bbe4-445f-9736-3c43379ee076"
			],
			"illustration_id": "26a4f5f8-8dfc-485f-9546-e4cbdbead66b",
			"border_color": "black",
			"frame": "2015",
			"full_art": false,
			"textless": false,
			"booster": true,
			"story_spotlight": false,
			"edhrec_rank": 18350,
			"preview": {
				"source": "Lucas Esper Berthoud",
				"source_uri": "https://twitter.com/bertuuuu/status/1211599600236281857",
				"previewed_at": "2019-12-30"
			},
			"prices": {
				"usd": "0.16",
				"usd_foil": "2.90",
				"eur": "0.03",
				"tix": null
			},
			"related_uris": {
				"tcgplayer_decks": "https://decks.tcgplayer.com/magic/deck/search?contains=Thirst+for+Meaning&page=1&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"edhrec": "https://edhrec.com/route/?cc=Thirst+for+Meaning",
				"mtgtop8": "https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Thirst+for+Meaning"
			},
			"purchase_uris": {
				"tcgplayer": "https://shop.tcgplayer.com/product/productsearch?id=206631&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"cardmarket": "https://www.cardmarket.com/en/Magic/Products/Singles/Theros-Beyond-Death/Thirst-for-Meaning?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
				"cardhoarder": "https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=Thirst+for+Meaning&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
			}
		},
		{
			"object": "card",
			"id": "242cdffb-5037-4d49-b194-4b60274a8758",
			"oracle_id": "2c0816bd-8ce2-4ddf-845a-bcdaf929fe28",
			"multiverse_ids": [],
			"tcgplayer_id": 207107,
			"name": "Threnody Singer",
			"lang": "en",
			"released_at": "2020-01-24",
			"uri": "https://api.scryfall.com/cards/242cdffb-5037-4d49-b194-4b60274a8758",
			"scryfall_uri": "https://scryfall.com/card/thb/75/threnody-singer?utm_source=api",
			"layout": "normal",
			"highres_image": false,
			"image_uris": {
				"small": "https://img.scryfall.com/cards/small/front/2/4/242cdffb-5037-4d49-b194-4b60274a8758.jpg?1578670707",
				"normal": "https://img.scryfall.com/cards/normal/front/2/4/242cdffb-5037-4d49-b194-4b60274a8758.jpg?1578670707",
				"large": "https://img.scryfall.com/cards/large/front/2/4/242cdffb-5037-4d49-b194-4b60274a8758.jpg?1578670707",
				"png": "https://img.scryfall.com/cards/png/front/2/4/242cdffb-5037-4d49-b194-4b60274a8758.png?1578670707",
				"art_crop": "https://img.scryfall.com/cards/art_crop/front/2/4/242cdffb-5037-4d49-b194-4b60274a8758.jpg?1578670707",
				"border_crop": "https://img.scryfall.com/cards/border_crop/front/2/4/242cdffb-5037-4d49-b194-4b60274a8758.jpg?1578670707"
			},
			"mana_cost": "{1}{U}",
			"cmc": 2,
			"type_line": "Creature — Siren",
			"oracle_text": "Flash\nFlying\nWhen Threnody Singer enters the battlefield, target creature an opponent controls gets -X/-0 until end of turn, where X is your devotion to blue. (Each {U} in the mana costs of permanents you control counts towards your devotion to blue.)",
			"power": "1",
			"toughness": "3",
			"colors": [
				"U"
			],
			"color_identity": [
				"U"
			],
			"legalities": {
				"standard": "not_legal",
				"future": "legal",
				"historic": "not_legal",
				"pioneer": "not_legal",
				"modern": "not_legal",
				"legacy": "not_legal",
				"pauper": "not_legal",
				"vintage": "not_legal",
				"penny": "not_legal",
				"commander": "not_legal",
				"brawl": "not_legal",
				"duel": "not_legal",
				"oldschool": "not_legal"
			},
			"games": [],
			"reserved": false,
			"foil": true,
			"nonfoil": true,
			"oversized": false,
			"promo": false,
			"reprint": false,
			"variation": false,
			"set": "thb",
			"set_name": "Theros Beyond Death",
			"set_type": "expansion",
			"set_uri": "https://api.scryfall.com/sets/5f23a78d-cda1-462a-8be3-a62b40c34913",
			"set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Athb&unique=prints",
			"scryfall_set_uri": "https://scryfall.com/sets/thb?utm_source=api",
			"rulings_uri": "https://api.scryfall.com/cards/242cdffb-5037-4d49-b194-4b60274a8758/rulings",
			"prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A2c0816bd-8ce2-4ddf-845a-bcdaf929fe28&unique=prints",
			"collector_number": "75",
			"digital": false,
			"rarity": "uncommon",
			"card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
			"artist": "Pindurski",
			"artist_ids": [
				"f333a7f0-7330-40e9-8c58-667eea2f0f60"
			],
			"illustration_id": "c325b599-b8d7-4d58-b157-08b211e74611",
			"border_color": "black",
			"frame": "2015",
			"full_art": false,
			"textless": false,
			"booster": true,
			"story_spotlight": false,
			"prices": {
				"usd": "0.19",
				"usd_foil": "0.99",
				"eur": "0.09",
				"tix": null
			},
			"related_uris": {
				"tcgplayer_decks": "https://decks.tcgplayer.com/magic/deck/search?contains=Threnody+Singer&page=1&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"edhrec": "https://edhrec.com/route/?cc=Threnody+Singer",
				"mtgtop8": "https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Threnody+Singer"
			},
			"purchase_uris": {
				"tcgplayer": "https://shop.tcgplayer.com/product/productsearch?id=207107&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"cardmarket": "https://www.cardmarket.com/en/Magic/Products/Singles/Theros-Beyond-Death/Threnody-Singer?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
				"cardhoarder": "https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=Threnody+Singer&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
			}
		},
		{
			"object": "card",
			"id": "4238b089-c6d8-4e4b-b6a1-a0f89e3b4968",
			"oracle_id": "20004398-bd04-4583-8378-9df743246a32",
			"multiverse_ids": [],
			"tcgplayer_id": 206831,
			"name": "Thryx, the Sudden Storm",
			"lang": "en",
			"released_at": "2020-01-24",
			"uri": "https://api.scryfall.com/cards/4238b089-c6d8-4e4b-b6a1-a0f89e3b4968",
			"scryfall_uri": "https://scryfall.com/card/thb/76/thryx-the-sudden-storm?utm_source=api",
			"layout": "normal",
			"highres_image": false,
			"image_uris": {
				"small": "https://img.scryfall.com/cards/small/front/4/2/4238b089-c6d8-4e4b-b6a1-a0f89e3b4968.jpg?1578340833",
				"normal": "https://img.scryfall.com/cards/normal/front/4/2/4238b089-c6d8-4e4b-b6a1-a0f89e3b4968.jpg?1578340833",
				"large": "https://img.scryfall.com/cards/large/front/4/2/4238b089-c6d8-4e4b-b6a1-a0f89e3b4968.jpg?1578340833",
				"png": "https://img.scryfall.com/cards/png/front/4/2/4238b089-c6d8-4e4b-b6a1-a0f89e3b4968.png?1578340833",
				"art_crop": "https://img.scryfall.com/cards/art_crop/front/4/2/4238b089-c6d8-4e4b-b6a1-a0f89e3b4968.jpg?1578340833",
				"border_crop": "https://img.scryfall.com/cards/border_crop/front/4/2/4238b089-c6d8-4e4b-b6a1-a0f89e3b4968.jpg?1578340833"
			},
			"mana_cost": "{3}{U}{U}",
			"cmc": 5,
			"type_line": "Legendary Creature — Elemental Giant",
			"oracle_text": "Flash\nFlying\nSpells you cast with converted mana cost 5 or greater cost {1} less to cast and can't be countered.",
			"power": "4",
			"toughness": "5",
			"colors": [
				"U"
			],
			"color_identity": [
				"U"
			],
			"legalities": {
				"standard": "not_legal",
				"future": "legal",
				"historic": "not_legal",
				"pioneer": "not_legal",
				"modern": "not_legal",
				"legacy": "not_legal",
				"pauper": "not_legal",
				"vintage": "not_legal",
				"penny": "not_legal",
				"commander": "not_legal",
				"brawl": "not_legal",
				"duel": "not_legal",
				"oldschool": "not_legal"
			},
			"games": [],
			"reserved": false,
			"foil": true,
			"nonfoil": true,
			"oversized": false,
			"promo": false,
			"reprint": false,
			"variation": false,
			"set": "thb",
			"set_name": "Theros Beyond Death",
			"set_type": "expansion",
			"set_uri": "https://api.scryfall.com/sets/5f23a78d-cda1-462a-8be3-a62b40c34913",
			"set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Athb&unique=prints",
			"scryfall_set_uri": "https://scryfall.com/sets/thb?utm_source=api",
			"rulings_uri": "https://api.scryfall.com/cards/4238b089-c6d8-4e4b-b6a1-a0f89e3b4968/rulings",
			"prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A20004398-bd04-4583-8378-9df743246a32&unique=prints",
			"collector_number": "76",
			"digital": false,
			"rarity": "rare",
			"flavor_text": "Even in their mountain fortresses, the Akroans have learned not to anger Thassa.",
			"card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
			"artist": "Mathias Kollros",
			"artist_ids": [
				"2ae0dd12-047c-4efb-80d7-bccc3bac5fba"
			],
			"illustration_id": "a74932b7-6de8-4c39-8b4a-91867894bc75",
			"border_color": "black",
			"frame": "2015",
			"frame_effects": [
				"legendary"
			],
			"full_art": false,
			"textless": false,
			"booster": true,
			"story_spotlight": false,
			"edhrec_rank": 18854,
			"prices": {
				"usd": "0.53",
				"usd_foil": "7.49",
				"eur": "0.52",
				"tix": null
			},
			"related_uris": {
				"tcgplayer_decks": "https://decks.tcgplayer.com/magic/deck/search?contains=Thryx%2C+the+Sudden+Storm&page=1&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"edhrec": "https://edhrec.com/route/?cc=Thryx%2C+the+Sudden+Storm",
				"mtgtop8": "https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Thryx%2C+the+Sudden+Storm"
			},
			"purchase_uris": {
				"tcgplayer": "https://shop.tcgplayer.com/product/productsearch?id=206831&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"cardmarket": "https://www.cardmarket.com/en/Magic/Products/Singles/Theros-Beyond-Death/Thryx-the-Sudden-Storm?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
				"cardhoarder": "https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=Thryx%2C+the+Sudden+Storm&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
			}
		},
		{
			"object": "card",
			"id": "869fee23-df75-448d-9fca-6ba6713d459f",
			"oracle_id": "1a36d2a8-6117-4828-bbe2-bc63212d29d8",
			"multiverse_ids": [],
			"tcgplayer_id": 206818,
			"name": "Vexing Gull",
			"lang": "en",
			"released_at": "2020-01-24",
			"uri": "https://api.scryfall.com/cards/869fee23-df75-448d-9fca-6ba6713d459f",
			"scryfall_uri": "https://scryfall.com/card/thb/79/vexing-gull?utm_source=api",
			"layout": "normal",
			"highres_image": false,
			"image_uris": {
				"small": "https://img.scryfall.com/cards/small/front/8/6/869fee23-df75-448d-9fca-6ba6713d459f.jpg?1578187679",
				"normal": "https://img.scryfall.com/cards/normal/front/8/6/869fee23-df75-448d-9fca-6ba6713d459f.jpg?1578187679",
				"large": "https://img.scryfall.com/cards/large/front/8/6/869fee23-df75-448d-9fca-6ba6713d459f.jpg?1578187679",
				"png": "https://img.scryfall.com/cards/png/front/8/6/869fee23-df75-448d-9fca-6ba6713d459f.png?1578187679",
				"art_crop": "https://img.scryfall.com/cards/art_crop/front/8/6/869fee23-df75-448d-9fca-6ba6713d459f.jpg?1578187679",
				"border_crop": "https://img.scryfall.com/cards/border_crop/front/8/6/869fee23-df75-448d-9fca-6ba6713d459f.jpg?1578187679"
			},
			"mana_cost": "{2}{U}",
			"cmc": 3,
			"type_line": "Creature — Bird",
			"oracle_text": "Flash\nFlying",
			"power": "2",
			"toughness": "2",
			"colors": [
				"U"
			],
			"color_identity": [
				"U"
			],
			"legalities": {
				"standard": "not_legal",
				"future": "legal",
				"historic": "not_legal",
				"pioneer": "not_legal",
				"modern": "not_legal",
				"legacy": "not_legal",
				"pauper": "not_legal",
				"vintage": "not_legal",
				"penny": "not_legal",
				"commander": "not_legal",
				"brawl": "not_legal",
				"duel": "not_legal",
				"oldschool": "not_legal"
			},
			"games": [],
			"reserved": false,
			"foil": true,
			"nonfoil": true,
			"oversized": false,
			"promo": false,
			"reprint": false,
			"variation": false,
			"set": "thb",
			"set_name": "Theros Beyond Death",
			"set_type": "expansion",
			"set_uri": "https://api.scryfall.com/sets/5f23a78d-cda1-462a-8be3-a62b40c34913",
			"set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Athb&unique=prints",
			"scryfall_set_uri": "https://scryfall.com/sets/thb?utm_source=api",
			"rulings_uri": "https://api.scryfall.com/cards/869fee23-df75-448d-9fca-6ba6713d459f/rulings",
			"prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A1a36d2a8-6117-4828-bbe2-bc63212d29d8&unique=prints",
			"collector_number": "79",
			"digital": false,
			"rarity": "common",
			"flavor_text": "\"May the skies be clear of gales and gulls.\"\n—Meletian prayer",
			"card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
			"artist": "Volkan Baǵa",
			"artist_ids": [
				"93bec3c0-0260-4d31-8064-5d01efb4153f"
			],
			"illustration_id": "3ce70b46-4e74-4cac-9889-aefa05c7b535",
			"border_color": "black",
			"frame": "2015",
			"full_art": false,
			"textless": false,
			"booster": true,
			"story_spotlight": false,
			"preview": {
				"source": "Wizards of the Coast",
				"source_uri": "https://twitter.com/wizards_magic/status/1213555704709169161",
				"previewed_at": "2020-01-05"
			},
			"prices": {
				"usd": "0.25",
				"usd_foil": null,
				"eur": "0.02",
				"tix": null
			},
			"related_uris": {
				"tcgplayer_decks": "https://decks.tcgplayer.com/magic/deck/search?contains=Vexing+Gull&page=1&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"edhrec": "https://edhrec.com/route/?cc=Vexing+Gull",
				"mtgtop8": "https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Vexing+Gull"
			},
			"purchase_uris": {
				"tcgplayer": "https://shop.tcgplayer.com/product/productsearch?id=206818&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"cardmarket": "https://www.cardmarket.com/en/Magic/Products/Singles/Theros-Beyond-Death/Vexing-Gull?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
				"cardhoarder": "https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=Vexing+Gull&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
			}
		},
		{
			"object": "card",
			"id": "9e127856-bedd-40a9-9e8e-d1f9fbefe07d",
			"oracle_id": "ba9e129d-a3cf-431c-93af-f2e4902d40a0",
			"multiverse_ids": [],
			"tcgplayer_id": 206840,
			"name": "Whirlwind Denial",
			"lang": "en",
			"released_at": "2020-01-24",
			"uri": "https://api.scryfall.com/cards/9e127856-bedd-40a9-9e8e-d1f9fbefe07d",
			"scryfall_uri": "https://scryfall.com/card/thb/81/whirlwind-denial?utm_source=api",
			"layout": "normal",
			"highres_image": false,
			"image_uris": {
				"small": "https://img.scryfall.com/cards/small/front/9/e/9e127856-bedd-40a9-9e8e-d1f9fbefe07d.jpg?1578326880",
				"normal": "https://img.scryfall.com/cards/normal/front/9/e/9e127856-bedd-40a9-9e8e-d1f9fbefe07d.jpg?1578326880",
				"large": "https://img.scryfall.com/cards/large/front/9/e/9e127856-bedd-40a9-9e8e-d1f9fbefe07d.jpg?1578326880",
				"png": "https://img.scryfall.com/cards/png/front/9/e/9e127856-bedd-40a9-9e8e-d1f9fbefe07d.png?1578326880",
				"art_crop": "https://img.scryfall.com/cards/art_crop/front/9/e/9e127856-bedd-40a9-9e8e-d1f9fbefe07d.jpg?1578326880",
				"border_crop": "https://img.scryfall.com/cards/border_crop/front/9/e/9e127856-bedd-40a9-9e8e-d1f9fbefe07d.jpg?1578326880"
			},
			"mana_cost": "{2}{U}",
			"cmc": 3,
			"type_line": "Instant",
			"oracle_text": "For each spell and ability your opponents control, counter it unless its controller pays {4}.",
			"colors": [
				"U"
			],
			"color_identity": [
				"U"
			],
			"legalities": {
				"standard": "not_legal",
				"future": "legal",
				"historic": "not_legal",
				"pioneer": "not_legal",
				"modern": "not_legal",
				"legacy": "not_legal",
				"pauper": "not_legal",
				"vintage": "not_legal",
				"penny": "not_legal",
				"commander": "not_legal",
				"brawl": "not_legal",
				"duel": "not_legal",
				"oldschool": "not_legal"
			},
			"games": [],
			"reserved": false,
			"foil": true,
			"nonfoil": true,
			"oversized": false,
			"promo": false,
			"reprint": false,
			"variation": false,
			"set": "thb",
			"set_name": "Theros Beyond Death",
			"set_type": "expansion",
			"set_uri": "https://api.scryfall.com/sets/5f23a78d-cda1-462a-8be3-a62b40c34913",
			"set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Athb&unique=prints",
			"scryfall_set_uri": "https://scryfall.com/sets/thb?utm_source=api",
			"rulings_uri": "https://api.scryfall.com/cards/9e127856-bedd-40a9-9e8e-d1f9fbefe07d/rulings",
			"prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3Aba9e129d-a3cf-431c-93af-f2e4902d40a0&unique=prints",
			"collector_number": "81",
			"digital": false,
			"rarity": "uncommon",
			"flavor_text": "\"No, no, and ... no.\"",
			"card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
			"artist": "Lie Setiawan",
			"artist_ids": [
				"6f771d3f-310e-4aa4-841f-5ba4ba9f025a"
			],
			"illustration_id": "6ad4c601-b0ce-4dc8-9f40-722151852b44",
			"border_color": "black",
			"frame": "2015",
			"full_art": false,
			"textless": false,
			"booster": true,
			"story_spotlight": false,
			"edhrec_rank": 18134,
			"preview": {
				"source": "PC Gamer",
				"source_uri": "https://www.pcgamer.com/new-magic-the-gathering-card-threatens-to-shut-down-spellcasters/",
				"previewed_at": "2020-01-06"
			},
			"prices": {
				"usd": "0.42",
				"usd_foil": "20.00",
				"eur": "0.18",
				"tix": null
			},
			"related_uris": {
				"tcgplayer_decks": "https://decks.tcgplayer.com/magic/deck/search?contains=Whirlwind+Denial&page=1&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"edhrec": "https://edhrec.com/route/?cc=Whirlwind+Denial",
				"mtgtop8": "https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Whirlwind+Denial"
			},
			"purchase_uris": {
				"tcgplayer": "https://shop.tcgplayer.com/product/productsearch?id=206840&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"cardmarket": "https://www.cardmarket.com/en/Magic/Products/Singles/Theros-Beyond-Death/Whirlwind-Denial?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
				"cardhoarder": "https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=Whirlwind+Denial&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
			}
		},
		{
			"object": "card",
			"id": "52c2de5f-e486-4cfe-9fb6-be0078ce5f93",
			"oracle_id": "9c44e556-4c7a-48bf-a108-c584f69c2cfa",
			"multiverse_ids": [],
			"tcgplayer_id": 206655,
			"name": "Cling to Dust",
			"lang": "en",
			"released_at": "2020-01-24",
			"uri": "https://api.scryfall.com/cards/52c2de5f-e486-4cfe-9fb6-be0078ce5f93",
			"scryfall_uri": "https://scryfall.com/card/thb/87/cling-to-dust?utm_source=api",
			"layout": "normal",
			"highres_image": false,
			"image_uris": {
				"small": "https://img.scryfall.com/cards/small/front/5/2/52c2de5f-e486-4cfe-9fb6-be0078ce5f93.jpg?1577965894",
				"normal": "https://img.scryfall.com/cards/normal/front/5/2/52c2de5f-e486-4cfe-9fb6-be0078ce5f93.jpg?1577965894",
				"large": "https://img.scryfall.com/cards/large/front/5/2/52c2de5f-e486-4cfe-9fb6-be0078ce5f93.jpg?1577965894",
				"png": "https://img.scryfall.com/cards/png/front/5/2/52c2de5f-e486-4cfe-9fb6-be0078ce5f93.png?1577965894",
				"art_crop": "https://img.scryfall.com/cards/art_crop/front/5/2/52c2de5f-e486-4cfe-9fb6-be0078ce5f93.jpg?1577965894",
				"border_crop": "https://img.scryfall.com/cards/border_crop/front/5/2/52c2de5f-e486-4cfe-9fb6-be0078ce5f93.jpg?1577965894"
			},
			"mana_cost": "{B}",
			"cmc": 1,
			"type_line": "Instant",
			"oracle_text": "Exile target card from a graveyard. If it was a creature card, you gain 3 life. Otherwise, you draw a card.\nEscape—{3}{B}, Exile five other cards from your graveyard. (You may cast this card from your graveyard for its escape cost.)",
			"colors": [
				"B"
			],
			"color_identity": [
				"B"
			],
			"legalities": {
				"standard": "not_legal",
				"future": "legal",
				"historic": "not_legal",
				"pioneer": "not_legal",
				"modern": "not_legal",
				"legacy": "not_legal",
				"pauper": "not_legal",
				"vintage": "not_legal",
				"penny": "not_legal",
				"commander": "not_legal",
				"brawl": "not_legal",
				"duel": "not_legal",
				"oldschool": "not_legal"
			},
			"games": [],
			"reserved": false,
			"foil": true,
			"nonfoil": true,
			"oversized": false,
			"promo": false,
			"reprint": false,
			"variation": false,
			"set": "thb",
			"set_name": "Theros Beyond Death",
			"set_type": "expansion",
			"set_uri": "https://api.scryfall.com/sets/5f23a78d-cda1-462a-8be3-a62b40c34913",
			"set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Athb&unique=prints",
			"scryfall_set_uri": "https://scryfall.com/sets/thb?utm_source=api",
			"rulings_uri": "https://api.scryfall.com/cards/52c2de5f-e486-4cfe-9fb6-be0078ce5f93/rulings",
			"prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A9c44e556-4c7a-48bf-a108-c584f69c2cfa&unique=prints",
			"collector_number": "87",
			"digital": false,
			"rarity": "uncommon",
			"flavor_text": "In bleak Tizerus, all hope crumbles in your grasp.",
			"card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
			"artist": "Caio Monteiro",
			"artist_ids": [
				"d5053eb6-af72-47a0-b6e8-023cc3b9aefb"
			],
			"illustration_id": "5a9997ad-8eb2-44cd-b6a6-aaf5f4204142",
			"border_color": "black",
			"frame": "2015",
			"full_art": false,
			"textless": false,
			"booster": true,
			"story_spotlight": false,
			"preview": {
				"source": "Vana",
				"source_uri": "https://youtu.be/b2nXPdK2Gjs",
				"previewed_at": "2019-12-31"
			},
			"prices": {
				"usd": "0.16",
				"usd_foil": null,
				"eur": "0.11",
				"tix": null
			},
			"related_uris": {
				"tcgplayer_decks": "https://decks.tcgplayer.com/magic/deck/search?contains=Cling+to+Dust&page=1&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"edhrec": "https://edhrec.com/route/?cc=Cling+to+Dust",
				"mtgtop8": "https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Cling+to+Dust"
			},
			"purchase_uris": {
				"tcgplayer": "https://shop.tcgplayer.com/product/productsearch?id=206655&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"cardmarket": "https://www.cardmarket.com/en/Magic/Products/Singles/Theros-Beyond-Death/Cling-to-Dust?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
				"cardhoarder": "https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=Cling+to+Dust&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
			}
		},
		{
			"object": "card",
			"id": "91852444-9361-4588-a44f-fb90ba1b30e5",
			"oracle_id": "746dc1d8-f245-47be-abd5-50ca6ac0d1af",
			"multiverse_ids": [],
			"tcgplayer_id": 206697,
			"name": "Drag to the Underworld",
			"lang": "en",
			"released_at": "2020-01-24",
			"uri": "https://api.scryfall.com/cards/91852444-9361-4588-a44f-fb90ba1b30e5",
			"scryfall_uri": "https://scryfall.com/card/thb/89/drag-to-the-underworld?utm_source=api",
			"layout": "normal",
			"highres_image": false,
			"image_uris": {
				"small": "https://img.scryfall.com/cards/small/front/9/1/91852444-9361-4588-a44f-fb90ba1b30e5.jpg?1578664372",
				"normal": "https://img.scryfall.com/cards/normal/front/9/1/91852444-9361-4588-a44f-fb90ba1b30e5.jpg?1578664372",
				"large": "https://img.scryfall.com/cards/large/front/9/1/91852444-9361-4588-a44f-fb90ba1b30e5.jpg?1578664372",
				"png": "https://img.scryfall.com/cards/png/front/9/1/91852444-9361-4588-a44f-fb90ba1b30e5.png?1578664372",
				"art_crop": "https://img.scryfall.com/cards/art_crop/front/9/1/91852444-9361-4588-a44f-fb90ba1b30e5.jpg?1578664372",
				"border_crop": "https://img.scryfall.com/cards/border_crop/front/9/1/91852444-9361-4588-a44f-fb90ba1b30e5.jpg?1578664372"
			},
			"mana_cost": "{2}{B}{B}",
			"cmc": 4,
			"type_line": "Instant",
			"oracle_text": "This spell costs {X} less to cast, where X is your devotion to black. (Each {B} in the mana costs of permanents you control counts toward your devotion to black.)\nDestroy target creature.",
			"colors": [
				"B"
			],
			"color_identity": [
				"B"
			],
			"legalities": {
				"standard": "not_legal",
				"future": "legal",
				"historic": "not_legal",
				"pioneer": "not_legal",
				"modern": "not_legal",
				"legacy": "not_legal",
				"pauper": "not_legal",
				"vintage": "not_legal",
				"penny": "not_legal",
				"commander": "not_legal",
				"brawl": "not_legal",
				"duel": "not_legal",
				"oldschool": "not_legal"
			},
			"games": [],
			"reserved": false,
			"foil": true,
			"nonfoil": true,
			"oversized": false,
			"promo": false,
			"reprint": false,
			"variation": false,
			"set": "thb",
			"set_name": "Theros Beyond Death",
			"set_type": "expansion",
			"set_uri": "https://api.scryfall.com/sets/5f23a78d-cda1-462a-8be3-a62b40c34913",
			"set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Athb&unique=prints",
			"scryfall_set_uri": "https://scryfall.com/sets/thb?utm_source=api",
			"rulings_uri": "https://api.scryfall.com/cards/91852444-9361-4588-a44f-fb90ba1b30e5/rulings",
			"prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A746dc1d8-f245-47be-abd5-50ca6ac0d1af&unique=prints",
			"collector_number": "89",
			"digital": false,
			"rarity": "uncommon",
			"flavor_text": "The more you struggle against death, the tighter its grip becomes.",
			"card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
			"artist": "Victor Adame Minguez",
			"artist_ids": [
				"bd8f7368-5b10-4554-b6b8-d052c6aca89f"
			],
			"illustration_id": "50cf06fa-3f65-403f-88ba-91a411a392fc",
			"border_color": "black",
			"frame": "2015",
			"full_art": false,
			"textless": false,
			"booster": true,
			"story_spotlight": false,
			"edhrec_rank": 18698,
			"preview": {
				"source": "Card Kingdom",
				"source_uri": "https://twitter.com/Card_Kingdom/status/1212818362381881344",
				"previewed_at": "2020-01-02"
			},
			"prices": {
				"usd": "0.25",
				"usd_foil": "5.94",
				"eur": "0.14",
				"tix": null
			},
			"related_uris": {
				"tcgplayer_decks": "https://decks.tcgplayer.com/magic/deck/search?contains=Drag+to+the+Underworld&page=1&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"edhrec": "https://edhrec.com/route/?cc=Drag+to+the+Underworld",
				"mtgtop8": "https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Drag+to+the+Underworld"
			},
			"purchase_uris": {
				"tcgplayer": "https://shop.tcgplayer.com/product/productsearch?id=206697&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"cardmarket": "https://www.cardmarket.com/en/Magic/Products/Singles/Theros-Beyond-Death/Drag-to-the-Underworld?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
				"cardhoarder": "https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=Drag+to+the+Underworld&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
			}
		},
		{
			"object": "card",
			"id": "a0fae55a-6edd-42ea-b909-ccc39a64a0ed",
			"oracle_id": "bf5f348e-d748-48e2-b483-740109e71176",
			"multiverse_ids": [],
			"tcgplayer_id": 206869,
			"name": "Eat to Extinction",
			"lang": "en",
			"released_at": "2020-01-24",
			"uri": "https://api.scryfall.com/cards/a0fae55a-6edd-42ea-b909-ccc39a64a0ed",
			"scryfall_uri": "https://scryfall.com/card/thb/90/eat-to-extinction?utm_source=api",
			"layout": "normal",
			"highres_image": false,
			"image_uris": {
				"small": "https://img.scryfall.com/cards/small/front/a/0/a0fae55a-6edd-42ea-b909-ccc39a64a0ed.jpg?1578344441",
				"normal": "https://img.scryfall.com/cards/normal/front/a/0/a0fae55a-6edd-42ea-b909-ccc39a64a0ed.jpg?1578344441",
				"large": "https://img.scryfall.com/cards/large/front/a/0/a0fae55a-6edd-42ea-b909-ccc39a64a0ed.jpg?1578344441",
				"png": "https://img.scryfall.com/cards/png/front/a/0/a0fae55a-6edd-42ea-b909-ccc39a64a0ed.png?1578344441",
				"art_crop": "https://img.scryfall.com/cards/art_crop/front/a/0/a0fae55a-6edd-42ea-b909-ccc39a64a0ed.jpg?1578344441",
				"border_crop": "https://img.scryfall.com/cards/border_crop/front/a/0/a0fae55a-6edd-42ea-b909-ccc39a64a0ed.jpg?1578344441"
			},
			"mana_cost": "{3}{B}",
			"cmc": 4,
			"type_line": "Instant",
			"oracle_text": "Exile target creature or planeswalker. Look at the top card of your library. You may put that card into your graveyard.",
			"colors": [
				"B"
			],
			"color_identity": [
				"B"
			],
			"legalities": {
				"standard": "not_legal",
				"future": "legal",
				"historic": "not_legal",
				"pioneer": "not_legal",
				"modern": "not_legal",
				"legacy": "not_legal",
				"pauper": "not_legal",
				"vintage": "not_legal",
				"penny": "not_legal",
				"commander": "not_legal",
				"brawl": "not_legal",
				"duel": "not_legal",
				"oldschool": "not_legal"
			},
			"games": [],
			"reserved": false,
			"foil": true,
			"nonfoil": true,
			"oversized": false,
			"promo": false,
			"reprint": false,
			"variation": false,
			"set": "thb",
			"set_name": "Theros Beyond Death",
			"set_type": "expansion",
			"set_uri": "https://api.scryfall.com/sets/5f23a78d-cda1-462a-8be3-a62b40c34913",
			"set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Athb&unique=prints",
			"scryfall_set_uri": "https://scryfall.com/sets/thb?utm_source=api",
			"rulings_uri": "https://api.scryfall.com/cards/a0fae55a-6edd-42ea-b909-ccc39a64a0ed/rulings",
			"prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3Abf5f348e-d748-48e2-b483-740109e71176&unique=prints",
			"collector_number": "90",
			"digital": false,
			"rarity": "rare",
			"flavor_text": "\"Kroxa devours what he may—not for sustenance or pleasure, but because it is his nature. He is unending hunger given form.\"\n—Klothys, god of destiny",
			"card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
			"artist": "Vincent Proce",
			"artist_ids": [
				"d82b1138-76d3-49f7-9d8c-bc2e2d3e0b0a"
			],
			"illustration_id": "fabd8e7f-e631-482e-847a-29ca59bb2be8",
			"border_color": "black",
			"frame": "2015",
			"full_art": false,
			"textless": false,
			"booster": true,
			"story_spotlight": false,
			"edhrec_rank": 18942,
			"preview": {
				"source": "Shouta Yasooka",
				"source_uri": "https://www.twitch.tv/videos/531819089",
				"previewed_at": "2020-01-06"
			},
			"prices": {
				"usd": "1.48",
				"usd_foil": "6.99",
				"eur": "1.60",
				"tix": null
			},
			"related_uris": {
				"tcgplayer_decks": "https://decks.tcgplayer.com/magic/deck/search?contains=Eat+to+Extinction&page=1&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"edhrec": "https://edhrec.com/route/?cc=Eat+to+Extinction",
				"mtgtop8": "https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Eat+to+Extinction"
			},
			"purchase_uris": {
				"tcgplayer": "https://shop.tcgplayer.com/product/productsearch?id=206869&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"cardmarket": "https://www.cardmarket.com/en/Magic/Products/Singles/Theros-Beyond-Death/Eat-to-Extinction?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
				"cardhoarder": "https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=Eat+to+Extinction&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
			}
		},
		{
			"object": "card",
			"id": "88e35c80-6cfe-49fc-8138-562233ccf987",
			"oracle_id": "e078585e-7058-4746-a884-3c9a14630a1b",
			"multiverse_ids": [],
			"tcgplayer_id": 206806,
			"name": "Erebos's Intervention",
			"lang": "en",
			"released_at": "2020-01-24",
			"uri": "https://api.scryfall.com/cards/88e35c80-6cfe-49fc-8138-562233ccf987",
			"scryfall_uri": "https://scryfall.com/card/thb/94/ereboss-intervention?utm_source=api",
			"layout": "normal",
			"highres_image": false,
			"image_uris": {
				"small": "https://img.scryfall.com/cards/small/front/8/8/88e35c80-6cfe-49fc-8138-562233ccf987.jpg?1578081848",
				"normal": "https://img.scryfall.com/cards/normal/front/8/8/88e35c80-6cfe-49fc-8138-562233ccf987.jpg?1578081848",
				"large": "https://img.scryfall.com/cards/large/front/8/8/88e35c80-6cfe-49fc-8138-562233ccf987.jpg?1578081848",
				"png": "https://img.scryfall.com/cards/png/front/8/8/88e35c80-6cfe-49fc-8138-562233ccf987.png?1578081848",
				"art_crop": "https://img.scryfall.com/cards/art_crop/front/8/8/88e35c80-6cfe-49fc-8138-562233ccf987.jpg?1578081848",
				"border_crop": "https://img.scryfall.com/cards/border_crop/front/8/8/88e35c80-6cfe-49fc-8138-562233ccf987.jpg?1578081848"
			},
			"mana_cost": "{X}{B}",
			"cmc": 1,
			"type_line": "Instant",
			"oracle_text": "Choose one —\n• Target creature gets -X/-X until end of turn. You gain X life.\n• Exile up to twice X target cards from graveyards.",
			"colors": [
				"B"
			],
			"color_identity": [
				"B"
			],
			"legalities": {
				"standard": "not_legal",
				"future": "legal",
				"historic": "not_legal",
				"pioneer": "not_legal",
				"modern": "not_legal",
				"legacy": "not_legal",
				"pauper": "not_legal",
				"vintage": "not_legal",
				"penny": "not_legal",
				"commander": "not_legal",
				"brawl": "not_legal",
				"duel": "not_legal",
				"oldschool": "not_legal"
			},
			"games": [],
			"reserved": false,
			"foil": true,
			"nonfoil": true,
			"oversized": false,
			"promo": false,
			"reprint": false,
			"variation": false,
			"set": "thb",
			"set_name": "Theros Beyond Death",
			"set_type": "expansion",
			"set_uri": "https://api.scryfall.com/sets/5f23a78d-cda1-462a-8be3-a62b40c34913",
			"set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Athb&unique=prints",
			"scryfall_set_uri": "https://scryfall.com/sets/thb?utm_source=api",
			"rulings_uri": "https://api.scryfall.com/cards/88e35c80-6cfe-49fc-8138-562233ccf987/rulings",
			"prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3Ae078585e-7058-4746-a884-3c9a14630a1b&unique=prints",
			"collector_number": "94",
			"digital": false,
			"rarity": "rare",
			"flavor_text": "\"I bring a death none can escape.\"",
			"card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
			"artist": "Mathias Kollros",
			"artist_ids": [
				"2ae0dd12-047c-4efb-80d7-bccc3bac5fba"
			],
			"illustration_id": "c30b3225-13b4-4f29-b4c9-a4273d9d9a8e",
			"border_color": "black",
			"frame": "2015",
			"full_art": false,
			"textless": false,
			"booster": true,
			"story_spotlight": false,
			"edhrec_rank": 18948,
			"preview": {
				"source": "Alexander Hayne",
				"source_uri": "https://twitter.com/InsayneHayne/status/1213198117794963456",
				"previewed_at": "2020-01-03"
			},
			"prices": {
				"usd": "0.79",
				"usd_foil": null,
				"eur": "0.74",
				"tix": null
			},
			"related_uris": {
				"tcgplayer_decks": "https://decks.tcgplayer.com/magic/deck/search?contains=Erebos%27s+Intervention&page=1&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"edhrec": "https://edhrec.com/route/?cc=Erebos%27s+Intervention",
				"mtgtop8": "https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Erebos%27s+Intervention"
			},
			"purchase_uris": {
				"tcgplayer": "https://shop.tcgplayer.com/product/productsearch?id=206806&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"cardmarket": "https://www.cardmarket.com/en/Magic/Products/Singles/Theros-Beyond-Death/Ereboss-Intervention?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
				"cardhoarder": "https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=Erebos%27s+Intervention&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
			}
		},
		{
			"object": "card",
			"id": "8e5b8580-9198-4735-83c1-289400c1d814",
			"oracle_id": "1be3eea4-eaff-469c-9689-abadac1e848c",
			"multiverse_ids": [],
			"tcgplayer_id": 206687,
			"name": "Final Death",
			"lang": "en",
			"released_at": "2020-01-24",
			"uri": "https://api.scryfall.com/cards/8e5b8580-9198-4735-83c1-289400c1d814",
			"scryfall_uri": "https://scryfall.com/card/thb/95/final-death?utm_source=api",
			"layout": "normal",
			"highres_image": false,
			"image_uris": {
				"small": "https://img.scryfall.com/cards/small/front/8/e/8e5b8580-9198-4735-83c1-289400c1d814.jpg?1577971037",
				"normal": "https://img.scryfall.com/cards/normal/front/8/e/8e5b8580-9198-4735-83c1-289400c1d814.jpg?1577971037",
				"large": "https://img.scryfall.com/cards/large/front/8/e/8e5b8580-9198-4735-83c1-289400c1d814.jpg?1577971037",
				"png": "https://img.scryfall.com/cards/png/front/8/e/8e5b8580-9198-4735-83c1-289400c1d814.png?1577971037",
				"art_crop": "https://img.scryfall.com/cards/art_crop/front/8/e/8e5b8580-9198-4735-83c1-289400c1d814.jpg?1577971037",
				"border_crop": "https://img.scryfall.com/cards/border_crop/front/8/e/8e5b8580-9198-4735-83c1-289400c1d814.jpg?1577971037"
			},
			"mana_cost": "{4}{B}",
			"cmc": 5,
			"type_line": "Instant",
			"oracle_text": "Exile target creature.",
			"colors": [
				"B"
			],
			"color_identity": [
				"B"
			],
			"legalities": {
				"standard": "not_legal",
				"future": "legal",
				"historic": "not_legal",
				"pioneer": "not_legal",
				"modern": "not_legal",
				"legacy": "not_legal",
				"pauper": "not_legal",
				"vintage": "not_legal",
				"penny": "not_legal",
				"commander": "not_legal",
				"brawl": "not_legal",
				"duel": "not_legal",
				"oldschool": "not_legal"
			},
			"games": [],
			"reserved": false,
			"foil": true,
			"nonfoil": true,
			"oversized": false,
			"promo": false,
			"reprint": false,
			"variation": false,
			"set": "thb",
			"set_name": "Theros Beyond Death",
			"set_type": "expansion",
			"set_uri": "https://api.scryfall.com/sets/5f23a78d-cda1-462a-8be3-a62b40c34913",
			"set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Athb&unique=prints",
			"scryfall_set_uri": "https://scryfall.com/sets/thb?utm_source=api",
			"rulings_uri": "https://api.scryfall.com/cards/8e5b8580-9198-4735-83c1-289400c1d814/rulings",
			"prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A1be3eea4-eaff-469c-9689-abadac1e848c&unique=prints",
			"collector_number": "95",
			"digital": false,
			"rarity": "common",
			"flavor_text": "The Underworld erodes memory, identity, and eventually the physical form, leaving only crumbling statues called misera—hollow monuments to mortal futility.",
			"card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
			"artist": "Johann Bodin",
			"artist_ids": [
				"d92e2dd9-9ef6-43f6-81f8-df87f9066983"
			],
			"illustration_id": "04a53615-faf8-4576-b49c-462fd75aae1f",
			"border_color": "black",
			"frame": "2015",
			"full_art": false,
			"textless": false,
			"booster": true,
			"story_spotlight": false,
			"preview": {
				"source": "The Vorthos Cast",
				"source_uri": "https://twitter.com/TheVorthosCast/status/1212775164896841730",
				"previewed_at": "2020-01-02"
			},
			"prices": {
				"usd": "0.17",
				"usd_foil": null,
				"eur": "0.05",
				"tix": null
			},
			"related_uris": {
				"tcgplayer_decks": "https://decks.tcgplayer.com/magic/deck/search?contains=Final+Death&page=1&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"edhrec": "https://edhrec.com/route/?cc=Final+Death",
				"mtgtop8": "https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Final+Death"
			},
			"purchase_uris": {
				"tcgplayer": "https://shop.tcgplayer.com/product/productsearch?id=206687&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"cardmarket": "https://www.cardmarket.com/en/Magic/Products/Singles/Theros-Beyond-Death/Final-Death?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
				"cardhoarder": "https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=Final+Death&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
			}
		},
		{
			"object": "card",
			"id": "ce763778-0a35-41d2-9286-fdf2302554f5",
			"oracle_id": "6cbe76c6-2b64-4389-b5f9-0b221cd92312",
			"multiverse_ids": [],
			"tcgplayer_id": 207144,
			"name": "Minion's Return",
			"lang": "en",
			"released_at": "2020-01-24",
			"uri": "https://api.scryfall.com/cards/ce763778-0a35-41d2-9286-fdf2302554f5",
			"scryfall_uri": "https://scryfall.com/card/thb/104/minions-return?utm_source=api",
			"layout": "normal",
			"highres_image": false,
			"image_uris": {
				"small": "https://img.scryfall.com/cards/small/front/c/e/ce763778-0a35-41d2-9286-fdf2302554f5.jpg?1578670658",
				"normal": "https://img.scryfall.com/cards/normal/front/c/e/ce763778-0a35-41d2-9286-fdf2302554f5.jpg?1578670658",
				"large": "https://img.scryfall.com/cards/large/front/c/e/ce763778-0a35-41d2-9286-fdf2302554f5.jpg?1578670658",
				"png": "https://img.scryfall.com/cards/png/front/c/e/ce763778-0a35-41d2-9286-fdf2302554f5.png?1578670658",
				"art_crop": "https://img.scryfall.com/cards/art_crop/front/c/e/ce763778-0a35-41d2-9286-fdf2302554f5.jpg?1578670658",
				"border_crop": "https://img.scryfall.com/cards/border_crop/front/c/e/ce763778-0a35-41d2-9286-fdf2302554f5.jpg?1578670658"
			},
			"mana_cost": "{2}{B}",
			"cmc": 3,
			"type_line": "Enchantment — Aura",
			"oracle_text": "Flash\nEnchant creature\nWhen enchanted creature dies, return that card to the battlefield under your control.",
			"colors": [
				"B"
			],
			"color_identity": [
				"B"
			],
			"legalities": {
				"standard": "not_legal",
				"future": "legal",
				"historic": "not_legal",
				"pioneer": "not_legal",
				"modern": "not_legal",
				"legacy": "not_legal",
				"pauper": "not_legal",
				"vintage": "not_legal",
				"penny": "not_legal",
				"commander": "not_legal",
				"brawl": "not_legal",
				"duel": "not_legal",
				"oldschool": "not_legal"
			},
			"games": [],
			"reserved": false,
			"foil": true,
			"nonfoil": true,
			"oversized": false,
			"promo": false,
			"reprint": false,
			"variation": false,
			"set": "thb",
			"set_name": "Theros Beyond Death",
			"set_type": "expansion",
			"set_uri": "https://api.scryfall.com/sets/5f23a78d-cda1-462a-8be3-a62b40c34913",
			"set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Athb&unique=prints",
			"scryfall_set_uri": "https://scryfall.com/sets/thb?utm_source=api",
			"rulings_uri": "https://api.scryfall.com/cards/ce763778-0a35-41d2-9286-fdf2302554f5/rulings",
			"prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A6cbe76c6-2b64-4389-b5f9-0b221cd92312&unique=prints",
			"collector_number": "104",
			"digital": false,
			"rarity": "uncommon",
			"flavor_text": "As a mortal, Phenax was the first to escape the Underworld. As a god, he brings his pawns along the same dark path.",
			"card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
			"artist": "Billy Christian",
			"artist_ids": [
				"10f26f94-64fc-4174-856e-701bea4f1521"
			],
			"illustration_id": "0053ed14-47d8-4e23-81f2-335f7b117b68",
			"border_color": "black",
			"frame": "2015",
			"full_art": false,
			"textless": false,
			"booster": true,
			"story_spotlight": false,
			"edhrec_rank": 19309,
			"prices": {
				"usd": "0.25",
				"usd_foil": null,
				"eur": "0.06",
				"tix": null
			},
			"related_uris": {
				"tcgplayer_decks": "https://decks.tcgplayer.com/magic/deck/search?contains=Minion%27s+Return&page=1&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"edhrec": "https://edhrec.com/route/?cc=Minion%27s+Return",
				"mtgtop8": "https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Minion%27s+Return"
			},
			"purchase_uris": {
				"tcgplayer": "https://shop.tcgplayer.com/product/productsearch?id=207144&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"cardmarket": "https://www.cardmarket.com/en/Magic/Products/Singles/Theros-Beyond-Death/Minions-Return?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
				"cardhoarder": "https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=Minion%27s+Return&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
			}
		},
		{
			"object": "card",
			"id": "8023fc44-fb8e-420d-a68c-b45912c4e5bd",
			"oracle_id": "0aa9ee99-69a8-452b-a0d5-001384bdff3c",
			"multiverse_ids": [],
			"tcgplayer_id": 207057,
			"name": "Omen of the Dead",
			"lang": "en",
			"released_at": "2020-01-24",
			"uri": "https://api.scryfall.com/cards/8023fc44-fb8e-420d-a68c-b45912c4e5bd",
			"scryfall_uri": "https://scryfall.com/card/thb/110/omen-of-the-dead?utm_source=api",
			"layout": "normal",
			"highres_image": false,
			"image_uris": {
				"small": "https://img.scryfall.com/cards/small/front/8/0/8023fc44-fb8e-420d-a68c-b45912c4e5bd.jpg?1578626338",
				"normal": "https://img.scryfall.com/cards/normal/front/8/0/8023fc44-fb8e-420d-a68c-b45912c4e5bd.jpg?1578626338",
				"large": "https://img.scryfall.com/cards/large/front/8/0/8023fc44-fb8e-420d-a68c-b45912c4e5bd.jpg?1578626338",
				"png": "https://img.scryfall.com/cards/png/front/8/0/8023fc44-fb8e-420d-a68c-b45912c4e5bd.png?1578626338",
				"art_crop": "https://img.scryfall.com/cards/art_crop/front/8/0/8023fc44-fb8e-420d-a68c-b45912c4e5bd.jpg?1578626338",
				"border_crop": "https://img.scryfall.com/cards/border_crop/front/8/0/8023fc44-fb8e-420d-a68c-b45912c4e5bd.jpg?1578626338"
			},
			"mana_cost": "{B}",
			"cmc": 1,
			"type_line": "Enchantment",
			"oracle_text": "Flash\nWhen Omen of the Dead enters the battlefield, return target creature card from your graveyard to your hand.\n{2}{B}, Sacrifice Omen of the Dead: Scry 2.",
			"colors": [
				"B"
			],
			"color_identity": [
				"B"
			],
			"legalities": {
				"standard": "not_legal",
				"future": "legal",
				"historic": "not_legal",
				"pioneer": "not_legal",
				"modern": "not_legal",
				"legacy": "not_legal",
				"pauper": "not_legal",
				"vintage": "not_legal",
				"penny": "not_legal",
				"commander": "not_legal",
				"brawl": "not_legal",
				"duel": "not_legal",
				"oldschool": "not_legal"
			},
			"games": [],
			"reserved": false,
			"foil": true,
			"nonfoil": true,
			"oversized": false,
			"promo": false,
			"reprint": false,
			"variation": false,
			"set": "thb",
			"set_name": "Theros Beyond Death",
			"set_type": "expansion",
			"set_uri": "https://api.scryfall.com/sets/5f23a78d-cda1-462a-8be3-a62b40c34913",
			"set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Athb&unique=prints",
			"scryfall_set_uri": "https://scryfall.com/sets/thb?utm_source=api",
			"rulings_uri": "https://api.scryfall.com/cards/8023fc44-fb8e-420d-a68c-b45912c4e5bd/rulings",
			"prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A0aa9ee99-69a8-452b-a0d5-001384bdff3c&unique=prints",
			"collector_number": "110",
			"digital": false,
			"rarity": "common",
			"flavor_text": "\"My time will come, when life's frantic striving will fade into the boundless quiet of death.\"",
			"card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
			"artist": "Piotr Dura",
			"artist_ids": [
				"aff176e8-1d15-432e-ad1d-207a474decba"
			],
			"illustration_id": "a08e49f7-670c-4d79-ac66-82b356cb0359",
			"border_color": "black",
			"frame": "2015",
			"full_art": false,
			"textless": false,
			"booster": true,
			"story_spotlight": false,
			"preview": {
				"source": "Mein-MMO.de",
				"source_uri": "https://mein-mmo.de/magic-the-gathering-spoiler-karten-theros-beyond-death/",
				"previewed_at": "2020-01-09"
			},
			"prices": {
				"usd": "0.16",
				"usd_foil": null,
				"eur": "0.06",
				"tix": null
			},
			"related_uris": {
				"tcgplayer_decks": "https://decks.tcgplayer.com/magic/deck/search?contains=Omen+of+the+Dead&page=1&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"edhrec": "https://edhrec.com/route/?cc=Omen+of+the+Dead",
				"mtgtop8": "https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Omen+of+the+Dead"
			},
			"purchase_uris": {
				"tcgplayer": "https://shop.tcgplayer.com/product/productsearch?id=207057&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"cardmarket": "https://www.cardmarket.com/en/Magic/Products/Singles/Theros-Beyond-Death/Omen-of-the-Dead?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
				"cardhoarder": "https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=Omen+of+the+Dead&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
			}
		},
		{
			"object": "card",
			"id": "0307bb5c-0a46-4f6b-b6d5-58cf31987bb5",
			"oracle_id": "32c84176-cf11-4010-b1cc-ed570a8c3e54",
			"multiverse_ids": [],
			"tcgplayer_id": 207154,
			"name": "Pharika's Libation",
			"lang": "en",
			"released_at": "2020-01-24",
			"uri": "https://api.scryfall.com/cards/0307bb5c-0a46-4f6b-b6d5-58cf31987bb5",
			"scryfall_uri": "https://scryfall.com/card/thb/111/pharikas-libation?utm_source=api",
			"layout": "normal",
			"highres_image": false,
			"image_uris": {
				"small": "https://img.scryfall.com/cards/small/front/0/3/0307bb5c-0a46-4f6b-b6d5-58cf31987bb5.jpg?1578665111",
				"normal": "https://img.scryfall.com/cards/normal/front/0/3/0307bb5c-0a46-4f6b-b6d5-58cf31987bb5.jpg?1578665111",
				"large": "https://img.scryfall.com/cards/large/front/0/3/0307bb5c-0a46-4f6b-b6d5-58cf31987bb5.jpg?1578665111",
				"png": "https://img.scryfall.com/cards/png/front/0/3/0307bb5c-0a46-4f6b-b6d5-58cf31987bb5.png?1578665111",
				"art_crop": "https://img.scryfall.com/cards/art_crop/front/0/3/0307bb5c-0a46-4f6b-b6d5-58cf31987bb5.jpg?1578665111",
				"border_crop": "https://img.scryfall.com/cards/border_crop/front/0/3/0307bb5c-0a46-4f6b-b6d5-58cf31987bb5.jpg?1578665111"
			},
			"mana_cost": "{2}{B}",
			"cmc": 3,
			"type_line": "Instant",
			"oracle_text": "Choose one —\n• Target opponent sacrifices a creature.\n• Target opponent sacrifices an enchantment.",
			"colors": [
				"B"
			],
			"color_identity": [
				"B"
			],
			"legalities": {
				"standard": "not_legal",
				"future": "legal",
				"historic": "not_legal",
				"pioneer": "not_legal",
				"modern": "not_legal",
				"legacy": "not_legal",
				"pauper": "not_legal",
				"vintage": "not_legal",
				"penny": "not_legal",
				"commander": "not_legal",
				"brawl": "not_legal",
				"duel": "not_legal",
				"oldschool": "not_legal"
			},
			"games": [],
			"reserved": false,
			"foil": true,
			"nonfoil": true,
			"oversized": false,
			"promo": false,
			"reprint": false,
			"variation": false,
			"set": "thb",
			"set_name": "Theros Beyond Death",
			"set_type": "expansion",
			"set_uri": "https://api.scryfall.com/sets/5f23a78d-cda1-462a-8be3-a62b40c34913",
			"set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Athb&unique=prints",
			"scryfall_set_uri": "https://scryfall.com/sets/thb?utm_source=api",
			"rulings_uri": "https://api.scryfall.com/cards/0307bb5c-0a46-4f6b-b6d5-58cf31987bb5/rulings",
			"prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A32c84176-cf11-4010-b1cc-ed570a8c3e54&unique=prints",
			"collector_number": "111",
			"digital": false,
			"rarity": "common",
			"flavor_text": "\"If you will not pour your drink out for me, I shall pour mine out for you.\"",
			"card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
			"artist": "Jason Felix",
			"artist_ids": [
				"af42a44c-8ec3-47a7-9047-5d29ddad186d"
			],
			"illustration_id": "8790b0dd-2a57-4483-a34b-a94314f6581b",
			"border_color": "black",
			"frame": "2015",
			"full_art": false,
			"textless": false,
			"booster": true,
			"story_spotlight": false,
			"edhrec_rank": 19338,
			"prices": {
				"usd": "0.16",
				"usd_foil": null,
				"eur": "0.06",
				"tix": null
			},
			"related_uris": {
				"tcgplayer_decks": "https://decks.tcgplayer.com/magic/deck/search?contains=Pharika%27s+Libation&page=1&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"edhrec": "https://edhrec.com/route/?cc=Pharika%27s+Libation",
				"mtgtop8": "https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Pharika%27s+Libation"
			},
			"purchase_uris": {
				"tcgplayer": "https://shop.tcgplayer.com/product/productsearch?id=207154&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"cardmarket": "https://www.cardmarket.com/en/Magic/Products/Singles/Theros-Beyond-Death/Pharikas-Libation?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
				"cardhoarder": "https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=Pharika%27s+Libation&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
			}
		},
		{
			"object": "card",
			"id": "f67d0091-1925-44a5-89f3-21c2afd5665c",
			"oracle_id": "899f3758-bb06-4f9c-81eb-7a9002f03245",
			"multiverse_ids": [],
			"tcgplayer_id": 207119,
			"name": "Aspect of Manticore",
			"lang": "en",
			"released_at": "2020-01-24",
			"uri": "https://api.scryfall.com/cards/f67d0091-1925-44a5-89f3-21c2afd5665c",
			"scryfall_uri": "https://scryfall.com/card/thb/127/aspect-of-manticore?utm_source=api",
			"layout": "normal",
			"highres_image": false,
			"image_uris": {
				"small": "https://img.scryfall.com/cards/small/front/f/6/f67d0091-1925-44a5-89f3-21c2afd5665c.jpg?1578665715",
				"normal": "https://img.scryfall.com/cards/normal/front/f/6/f67d0091-1925-44a5-89f3-21c2afd5665c.jpg?1578665715",
				"large": "https://img.scryfall.com/cards/large/front/f/6/f67d0091-1925-44a5-89f3-21c2afd5665c.jpg?1578665715",
				"png": "https://img.scryfall.com/cards/png/front/f/6/f67d0091-1925-44a5-89f3-21c2afd5665c.png?1578665715",
				"art_crop": "https://img.scryfall.com/cards/art_crop/front/f/6/f67d0091-1925-44a5-89f3-21c2afd5665c.jpg?1578665715",
				"border_crop": "https://img.scryfall.com/cards/border_crop/front/f/6/f67d0091-1925-44a5-89f3-21c2afd5665c.jpg?1578665715"
			},
			"mana_cost": "{2}{R}",
			"cmc": 3,
			"type_line": "Enchantment — Aura",
			"oracle_text": "Flash\nEnchant creature\nWhen Aspect of Manticore enters the battlefield, enchanted creature gains first strike until end of turn.\nEnchanted creature gets +2/+0.",
			"colors": [
				"R"
			],
			"color_identity": [
				"R"
			],
			"legalities": {
				"standard": "not_legal",
				"future": "legal",
				"historic": "not_legal",
				"pioneer": "not_legal",
				"modern": "not_legal",
				"legacy": "not_legal",
				"pauper": "not_legal",
				"vintage": "not_legal",
				"penny": "not_legal",
				"commander": "not_legal",
				"brawl": "not_legal",
				"duel": "not_legal",
				"oldschool": "not_legal"
			},
			"games": [],
			"reserved": false,
			"foil": true,
			"nonfoil": true,
			"oversized": false,
			"promo": false,
			"reprint": false,
			"variation": false,
			"set": "thb",
			"set_name": "Theros Beyond Death",
			"set_type": "expansion",
			"set_uri": "https://api.scryfall.com/sets/5f23a78d-cda1-462a-8be3-a62b40c34913",
			"set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Athb&unique=prints",
			"scryfall_set_uri": "https://scryfall.com/sets/thb?utm_source=api",
			"rulings_uri": "https://api.scryfall.com/cards/f67d0091-1925-44a5-89f3-21c2afd5665c/rulings",
			"prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A899f3758-bb06-4f9c-81eb-7a9002f03245&unique=prints",
			"collector_number": "127",
			"digital": false,
			"rarity": "common",
			"card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
			"artist": "Tomasz Jedruszek",
			"artist_ids": [
				"bba69285-2445-4a4b-a847-59397be972ea"
			],
			"illustration_id": "fad5ff39-d44a-4116-92bc-b85373d21f9a",
			"border_color": "black",
			"frame": "2015",
			"full_art": false,
			"textless": false,
			"booster": true,
			"story_spotlight": false,
			"prices": {
				"usd": "0.15",
				"usd_foil": null,
				"eur": "0.01",
				"tix": null
			},
			"related_uris": {
				"tcgplayer_decks": "https://decks.tcgplayer.com/magic/deck/search?contains=Aspect+of+Manticore&page=1&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"edhrec": "https://edhrec.com/route/?cc=Aspect+of+Manticore",
				"mtgtop8": "https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Aspect+of+Manticore"
			},
			"purchase_uris": {
				"tcgplayer": "https://shop.tcgplayer.com/product/productsearch?id=207119&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"cardmarket": "https://www.cardmarket.com/en/Magic/Products/Singles/Theros-Beyond-Death/Aspect-of-Manticore?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
				"cardhoarder": "https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=Aspect+of+Manticore&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
			}
		},
		{
			"object": "card",
			"id": "56455067-92c0-45b5-ac2e-525c35b41215",
			"oracle_id": "a5495ab6-081a-42be-b50c-f89f15a587c8",
			"multiverse_ids": [],
			"tcgplayer_id": 206865,
			"name": "Fateful End",
			"lang": "en",
			"released_at": "2020-01-24",
			"uri": "https://api.scryfall.com/cards/56455067-92c0-45b5-ac2e-525c35b41215",
			"scryfall_uri": "https://scryfall.com/card/thb/133/fateful-end?utm_source=api",
			"layout": "normal",
			"highres_image": false,
			"image_uris": {
				"small": "https://img.scryfall.com/cards/small/front/5/6/56455067-92c0-45b5-ac2e-525c35b41215.jpg?1578345559",
				"normal": "https://img.scryfall.com/cards/normal/front/5/6/56455067-92c0-45b5-ac2e-525c35b41215.jpg?1578345559",
				"large": "https://img.scryfall.com/cards/large/front/5/6/56455067-92c0-45b5-ac2e-525c35b41215.jpg?1578345559",
				"png": "https://img.scryfall.com/cards/png/front/5/6/56455067-92c0-45b5-ac2e-525c35b41215.png?1578345559",
				"art_crop": "https://img.scryfall.com/cards/art_crop/front/5/6/56455067-92c0-45b5-ac2e-525c35b41215.jpg?1578345559",
				"border_crop": "https://img.scryfall.com/cards/border_crop/front/5/6/56455067-92c0-45b5-ac2e-525c35b41215.jpg?1578345559"
			},
			"mana_cost": "{2}{R}",
			"cmc": 3,
			"type_line": "Instant",
			"oracle_text": "Fateful End deals 3 damage to any target. Scry 1.",
			"colors": [
				"R"
			],
			"color_identity": [
				"R"
			],
			"legalities": {
				"standard": "not_legal",
				"future": "legal",
				"historic": "not_legal",
				"pioneer": "not_legal",
				"modern": "not_legal",
				"legacy": "not_legal",
				"pauper": "not_legal",
				"vintage": "not_legal",
				"penny": "not_legal",
				"commander": "not_legal",
				"brawl": "not_legal",
				"duel": "not_legal",
				"oldschool": "not_legal"
			},
			"games": [],
			"reserved": false,
			"foil": true,
			"nonfoil": true,
			"oversized": false,
			"promo": false,
			"reprint": false,
			"variation": false,
			"set": "thb",
			"set_name": "Theros Beyond Death",
			"set_type": "expansion",
			"set_uri": "https://api.scryfall.com/sets/5f23a78d-cda1-462a-8be3-a62b40c34913",
			"set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Athb&unique=prints",
			"scryfall_set_uri": "https://scryfall.com/sets/thb?utm_source=api",
			"rulings_uri": "https://api.scryfall.com/cards/56455067-92c0-45b5-ac2e-525c35b41215/rulings",
			"prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3Aa5495ab6-081a-42be-b50c-f89f15a587c8&unique=prints",
			"collector_number": "133",
			"digital": false,
			"rarity": "uncommon",
			"flavor_text": "\"Everything will be put back in its proper place.\"\n—Klothys, god of destiny",
			"card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
			"artist": "Chris Rallis",
			"artist_ids": [
				"a8e7b854-b15a-421a-b66d-6e68187ae285"
			],
			"illustration_id": "747e084f-c097-4879-928a-3626dd3f0e7f",
			"border_color": "black",
			"frame": "2015",
			"full_art": false,
			"textless": false,
			"booster": true,
			"story_spotlight": false,
			"preview": {
				"source": "Aether Hub",
				"source_uri": "https://twitter.com/AetherHubMedia/status/1214290230913773568",
				"previewed_at": "2020-01-06"
			},
			"prices": {
				"usd": "0.19",
				"usd_foil": null,
				"eur": "0.08",
				"tix": null
			},
			"related_uris": {
				"tcgplayer_decks": "https://decks.tcgplayer.com/magic/deck/search?contains=Fateful+End&page=1&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"edhrec": "https://edhrec.com/route/?cc=Fateful+End",
				"mtgtop8": "https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Fateful+End"
			},
			"purchase_uris": {
				"tcgplayer": "https://shop.tcgplayer.com/product/productsearch?id=206865&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"cardmarket": "https://www.cardmarket.com/en/Magic/Products/Singles/Theros-Beyond-Death/Fateful-End?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
				"cardhoarder": "https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=Fateful+End&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
			}
		},
		{
			"object": "card",
			"id": "f0c95dee-a480-4878-a967-9e46be9ee372",
			"oracle_id": "34f9a03e-ca95-4d3e-9e63-7297b5513481",
			"multiverse_ids": [],
			"tcgplayer_id": 207122,
			"name": "Final Flare",
			"lang": "en",
			"released_at": "2020-01-24",
			"uri": "https://api.scryfall.com/cards/f0c95dee-a480-4878-a967-9e46be9ee372",
			"scryfall_uri": "https://scryfall.com/card/thb/134/final-flare?utm_source=api",
			"layout": "normal",
			"highres_image": false,
			"image_uris": {
				"small": "https://img.scryfall.com/cards/small/front/f/0/f0c95dee-a480-4878-a967-9e46be9ee372.jpg?1578666010",
				"normal": "https://img.scryfall.com/cards/normal/front/f/0/f0c95dee-a480-4878-a967-9e46be9ee372.jpg?1578666010",
				"large": "https://img.scryfall.com/cards/large/front/f/0/f0c95dee-a480-4878-a967-9e46be9ee372.jpg?1578666010",
				"png": "https://img.scryfall.com/cards/png/front/f/0/f0c95dee-a480-4878-a967-9e46be9ee372.png?1578666010",
				"art_crop": "https://img.scryfall.com/cards/art_crop/front/f/0/f0c95dee-a480-4878-a967-9e46be9ee372.jpg?1578666010",
				"border_crop": "https://img.scryfall.com/cards/border_crop/front/f/0/f0c95dee-a480-4878-a967-9e46be9ee372.jpg?1578666010"
			},
			"mana_cost": "{2}{R}",
			"cmc": 3,
			"type_line": "Instant",
			"oracle_text": "As an additional cost to cast this spell, sacrifice a creature or enchantment.\nFinal Flare deals 5 damage to target creature.",
			"colors": [
				"R"
			],
			"color_identity": [
				"R"
			],
			"legalities": {
				"standard": "not_legal",
				"future": "legal",
				"historic": "not_legal",
				"pioneer": "not_legal",
				"modern": "not_legal",
				"legacy": "not_legal",
				"pauper": "not_legal",
				"vintage": "not_legal",
				"penny": "not_legal",
				"commander": "not_legal",
				"brawl": "not_legal",
				"duel": "not_legal",
				"oldschool": "not_legal"
			},
			"games": [],
			"reserved": false,
			"foil": true,
			"nonfoil": true,
			"oversized": false,
			"promo": false,
			"reprint": false,
			"variation": false,
			"set": "thb",
			"set_name": "Theros Beyond Death",
			"set_type": "expansion",
			"set_uri": "https://api.scryfall.com/sets/5f23a78d-cda1-462a-8be3-a62b40c34913",
			"set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Athb&unique=prints",
			"scryfall_set_uri": "https://scryfall.com/sets/thb?utm_source=api",
			"rulings_uri": "https://api.scryfall.com/cards/f0c95dee-a480-4878-a967-9e46be9ee372/rulings",
			"prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A34f9a03e-ca95-4d3e-9e63-7297b5513481&unique=prints",
			"collector_number": "134",
			"digital": false,
			"rarity": "common",
			"flavor_text": "Those who fought without honor in life are taken to Agonas and doomed to fight forever in its arenas.",
			"card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
			"artist": "Kev Walker",
			"artist_ids": [
				"f366a0ee-a0cd-466d-ba6a-90058c7a31a6"
			],
			"illustration_id": "58ec81f6-91ca-42eb-984d-1fa2b2aaade1",
			"border_color": "black",
			"frame": "2015",
			"full_art": false,
			"textless": false,
			"booster": true,
			"story_spotlight": false,
			"prices": {
				"usd": "0.09",
				"usd_foil": null,
				"eur": "0.02",
				"tix": null
			},
			"related_uris": {
				"tcgplayer_decks": "https://decks.tcgplayer.com/magic/deck/search?contains=Final+Flare&page=1&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"edhrec": "https://edhrec.com/route/?cc=Final+Flare",
				"mtgtop8": "https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Final+Flare"
			},
			"purchase_uris": {
				"tcgplayer": "https://shop.tcgplayer.com/product/productsearch?id=207122&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"cardmarket": "https://www.cardmarket.com/en/Magic/Products/Singles/Theros-Beyond-Death/Final-Flare?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
				"cardhoarder": "https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=Final+Flare&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
			}
		},
		{
			"object": "card",
			"id": "85a74392-4056-428c-a807-b062957e838e",
			"oracle_id": "d23119ca-73d1-4a48-a8d0-dab8919d891f",
			"multiverse_ids": [],
			"tcgplayer_id": 207129,
			"name": "Infuriate",
			"lang": "en",
			"released_at": "2020-01-24",
			"uri": "https://api.scryfall.com/cards/85a74392-4056-428c-a807-b062957e838e",
			"scryfall_uri": "https://scryfall.com/card/thb/141/infuriate?utm_source=api",
			"layout": "normal",
			"highres_image": false,
			"image_uris": {
				"small": "https://img.scryfall.com/cards/small/front/8/5/85a74392-4056-428c-a807-b062957e838e.jpg?1578666409",
				"normal": "https://img.scryfall.com/cards/normal/front/8/5/85a74392-4056-428c-a807-b062957e838e.jpg?1578666409",
				"large": "https://img.scryfall.com/cards/large/front/8/5/85a74392-4056-428c-a807-b062957e838e.jpg?1578666409",
				"png": "https://img.scryfall.com/cards/png/front/8/5/85a74392-4056-428c-a807-b062957e838e.png?1578666409",
				"art_crop": "https://img.scryfall.com/cards/art_crop/front/8/5/85a74392-4056-428c-a807-b062957e838e.jpg?1578666409",
				"border_crop": "https://img.scryfall.com/cards/border_crop/front/8/5/85a74392-4056-428c-a807-b062957e838e.jpg?1578666409"
			},
			"mana_cost": "{R}",
			"cmc": 1,
			"type_line": "Instant",
			"oracle_text": "Target creature gets +3/+2 until end of turn.",
			"colors": [
				"R"
			],
			"color_identity": [
				"R"
			],
			"legalities": {
				"standard": "legal",
				"future": "legal",
				"historic": "legal",
				"pioneer": "legal",
				"modern": "legal",
				"legacy": "legal",
				"pauper": "legal",
				"vintage": "legal",
				"penny": "legal",
				"commander": "legal",
				"brawl": "legal",
				"duel": "legal",
				"oldschool": "not_legal"
			},
			"games": [],
			"reserved": false,
			"foil": true,
			"nonfoil": true,
			"oversized": false,
			"promo": false,
			"reprint": true,
			"variation": false,
			"set": "thb",
			"set_name": "Theros Beyond Death",
			"set_type": "expansion",
			"set_uri": "https://api.scryfall.com/sets/5f23a78d-cda1-462a-8be3-a62b40c34913",
			"set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Athb&unique=prints",
			"scryfall_set_uri": "https://scryfall.com/sets/thb?utm_source=api",
			"rulings_uri": "https://api.scryfall.com/cards/85a74392-4056-428c-a807-b062957e838e/rulings",
			"prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3Ad23119ca-73d1-4a48-a8d0-dab8919d891f&unique=prints",
			"collector_number": "141",
			"digital": false,
			"rarity": "common",
			"flavor_text": "\"Renata launched a dozen arrows into the minotaur's thick hide, but the monster didn't slow its charge. The fury of Mogis was upon it.\"\n—Luphea of Setessa, *Histories*",
			"card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
			"artist": "Tomasz Jedruszek",
			"artist_ids": [
				"bba69285-2445-4a4b-a847-59397be972ea"
			],
			"illustration_id": "5fe22c56-54d7-4408-be1d-c3cec9383178",
			"border_color": "black",
			"frame": "2015",
			"full_art": false,
			"textless": false,
			"booster": true,
			"story_spotlight": false,
			"edhrec_rank": 7011,
			"prices": {
				"usd": "0.10",
				"usd_foil": null,
				"eur": "0.03",
				"tix": null
			},
			"related_uris": {
				"tcgplayer_decks": "https://decks.tcgplayer.com/magic/deck/search?contains=Infuriate&page=1&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"edhrec": "https://edhrec.com/route/?cc=Infuriate",
				"mtgtop8": "https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Infuriate"
			},
			"purchase_uris": {
				"tcgplayer": "https://shop.tcgplayer.com/product/productsearch?id=207129&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"cardmarket": "https://www.cardmarket.com/en/Magic/Products/Singles/Theros-Beyond-Death/Infuriate?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
				"cardhoarder": "https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=Infuriate&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
			}
		},
		{
			"object": "card",
			"id": "70388773-709b-4cd8-a8b7-56093fd77a1d",
			"oracle_id": "e11e2dc8-b28e-415d-9a5d-0eb46da8945c",
			"multiverse_ids": [],
			"tcgplayer_id": 206771,
			"name": "Omen of the Forge",
			"lang": "en",
			"released_at": "2020-01-24",
			"uri": "https://api.scryfall.com/cards/70388773-709b-4cd8-a8b7-56093fd77a1d",
			"scryfall_uri": "https://scryfall.com/card/thb/145/omen-of-the-forge?utm_source=api",
			"layout": "normal",
			"highres_image": false,
			"image_uris": {
				"small": "https://img.scryfall.com/cards/small/front/7/0/70388773-709b-4cd8-a8b7-56093fd77a1d.jpg?1578059236",
				"normal": "https://img.scryfall.com/cards/normal/front/7/0/70388773-709b-4cd8-a8b7-56093fd77a1d.jpg?1578059236",
				"large": "https://img.scryfall.com/cards/large/front/7/0/70388773-709b-4cd8-a8b7-56093fd77a1d.jpg?1578059236",
				"png": "https://img.scryfall.com/cards/png/front/7/0/70388773-709b-4cd8-a8b7-56093fd77a1d.png?1578059236",
				"art_crop": "https://img.scryfall.com/cards/art_crop/front/7/0/70388773-709b-4cd8-a8b7-56093fd77a1d.jpg?1578059236",
				"border_crop": "https://img.scryfall.com/cards/border_crop/front/7/0/70388773-709b-4cd8-a8b7-56093fd77a1d.jpg?1578059236"
			},
			"mana_cost": "{1}{R}",
			"cmc": 2,
			"type_line": "Enchantment",
			"oracle_text": "Flash\nWhen Omen of the Forge enters the battlefield, it deals 2 damage to any target.\n{2}{R}, Sacrifice Omen of the Forge: Scry 2.",
			"colors": [
				"R"
			],
			"color_identity": [
				"R"
			],
			"legalities": {
				"standard": "not_legal",
				"future": "legal",
				"historic": "not_legal",
				"pioneer": "not_legal",
				"modern": "not_legal",
				"legacy": "not_legal",
				"pauper": "not_legal",
				"vintage": "not_legal",
				"penny": "not_legal",
				"commander": "not_legal",
				"brawl": "not_legal",
				"duel": "not_legal",
				"oldschool": "not_legal"
			},
			"games": [],
			"reserved": false,
			"foil": true,
			"nonfoil": true,
			"oversized": false,
			"promo": false,
			"reprint": false,
			"variation": false,
			"set": "thb",
			"set_name": "Theros Beyond Death",
			"set_type": "expansion",
			"set_uri": "https://api.scryfall.com/sets/5f23a78d-cda1-462a-8be3-a62b40c34913",
			"set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Athb&unique=prints",
			"scryfall_set_uri": "https://scryfall.com/sets/thb?utm_source=api",
			"rulings_uri": "https://api.scryfall.com/cards/70388773-709b-4cd8-a8b7-56093fd77a1d/rulings",
			"prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3Ae11e2dc8-b28e-415d-9a5d-0eb46da8945c&unique=prints",
			"collector_number": "145",
			"digital": false,
			"rarity": "common",
			"flavor_text": "\"My time will come, when all of the world will be reforged in the fires of my invention.\"",
			"card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
			"artist": "Piotr Dura",
			"artist_ids": [
				"aff176e8-1d15-432e-ad1d-207a474decba"
			],
			"illustration_id": "31c2c366-fc74-44fd-a309-578104d0b356",
			"border_color": "black",
			"frame": "2015",
			"full_art": false,
			"textless": false,
			"booster": true,
			"story_spotlight": false,
			"preview": {
				"source": "Wizards of the Coast",
				"source_uri": "",
				"previewed_at": "2020-01-03"
			},
			"prices": {
				"usd": "0.17",
				"usd_foil": null,
				"eur": "0.06",
				"tix": null
			},
			"related_uris": {
				"tcgplayer_decks": "https://decks.tcgplayer.com/magic/deck/search?contains=Omen+of+the+Forge&page=1&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"edhrec": "https://edhrec.com/route/?cc=Omen+of+the+Forge",
				"mtgtop8": "https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Omen+of+the+Forge"
			},
			"purchase_uris": {
				"tcgplayer": "https://shop.tcgplayer.com/product/productsearch?id=206771&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"cardmarket": "https://www.cardmarket.com/en/Magic/Products/Singles/Theros-Beyond-Death/Omen-of-the-Forge?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
				"cardhoarder": "https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=Omen+of+the+Forge&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
			}
		},
		{
			"object": "card",
			"id": "2e807edb-838d-44fe-a37e-fb864d59beaa",
			"oracle_id": "1cb0610b-a731-42c2-b93f-0a29f63cebf4",
			"multiverse_ids": [],
			"tcgplayer_id": 207149,
			"name": "Thrill of Possibility",
			"lang": "en",
			"released_at": "2020-01-24",
			"uri": "https://api.scryfall.com/cards/2e807edb-838d-44fe-a37e-fb864d59beaa",
			"scryfall_uri": "https://scryfall.com/card/thb/159/thrill-of-possibility?utm_source=api",
			"layout": "normal",
			"highres_image": false,
			"image_uris": {
				"small": "https://img.scryfall.com/cards/small/front/2/e/2e807edb-838d-44fe-a37e-fb864d59beaa.jpg?1578667081",
				"normal": "https://img.scryfall.com/cards/normal/front/2/e/2e807edb-838d-44fe-a37e-fb864d59beaa.jpg?1578667081",
				"large": "https://img.scryfall.com/cards/large/front/2/e/2e807edb-838d-44fe-a37e-fb864d59beaa.jpg?1578667081",
				"png": "https://img.scryfall.com/cards/png/front/2/e/2e807edb-838d-44fe-a37e-fb864d59beaa.png?1578667081",
				"art_crop": "https://img.scryfall.com/cards/art_crop/front/2/e/2e807edb-838d-44fe-a37e-fb864d59beaa.jpg?1578667081",
				"border_crop": "https://img.scryfall.com/cards/border_crop/front/2/e/2e807edb-838d-44fe-a37e-fb864d59beaa.jpg?1578667081"
			},
			"mana_cost": "{1}{R}",
			"cmc": 2,
			"type_line": "Instant",
			"oracle_text": "As an additional cost to cast this spell, discard a card.\nDraw two cards.",
			"colors": [
				"R"
			],
			"color_identity": [
				"R"
			],
			"legalities": {
				"standard": "legal",
				"future": "legal",
				"historic": "legal",
				"pioneer": "legal",
				"modern": "legal",
				"legacy": "legal",
				"pauper": "legal",
				"vintage": "legal",
				"penny": "legal",
				"commander": "legal",
				"brawl": "legal",
				"duel": "legal",
				"oldschool": "not_legal"
			},
			"games": [],
			"reserved": false,
			"foil": true,
			"nonfoil": true,
			"oversized": false,
			"promo": false,
			"reprint": true,
			"variation": false,
			"set": "thb",
			"set_name": "Theros Beyond Death",
			"set_type": "expansion",
			"set_uri": "https://api.scryfall.com/sets/5f23a78d-cda1-462a-8be3-a62b40c34913",
			"set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Athb&unique=prints",
			"scryfall_set_uri": "https://scryfall.com/sets/thb?utm_source=api",
			"rulings_uri": "https://api.scryfall.com/cards/2e807edb-838d-44fe-a37e-fb864d59beaa/rulings",
			"prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A1cb0610b-a731-42c2-b93f-0a29f63cebf4&unique=prints",
			"collector_number": "159",
			"digital": false,
			"rarity": "common",
			"flavor_text": "\"Right now, in these first moments of creation, it is simultaneously nothing and everything.\"",
			"card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
			"artist": "Izzy",
			"artist_ids": [
				"2c3d2473-ff5d-4309-8194-e0b2def2ab65"
			],
			"illustration_id": "d4d53954-12c9-4015-b973-ebe30ed3fbef",
			"border_color": "black",
			"frame": "2015",
			"full_art": false,
			"textless": false,
			"booster": true,
			"story_spotlight": false,
			"edhrec_rank": 2691,
			"prices": {
				"usd": "0.14",
				"usd_foil": null,
				"eur": "0.07",
				"tix": null
			},
			"related_uris": {
				"tcgplayer_decks": "https://decks.tcgplayer.com/magic/deck/search?contains=Thrill+of+Possibility&page=1&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"edhrec": "https://edhrec.com/route/?cc=Thrill+of+Possibility",
				"mtgtop8": "https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Thrill+of+Possibility"
			},
			"purchase_uris": {
				"tcgplayer": "https://shop.tcgplayer.com/product/productsearch?id=207149&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"cardmarket": "https://www.cardmarket.com/en/Magic/Products/Singles/Theros-Beyond-Death/Thrill-of-Possibility?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
				"cardhoarder": "https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=Thrill+of+Possibility&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
			}
		},
		{
			"object": "card",
			"id": "75f5e144-4dd6-441f-b3e2-433aa82bdf7b",
			"oracle_id": "fe971240-268a-47d4-a14e-3d6352656091",
			"multiverse_ids": [],
			"tcgplayer_id": 207174,
			"name": "Gift of Strength",
			"lang": "en",
			"released_at": "2020-01-24",
			"uri": "https://api.scryfall.com/cards/75f5e144-4dd6-441f-b3e2-433aa82bdf7b",
			"scryfall_uri": "https://scryfall.com/card/thb/171/gift-of-strength?utm_source=api",
			"layout": "normal",
			"highres_image": false,
			"image_uris": {
				"small": "https://img.scryfall.com/cards/small/front/7/5/75f5e144-4dd6-441f-b3e2-433aa82bdf7b.jpg?1578670942",
				"normal": "https://img.scryfall.com/cards/normal/front/7/5/75f5e144-4dd6-441f-b3e2-433aa82bdf7b.jpg?1578670942",
				"large": "https://img.scryfall.com/cards/large/front/7/5/75f5e144-4dd6-441f-b3e2-433aa82bdf7b.jpg?1578670942",
				"png": "https://img.scryfall.com/cards/png/front/7/5/75f5e144-4dd6-441f-b3e2-433aa82bdf7b.png?1578670942",
				"art_crop": "https://img.scryfall.com/cards/art_crop/front/7/5/75f5e144-4dd6-441f-b3e2-433aa82bdf7b.jpg?1578670942",
				"border_crop": "https://img.scryfall.com/cards/border_crop/front/7/5/75f5e144-4dd6-441f-b3e2-433aa82bdf7b.jpg?1578670942"
			},
			"mana_cost": "{1}{G}",
			"cmc": 2,
			"type_line": "Instant",
			"oracle_text": "Target creature gets +3/+3 and gains reach until end of turn.",
			"colors": [
				"G"
			],
			"color_identity": [
				"G"
			],
			"legalities": {
				"standard": "legal",
				"future": "legal",
				"historic": "legal",
				"pioneer": "legal",
				"modern": "legal",
				"legacy": "legal",
				"pauper": "legal",
				"vintage": "legal",
				"penny": "legal",
				"commander": "legal",
				"brawl": "legal",
				"duel": "legal",
				"oldschool": "not_legal"
			},
			"games": [],
			"reserved": false,
			"foil": true,
			"nonfoil": true,
			"oversized": false,
			"promo": false,
			"reprint": true,
			"variation": false,
			"set": "thb",
			"set_name": "Theros Beyond Death",
			"set_type": "expansion",
			"set_uri": "https://api.scryfall.com/sets/5f23a78d-cda1-462a-8be3-a62b40c34913",
			"set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Athb&unique=prints",
			"scryfall_set_uri": "https://scryfall.com/sets/thb?utm_source=api",
			"rulings_uri": "https://api.scryfall.com/cards/75f5e144-4dd6-441f-b3e2-433aa82bdf7b/rulings",
			"prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3Afe971240-268a-47d4-a14e-3d6352656091&unique=prints",
			"collector_number": "171",
			"digital": false,
			"rarity": "common",
			"flavor_text": "The Nessian Wood is never without defenders.",
			"card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
			"artist": "Winona Nelson",
			"artist_ids": [
				"e45fe8d3-75d6-42c9-a2df-e945ad81ea27"
			],
			"illustration_id": "2f87b896-793f-4da2-8512-82f229726fab",
			"border_color": "black",
			"frame": "2015",
			"full_art": false,
			"textless": false,
			"booster": true,
			"story_spotlight": false,
			"edhrec_rank": 10577,
			"prices": {
				"usd": null,
				"usd_foil": null,
				"eur": null,
				"tix": null
			},
			"related_uris": {
				"tcgplayer_decks": "https://decks.tcgplayer.com/magic/deck/search?contains=Gift+of+Strength&page=1&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"edhrec": "https://edhrec.com/route/?cc=Gift+of+Strength",
				"mtgtop8": "https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Gift+of+Strength"
			},
			"purchase_uris": {
				"tcgplayer": "https://shop.tcgplayer.com/product/productsearch?id=207174&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"cardmarket": "https://www.cardmarket.com/en/Magic/Products/Singles/Theros-Beyond-Death/Gift-of-Strength?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
				"cardhoarder": "https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=Gift+of+Strength&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
			}
		},
		{
			"object": "card",
			"id": "b23c8b5a-2e18-4dd8-b236-5b1fd356f867",
			"oracle_id": "9ca539cd-9876-4c13-b220-d553c17f2378",
			"multiverse_ids": [],
			"tcgplayer_id": 206764,
			"name": "Inspire Awe",
			"lang": "en",
			"released_at": "2020-01-24",
			"uri": "https://api.scryfall.com/cards/b23c8b5a-2e18-4dd8-b236-5b1fd356f867",
			"scryfall_uri": "https://scryfall.com/card/thb/175/inspire-awe?utm_source=api",
			"layout": "normal",
			"highres_image": false,
			"image_uris": {
				"small": "https://img.scryfall.com/cards/small/front/b/2/b23c8b5a-2e18-4dd8-b236-5b1fd356f867.jpg?1577965649",
				"normal": "https://img.scryfall.com/cards/normal/front/b/2/b23c8b5a-2e18-4dd8-b236-5b1fd356f867.jpg?1577965649",
				"large": "https://img.scryfall.com/cards/large/front/b/2/b23c8b5a-2e18-4dd8-b236-5b1fd356f867.jpg?1577965649",
				"png": "https://img.scryfall.com/cards/png/front/b/2/b23c8b5a-2e18-4dd8-b236-5b1fd356f867.png?1577965649",
				"art_crop": "https://img.scryfall.com/cards/art_crop/front/b/2/b23c8b5a-2e18-4dd8-b236-5b1fd356f867.jpg?1577965649",
				"border_crop": "https://img.scryfall.com/cards/border_crop/front/b/2/b23c8b5a-2e18-4dd8-b236-5b1fd356f867.jpg?1577965649"
			},
			"mana_cost": "{3}{G}",
			"cmc": 4,
			"type_line": "Instant",
			"oracle_text": "Prevent all combat damage that would be dealt this turn except by enchanted creatures and enchantment creatures. Scry 2.",
			"colors": [
				"G"
			],
			"color_identity": [
				"G"
			],
			"legalities": {
				"standard": "not_legal",
				"future": "legal",
				"historic": "not_legal",
				"pioneer": "not_legal",
				"modern": "not_legal",
				"legacy": "not_legal",
				"pauper": "not_legal",
				"vintage": "not_legal",
				"penny": "not_legal",
				"commander": "not_legal",
				"brawl": "not_legal",
				"duel": "not_legal",
				"oldschool": "not_legal"
			},
			"games": [],
			"reserved": false,
			"foil": true,
			"nonfoil": true,
			"oversized": false,
			"promo": false,
			"reprint": false,
			"variation": false,
			"set": "thb",
			"set_name": "Theros Beyond Death",
			"set_type": "expansion",
			"set_uri": "https://api.scryfall.com/sets/5f23a78d-cda1-462a-8be3-a62b40c34913",
			"set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Athb&unique=prints",
			"scryfall_set_uri": "https://scryfall.com/sets/thb?utm_source=api",
			"rulings_uri": "https://api.scryfall.com/cards/b23c8b5a-2e18-4dd8-b236-5b1fd356f867/rulings",
			"prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A9ca539cd-9876-4c13-b220-d553c17f2378&unique=prints",
			"collector_number": "175",
			"digital": false,
			"rarity": "common",
			"flavor_text": "Nylea appeared amid the howl of a hundred beasts.",
			"card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
			"artist": "Ekaterina Burmak",
			"artist_ids": [
				"2a9f3780-fcc8-4ec5-b403-ee1d1370d3b4"
			],
			"illustration_id": "fdfaa5d6-0a3d-459b-ae73-90540022fb7a",
			"border_color": "black",
			"frame": "2015",
			"full_art": false,
			"textless": false,
			"booster": true,
			"story_spotlight": false,
			"preview": {
				"source": "Fazendo Nerdice",
				"source_uri": "https://www.youtube.com/watch?v=yEaLpFZldPs",
				"previewed_at": "2019-12-31"
			},
			"prices": {
				"usd": "0.12",
				"usd_foil": null,
				"eur": "0.05",
				"tix": null
			},
			"related_uris": {
				"tcgplayer_decks": "https://decks.tcgplayer.com/magic/deck/search?contains=Inspire+Awe&page=1&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"edhrec": "https://edhrec.com/route/?cc=Inspire+Awe",
				"mtgtop8": "https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Inspire+Awe"
			},
			"purchase_uris": {
				"tcgplayer": "https://shop.tcgplayer.com/product/productsearch?id=206764&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"cardmarket": "https://www.cardmarket.com/en/Magic/Products/Singles/Theros-Beyond-Death/Inspire-Awe?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
				"cardhoarder": "https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=Inspire+Awe&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
			}
		},
		{
			"object": "card",
			"id": "6797195a-508f-45b1-964d-da842dc46ca8",
			"oracle_id": "3f453aca-e14f-4460-9334-f0c3f4256a0e",
			"multiverse_ids": [],
			"tcgplayer_id": 207054,
			"name": "Mystic Repeal",
			"lang": "en",
			"released_at": "2020-01-24",
			"uri": "https://api.scryfall.com/cards/6797195a-508f-45b1-964d-da842dc46ca8",
			"scryfall_uri": "https://scryfall.com/card/thb/180/mystic-repeal?utm_source=api",
			"layout": "normal",
			"highres_image": false,
			"image_uris": {
				"small": "https://img.scryfall.com/cards/small/front/6/7/6797195a-508f-45b1-964d-da842dc46ca8.jpg?1578626489",
				"normal": "https://img.scryfall.com/cards/normal/front/6/7/6797195a-508f-45b1-964d-da842dc46ca8.jpg?1578626489",
				"large": "https://img.scryfall.com/cards/large/front/6/7/6797195a-508f-45b1-964d-da842dc46ca8.jpg?1578626489",
				"png": "https://img.scryfall.com/cards/png/front/6/7/6797195a-508f-45b1-964d-da842dc46ca8.png?1578626489",
				"art_crop": "https://img.scryfall.com/cards/art_crop/front/6/7/6797195a-508f-45b1-964d-da842dc46ca8.jpg?1578626489",
				"border_crop": "https://img.scryfall.com/cards/border_crop/front/6/7/6797195a-508f-45b1-964d-da842dc46ca8.jpg?1578626489"
			},
			"mana_cost": "{G}",
			"cmc": 1,
			"type_line": "Instant",
			"oracle_text": "Put target enchantment on the bottom of its owner's library.",
			"colors": [
				"G"
			],
			"color_identity": [
				"G"
			],
			"legalities": {
				"standard": "not_legal",
				"future": "legal",
				"historic": "not_legal",
				"pioneer": "not_legal",
				"modern": "not_legal",
				"legacy": "not_legal",
				"pauper": "not_legal",
				"vintage": "not_legal",
				"penny": "not_legal",
				"commander": "not_legal",
				"brawl": "not_legal",
				"duel": "not_legal",
				"oldschool": "not_legal"
			},
			"games": [],
			"reserved": false,
			"foil": true,
			"nonfoil": true,
			"oversized": false,
			"promo": false,
			"reprint": false,
			"variation": false,
			"set": "thb",
			"set_name": "Theros Beyond Death",
			"set_type": "expansion",
			"set_uri": "https://api.scryfall.com/sets/5f23a78d-cda1-462a-8be3-a62b40c34913",
			"set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Athb&unique=prints",
			"scryfall_set_uri": "https://scryfall.com/sets/thb?utm_source=api",
			"rulings_uri": "https://api.scryfall.com/cards/6797195a-508f-45b1-964d-da842dc46ca8/rulings",
			"prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A3f453aca-e14f-4460-9334-f0c3f4256a0e&unique=prints",
			"collector_number": "180",
			"digital": false,
			"rarity": "uncommon",
			"flavor_text": "\"No power is too great to be undone.\"\n—Karametra, god of harvests",
			"card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
			"artist": "Tyler Walpole",
			"artist_ids": [
				"70c4c8c7-61a8-44e7-8fb1-161b7f943e7e"
			],
			"illustration_id": "57711363-2dfd-444e-8f58-9c439fc9f733",
			"border_color": "black",
			"frame": "2015",
			"full_art": false,
			"textless": false,
			"booster": true,
			"story_spotlight": false,
			"preview": {
				"source": "Wizards of the Coast",
				"source_uri": "https://twitter.com/Magic_LATAM/status/1214994248426233862",
				"previewed_at": "2020-01-09"
			},
			"prices": {
				"usd": "0.29",
				"usd_foil": null,
				"eur": "0.22",
				"tix": null
			},
			"related_uris": {
				"tcgplayer_decks": "https://decks.tcgplayer.com/magic/deck/search?contains=Mystic+Repeal&page=1&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"edhrec": "https://edhrec.com/route/?cc=Mystic+Repeal",
				"mtgtop8": "https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Mystic+Repeal"
			},
			"purchase_uris": {
				"tcgplayer": "https://shop.tcgplayer.com/product/productsearch?id=207054&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"cardmarket": "https://www.cardmarket.com/en/Magic/Products/Singles/Theros-Beyond-Death/Mystic-Repeal?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
				"cardhoarder": "https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=Mystic+Repeal&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
			}
		},
		{
			"object": "card",
			"id": "7d4ebdea-78d4-4034-921b-735bdb11a716",
			"oracle_id": "53295b03-717d-481d-9d5c-212c5f30bbbf",
			"multiverse_ids": [],
			"tcgplayer_id": 207096,
			"name": "Omen of the Hunt",
			"lang": "en",
			"released_at": "2020-01-24",
			"uri": "https://api.scryfall.com/cards/7d4ebdea-78d4-4034-921b-735bdb11a716",
			"scryfall_uri": "https://scryfall.com/card/thb/192/omen-of-the-hunt?utm_source=api",
			"layout": "normal",
			"highres_image": false,
			"image_uris": {
				"small": "https://img.scryfall.com/cards/small/front/7/d/7d4ebdea-78d4-4034-921b-735bdb11a716.jpg?1578667717",
				"normal": "https://img.scryfall.com/cards/normal/front/7/d/7d4ebdea-78d4-4034-921b-735bdb11a716.jpg?1578667717",
				"large": "https://img.scryfall.com/cards/large/front/7/d/7d4ebdea-78d4-4034-921b-735bdb11a716.jpg?1578667717",
				"png": "https://img.scryfall.com/cards/png/front/7/d/7d4ebdea-78d4-4034-921b-735bdb11a716.png?1578667717",
				"art_crop": "https://img.scryfall.com/cards/art_crop/front/7/d/7d4ebdea-78d4-4034-921b-735bdb11a716.jpg?1578667717",
				"border_crop": "https://img.scryfall.com/cards/border_crop/front/7/d/7d4ebdea-78d4-4034-921b-735bdb11a716.jpg?1578667717"
			},
			"mana_cost": "{2}{G}",
			"cmc": 3,
			"type_line": "Enchantment",
			"oracle_text": "Flash\nWhen Omen of the Hunt enters the battlefield, you may search your library for a basic land card, put it onto the battlefield tapped, then shuffle your library.\n{2}{G}, Sacrifice Omen of the Hunt: Scry 2.",
			"colors": [
				"G"
			],
			"color_identity": [
				"G"
			],
			"legalities": {
				"standard": "not_legal",
				"future": "legal",
				"historic": "not_legal",
				"pioneer": "not_legal",
				"modern": "not_legal",
				"legacy": "not_legal",
				"pauper": "not_legal",
				"vintage": "not_legal",
				"penny": "not_legal",
				"commander": "not_legal",
				"brawl": "not_legal",
				"duel": "not_legal",
				"oldschool": "not_legal"
			},
			"games": [],
			"reserved": false,
			"foil": true,
			"nonfoil": true,
			"oversized": false,
			"promo": false,
			"reprint": false,
			"variation": false,
			"set": "thb",
			"set_name": "Theros Beyond Death",
			"set_type": "expansion",
			"set_uri": "https://api.scryfall.com/sets/5f23a78d-cda1-462a-8be3-a62b40c34913",
			"set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Athb&unique=prints",
			"scryfall_set_uri": "https://scryfall.com/sets/thb?utm_source=api",
			"rulings_uri": "https://api.scryfall.com/cards/7d4ebdea-78d4-4034-921b-735bdb11a716/rulings",
			"prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A53295b03-717d-481d-9d5c-212c5f30bbbf&unique=prints",
			"collector_number": "192",
			"digital": false,
			"rarity": "common",
			"flavor_text": "\"My time will come, when no road will divide the endless verdure of the trees.\"",
			"card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
			"artist": "Piotr Dura",
			"artist_ids": [
				"aff176e8-1d15-432e-ad1d-207a474decba"
			],
			"illustration_id": "7e85b79b-aa3c-46d9-9104-3f725e69ba56",
			"border_color": "black",
			"frame": "2015",
			"full_art": false,
			"textless": false,
			"booster": true,
			"story_spotlight": false,
			"prices": {
				"usd": "0.17",
				"usd_foil": null,
				"eur": "0.05",
				"tix": null
			},
			"related_uris": {
				"tcgplayer_decks": "https://decks.tcgplayer.com/magic/deck/search?contains=Omen+of+the+Hunt&page=1&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"edhrec": "https://edhrec.com/route/?cc=Omen+of+the+Hunt",
				"mtgtop8": "https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Omen+of+the+Hunt"
			},
			"purchase_uris": {
				"tcgplayer": "https://shop.tcgplayer.com/product/productsearch?id=207096&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"cardmarket": "https://www.cardmarket.com/en/Magic/Products/Singles/Theros-Beyond-Death/Omen-of-the-Hunt?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
				"cardhoarder": "https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=Omen+of+the+Hunt&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
			}
		},
		{
			"object": "card",
			"id": "a8b2f186-4e04-49cb-a206-257cfb7e9361",
			"oracle_id": "85bde6ac-3dd4-4946-8b57-24f57e3eae2b",
			"multiverse_ids": [],
			"tcgplayer_id": 207118,
			"name": "Plummet",
			"lang": "en",
			"released_at": "2020-01-24",
			"uri": "https://api.scryfall.com/cards/a8b2f186-4e04-49cb-a206-257cfb7e9361",
			"scryfall_uri": "https://scryfall.com/card/thb/194/plummet?utm_source=api",
			"layout": "normal",
			"highres_image": false,
			"image_uris": {
				"small": "https://img.scryfall.com/cards/small/front/a/8/a8b2f186-4e04-49cb-a206-257cfb7e9361.jpg?1578667933",
				"normal": "https://img.scryfall.com/cards/normal/front/a/8/a8b2f186-4e04-49cb-a206-257cfb7e9361.jpg?1578667933",
				"large": "https://img.scryfall.com/cards/large/front/a/8/a8b2f186-4e04-49cb-a206-257cfb7e9361.jpg?1578667933",
				"png": "https://img.scryfall.com/cards/png/front/a/8/a8b2f186-4e04-49cb-a206-257cfb7e9361.png?1578667933",
				"art_crop": "https://img.scryfall.com/cards/art_crop/front/a/8/a8b2f186-4e04-49cb-a206-257cfb7e9361.jpg?1578667933",
				"border_crop": "https://img.scryfall.com/cards/border_crop/front/a/8/a8b2f186-4e04-49cb-a206-257cfb7e9361.jpg?1578667933"
			},
			"mana_cost": "{1}{G}",
			"cmc": 2,
			"type_line": "Instant",
			"oracle_text": "Destroy target creature with flying.",
			"colors": [
				"G"
			],
			"color_identity": [
				"G"
			],
			"legalities": {
				"standard": "legal",
				"future": "legal",
				"historic": "legal",
				"pioneer": "legal",
				"modern": "legal",
				"legacy": "legal",
				"pauper": "legal",
				"vintage": "legal",
				"penny": "legal",
				"commander": "legal",
				"brawl": "legal",
				"duel": "legal",
				"oldschool": "not_legal"
			},
			"games": [],
			"reserved": false,
			"foil": true,
			"nonfoil": true,
			"oversized": false,
			"promo": false,
			"reprint": true,
			"variation": false,
			"set": "thb",
			"set_name": "Theros Beyond Death",
			"set_type": "expansion",
			"set_uri": "https://api.scryfall.com/sets/5f23a78d-cda1-462a-8be3-a62b40c34913",
			"set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Athb&unique=prints",
			"scryfall_set_uri": "https://scryfall.com/sets/thb?utm_source=api",
			"rulings_uri": "https://api.scryfall.com/cards/a8b2f186-4e04-49cb-a206-257cfb7e9361/rulings",
			"prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A85bde6ac-3dd4-4946-8b57-24f57e3eae2b&unique=prints",
			"collector_number": "194",
			"digital": false,
			"rarity": "common",
			"flavor_text": "An arrow from Nylea's bow never fails to find its mark.",
			"card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
			"artist": "Bayard Wu",
			"artist_ids": [
				"b089963c-610a-4d50-9206-d64b7caedef1"
			],
			"illustration_id": "73f5d88c-4415-4684-9ee4-119eaf1422e4",
			"border_color": "black",
			"frame": "2015",
			"full_art": false,
			"textless": false,
			"booster": true,
			"story_spotlight": false,
			"edhrec_rank": 6297,
			"prices": {
				"usd": "0.25",
				"usd_foil": null,
				"eur": null,
				"tix": null
			},
			"related_uris": {
				"tcgplayer_decks": "https://decks.tcgplayer.com/magic/deck/search?contains=Plummet&page=1&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"edhrec": "https://edhrec.com/route/?cc=Plummet",
				"mtgtop8": "https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Plummet"
			},
			"purchase_uris": {
				"tcgplayer": "https://shop.tcgplayer.com/product/productsearch?id=207118&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"cardmarket": "https://www.cardmarket.com/en/Magic/Products/Singles/Theros-Beyond-Death/Plummet?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
				"cardhoarder": "https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=Plummet&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
			}
		},
		{
			"object": "card",
			"id": "a4515a76-53f0-40a2-8b88-70b73447d1e6",
			"oracle_id": "777b8ec4-a783-4297-96b7-4f200d0eb734",
			"multiverse_ids": [],
			"tcgplayer_id": 207071,
			"name": "Return to Nature",
			"lang": "en",
			"released_at": "2020-01-24",
			"uri": "https://api.scryfall.com/cards/a4515a76-53f0-40a2-8b88-70b73447d1e6",
			"scryfall_uri": "https://scryfall.com/card/thb/197/return-to-nature?utm_source=api",
			"layout": "normal",
			"highres_image": false,
			"image_uris": {
				"small": "https://img.scryfall.com/cards/small/front/a/4/a4515a76-53f0-40a2-8b88-70b73447d1e6.jpg?1578610842",
				"normal": "https://img.scryfall.com/cards/normal/front/a/4/a4515a76-53f0-40a2-8b88-70b73447d1e6.jpg?1578610842",
				"large": "https://img.scryfall.com/cards/large/front/a/4/a4515a76-53f0-40a2-8b88-70b73447d1e6.jpg?1578610842",
				"png": "https://img.scryfall.com/cards/png/front/a/4/a4515a76-53f0-40a2-8b88-70b73447d1e6.png?1578610842",
				"art_crop": "https://img.scryfall.com/cards/art_crop/front/a/4/a4515a76-53f0-40a2-8b88-70b73447d1e6.jpg?1578610842",
				"border_crop": "https://img.scryfall.com/cards/border_crop/front/a/4/a4515a76-53f0-40a2-8b88-70b73447d1e6.jpg?1578610842"
			},
			"mana_cost": "{1}{G}",
			"cmc": 2,
			"type_line": "Instant",
			"oracle_text": "Choose one —\n• Destroy target artifact.\n• Destroy target enchantment.\n• Exile target card from a graveyard.",
			"colors": [
				"G"
			],
			"color_identity": [
				"G"
			],
			"legalities": {
				"standard": "legal",
				"future": "legal",
				"historic": "legal",
				"pioneer": "legal",
				"modern": "legal",
				"legacy": "legal",
				"pauper": "legal",
				"vintage": "legal",
				"penny": "legal",
				"commander": "legal",
				"brawl": "legal",
				"duel": "legal",
				"oldschool": "not_legal"
			},
			"games": [],
			"reserved": false,
			"foil": true,
			"nonfoil": true,
			"oversized": false,
			"promo": false,
			"reprint": true,
			"variation": false,
			"set": "thb",
			"set_name": "Theros Beyond Death",
			"set_type": "expansion",
			"set_uri": "https://api.scryfall.com/sets/5f23a78d-cda1-462a-8be3-a62b40c34913",
			"set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Athb&unique=prints",
			"scryfall_set_uri": "https://scryfall.com/sets/thb?utm_source=api",
			"rulings_uri": "https://api.scryfall.com/cards/a4515a76-53f0-40a2-8b88-70b73447d1e6/rulings",
			"prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A777b8ec4-a783-4297-96b7-4f200d0eb734&unique=prints",
			"collector_number": "197",
			"digital": false,
			"rarity": "common",
			"flavor_text": "\"Far-seeing Kruphix glimpsed the end: Heliod's spear cast down and broken.\"\n—*The Cosmogony*",
			"card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
			"artist": "Kieran Yanner",
			"artist_ids": [
				"aa7e89ed-d294-4633-9057-ce04dacfcfa4"
			],
			"illustration_id": "8012dc34-4476-48ad-b770-8045bd22bde5",
			"border_color": "black",
			"frame": "2015",
			"full_art": false,
			"textless": false,
			"booster": true,
			"story_spotlight": false,
			"edhrec_rank": 1339,
			"preview": {
				"source": "Face to Face Games",
				"source_uri": "https://twitter.com/FaceToFaceGames/status/1215323122674651145",
				"previewed_at": "2020-01-09"
			},
			"prices": {
				"usd": "0.14",
				"usd_foil": null,
				"eur": "0.04",
				"tix": null
			},
			"related_uris": {
				"tcgplayer_decks": "https://decks.tcgplayer.com/magic/deck/search?contains=Return+to+Nature&page=1&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"edhrec": "https://edhrec.com/route/?cc=Return+to+Nature",
				"mtgtop8": "https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Return+to+Nature"
			},
			"purchase_uris": {
				"tcgplayer": "https://shop.tcgplayer.com/product/productsearch?id=207071&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
				"cardmarket": "https://www.cardmarket.com/en/Magic/Products/Singles/Theros-Beyond-Death/Return-to-Nature?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
				"cardhoarder": "https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=Return+to+Nature&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
			}
		}
	]
};

/***/ }),

/***/ 142:
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">\n  <span>All instants and flash creatures in {{set.name}}</span>\n</div>\n<button *ngIf=\"displayImage === 'small'\" (click)=\"displayImage = 'big'\">Display bigger image</button>\n<button *ngIf=\"displayImage === 'big'\" (click)=\"displayImage = 'none'\">Do not display image</button>\n<button *ngIf=\"displayImage === 'none'\" (click)=\"displayImage = 'small'\">Display image</button>\n<table class=\"cards\">\n  <thead>\n    <tr>\n      <th>CCM</th>\n      <th *ngFor=\"let column of columns\" colspan=\"2\" class=\"column.className\">{{column.name}}</th>\n    </tr>\n  </thead>\n  <tbody>\n    <ng-template ngFor [ngForOf]=\"data\" let-d>\n      <tr>\n        <td [attr.rowspan]=\"d.max.length + 1\" class=\"cmc\">{{d.cmc}}</td>\n      </tr>\n      <tr *ngFor=\"let i of d.max;let l = last\" [class.border-top]=\"i === 0\" [class.last]=\"l\">\n        <ng-template ngFor let-column [ngForOf]=\"columns\">\n            <td class=\"cost\">\n              <span *ngIf=\"d.colors[column.name] && d.colors[column.name][i]\">\n                  <i *ngFor=\"let cost of d.colors[column.name][i].costs\" [ngClass]=\"cost\"></i>\n              </span>\n            </td>\n            <td class=\"name\" [class]=\"'name ' + column.className\">\n                <card [displayImage]=\"displayImage\" [card]=\"d.colors[column.name][i]\" *ngIf=\"d.colors[column.name] && d.colors[column.name][i]\" [class.card-on-left]=\"column.name === 'multi' || column.name === 'G'\" [class.card-on-top]=\"d.cmc >= 3\"></card>\n                <i *ngIf=\"d.colors[column.name] && d.colors[column.name][i] && d.colors[column.name][i].effect\">({{d.colors[column.name][i].effect}})</i>\n            </td>\n        </ng-template>\n    </ng-template>\n  </tbody>\n</table>\n<!-- <a [href]=\"dashboardLink\">Link to stats</a> -->"

/***/ }),

/***/ 143:
/***/ (function(module, exports) {

module.exports = "<div class=\"name\">\n    <div\n        class=\"rarity\"\n        [class.mythic]=\"card.rarity === 'mythic'\"\n        [class.rare]=\"card.rarity === 'rare'\"\n        [class.uncommon]=\"card.rarity === 'uncommon'\"\n        [class.common]=\"card.rarity === 'common'\"></div>\n    <div>\n        <div>{{card.name}}</div>\n        <div class=\"special\" *ngIf=\"isSpecial\">(Convoke)</div>\n    </div>\n</div>\n<img [src]=\"card.uri\" *ngIf=\"displayImage !== 'none'\" [class.small]=\"displayImage === 'small'\">"

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(73);


/***/ }),

/***/ 72:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 72;


/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(84);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var thb = __webpack_require__(139);
var AppComponent = (function () {
    function AppComponent() {
        // dashboardLink: string = "http://mtg-stats.purple-fox.fr/app/kibana#/dashboard/0f1b4b30-2204-11e7-a4a7-a3aa983ebfc9";
        this.data = [];
        this.columns = [
            { name: "W", className: "white" },
            { name: "U", className: "blue" },
            { name: "B", className: "black" },
            { name: "R", className: "red" },
            { name: "G", className: "green" },
            { name: "multi", className: "multicolore" },
            { name: "incolore", className: "multicolore" }
        ];
        this.thb = thb;
        this.displayImage = 'small';
        this.changeSet(this.thb);
    }
    AppComponent.prototype.changeSet = function (set) {
        var _this = this;
        var costRegexp = new RegExp(/\{([G, W, B, U, R, \d, X, \/]+)\}/g);
        this.data = [];
        this.set = set;
        var cards = set.cards.map(function (c) {
            var costs = [];
            var cost = costRegexp.exec(c.mana_cost);
            while (cost !== null) {
                var className = "ms-" + cost[1].split('/').join('').toLowerCase();
                costs.push(className + " ms ms-cost");
                cost = costRegexp.exec(c.mana_cost);
            }
            return {
                name: c.name,
                cmc: c.cmc,
                mana_cost: c.mana_cost,
                colors: c.colors,
                costs: costs,
                rarity: c.rarity,
                uri: c.image_uris.normal,
                oracle_text: c.oracle_text
            };
        });
        var costs = __WEBPACK_IMPORTED_MODULE_1_lodash__["groupBy"](cards, "cmc");
        Object.keys(costs).forEach(function (cmc) {
            _this.data.push({
                cmc: cmc,
                colors: __WEBPACK_IMPORTED_MODULE_1_lodash__["groupBy"](costs[cmc], function (card) {
                    if (card.colors.length > 1) {
                        return "multi";
                    }
                    else if (card.colors.length === 0) {
                        return "incolore";
                    }
                    else {
                        return card.colors[0];
                    }
                })
            });
        });
        this.data.forEach(function (d) {
            var lengths = _this.columns.map(function (c) {
                return (d.colors[c.name] || []).length;
            });
            d.max = __WEBPACK_IMPORTED_MODULE_1_lodash__["range"](Math.max.apply(Math, lengths));
        });
        // Erase empty columns
        this.columns = this.columns.filter(function (c) {
            return _this.data.filter(function (d) { return d.colors[c.name] !== undefined; }).length > 0;
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(142),
        styles: [__webpack_require__(137)]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__card_card_component__ = __webpack_require__(82);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__card_card_component__["a" /* CardComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interface__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__interface__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardComponent = (function () {
    function CardComponent() {
    }
    Object.defineProperty(CardComponent.prototype, "isSpecial", {
        get: function () {
            if (!this.card || !this.card.oracle_text) {
                return false;
            }
            return this.card.oracle_text.includes('Convoke');
        },
        enumerable: true,
        configurable: true
    });
    return CardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__interface__["Card"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__interface__["Card"]) === "function" && _a || Object)
], CardComponent.prototype, "card", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", String)
], CardComponent.prototype, "displayImage", void 0);
CardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: "card",
        template: __webpack_require__(143),
        styles: [__webpack_require__(138)]
    })
], CardComponent);

var _a;
//# sourceMappingURL=card.component.js.map

/***/ }),

/***/ 83:
/***/ (function(module, exports) {

//# sourceMappingURL=interface.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[174]);
//# sourceMappingURL=main.bundle.js.map