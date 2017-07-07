import { Component } from '@angular/core';
import * as _ from "lodash";

import { tricks as AKHTricks } from "../data/AKH-tricks";
import { tricks as HOUTricks } from "../data/HOU-tricks";
import { Card } from "./card.model";

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
  dashboardLink: string = "http://mtg-stats.purple-fox.fr/app/kibana#/dashboard/0f1b4b30-2204-11e7-a4a7-a3aa983ebfc9";
  data: any[] = [];
  columns: Column[] = [
    { name: "White", className: "white" },
    { name: "Blue", className: "blue" },
    { name: "Black", className: "black" },
    { name: "Red", className: "red" },
    { name: "Green", className: "green" },
    { name: "Multicolore", className: "multicolore" },
  ];
  extension: string;

  constructor() {
    this.changeExtension("AKH&HOU");
  }

  changeExtension(extension: string) {
    const costRegexp = new RegExp(/\{(.)\}/g);
    let tricks;
    this.data = [];
    this.extension = extension;
    if (extension === "AKH") {
      tricks = AKHTricks.map(c => Object.assign({}, c, { extension: "AKH" }));
    } else if (extension === "HOU") {
      tricks = HOUTricks.map(c => Object.assign({}, c, { extension: "HOU" }));
    } else {
      tricks = AKHTricks.map(c => Object.assign({}, c, { extension: "AKH" })).concat(
        HOUTricks.map(c => Object.assign({}, c, { extension: "HOU" }))
      );
    }
    const cards = tricks.map(c => {
      const costs = [];
      let cost = costRegexp.exec(c.manaCost);
      while(cost !== null) {
        costs.push(`ms-${cost[1].toLowerCase()} ms ms-cost`);
        cost = costRegexp.exec(c.manaCost);
      }
      return {
        name: c.name,
        cmc: c.cmc,
        manaCost: c.manaCost,
        colors: c.colors,
        effect: c.effect,
        costs,
        rarity: c.rarity,
        extension: c.extension
      };
    });

    const costs = _.groupBy(cards, "cmc");
    Object.keys(costs).forEach(cmc => {
      this.data.push({
        cmc,
        colors: _.groupBy(costs[cmc], (card: Card) => {
          const colors: string[] = card.colors.split(",");
          if (colors.length > 1) return "Multicolore";
          else return card.colors;
        })
      })
    });
    this.data.forEach(d => {
      d.max = _.range(Math.max(
        (d.colors.White || []).length,
        (d.colors.Black || []).length,
        (d.colors.Green || []).length,
        (d.colors.Blue || []).length,
        (d.colors.Multicolore || []).length,
        (d.colors.Red || []).length
      ));
    })
  } 
}
