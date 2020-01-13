import { Component } from '@angular/core';
import * as _ from "lodash";
import { Card, Set } from "./interface";

declare const require: any;
const thb = require("./tricks/thb.json");

interface Column {
  name: string;
  className: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // dashboardLink: string = "http://mtg-stats.purple-fox.fr/app/kibana#/dashboard/0f1b4b30-2204-11e7-a4a7-a3aa983ebfc9";

  data: any[] = [];
  columns: Column[] = [
    { name: "W", className: "white" },
    { name: "U", className: "blue" },
    { name: "B", className: "black" },
    { name: "R", className: "red" },
    { name: "G", className: "green" },
    { name: "multi", className: "multicolore" },
    { name: "incolore", className: "multicolore"}
  ];
  set: Set;
  thb: Set = thb;
  displayImage: 'small' | 'big' | 'none' = 'small'


  constructor() {
    this.changeSet(this.thb);
  }

  changeSet(set: Set) {
    const costRegexp = new RegExp(/\{([G, W, B, U, R, \d, X, \/]+)\}/g);
    this.data = [];
    this.set = set;

    const cards = set.cards.map(c => {
      const costs = [];
      let cost = costRegexp.exec(c.mana_cost);
      while(cost !== null) {
        const className = `ms-${cost[1].split('/').join('').toLowerCase()}`;
        costs.push(`${className} ms ms-cost`);
        cost = costRegexp.exec(c.mana_cost);
      }
      return {
        name: c.name,
        cmc: c.cmc,
        mana_cost: c.mana_cost,
        colors: c.colors,
        costs,
        rarity: c.rarity,
        uri: c.image_uris.normal,
        oracle_text: c.oracle_text
      };
    });

    const costs = _.groupBy(cards, "cmc");
    Object.keys(costs).forEach(cmc => {
      this.data.push({
        cmc,
        colors: _.groupBy(costs[cmc], (card: Card) => {
          if (card.colors.length > 1) {
            return "multi";
          } else if (card.colors.length === 0) {
            return "incolore";
          } else{
            return card.colors[0];
          }
        })
      })
    });
    this.data.forEach(d => {
      const lengths = this.columns.map(c => {
        return (d.colors[c.name] || []).length
      });
      d.max = _.range(Math.max(...lengths));
    });

    // Erase empty columns
    this.columns = this.columns.filter(c => {
      return this.data.filter(d => d.colors[c.name] !== undefined).length > 0;
    })
  }
}
