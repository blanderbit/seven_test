import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-rating',
    templateUrl: './rating.component.html',
    styleUrls: ['./rating.component.scss']
})
export class RatingComponent {

    stars = new Array(5);

    @Input()
    score: number;

    starIcon(starIndex: number): string {
        return starIndex  < this.score ? 'test-star' : 'test-star-empty';
    }
}
