import { Component, Input } from '@angular/core';

import { Card } from '../interface';

@Component({
    selector: "card",
    templateUrl: './card.html',
    styleUrls: [ './card.css' ]
})
export class CardComponent {
    @Input() card: Card;
    @Input() displayImage: 'none' | 'small' | 'big'
}