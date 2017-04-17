webpackJsonp([1,4],{

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(44)();
// imports


// module
exports.push([module.i, ".cards {\n    background: grey;\n}\n.white {\n    color: white;\n}\n.blue {\n    color: blue;\n}\n.black {\n    color: black;\n}\n.red {\n    color: red;\n}\n.green {\n    color: green;\n}\n.multi {\n    color: orange;\n}\n.border-top {\n    border-top: 1px solid black;\n}\n\ntd {\n    padding: 5px;\n}\n\ntr.last > td {\n    padding-bottom: 10px;\n    border-bottom: 1px solid black;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 137:
/***/ (function(module, exports) {

module.exports = "<a [href]=\"dashboardLink\">Link to stats</a>\n<table class=\"cards\">\n  <thead>\n    <tr>\n      <th>CCM</th>\n      <th class=\"white\">White</th>\n      <th class=\"blue\">Blue</th>\n      <th class=\"black\">Black</th>\n      <th class=\"red\">Red</th>\n      <th class=\"green\">Green</th>\n      <th class=\"multi\">Multi</th>\n    </tr>\n  </thead>\n  <tbody>\n    <ng-template ngFor [ngForOf]=\"data\" let-d>\n      <tr>\n        <td [attr.rowspan]=\"d.max.length + 1\" class=\"cmc\">{{d.cmc}}</td>\n      </tr>\n      <tr *ngFor=\"let i of d.max;let l = last\" [class.border-top]=\"i === 0\" [class.last]=\"l\">\n        <td class=\"white\">\n          <div *ngIf=\"d.colors.White && d.colors.White[i]\">\n            <span class=\"name\">{{d.colors.White[i].name}}</span>\n            <span class=\"cost\">{{d.colors.White[i].manaCost}}</span>\n          </div>\n        </td>\n        <td class=\"blue\">\n          <div *ngIf=\"d.colors.Blue && d.colors.Blue[i]\">\n            <span class=\"name\">{{d.colors.Blue[i].name}}</span>\n            <span class=\"cost\">{{d.colors.Blue[i].manaCost}}</span>\n          </div>\n        </td>\n        <td class=\"black\">\n          <div *ngIf=\"d.colors.Black && d.colors.Black[i]\">\n            <span class=\"name\">{{d.colors.Black[i].name}}</span>\n            <span class=\"cost\">{{d.colors.Black[i].manaCost}}</span>\n          </div>\n        </td>\n        <td class=\"red\">\n          <div *ngIf=\"d.colors.Red && d.colors.Red[i]\">\n            <span class=\"name\">{{d.colors.Red[i].name}}</span>\n            <span class=\"cost\">{{d.colors.Red[i].manaCost}}</span>\n          </div>\n        </td>\n        <td class=\"green\">\n          <div *ngIf=\"d.colors.Green && d.colors.Green[i]\">\n            <span class=\"name\">{{d.colors.Green[i].name}}</span>\n            <span class=\"cost\">{{d.colors.Green[i].manaCost}}</span>\n          </div>\n        </td>\n        <td class=\"multi\">\n          <div *ngIf=\"d.colors.Multicolore && d.colors.Multicolore[i]\">\n            <span class=\"name\">{{d.colors.Multicolore[i].name}}</span>\n            <span class=\"cost\">{{d.colors.Multicolore[i].manaCost}}</span>\n          </div>\n        </td>\n      </tr>\n    </ng-template>\n  </tbody>\n</table>\n"

/***/ }),

/***/ 163:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(80);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_AKH_tricks__ = __webpack_require__(79);
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
        var _this = this;
        this.dashboardLink = "http://mtg-stats.purple-fox.fr/app/kibana#/dashboard/0f1b4b30-2204-11e7-a4a7-a3aa983ebfc9";
        this.data = [];
        var costs = __WEBPACK_IMPORTED_MODULE_1_lodash__["groupBy"](__WEBPACK_IMPORTED_MODULE_2__data_AKH_tricks__["a" /* tricks */], "cmc");
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
        console.log("data", this.data);
        this.data.forEach(function (d) {
            d.max = __WEBPACK_IMPORTED_MODULE_1_lodash__["range"](Math.max((d.colors.White || []).length, (d.colors.Black || []).length, (d.colors.Green || []).length, (d.colors.Blue || []).length, (d.colors.Multicolore || []).length, (d.colors.Red || []).length));
        });
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(137),
        styles: [__webpack_require__(134)]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(77);
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
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tricks; });
var tricks = [
    {
        "manaCost": "{2}{W}",
        "cmc": 3,
        "name": "Aven Mindcensor",
        "colors": "White"
    },
    {
        "manaCost": "{2}{G}",
        "cmc": 3,
        "name": "Pouncing Cheetah",
        "colors": "Green"
    },
    {
        "manaCost": "{3}{R}{G}",
        "cmc": 5,
        "name": "Samut, Voice of Dissent",
        "colors": "Red, Green"
    },
    {
        "manaCost": "{2}{W}",
        "cmc": 3,
        "name": "Vizier of Deferment",
        "colors": "White"
    },
    {
        "manaCost": "{3}{W}",
        "cmc": 4,
        "name": "Cast Out",
        "colors": "White"
    },
    {
        "manaCost": "{1}{U}{U}",
        "cmc": 3,
        "name": "Cancel",
        "colors": "Blue"
    },
    {
        "manaCost": "{1}{R}",
        "cmc": 2,
        "name": "Fling",
        "colors": "Red"
    },
    {
        "manaCost": "{3}{R}",
        "cmc": 4,
        "name": "Pursue Glory",
        "colors": "Red"
    },
    {
        "manaCost": "{2}{B}",
        "cmc": 3,
        "name": "Splendid Agony",
        "colors": "Black"
    },
    {
        "manaCost": "{2}{W}",
        "cmc": 3,
        "name": "Start / Finish",
        "colors": "White"
    },
    {
        "manaCost": "{W}",
        "cmc": 1,
        "name": "Time to Reflect",
        "colors": "White"
    },
    {
        "manaCost": "{1}{B}",
        "cmc": 2,
        "name": "Destined / Lead",
        "colors": "Black"
    },
    {
        "manaCost": "{1}{G}",
        "cmc": 2,
        "name": "Dissenter's Deliverance",
        "colors": "Green"
    },
    {
        "manaCost": "{3}{R}",
        "cmc": 4,
        "name": "Electrify",
        "colors": "Red"
    },
    {
        "manaCost": "{4}{B}",
        "cmc": 5,
        "name": "Final Reward",
        "colors": "Black"
    },
    {
        "manaCost": "{2}{U}",
        "cmc": 3,
        "name": "Galestrike",
        "colors": "Blue"
    },
    {
        "manaCost": "{3}{U}",
        "cmc": 4,
        "name": "Hieroglyphic Illumination",
        "colors": "Blue"
    },
    {
        "manaCost": "{R}",
        "cmc": 1,
        "name": "Magma Spray",
        "colors": "Red"
    },
    {
        "manaCost": "{1}{W}",
        "cmc": 2,
        "name": "Mighty Leap",
        "colors": "White"
    },
    {
        "manaCost": "{1}{W}",
        "cmc": 2,
        "name": "Prepare / Fight",
        "colors": "White"
    },
    {
        "manaCost": "{G}",
        "cmc": 1,
        "name": "Stinging Shot",
        "colors": "Green"
    },
    {
        "manaCost": "{1}{R}",
        "cmc": 2,
        "name": "Brute Strength",
        "colors": "Red"
    },
    {
        "manaCost": "{1}{U}",
        "cmc": 2,
        "name": "Censor",
        "colors": "Blue"
    },
    {
        "manaCost": "{1}{U}",
        "cmc": 2,
        "name": "Winds of Rebuke",
        "colors": "Blue"
    },
    {
        "manaCost": "{3}{U}",
        "cmc": 4,
        "name": "Decision Paralysis",
        "colors": "Blue"
    },
    {
        "manaCost": "{2}{R}",
        "cmc": 3,
        "name": "Glorious End",
        "colors": "Red"
    },
    {
        "manaCost": "{1}{G}",
        "cmc": 2,
        "name": "Haze of Pollen",
        "colors": "Green"
    },
    {
        "manaCost": "{2}{U}",
        "cmc": 3,
        "name": "Reduce / Rubble",
        "colors": "Blue"
    },
    {
        "manaCost": "{2}{W}",
        "cmc": 3,
        "name": "Renewed Faith",
        "colors": "White"
    },
    {
        "manaCost": "{1}{U}",
        "cmc": 2,
        "name": "Failure / Comply",
        "colors": "Blue"
    },
    {
        "manaCost": "{2}{W}",
        "cmc": 3,
        "name": "Forsake the Worldly",
        "colors": "White"
    },
    {
        "manaCost": "{X}{G}",
        "cmc": 1,
        "name": "Heaven / Earth",
        "colors": "Green"
    },
    {
        "manaCost": "{1}{W}",
        "cmc": 2,
        "name": "Impeccable Timing",
        "colors": "White"
    },
    {
        "manaCost": "{2}{R}",
        "cmc": 3,
        "name": "Onward / Victory",
        "colors": "Red"
    },
    {
        "manaCost": "{B}",
        "cmc": 1,
        "name": "Scarab Feast",
        "colors": "Black"
    },
    {
        "manaCost": "{4}{R}",
        "cmc": 5,
        "name": "Deem Worthy",
        "colors": "Red"
    },
    {
        "manaCost": "{W}",
        "cmc": 1,
        "name": "Djeru's Resolve",
        "colors": "White"
    },
    {
        "manaCost": "{1}{U}",
        "cmc": 2,
        "name": "Essence Scatter",
        "colors": "Blue"
    },
    {
        "manaCost": "{G}",
        "cmc": 1,
        "name": "Hapatra's Mark",
        "colors": "Green"
    },
    {
        "manaCost": "{1}{W}",
        "cmc": 2,
        "name": "In Oketra's Name",
        "colors": "White"
    },
    {
        "manaCost": "{X}{U}{U}",
        "cmc": 2,
        "name": "Pull from Tomorrow",
        "colors": "Blue"
    },
    {
        "manaCost": "{1}{B}",
        "cmc": 2,
        "name": "Shadow of the Grave",
        "colors": "Black"
    },
    {
        "manaCost": "{G}",
        "cmc": 1,
        "name": "Shed Weakness",
        "colors": "Green"
    },
    {
        "manaCost": "{2}{G}",
        "cmc": 3,
        "name": "Spidery Grasp",
        "colors": "Green"
    },
    {
        "manaCost": "{B}",
        "cmc": 1,
        "name": "Supernatural Stamina",
        "colors": "Black"
    },
    {
        "manaCost": "{2}{G}",
        "cmc": 3,
        "name": "Synchronized Strike",
        "colors": "Green"
    },
    {
        "manaCost": "{3}{U}",
        "cmc": 4,
        "name": "Commit / Memory",
        "colors": "Blue"
    }
];
//# sourceMappingURL=AKH-tricks.js.map

/***/ }),

/***/ 80:
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

},[163]);
//# sourceMappingURL=main.bundle.js.map