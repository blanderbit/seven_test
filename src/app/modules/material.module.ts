import { NgModule } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatMenuModule } from '@angular/material/menu';

const svgIcons = [
    {name: 'test-location', path: 'assets/images/svg/location.svg'},
    {name: 'test-verified-user', path: 'assets/images/svg/verified-user.svg'},
    {name: 'test-profile-image', path: 'assets/images/svg/user.svg'},
    {name: 'test-edit-pen', path: 'assets/images/svg/edit-pen.svg'},
    {name: 'test-edit-pen-info', path: 'assets/images/svg/edit-pen-info.svg'},
    {name: 'test-star', path: 'assets/images/svg/star.svg'},
    {name: 'test-star-empty', path: 'assets/images/svg/star-empty2.svg'}
];


@NgModule({
    imports: [
        MatIconModule,
        MatMenuModule
    ],
    exports: [
        MatIconModule,
        MatMenuModule
    ]
})
export class MaterialModule {
    constructor(
        private iconRegistry: MatIconRegistry,
        private sanitizer: DomSanitizer
    ) {
        svgIcons.forEach(({name, path}) => {
            this.iconRegistry
                .addSvgIcon(
                    name,
                    this.sanitizer.bypassSecurityTrustResourceUrl(path)
                );
        });
    }
}
