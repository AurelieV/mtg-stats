import { Component, Input } from '@angular/core';

import { Card } from '../../data/AKH-tricks';


@Component({
    selector: "card",
    templateUrl: './card.html',
    styleUrls: [ './card.css' ]
})
export class CardComponent {
    @Input() card: Card;
}