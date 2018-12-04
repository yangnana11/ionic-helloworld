import { Component } from '@angular/core';

import { TabBasicContentPage } from './tabBasicContent'
import { GridPage } from '../grid/grid'
import { CardPage } from '../card/card'

@Component({
    templateUrl: 'tab.html'
})
export class TabPage {
    rootPage = TabBasicContentPage;
    gridPage = GridPage;
    cardPage = CardPage
}
