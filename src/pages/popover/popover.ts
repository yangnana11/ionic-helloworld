import { Component, ViewChild, ElementRef } from '@angular/core';

import { PopoverController } from 'ionic-angular';
import { PoplistPage } from './poplist'


@Component({
    templateUrl: 'popover.html'
})
export class PopoverPage {
    @ViewChild('popoverContent', { read: ElementRef }) content: ElementRef;
    @ViewChild('popoverText', { read: ElementRef }) text: ElementRef;

    constructor(private popoverCtrl: PopoverController) {

    }

    presentPopover(ev) {

        let popover = this.popoverCtrl.create(PoplistPage, {
            contentEle: this.content.nativeElement,
            textEle: this.text.nativeElement
        });

        popover.present({
            ev: ev
        });
    }
}
