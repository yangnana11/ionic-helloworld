webpackJsonp([0],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, platform, actionsheetCtrl, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.actionsheetCtrl = actionsheetCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.myIcon = "home";
        this.event = {
            month: __WEBPACK_IMPORTED_MODULE_2_moment___default()().format('YYYY-MM-DD'),
            timeStarts: __WEBPACK_IMPORTED_MODULE_2_moment___default()().format('HH:mm'),
            timeEnds: __WEBPACK_IMPORTED_MODULE_2_moment___default()().format('YYYY-MM-DD')
        };
        this.presentLoading();
    }
    HomePage.prototype.presentLoading = function () {
        this.loadingCtrl.create({
            content: 'Please wait...',
            duration: 3000,
            dismissOnPageChange: true
        }).present();
    };
    HomePage.prototype.openActionSheet = function () {
        var actionSheet = this.actionsheetCtrl.create({
            title: 'Albums',
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: 'Delete',
                    role: 'destructive',
                    icon: !this.platform.is('ios') ? 'trash' : null,
                    handler: function () {
                        console.log('Delete clicked');
                    }
                },
                {
                    text: 'Share',
                    icon: !this.platform.is('ios') ? 'share' : null,
                    handler: function () {
                        console.log('Share clicked');
                    }
                },
                {
                    text: 'Play',
                    icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
                    handler: function () {
                        console.log('Play clicked');
                    }
                },
                {
                    text: 'Favorite',
                    icon: !this.platform.is('ios') ? 'heart-outline' : null,
                    handler: function () {
                        console.log('Favorite clicked');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    icon: !this.platform.is('ios') ? 'close' : null,
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    HomePage.prototype.showBasicAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'New Friend!',
            subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
            buttons: ['OK']
        });
        alert.present();
    };
    HomePage.prototype.showPromptAlert = function () {
        var prompt = this.alertCtrl.create({
            title: 'Login',
            message: 'Enter a name for this new album you\'re so keen on adding',
            inputs: [
                {
                    name: 'title',
                    placeholder: 'Title'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    HomePage.prototype.showConfirmAlert = function () {
        var confirm = this.alertCtrl.create({
            title: 'Use this lightsaber?',
            message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
            buttons: [
                {
                    text: 'Disagree',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Agree',
                    handler: function () {
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        confirm.present();
    };
    HomePage.prototype.showRadioAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('Lightsaber color');
        alert.addInput({
            type: 'radio',
            label: 'Blue',
            value: 'blue',
            checked: true
        });
        alert.addInput({
            type: 'radio',
            label: 'Green',
            value: 'green'
        });
        alert.addInput({
            type: 'radio',
            label: 'Red',
            value: 'red'
        });
        alert.addInput({
            type: 'radio',
            label: 'Yellow',
            value: 'yellow'
        });
        alert.addInput({
            type: 'radio',
            label: 'Purple',
            value: 'purple'
        });
        alert.addInput({
            type: 'radio',
            label: 'White',
            value: 'white'
        });
        alert.addInput({
            type: 'radio',
            label: 'Black',
            value: 'black'
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'OK',
            handler: function (data) {
                _this.testRadioOpen = false;
                _this.testRadioResult = data;
            }
        });
        alert.present();
    };
    HomePage.prototype.showCheckAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('Which planets have you visited?');
        alert.addInput({
            type: 'checkbox',
            label: 'Alderaan',
            value: 'value1',
            checked: true
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Bespin',
            value: 'value2'
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Coruscant',
            value: 'value3'
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Endor',
            value: 'value4'
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Hoth',
            value: 'value5'
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Jakku',
            value: 'value6'
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Naboo',
            value: 'value6'
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Takodana',
            value: 'value6'
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Tatooine',
            value: 'value6'
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'Okay',
            handler: function (data) {
                console.log('Checkbox data:', data);
                _this.testCheckboxOpen = false;
                _this.testCheckboxResult = data;
            }
        });
        alert.present().then(function () {
            _this.testCheckboxOpen = true;
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/nana/Documents/own_studying/ionic/ionic-helloworld/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Home</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <h3>Ionic Menu Starter</h3>\n\n    <p>\n        If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n    </p>\n\n    <button ion-button secondary menuToggle>Toggle Menu</button>\n\n    <button ion-button block (click)="openActionSheet()">\n        Show Action Sheet\n    </button>\n\n    <button ion-button block color="dark" outline (click)="showBasicAlert()">\n        Show Basic Alert\n    </button>\n\n    <button ion-button full color="secondary" (click)="showPromptAlert()">\n        Show Prompt Alert\n    </button>\n\n    <button ion-button block small color="light" (click)="showConfirmAlert()">\n        Show Confirm Alert\n    </button>\n\n    <button ion-button block large color="primary" clear (click)="showRadioAlert()">\n        Show Radio Alert\n    </button>\n\n    <button ion-button block color="danger" round (click)="showCheckAlert()">Show Checkbox Alert</button>\n\n    Badges <ion-badge color="secondary">260k</ion-badge>\n\n    <ion-item>\n        <ion-label>Daenerys Targaryen</ion-label>\n        <ion-checkbox color="dark" checked="true"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>Arya Stark</ion-label>\n        <ion-checkbox disabled="true"></ion-checkbox>\n    </ion-item>\n\n    <ion-list>\n        <ion-item>\n            <ion-input placeholder="Title"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-input placeholder="Location"></ion-input>\n        </ion-item>\n    </ion-list>\n\n    <ion-list>\n        <ion-item>\n            <ion-label>Start Date</ion-label>\n            <ion-datetime displayFormat="MMM DD YYYY" [(ngModel)]="event.month"></ion-datetime>\n        </ion-item>\n\n\n        <ion-item>\n            <ion-label>Start Time</ion-label>\n            <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" [(ngModel)]="event.timeStarts"></ion-datetime>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Ends</ion-label>\n            <ion-datetime displayFormat="MMM DD YYYY" [(ngModel)]="event.timeEnds"></ion-datetime>\n        </ion-item>\n\n        <button ion-item>\n            <ion-label>Repeat</ion-label>\n            <ion-note item-end>Never</ion-note>\n        </button>\n\n        <button ion-item>\n            <ion-label>Travel Time</ion-label>\n            <ion-note item-end>None</ion-note>\n        </button>\n    </ion-list>\n\n    <ion-list>\n        <button ion-item>\n            <ion-label>Alert</ion-label>\n            <ion-note item-end>None</ion-note>\n        </button>\n    </ion-list>\n\n    <ion-icon name="heart"></ion-icon>                    <!-- active -->\n    <ion-icon name="heart" isActive="false"></ion-icon>  <!-- inactive works only on ios-->\n    <ion-icon [name]="myIcon"></ion-icon>\n\n</ion-content>\n'/*ion-inline-end:"/Users/nana/Documents/own_studying/ionic/ionic-helloworld/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 5; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage.prototype.itemSelected = function (item) {
        console.log("Selected Item", item);
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/nana/Documents/own_studying/ionic/ionic-helloworld/src/pages/list/list.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>List</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n        <ion-list-header>\n            Push item\n        </ion-list-header>\n        <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n            <ion-icon [name]="item.icon" item-start></ion-icon>\n            {{item.title}}\n            <div class="item-note" item-end>\n                {{item.note}}\n            </div>\n        </button>\n    </ion-list>\n    <ion-list>\n        <ion-list-header>\n            Basic List\n        </ion-list-header>\n        <button ion-item *ngFor="let item of items" (click)="itemSelected(item)">\n            {{ item.title }}\n        </button>\n    </ion-list>\n    <ion-list no-lines>\n        <ion-list-header>\n            No Line List\n        </ion-list-header>\n        <button ion-item *ngFor="let item of items" (click)="itemSelected(item)">\n            {{ item.title }}\n        </button>\n    </ion-list>\n    <ion-list inset>\n        <ion-list-header>\n            Inset List\n        </ion-list-header>\n        <button ion-item *ngFor="let item of items" (click)="itemSelected(item)">\n            {{ item.title }}\n        </button>\n    </ion-list>\n\n    <ion-list>\n        <ion-list-header>\n            Avatar List\n        </ion-list-header>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/avatar-ts-woody.png">\n            </ion-avatar>\n            <h2>Cher</h2>\n            <p>Ugh. As if.</p>\n        </ion-item>\n    </ion-list>\n\n    <ion-list>\n        <ion-list-header>\n            Multi-Line List\n        </ion-list-header>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/avatar-ts-woody.png">\n            </ion-avatar>\n            <h2>Finn</h2>\n            <h3>Don\'t Know What To Do!</h3>\n            <p>I\'ve had a pretty messed up day. If we just...</p>\n        </ion-item>\n    </ion-list>\n\n    <ion-list>\n        <ion-list-header>\n           Sliding List\n        </ion-list-header>\n        <ion-item-sliding>\n            <ion-item>\n                <ion-avatar item-start>\n                    <img src="assets/imgs/avatar-ts-woody.png">\n                </ion-avatar>\n                <h2>Slimer</h2>\n            </ion-item>\n            <ion-item-options side="left">\n                <button ion-button color="primary">\n                    <ion-icon name="text"></ion-icon>\n                    Text\n                </button>\n                <button ion-button color="secondary">\n                    <ion-icon name="call"></ion-icon>\n                    Call\n                </button>\n            </ion-item-options>\n            <ion-item-options side="right">\n                <button ion-button color="primary">\n                    <ion-icon name="mail"></ion-icon>\n                    Email\n                </button>\n            </ion-item-options>\n        </ion-item-sliding>\n    </ion-list>\n\n    <ion-list>\n        <ion-list-header>\n            Thumbnail List\n        </ion-list-header>\n        <ion-item>\n            <ion-thumbnail item-start>\n                <img src="assets/imgs/thumbnail-totoro.png">\n            </ion-thumbnail>\n            <h2>My Neighbor Totoro</h2>\n            <p>Hayao Miyazaki • 1988</p>\n            <button ion-button clear item-end>View</button>\n        </ion-item>\n    </ion-list>\n\n    <ion-item-group>\n        <ion-item-divider color="light">A</ion-item-divider>\n        <ion-item>Angola</ion-item>\n        <ion-item>Argentina</ion-item>\n    </ion-item-group>\n    <div *ngIf="selectedItem" padding>\n        You navigated here from <b>{{selectedItem.title}}</b>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/nana/Documents/own_studying/ionic/ionic-helloworld/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CardPage = /** @class */ (function () {
    function CardPage() {
    }
    CardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/nana/Documents/own_studying/ionic/ionic-helloworld/src/pages/card/card.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Basic Cards</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="cards-bg">\n\n    <ion-card>\n\n        <ion-card-content>\n            This is just your basic card with some text to boot. Like it? Keep scrolling...\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n        <ion-card-header>\n            Header\n        </ion-card-header>\n        <ion-card-content>\n            The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.\n        </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n        <ion-card-header>\n            Explore Nearby\n        </ion-card-header>\n\n        <ion-list>\n            <button ion-item>\n                <ion-icon name="cart" item-start></ion-icon>\n                Shopping\n            </button>\n\n            <button ion-item>\n                <ion-icon name="medical" item-start></ion-icon>\n                Hospital\n            </button>\n\n            <button ion-item>\n                <ion-icon name="cafe" item-start></ion-icon>\n                Cafe\n            </button>\n\n            <button ion-item>\n                <ion-icon name="paw" item-start></ion-icon>\n                Dog Park\n            </button>\n\n            <button ion-item>\n                <ion-icon name="beer" item-start></ion-icon>\n                Pub\n            </button>\n\n            <button ion-item>\n                <ion-icon name="planet" item-start></ion-icon>\n                Space\n            </button>\n        </ion-list>\n    </ion-card>\n\n    <ion-card>\n        <img src="assets/imgs/nin-live.png"/>\n        <ion-card-content>\n            <ion-card-title>\n                Nine Inch Nails Live\n            </ion-card-title>\n            <p>\n                The most popular industrial group ever, and largely\n                responsible for bringing the music to a mass audience.\n            </p>\n        </ion-card-content>\n    </ion-card>\n\n    <ion-card class="card-background-page">\n        <img src="assets/imgs/card-saopaolo.png"/>\n        <div class="card-title">São Paulo</div>\n        <div class="card-subtitle">41 Listings</div>\n    </ion-card>\n\n    <ion-card>\n\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/marty-avatar.png">\n            </ion-avatar>\n            <h2>Marty McFly</h2>\n            <p>November 5, 1955</p>\n        </ion-item>\n\n        <img src="assets/imgs/advance-card-bttf.png">\n\n        <ion-card-content>\n            <p>Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.</p>\n        </ion-card-content>\n\n        <ion-row>\n            <ion-col>\n                <button ion-button icon-start clear small>\n                    <ion-icon name="thumbs-up"></ion-icon>\n                    <div>12 Likes</div>\n                </button>\n            </ion-col>\n            <ion-col>\n                <button ion-button icon-start clear small>\n                    <ion-icon name="text"></ion-icon>\n                    <div>4 Comments</div>\n                </button>\n            </ion-col>\n            <ion-col center text-center>\n                <ion-note>\n                    11h ago\n                </ion-note>\n            </ion-col>\n        </ion-row>\n\n    </ion-card>\n\n    <ion-card>\n\n        <img src="assets/imgs/advance-card-map-madison.png">\n        <ion-fab right top>\n            <button ion-fab>\n                <ion-icon name="pin"></ion-icon>\n            </button>\n        </ion-fab>\n\n        <ion-item>\n            <ion-icon name="football" item-start large></ion-icon>\n            <h2>Museum of Football</h2>\n            <p>11 N. Way St, Madison, WI 53703</p>\n        </ion-item>\n\n        <ion-item>\n            <ion-icon name="wine" item-start large ></ion-icon>\n            <h2>Institute of Fine Cocktails</h2>\n            <p>14 S. Hop Avenue, Madison, WI 53703</p>\n        </ion-item>\n\n        <ion-item>\n            <span item-start>18 min</span>\n            <span item-start>(2.6 mi)</span>\n            <button ion-button icon-start clear item-end>\n                <ion-icon name="navigate"></ion-icon>\n                Start\n            </button>\n        </ion-item>\n\n    </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/nana/Documents/own_studying/ionic/ionic-helloworld/src/pages/card/card.html"*/
        })
    ], CardPage);
    return CardPage;
}());

//# sourceMappingURL=card.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FabPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FabPage = /** @class */ (function () {
    function FabPage() {
    }
    FabPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/nana/Documents/own_studying/ionic/ionic-helloworld/src/pages/fab/fab.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>FABs</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-fab top right edge>\n        <button ion-fab color="vibrant" mini><ion-icon name="add"></ion-icon></button>\n        <ion-fab-list>\n            <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n            <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n            <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n            <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n        </ion-fab-list>\n    </ion-fab>\n\n    <ion-fab right bottom>\n        <button ion-fab color="light"><ion-icon name="arrow-dropleft"></ion-icon></button>\n        <ion-fab-list side="left">\n            <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n            <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n            <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n            <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n        </ion-fab-list>\n    </ion-fab>\n\n    <ion-fab left top>\n        <button ion-fab color="secondary"><ion-icon name="arrow-dropright"></ion-icon></button>\n        <ion-fab-list side="right">\n            <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n            <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n            <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n            <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n        </ion-fab-list>\n    </ion-fab>\n\n    <ion-fab left bottom>\n        <button ion-fab color="dark"><ion-icon name="arrow-dropup"></ion-icon></button>\n        <ion-fab-list side="top">\n            <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n            <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n            <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n            <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n        </ion-fab-list>\n    </ion-fab>\n\n    <ion-fab center middle>\n        <button ion-fab color="danger"><ion-icon name="md-share"></ion-icon></button>\n        <ion-fab-list side="top">\n            <button ion-fab color="primary"><ion-icon name="logo-vimeo"></ion-icon></button>\n        </ion-fab-list>\n        <ion-fab-list side="bottom">\n            <button ion-fab color="secondary"><ion-icon name="logo-facebook"></ion-icon></button>\n        </ion-fab-list>\n        <ion-fab-list side="left">\n            <button ion-fab color="light"><ion-icon name="logo-googleplus"></ion-icon></button>\n        </ion-fab-list>\n        <ion-fab-list side="right">\n            <button ion-fab color="dark"><ion-icon name="logo-twitter"></ion-icon></button>\n        </ion-fab-list>\n    </ion-fab>\n\n    <ion-fab right middle>\n        <button ion-fab color="danger"><ion-icon name="add"></ion-icon></button>\n    </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/nana/Documents/own_studying/ionic/ionic-helloworld/src/pages/fab/fab.html"*/
        })
    ], FabPage);
    return FabPage;
}());

//# sourceMappingURL=fab.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GesturePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GesturePage = /** @class */ (function () {
    function GesturePage() {
        this.press = 0;
        this.pan = 0;
        this.swipe = 0;
        this.tap = 0;
    }
    GesturePage.prototype.pressEvent = function (e) {
        this.press++;
    };
    GesturePage.prototype.panEvent = function (e) {
        this.pan++;
    };
    GesturePage.prototype.swipeEvent = function (e) {
        this.swipe++;
    };
    GesturePage.prototype.tapEvent = function (e) {
        this.tap++;
    };
    GesturePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/nana/Documents/own_studying/ionic/ionic-helloworld/src/pages/gesture/gesture.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Events</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-card (tap)="tapEvent($event)">\n        <ion-item>\n            Tapped: {{tap}} times\n        </ion-item>\n    </ion-card>\n\n    <ion-card (press)="pressEvent($event)">\n        <ion-item>\n            Pressed: {{press}} times\n        </ion-item>\n    </ion-card>\n\n    <ion-card (pan)="panEvent($event)">\n        <ion-item>\n            Panned: {{pan}} times\n        </ion-item>\n    </ion-card>\n\n    <ion-card (swipe)="swipeEvent($event)">\n        <ion-item>\n            Swiped: {{swipe}} times\n        </ion-item>\n    </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/nana/Documents/own_studying/ionic/ionic-helloworld/src/pages/gesture/gesture.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], GesturePage);
    return GesturePage;
}());

//# sourceMappingURL=gesture.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GridPage = /** @class */ (function () {
    function GridPage() {
    }
    GridPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/nana/Documents/own_studying/ionic/ionic-helloworld/src/pages/grid/grid.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Grid</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="grid-basic-page">\n\n\n    <p padding>\n        Equal-width columns\n    </p>\n    <ion-grid>\n        <ion-row>\n            <ion-col>\n                <div>1 of 2</div>\n            </ion-col>\n            <ion-col>\n                <div>2 of 2</div>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <div>1 of 3</div>\n            </ion-col>\n            <ion-col>\n                <div>2 of 3</div>\n            </ion-col>\n            <ion-col>\n                <div>3 of 3</div>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <p padding>\n        Setting one column width\n    </p>\n    <ion-grid>\n        <ion-row>\n            <ion-col>\n                <div>1 of 3</div>\n            </ion-col>\n            <ion-col col-6>\n                <div>2 of 3 (wider)</div>\n            </ion-col>\n            <ion-col>\n                <div>3 of 3</div>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-6>\n                <div>1 of 3 (wider)</div>\n            </ion-col>\n            <ion-col>\n                <div>2 of 3</div>\n            </ion-col>\n            <ion-col>\n                <div>3 of 3</div>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <p padding>\n        Variable-width columns\n    </p>\n    <ion-grid>\n        <ion-row>\n            <ion-col>\n                <div>1 of 3</div>\n            </ion-col>\n            <ion-col col-auto>\n                <div>Variable width content</div>\n            </ion-col>\n            <ion-col>\n                <div>3 of 3</div>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <div>1 of 4</div>\n            </ion-col>\n            <ion-col>\n                <div>2 of 4</div>\n            </ion-col>\n            <ion-col col-auto>\n                <div><ion-icon name="globe"></ion-icon></div>\n            </ion-col>\n            <ion-col>\n                <div>4 of 4</div>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <p padding>\n        Offsetting columns\n    </p>\n    <ion-grid>\n        <ion-row>\n            <ion-col>\n                <div>1 of 2</div>\n            </ion-col>\n            <ion-col offset-4>\n                <div>2 of 2</div>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col offset-4>\n                <div>1 of 2</div>\n            </ion-col>\n            <ion-col>\n                <div>2 of 2</div>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <p padding>\n        Push and pull\n    </p>\n    <ion-grid>\n        <ion-row>\n            <ion-col col-9 push-3>\n                <div>1 of 2</div>\n            </ion-col>\n            <ion-col col-3 pull-9>\n                <div>2 of 2</div>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col col-6 push-3>\n                <div>1 of 3</div>\n            </ion-col>\n            <ion-col col-3 push-3>\n                <div>2 of 3</div>\n            </ion-col>\n            <ion-col col-3 pull-9>\n                <div>3 of 3</div>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <p padding>\n        Setting all column widths<br>\n    </p>\n    <ion-grid>\n        <ion-row>\n            <ion-col col-4>\n                <div>1 of 3</div>\n            </ion-col>\n            <ion-col col-3>\n                <div>2 of 3</div>\n            </ion-col>\n            <ion-col col-5>\n                <div>3 of 3</div>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <p padding>\n        Vertical alignment\n    </p>\n    <ion-grid>\n        <ion-row>\n            <ion-col>\n                <div>1 of 4</div>\n            </ion-col>\n            <ion-col>\n                <div>2 of 4 <br>#</div>\n            </ion-col>\n            <ion-col>\n                <div>3 of 4 <br>#<br>#</div>\n            </ion-col>\n            <ion-col>\n                <div>4 of 4 <br>#<br>#<br>#</div>\n            </ion-col>\n        </ion-row>\n\n        <ion-row align-items-start>\n            <ion-col>\n                <div>1 of 4</div>\n            </ion-col>\n            <ion-col>\n                <div>2 of 4</div>\n            </ion-col>\n            <ion-col>\n                <div>3 of 4</div>\n            </ion-col>\n            <ion-col>\n                <div>4 of 4 <br>#<br>#<br>#</div>\n            </ion-col>\n        </ion-row>\n\n        <ion-row align-items-center>\n            <ion-col>\n                <div>1 of 4</div>\n            </ion-col>\n            <ion-col>\n                <div>2 of 4</div>\n            </ion-col>\n            <ion-col>\n                <div>3 of 4</div>\n            </ion-col>\n            <ion-col>\n                <div>4 of 4 <br>#<br>#<br>#</div>\n            </ion-col>\n        </ion-row>\n\n        <ion-row align-items-end>\n            <ion-col>\n                <div>1 of 4</div>\n            </ion-col>\n            <ion-col>\n                <div>2 of 4</div>\n            </ion-col>\n            <ion-col>\n                <div>3 of 4</div>\n            </ion-col>\n            <ion-col>\n                <div>4 of 4 <br>#<br>#<br>#</div>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n        <ion-row>\n            <ion-col align-self-start>\n                <div>1 of 4</div>\n            </ion-col>\n            <ion-col align-self-center>\n                <div>2 of 4</div>\n            </ion-col>\n            <ion-col align-self-end>\n                <div>3 of 4</div>\n            </ion-col>\n            <ion-col>\n                <div>4 of 4 <br>#<br>#<br>#</div>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <p padding>\n        Horizontal Alignment\n    </p>\n    <ion-grid>\n        <ion-row justify-content-start>\n            <ion-col col-3>\n                <div>1 of 2</div>\n            </ion-col>\n            <ion-col col-3>\n                <div>2 of 2</div>\n            </ion-col>\n        </ion-row>\n\n        <ion-row justify-content-center>\n            <ion-col col-3>\n                <div>1 of 2</div>\n            </ion-col>\n            <ion-col col-3>\n                <div>2 of 2</div>\n            </ion-col>\n        </ion-row>\n\n        <ion-row justify-content-end>\n            <ion-col col-3>\n                <div>1 of 2</div>\n            </ion-col>\n            <ion-col col-3>\n                <div>2 of 2</div>\n            </ion-col>\n        </ion-row>\n\n        <ion-row justify-content-around>\n            <ion-col col-3>\n                <div>1 of 2</div>\n            </ion-col>\n            <ion-col col-3>\n                <div>2 of 2</div>\n            </ion-col>\n        </ion-row>\n\n        <ion-row justify-content-between>\n            <ion-col col-3>\n                <div>1 of 2</div>\n            </ion-col>\n            <ion-col col-3>\n                <div>2 of 2</div>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/nana/Documents/own_studying/ionic/ionic-helloworld/src/pages/grid/grid.html"*/
        })
    ], GridPage);
    return GridPage;
}());

//# sourceMappingURL=grid.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var InputPage = /** @class */ (function () {
    function InputPage() {
    }
    InputPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/nana/Documents/own_studying/ionic/ionic-helloworld/src/pages/input/input.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Home</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-list>\n\n        <ion-item>\n            <ion-label floating>Float Username</ion-label>\n            <ion-input type="text"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label floating>Float Password</ion-label>\n            <ion-input type="password"></ion-input>\n        </ion-item>\n\n    </ion-list>\n\n    <ion-list>\n\n        <ion-item>\n            <ion-label fixed>Fixed Username</ion-label>\n            <ion-input type="text" value=""></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label fixed>Fixed Password</ion-label>\n            <ion-input type="password"></ion-input>\n        </ion-item>\n\n    </ion-list>\n\n    <ion-list inset>\n\n        <ion-item>\n            <ion-label>Inset Username</ion-label>\n            <ion-input type="text"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Inset Password</ion-label>\n            <ion-input type="password"></ion-input>\n        </ion-item>\n\n    </ion-list>\n\n    <ion-list>\n\n        <ion-item>\n            <ion-label stacked>Stacked Username</ion-label>\n            <ion-input type="text"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label stacked>Stacked Password</ion-label>\n            <ion-input type="password"></ion-input>\n        </ion-item>\n\n    </ion-list>\n\n    <div padding>\n        <button block>Sign In</button>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/nana/Documents/own_studying/ionic/ionic-helloworld/src/pages/input/input.html"*/
        })
    ], InputPage);
    return InputPage;
}());

//# sourceMappingURL=input.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(347);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_card_card__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_fab_fab__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_gesture_gesture__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_grid_grid__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_input_input__ = __webpack_require__(323);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_card_card__["a" /* CardPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_fab_fab__["a" /* FabPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_gesture_gesture__["a" /* GesturePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_grid_grid__["a" /* GridPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_input_input__["a" /* InputPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_card_card__["a" /* CardPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_fab_fab__["a" /* FabPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_gesture_gesture__["a" /* GesturePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_grid_grid__["a" /* GridPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_input_input__["a" /* InputPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_card_card__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_fab_fab__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_gesture_gesture__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_grid_grid__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_input_input__ = __webpack_require__(323);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { title: 'Card', component: __WEBPACK_IMPORTED_MODULE_6__pages_card_card__["a" /* CardPage */] },
            { title: 'Fab', component: __WEBPACK_IMPORTED_MODULE_7__pages_fab_fab__["a" /* FabPage */] },
            { title: 'Gesture', component: __WEBPACK_IMPORTED_MODULE_8__pages_gesture_gesture__["a" /* GesturePage */] },
            { title: 'Grid', component: __WEBPACK_IMPORTED_MODULE_9__pages_grid_grid__["a" /* GridPage */] },
            { title: 'Input', component: __WEBPACK_IMPORTED_MODULE_10__pages_input_input__["a" /* InputPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/nana/Documents/own_studying/ionic/ionic-helloworld/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/nana/Documents/own_studying/ionic/ionic-helloworld/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 195,
	"./af.js": 195,
	"./ar": 196,
	"./ar-dz": 197,
	"./ar-dz.js": 197,
	"./ar-kw": 198,
	"./ar-kw.js": 198,
	"./ar-ly": 199,
	"./ar-ly.js": 199,
	"./ar-ma": 200,
	"./ar-ma.js": 200,
	"./ar-sa": 201,
	"./ar-sa.js": 201,
	"./ar-tn": 202,
	"./ar-tn.js": 202,
	"./ar.js": 196,
	"./az": 203,
	"./az.js": 203,
	"./be": 204,
	"./be.js": 204,
	"./bg": 205,
	"./bg.js": 205,
	"./bm": 206,
	"./bm.js": 206,
	"./bn": 207,
	"./bn.js": 207,
	"./bo": 208,
	"./bo.js": 208,
	"./br": 209,
	"./br.js": 209,
	"./bs": 210,
	"./bs.js": 210,
	"./ca": 211,
	"./ca.js": 211,
	"./cs": 212,
	"./cs.js": 212,
	"./cv": 213,
	"./cv.js": 213,
	"./cy": 214,
	"./cy.js": 214,
	"./da": 215,
	"./da.js": 215,
	"./de": 216,
	"./de-at": 217,
	"./de-at.js": 217,
	"./de-ch": 218,
	"./de-ch.js": 218,
	"./de.js": 216,
	"./dv": 219,
	"./dv.js": 219,
	"./el": 220,
	"./el.js": 220,
	"./en-au": 221,
	"./en-au.js": 221,
	"./en-ca": 222,
	"./en-ca.js": 222,
	"./en-gb": 223,
	"./en-gb.js": 223,
	"./en-ie": 224,
	"./en-ie.js": 224,
	"./en-il": 225,
	"./en-il.js": 225,
	"./en-nz": 226,
	"./en-nz.js": 226,
	"./eo": 227,
	"./eo.js": 227,
	"./es": 228,
	"./es-do": 229,
	"./es-do.js": 229,
	"./es-us": 230,
	"./es-us.js": 230,
	"./es.js": 228,
	"./et": 231,
	"./et.js": 231,
	"./eu": 232,
	"./eu.js": 232,
	"./fa": 233,
	"./fa.js": 233,
	"./fi": 234,
	"./fi.js": 234,
	"./fo": 235,
	"./fo.js": 235,
	"./fr": 236,
	"./fr-ca": 237,
	"./fr-ca.js": 237,
	"./fr-ch": 238,
	"./fr-ch.js": 238,
	"./fr.js": 236,
	"./fy": 239,
	"./fy.js": 239,
	"./gd": 240,
	"./gd.js": 240,
	"./gl": 241,
	"./gl.js": 241,
	"./gom-latn": 242,
	"./gom-latn.js": 242,
	"./gu": 243,
	"./gu.js": 243,
	"./he": 244,
	"./he.js": 244,
	"./hi": 245,
	"./hi.js": 245,
	"./hr": 246,
	"./hr.js": 246,
	"./hu": 247,
	"./hu.js": 247,
	"./hy-am": 248,
	"./hy-am.js": 248,
	"./id": 249,
	"./id.js": 249,
	"./is": 250,
	"./is.js": 250,
	"./it": 251,
	"./it.js": 251,
	"./ja": 252,
	"./ja.js": 252,
	"./jv": 253,
	"./jv.js": 253,
	"./ka": 254,
	"./ka.js": 254,
	"./kk": 255,
	"./kk.js": 255,
	"./km": 256,
	"./km.js": 256,
	"./kn": 257,
	"./kn.js": 257,
	"./ko": 258,
	"./ko.js": 258,
	"./ky": 259,
	"./ky.js": 259,
	"./lb": 260,
	"./lb.js": 260,
	"./lo": 261,
	"./lo.js": 261,
	"./lt": 262,
	"./lt.js": 262,
	"./lv": 263,
	"./lv.js": 263,
	"./me": 264,
	"./me.js": 264,
	"./mi": 265,
	"./mi.js": 265,
	"./mk": 266,
	"./mk.js": 266,
	"./ml": 267,
	"./ml.js": 267,
	"./mn": 268,
	"./mn.js": 268,
	"./mr": 269,
	"./mr.js": 269,
	"./ms": 270,
	"./ms-my": 271,
	"./ms-my.js": 271,
	"./ms.js": 270,
	"./mt": 272,
	"./mt.js": 272,
	"./my": 273,
	"./my.js": 273,
	"./nb": 274,
	"./nb.js": 274,
	"./ne": 275,
	"./ne.js": 275,
	"./nl": 276,
	"./nl-be": 277,
	"./nl-be.js": 277,
	"./nl.js": 276,
	"./nn": 278,
	"./nn.js": 278,
	"./pa-in": 279,
	"./pa-in.js": 279,
	"./pl": 280,
	"./pl.js": 280,
	"./pt": 281,
	"./pt-br": 282,
	"./pt-br.js": 282,
	"./pt.js": 281,
	"./ro": 283,
	"./ro.js": 283,
	"./ru": 284,
	"./ru.js": 284,
	"./sd": 285,
	"./sd.js": 285,
	"./se": 286,
	"./se.js": 286,
	"./si": 287,
	"./si.js": 287,
	"./sk": 288,
	"./sk.js": 288,
	"./sl": 289,
	"./sl.js": 289,
	"./sq": 290,
	"./sq.js": 290,
	"./sr": 291,
	"./sr-cyrl": 292,
	"./sr-cyrl.js": 292,
	"./sr.js": 291,
	"./ss": 293,
	"./ss.js": 293,
	"./sv": 294,
	"./sv.js": 294,
	"./sw": 295,
	"./sw.js": 295,
	"./ta": 296,
	"./ta.js": 296,
	"./te": 297,
	"./te.js": 297,
	"./tet": 298,
	"./tet.js": 298,
	"./tg": 299,
	"./tg.js": 299,
	"./th": 300,
	"./th.js": 300,
	"./tl-ph": 301,
	"./tl-ph.js": 301,
	"./tlh": 302,
	"./tlh.js": 302,
	"./tr": 303,
	"./tr.js": 303,
	"./tzl": 304,
	"./tzl.js": 304,
	"./tzm": 305,
	"./tzm-latn": 306,
	"./tzm-latn.js": 306,
	"./tzm.js": 305,
	"./ug-cn": 307,
	"./ug-cn.js": 307,
	"./uk": 308,
	"./uk.js": 308,
	"./ur": 309,
	"./ur.js": 309,
	"./uz": 310,
	"./uz-latn": 311,
	"./uz-latn.js": 311,
	"./uz.js": 310,
	"./vi": 312,
	"./vi.js": 312,
	"./x-pseudo": 313,
	"./x-pseudo.js": 313,
	"./yo": 314,
	"./yo.js": 314,
	"./zh-cn": 315,
	"./zh-cn.js": 315,
	"./zh-hk": 316,
	"./zh-hk.js": 316,
	"./zh-tw": 317,
	"./zh-tw.js": 317
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 399;

/***/ })

},[324]);
//# sourceMappingURL=main.js.map