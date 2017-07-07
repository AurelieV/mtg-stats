import { Component, Input } from '@angular/core';

import { Card } from '../card.model';

class ECard extends Card {
    extension: string;
}

@Component({
    selector: "card",
    templateUrl: './card.html',
    styleUrls: [ './card.css' ]
})
export class CardComponent {
    @Input() card: ECard;
}