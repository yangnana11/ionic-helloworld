import { BrowserModule } from '@angular/platform-browser'
import { ErrorHandler, NgModule } from '@angular/core'
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular'

import { MyApp } from './app.component'
import { HomePage } from '../pages/home/home'
import { ListPage } from '../pages/list/list'
import { CardPage } from '../pages/card/card'
import { FabPage } from '../pages/fab/fab'
import { GesturePage } from '../pages/gesture/gesture'
import { GridPage } from '../pages/grid/grid'

import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'
import { InputPage } from '../pages/input/input'
import { ModalPage } from '../pages/modal/modal'
import { PopoverPage } from '../pages/popover/popover'
import { PoplistPage } from '../pages/popover/poplist'
import { CheckPage } from '../pages/check/check'
import { RadioPage } from '../pages/radio/radio'
import { RangePage } from '../pages/range/range'
import { SearchPage } from '../pages/search/search'
import { SegmentPage } from '../pages/segment/segment'

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        ListPage,
        CardPage,
        FabPage,
        GesturePage,
        GridPage,
        InputPage,
        ModalPage,
        PopoverPage,
        PoplistPage,
        CheckPage,
        RadioPage,
        RangePage,
        SearchPage,
        SegmentPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        ListPage,
        CardPage,
        FabPage,
        GesturePage,
        GridPage,
        InputPage,
        ModalPage,
        PopoverPage,
        PoplistPage,
        CheckPage,
        RadioPage,
        RangePage,
        SearchPage,
        SegmentPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {}
