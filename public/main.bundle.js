webpackJsonp([1,4],{

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, ".cards {\n    background: white;\n}\n.white {\n    color: black;\n}\n.blue {\n    color: black;\n}\n.black {\n    color: black;\n}\n.red {\n    color: black;\n}\n.green {\n    color: black;\n}\n.multi {\n    color: black;\n}\n.border-top {\n    border-top: 1px solid black;\n}\n\ntd.name {\n    padding-left: 0;\n    padding-right: 5px;\n    padding-top: 2px;\n    padding-bottom: 2px;\n}\n\ntd.cost {\n    padding-right: 10;\n    text-align: right;\n}\n\ntr.last > td {\n    padding-bottom: 10px;\n    border-bottom: 1px solid black;\n}\n\na {\n    margin-top: 10px;\n    float: right;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, ":host {\n    position: relative;\n    cursor: pointer;\n}\n\n:host > img {\n    display: none;\n}\n\n:host:hover > img {\n  display: block;\n  position: absolute;\n  z-index: 10;\n}\n\n.name {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n\n.rarity {\n    border-radius: 10px;\n    width: 10px;\n    height: 10px;\n    margin-right: 2px;\n}\n.uncommon {\n    background-color: grey;\n}\n.common {\n    background-color: black;\n}\n.rare {\n    background-color: yellow;\n}\n.mythic {\n    background-color: orangered;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 141:
/***/ (function(module, exports) {

module.exports = "<h1>All instants, flash creatures and cycling with effects in {{extension}}</h1>\n<button (click)=\"changeExtension('AKH&HOU')\">View AKH&HOU</button>\n<button (click)=\"changeExtension('HOU')\">View HOU</button>\n<button (click)=\"changeExtension('AKH')\">View AKH</button>\n<table class=\"cards\">\n  <thead>\n    <tr>\n      <th>CCM</th>\n      <th colspan=\"2\" class=\"white\">White</th>\n      <th colspan=\"2\" class=\"blue\">Blue</th>\n      <th colspan=\"2\" class=\"black\">Black</th>\n      <th colspan=\"2\" class=\"red\">Red</th>\n      <th colspan=\"2\" class=\"green\">Green</th>\n      <th colspan=\"2\" class=\"multi\">Multi</th>\n    </tr>\n  </thead>\n  <tbody>\n    <ng-template ngFor [ngForOf]=\"data\" let-d>\n      <tr>\n        <td [attr.rowspan]=\"d.max.length + 1\" class=\"cmc\">{{d.cmc}}</td>\n      </tr>\n      <tr *ngFor=\"let i of d.max;let l = last\" [class.border-top]=\"i === 0\" [class.last]=\"l\">\n        <ng-template ngFor let-column [ngForOf]=\"columns\">\n            <td class=\"cost\">\n              <span *ngIf=\"d.colors[column.name] && d.colors[column.name][i]\">\n                  <i *ngFor=\"let cost of d.colors[column.name][i].costs\" [ngClass]=\"cost\"></i>\n              </span>\n            </td>\n            <td class=\"name\" [class]=\"'name ' + column.className\">\n                <card [card]=\"d.colors[column.name][i]\" *ngIf=\"d.colors[column.name] && d.colors[column.name][i]\"></card>\n                <i *ngIf=\"d.colors[column.name] && d.colors[column.name][i] && d.colors[column.name].effect\">({{d.colors[column.name][i].effect}})</i>\n            </td>\n        </ng-template>\n    </ng-template>\n  </tbody>\n</table>\n<a [href]=\"dashboardLink\">Link to stats</a>"

/***/ }),

/***/ 142:
/***/ (function(module, exports) {

module.exports = "<div class=\"name\">\n    <div \n        class=\"rarity\"\n        [class.mythic]=\"card.rarity === 'Mythic'\"\n        [class.rare]=\"card.rarity === 'Rare'\"\n        [class.uncommon]=\"card.rarity === 'Uncommon'\"\n        [class.common]=\"card.rarity === 'Common'\"></div>\n    <div>{{card.name}}</div>\n</div>\n<img [src]=\"'assets/img/' + card.extension + '/' + card.name.replace(' / ', '') + '.full.jpg'\">"

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(70);


/***/ }),

/***/ 69:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 69;


/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(83);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_AKH_tricks__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_HOU_tricks__ = __webpack_require__(82);
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




var AppComponent = (function () {
    function AppComponent() {
        this.dashboardLink = "http://mtg-stats.purple-fox.fr/app/kibana#/dashboard/0f1b4b30-2204-11e7-a4a7-a3aa983ebfc9";
        this.data = [];
        this.columns = [
            { name: "White", className: "white" },
            { name: "Blue", className: "blue" },
            { name: "Black", className: "black" },
            { name: "Red", className: "red" },
            { name: "Green", className: "green" },
            { name: "Multicolore", className: "multicolore" },
        ];
        this.changeExtension("AKH&HOU");
    }
    AppComponent.prototype.changeExtension = function (extension) {
        var _this = this;
        var costRegexp = new RegExp(/\{(.)\}/g);
        var tricks;
        this.data = [];
        this.extension = extension;
        if (extension === "AKH") {
            tricks = __WEBPACK_IMPORTED_MODULE_2__data_AKH_tricks__["a" /* tricks */].map(function (c) { return Object.assign({}, c, { extension: "AKH" }); });
        }
        else if (extension === "HOU") {
            tricks = __WEBPACK_IMPORTED_MODULE_3__data_HOU_tricks__["a" /* tricks */].map(function (c) { return Object.assign({}, c, { extension: "HOU" }); });
        }
        else {
            tricks = __WEBPACK_IMPORTED_MODULE_2__data_AKH_tricks__["a" /* tricks */].map(function (c) { return Object.assign({}, c, { extension: "AKH" }); }).concat(__WEBPACK_IMPORTED_MODULE_3__data_HOU_tricks__["a" /* tricks */].map(function (c) { return Object.assign({}, c, { extension: "HOU" }); }));
        }
        var cards = tricks.map(function (c) {
            var costs = [];
            var cost = costRegexp.exec(c.manaCost);
            while (cost !== null) {
                costs.push("ms-" + cost[1].toLowerCase() + " ms ms-cost");
                cost = costRegexp.exec(c.manaCost);
            }
            return {
                name: c.name,
                cmc: c.cmc,
                manaCost: c.manaCost,
                colors: c.colors,
                effect: c.effect,
                costs: costs,
                rarity: c.rarity,
                extension: c.extension
            };
        });
        var costs = __WEBPACK_IMPORTED_MODULE_1_lodash__["groupBy"](cards, "cmc");
        Object.keys(costs).forEach(function (cmc) {
            _this.data.push({
                cmc: cmc,
                colors: __WEBPACK_IMPORTED_MODULE_1_lodash__["groupBy"](costs[cmc], function (card) {
                    var colors = card.colors.split(",");
                    if (colors.length > 1)
                        return "Multicolore";
                    else
                        return card.colors;
                })
            });
        });
        this.data.forEach(function (d) {
            d.max = __WEBPACK_IMPORTED_MODULE_1_lodash__["range"](Math.max((d.colors.White || []).length, (d.colors.Black || []).length, (d.colors.Green || []).length, (d.colors.Blue || []).length, (d.colors.Multicolore || []).length, (d.colors.Red || []).length));
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(141),
        styles: [__webpack_require__(137)]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__card_card_component__ = __webpack_require__(80);
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

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Card; });
var Card = (function () {
    function Card() {
    }
    return Card;
}());

//# sourceMappingURL=card.model.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__card_model__ = __webpack_require__(79);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ECard = (function (_super) {
    __extends(ECard, _super);
    function ECard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ECard;
}(__WEBPACK_IMPORTED_MODULE_1__card_model__["a" /* Card */]));
var CardComponent = (function () {
    function CardComponent() {
    }
    return CardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", ECard)
], CardComponent.prototype, "card", void 0);
CardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: "card",
        template: __webpack_require__(142),
        styles: [__webpack_require__(138)]
    })
], CardComponent);

//# sourceMappingURL=card.component.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tricks; });
var tricks = [
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
];
//# sourceMappingURL=AKH-tricks.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tricks; });
var tricks = [
    {
        "manaCost": "{3}{U}",
        "cmc": 4,
        "rarity": "Common",
        "colors": "Blue",
        "name": "Aven Reedstalker"
    },
    {
        "manaCost": "{2}{U}",
        "cmc": 3,
        "rarity": "Rare",
        "colors": "Blue",
        "name": "Nimble Obstructionist"
    },
    {
        "manaCost": "{2}{U}",
        "cmc": 3,
        "rarity": "Rare",
        "colors": "Blue",
        "name": "Nimble Obstructionist",
        effect: "Cycle"
    },
    {
        "manaCost": "{1}{W}",
        "cmc": 2,
        "rarity": "Uncommon",
        "colors": "White",
        "name": "Saving Grace"
    },
    {
        "manaCost": "{1}{W}",
        "cmc": 2,
        "rarity": "Common",
        "colors": "White",
        "name": "Act of Heroism"
    },
    {
        "manaCost": "{W}",
        "cmc": 1,
        "rarity": "Uncommon",
        "colors": "White",
        "name": "Gideon's Defeat"
    },
    {
        "manaCost": "{2}{U}",
        "cmc": 3,
        "rarity": "Common",
        "colors": "Blue",
        "name": "Tragic Lesson"
    },
    {
        "manaCost": "{2}{B}{B}",
        "cmc": 4,
        "rarity": "Common",
        "colors": "Black",
        "name": "Torment of Venom"
    },
    {
        "manaCost": "{R}",
        "cmc": 1,
        "rarity": "Uncommon",
        "colors": "Red",
        "name": "Chandra's Defeat"
    },
    {
        "manaCost": "{2}{W}",
        "cmc": 3,
        "rarity": "Common",
        "colors": "White",
        "name": "Sandblast"
    },
    {
        "manaCost": "{2}{U}",
        "cmc": 3,
        "rarity": "Common",
        "colors": "Blue",
        "name": "Countervailing Winds"
    },
    {
        "manaCost": "{1}{U}",
        "cmc": 2,
        "rarity": "Uncommon",
        "colors": "Blue",
        "name": "Jace's Defeat"
    },
    {
        "manaCost": "{2}{U}",
        "cmc": 3,
        "rarity": "Uncommon",
        "colors": "Blue",
        "name": "Supreme Will"
    },
    {
        "manaCost": "{U}",
        "cmc": 1,
        "rarity": "Common",
        "colors": "Blue",
        "name": "Unsummon"
    },
    {
        "manaCost": "{3}{B}",
        "cmc": 4,
        "rarity": "Rare",
        "colors": "Black",
        "name": "Hour of Glory"
    },
    {
        "manaCost": "{R}",
        "cmc": 1,
        "rarity": "Common",
        "colors": "Red",
        "name": "Kindled Fury"
    },
    {
        "manaCost": "{1}{U}",
        "cmc": 2,
        "rarity": "Uncommon",
        "colors": "Blue",
        "name": "Consign"
    },
    {
        "manaCost": "{1}{B}",
        "cmc": 2,
        "rarity": "Common",
        "colors": "Black",
        "name": "Without Weakness"
    },
    {
        "manaCost": "{1}{R}",
        "cmc": 2,
        "rarity": "Common",
        "colors": "Red",
        "name": "Blur of Blades"
    },
    {
        "manaCost": "{2}{R}",
        "cmc": 3,
        "rarity": "Common",
        "colors": "Red",
        "name": "Open Fire"
    },
    {
        "manaCost": "{1}{G}",
        "cmc": 2,
        "rarity": "Common",
        "colors": "Green",
        "name": "Gift of Strength"
    },
    {
        "manaCost": "{G}",
        "cmc": 1,
        "rarity": "Common",
        "colors": "Green",
        "name": "Life Goes On"
    },
    {
        "manaCost": "{2}{W}",
        "cmc": 3,
        "rarity": "Uncommon",
        "colors": "White",
        "name": "Farm"
    },
    {
        "manaCost": "{1}{W}",
        "cmc": 2,
        "rarity": "Rare",
        "colors": "White",
        "name": "Leave"
    },
    {
        "manaCost": "{3}{R}",
        "cmc": 4,
        "rarity": "Rare",
        "colors": "Red",
        "name": "Refuse"
    },
    {
        "manaCost": "{2}{U}",
        "cmc": 3,
        "rarity": "Rare",
        "colors": "Blue",
        "name": "Cooperate",
        effect: "Aftermath"
    },
    {
        "manaCost": "{1}{R}",
        "cmc": 2,
        "rarity": "Uncommon",
        "colors": "Red",
        "name": "Abrade"
    },
    {
        "manaCost": "{1}{W}",
        "cmc": 2,
        "rarity": "Common",
        "colors": "White",
        "name": "Djeru's Renunciation"
    },
    {
        "manaCost": "{2}{U}{U}",
        "cmc": 4,
        "rarity": "Uncommon",
        "colors": "Blue",
        "name": "Imaginary Threats"
    },
    {
        "manaCost": "{2}{G}",
        "cmc": 3,
        "rarity": "Common",
        "colors": "Green",
        "name": "Ambuscade"
    },
    {
        "manaCost": "{2}{R}",
        "cmc": 3,
        "rarity": "Uncommon",
        "colors": "Red",
        "name": "Struggle"
    }
];
//# sourceMappingURL=HOU-tricks.js.map

/***/ }),

/***/ 83:
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

},[168]);
//# sourceMappingURL=main.bundle.js.map