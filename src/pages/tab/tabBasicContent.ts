import { Component } from '@angular/core';

import { Platform } from 'ionic-angular';


@Component({
    templateUrl: 'tabBasicContent.html'
})
export class TabBasicContentPage {
    isAndroid: boolean = false;

    constructor(platform: Platform) {
        this.isAndroid = platform.is('android');
    }
}
