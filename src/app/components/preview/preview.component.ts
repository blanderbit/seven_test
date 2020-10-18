import { Component, Input } from '@angular/core';
import { IProfile } from '../../models/profile';

const STEP = 22.5; // degree of position of one flag
const STEP_PER_2 = STEP / 2; // it need for symmetry
const DEG_90 = 90;

@Component({
    selector: 'app-profile-preview',
    templateUrl: './preview.component.html',
    styleUrls: ['./preview.component.scss']
})
export class PreviewComponent {
    @Input()
    profile: IProfile;

    @Input()
    isOwnProfile: boolean;

    get fullName(): string {
        return `${this.profile.name} ${this.profile.surname}`;
    }

    get offsetDeg(): number {
        return ((this.profile?.languages.length - 1) * STEP_PER_2 - DEG_90);
    }

    private getStrRotate(num: number): string {
        return `rotate(${num}deg)`;
    }

    public get flagDegs(): string {
        return this.getStrRotate(this.offsetDeg);
    }

    public flagDegItem(i: number): string {
        return this.getStrRotate( i * -STEP);
    }

    public imgDeg(i: number): string {
        return this.getStrRotate(i * STEP - this.offsetDeg);
    }
}
