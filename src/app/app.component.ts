import { Component, ViewChild } from '@angular/core'
import { Nav, Platform } from 'ionic-angular'
import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'

import { HomePage } from '../pages/home/home'
import { ListPage } from '../pages/list/list'
import { CardPage } from '../pages/card/card'
import { FabPage } from '../pages/fab/fab'
import { GesturePage } from '../pages/gesture/gesture'
import { GridPage } from '../pages/grid/grid'
import { InputPage } from '../pages/input/input'

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav

    rootPage: any = HomePage

    pages: Array<{ title: string, component: any }>

    constructor (public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
        this.initializeApp()

        // used for an example of ngFor and navigation
        this.pages = [
            {title: 'Home', component: HomePage},
            {title: 'List', component: ListPage},
            {title: 'Card', component: CardPage},
            {title: 'Fab', component: FabPage},
            {title: 'Gesture', component: GesturePage},
            {title: 'Grid', component: GridPage},
            {title: 'Input', component: InputPage}
        ]

    }

    initializeApp () {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault()
            this.splashScreen.hide()
        })
    }

    openPage (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component)
    }
}
