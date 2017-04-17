import { Component } from '@angular/core';
import * as _ from "lodash";

import { Card, tricks } from "../data/AKH-tricks"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dashboardLink: string = "http://mtg-stats.purple-fox.fr/app/kibana#/dashboard/0f1b4b30-2204-11e7-a4a7-a3aa983ebfc9";
  data: any[] = [];

  constructor() {
    const costs = _.groupBy(tricks, "cmc");
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
    console.log("data", this.data);
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
