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

    get isSpecial(): boolean {
        if (!this.card || !this.card.oracle_text) {
            return false;
        }
        return this.card.oracle_text.includes('Convoke')
    }
}