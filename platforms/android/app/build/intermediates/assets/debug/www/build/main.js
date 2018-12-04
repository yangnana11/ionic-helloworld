webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_modal__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_list__ = __webpack_require__(101);
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
    function HomePage(navCtrl, platform, actionsheetCtrl, alertCtrl, loadingCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.actionsheetCtrl = actionsheetCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
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
    HomePage.prototype.openModal = function (characterNum) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__modal_modal__["a" /* ModalPage */], characterNum);
        modal.present();
    };
    HomePage.prototype.goToOtherPage = function () {
        //push another page onto the history stack
        //causing the nav controller to animate the new page in
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__list_list__["a" /* ListPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/nana/Documents/own_studying/ionic/ionic-helloworld/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Home</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <h3>Ionic Menu Starter</h3>\n\n    <p>\n        If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n    </p>\n\n    <button ion-button secondary menuToggle>Toggle Menu</button>\n\n    <button ion-button primary (click)="goToOtherPage()">Go to List Page</button>\n\n    <button ion-button block color="light" round (click)="showCheckAlert()">Show Modal</button>\n\n    <button ion-button block (click)="openActionSheet()">\n        Show Action Sheet\n    </button>\n\n    <button ion-button block color="dark" outline (click)="showBasicAlert()">\n        Show Basic Alert\n    </button>\n\n    <button ion-button full color="secondary" (click)="showPromptAlert()">\n        Show Prompt Alert\n    </button>\n\n    <button ion-button block small color="light" (click)="showConfirmAlert()">\n        Show Confirm Alert\n    </button>\n\n    <button ion-button block large color="primary" clear (click)="showRadioAlert()">\n        Show Radio Alert\n    </button>\n\n    <button ion-button block color="danger" round (click)="showCheckAlert()">Show Checkbox Alert</button>\n\n    Badges <ion-badge color="secondary">260k</ion-badge>\n\n    <ion-list>\n        <ion-item>\n            <ion-input placeholder="Title"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-input placeholder="Location"></ion-input>\n        </ion-item>\n    </ion-list>\n\n    <ion-list>\n        <ion-item>\n            <ion-label>Start Date</ion-label>\n            <ion-datetime displayFormat="MMM DD YYYY" [(ngModel)]="event.month"></ion-datetime>\n        </ion-item>\n\n\n        <ion-item>\n            <ion-label>Start Time</ion-label>\n            <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" [(ngModel)]="event.timeStarts"></ion-datetime>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Ends</ion-label>\n            <ion-datetime displayFormat="MMM DD YYYY" [(ngModel)]="event.timeEnds"></ion-datetime>\n        </ion-item>\n\n        <button ion-item>\n            <ion-label>Repeat</ion-label>\n            <ion-note item-end>Never</ion-note>\n        </button>\n\n        <button ion-item>\n            <ion-label>Travel Time</ion-label>\n            <ion-note item-end>None</ion-note>\n        </button>\n    </ion-list>\n\n    <ion-list>\n        <ion-list-header>\n            Modal\n        </ion-list-header>\n        <a ion-item (click)="openModal({charNum: 0})">\n            Gollum\n        </a>\n        <a ion-item (click)="openModal({charNum: 1})">\n            Frodo Baggins\n        </a>\n        <a ion-item (click)="openModal({charNum: 2})">\n            Sam\n        </a>\n    </ion-list>\n\n    <ion-icon name="heart"></ion-icon>                    <!-- active -->\n    <ion-icon name="heart" isActive="false"></ion-icon>  <!-- inactive works only on ios-->\n    <ion-icon [name]="myIcon"></ion-icon>\n\n</ion-content>\n'/*ion-inline-end:"/Users/nana/Documents/own_studying/ionic/ionic-helloworld/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 102:
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

/***/ 103:
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

/***/ 113:
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
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 154:
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
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalPage = /** @class */ (function () {
    function ModalPage(platform, params, viewCtrl) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        var characters = [
            {
                name: 'Gollum',
                quote: 'Sneaky little hobbitses!',
                image: 'assets/imgs/avatar-gollum.jpg',
                items: [
                    { title: 'Race', note: 'Hobbit' },
                    { title: 'Culture', note: 'River Folk' },
                    { title: 'Alter Ego', note: 'Smeagol' }
                ]
            },
            {
                name: 'Frodo',
                quote: 'Go back, Sam! I\'m going to Mordor alone!',
                image: 'assets/imgs/avatar-frodo.jpg',
                items: [
                    { title: 'Race', note: 'Hobbit' },
                    { title: 'Culture', note: 'Shire Folk' },
                    { title: 'Weapon', note: 'Sting' }
                ]
            },
            {
                name: 'Samwise Gamgee',
                quote: 'What we need is a few good taters.',
                image: 'assets/imgs/avatar-samwise.jpg',
                items: [
                    { title: 'Race', note: 'Hobbit' },
                    { title: 'Culture', note: 'Shire Folk' },
                    { title: 'Nickname', note: 'Sam' }
                ]
            }
        ];
        this.character = characters[this.params.get('charNum')];
    }
    ModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/nana/Documents/own_studying/ionic/ionic-helloworld/src/pages/modal/modal.html"*/'<ion-header>\n    <ion-toolbar>\n        <ion-title>\n            Description\n        </ion-title>\n        <ion-buttons start>\n            <button ion-button (click)="dismiss()">\n                <span ion-text color="primary" showWhen="ios">Cancel</span>\n                <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="{{character.image}}">\n            </ion-avatar>\n            <h2>{{character.name}}</h2>\n            <p>{{character.quote}}</p>\n        </ion-item>\n\n        <ion-item *ngFor="let item of character[\'items\']">\n            {{item.title}}\n            <ion-note item-end>\n                {{item.note}}\n            </ion-note>\n        </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/nana/Documents/own_studying/ionic/ionic-helloworld/src/pages/modal/modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], ModalPage);
    return ModalPage;
}());

//# sourceMappingURL=modal.js.map

/***/ }),

/***/ 322:
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

/***/ 323:
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

/***/ 324:
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

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__poplist__ = __webpack_require__(326);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PopoverPage = /** @class */ (function () {
    function PopoverPage(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
    }
    PopoverPage.prototype.presentPopover = function (ev) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__poplist__["a" /* PoplistPage */], {
            contentEle: this.content.nativeElement,
            textEle: this.text.nativeElement
        });
        popover.present({
            ev: ev
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('popoverContent', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], PopoverPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('popoverText', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], PopoverPage.prototype, "text", void 0);
    PopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/nana/Documents/own_studying/ionic/ionic-helloworld/src/pages/popover/popover.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Popovers</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="presentPopover($event)">\n                <ion-icon name="more"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content #popoverContent padding class="popover-page">\n    <div #popoverText class="text-to-change">\n        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel ipsum in purus mollis dictum eget vitae purus. Nulla ultrices est odio, a maximus velit pretium ac. Donec vel elementum mi. Proin elementum pulvinar neque, in lacinia nibh tempus auctor. Nam sapien velit, commodo ac nibh a, maximus ullamcorper nunc. Integer luctus tortor dignissim, dictum neque at, scelerisque purus. Vivamus nec erat vel magna posuere euismod. Sed ac augue eu tellus tincidunt fermentum eget sit amet nunc. Donec sit amet mi libero. Cras nunc arcu, ultrices nec sapien eu, convallis posuere libero. Pellentesque vulputate lacus eros, at lobortis lorem egestas et. Vestibulum tempus quam in efficitur lobortis. Maecenas consectetur consequat sem pharetra aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</div>\n\n        <div>Mauris ac ligula elit. Nulla pulvinar eget leo ut aliquet. Praesent sit amet luctus quam. Nam fringilla iaculis mi, ut maximus mauris molestie feugiat. Curabitur nec scelerisque elit. Nunc eu odio facilisis, tempor enim eget, venenatis sem. Sed vitae lorem vehicula, auctor orci ultrices, finibus mauris. Donec vitae pulvinar diam. Nulla luctus congue quam, sed lacinia arcu dictum a.</div>\n\n        <div>Morbi laoreet magna elit, id dapibus massa varius consequat. Praesent rhoncus nunc quam, eu mollis velit commodo ut. Etiam euismod elit mi, non auctor velit blandit ut. Aenean vitae pulvinar mi, ac pretium tellus. Morbi eu auctor sem, sollicitudin cursus felis. Praesent vestibulum velit sed eros iaculis ornare. Praesent diam diam, pellentesque eget scelerisque sed, bibendum ut risus. Sed sed fermentum sem. Integer vel justo felis. Proin eget quam est. In sit amet ipsum sagittis, convallis ipsum fringilla, interdum ante. Etiam vel tincidunt mauris. Nunc feugiat eros nunc, et vestibulum metus mollis et. Nullam eu viverra velit, id ultrices nisl. Donec non enim elementum, laoreet sapien id, feugiat tellus.</div>\n\n        <div>Sed pellentesque ipsum eget ante hendrerit maximus. Aliquam id venenatis nulla. Nullam in nibh at enim vestibulum ullamcorper. Nam felis dolor, lobortis vel est non, condimentum malesuada nisl. In metus sapien, malesuada at nulla in, pretium aliquam turpis. Quisque elementum purus mi, sed tristique turpis ultricies in. Donec feugiat dolor non ultricies ultricies. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin ut purus et diam porta cursus vitae semper mi. Donec fringilla tellus orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc vitae commodo sem. Duis vehicula quam sit amet imperdiet facilisis. Pellentesque eget dignissim neque, et scelerisque libero. Maecenas molestie metus sed orci cursus, in venenatis justo dapibus.</div>\n\n        <div>Aenean rhoncus urna at interdum blandit. Donec ac massa nec libero vehicula tincidunt. Sed sit amet hendrerit risus. Aliquam vitae vestibulum ipsum, non feugiat orci. Vivamus eu rutrum elit. Nulla dapibus tortor non dignissim pretium. Nulla in luctus turpis. Etiam non mattis tortor, at aliquet ex. Nunc ut ante varius, auctor dui vel, volutpat elit. Nunc laoreet augue sit amet ultrices porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum pellentesque lobortis est, ut tincidunt ligula mollis sit amet. In porta risus arcu, quis pellentesque dolor mattis non. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/nana/Documents/own_studying/ionic/ionic-helloworld/src/pages/popover/popover.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */]])
    ], PopoverPage);
    return PopoverPage;
}());

//# sourceMappingURL=popover.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoplistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PoplistPage = /** @class */ (function () {
    function PoplistPage(navParams) {
        this.navParams = navParams;
        this.colors = {
            'white': {
                'bg': 'rgb(255, 255, 255)',
                'fg': 'rgb(0, 0, 0)'
            },
            'tan': {
                'bg': 'rgb(249, 241, 228)',
                'fg': 'rgb(0, 0, 0)'
            },
            'grey': {
                'bg': 'rgb(76, 75, 80)',
                'fg': 'rgb(255, 255, 255)'
            },
            'black': {
                'bg': 'rgb(0, 0, 0)',
                'fg': 'rgb(255, 255, 255)'
            },
        };
    }
    PoplistPage.prototype.ngOnInit = function () {
        if (this.navParams.data) {
            this.contentEle = this.navParams.data.contentEle;
            this.textEle = this.navParams.data.textEle;
            this.background = this.getColorName(this.contentEle.style.backgroundColor);
            this.setFontFamily();
        }
    };
    PoplistPage.prototype.getColorName = function (background) {
        var colorName = 'white';
        if (!background)
            return 'white';
        for (var key in this.colors) {
            if (this.colors[key].bg == background) {
                colorName = key;
            }
        }
        return colorName;
    };
    PoplistPage.prototype.setFontFamily = function () {
        if (this.textEle.style.fontFamily) {
            this.fontFamily = this.textEle.style.fontFamily.replace(/'/g, "");
        }
    };
    PoplistPage.prototype.changeBackground = function (color) {
        this.background = color;
        this.contentEle.style.backgroundColor = this.colors[color].bg;
        this.textEle.style.color = this.colors[color].fg;
    };
    PoplistPage.prototype.changeFontSize = function (direction) {
        this.textEle.style.fontSize = direction;
    };
    PoplistPage.prototype.changeFontFamily = function () {
        if (this.fontFamily)
            this.textEle.style.fontFamily = this.fontFamily;
    };
    PoplistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/nana/Documents/own_studying/ionic/ionic-helloworld/src/pages/popover/poplist.html"*/'<ion-list radio-group [(ngModel)]="fontFamily" (ionChange)="changeFontFamily()" class="popover-page">\n    <ion-row>\n        <ion-col>\n            <button (click)="changeFontSize(\'smaller\')" ion-item detail-none class="text-button text-smaller">A</button>\n        </ion-col>\n        <ion-col>\n            <button (click)="changeFontSize(\'larger\')" ion-item detail-none class="text-button text-larger">A</button>\n        </ion-col>\n    </ion-row>\n    <ion-row class="row-dots">\n        <ion-col>\n            <button ion-button="dot" (click)="changeBackground(\'white\')" class="dot-white" [class.selected]="background == \'white\'"></button>\n        </ion-col>\n        <ion-col>\n            <button ion-button="dot" (click)="changeBackground(\'tan\')" class="dot-tan" [class.selected]="background == \'tan\'"></button>\n        </ion-col>\n        <ion-col>\n            <button ion-button="dot" (click)="changeBackground(\'grey\')" class="dot-grey" [class.selected]="background == \'grey\'"></button>\n        </ion-col>\n        <ion-col>\n            <button ion-button="dot" (click)="changeBackground(\'black\')" class="dot-black" [class.selected]="background == \'black\'"></button>\n        </ion-col>\n    </ion-row>\n    <ion-item class="text-athelas">\n        <ion-label>Athelas</ion-label>\n        <ion-radio value="Athelas"></ion-radio>\n    </ion-item>\n    <ion-item class="text-charter">\n        <ion-label>Charter</ion-label>\n        <ion-radio value="Charter"></ion-radio>\n    </ion-item>\n    <ion-item class="text-iowan">\n        <ion-label>Iowan</ion-label>\n        <ion-radio value="Iowan"></ion-radio>\n    </ion-item>\n    <ion-item class="text-palatino">\n        <ion-label>Palatino</ion-label>\n        <ion-radio value="Palatino"></ion-radio>\n    </ion-item>\n    <ion-item class="text-san-francisco">\n        <ion-label>San Francisco</ion-label>\n        <ion-radio value="San Francisco"></ion-radio>\n    </ion-item>\n    <ion-item class="text-seravek">\n        <ion-label>Seravek</ion-label>\n        <ion-radio value="Seravek"></ion-radio>\n    </ion-item>\n    <ion-item class="text-times-new-roman">\n        <ion-label>Times New Roman</ion-label>\n        <ion-radio value="Times New Roman"></ion-radio>\n    </ion-item>\n</ion-list>\n'/*ion-inline-end:"/Users/nana/Documents/own_studying/ionic/ionic-helloworld/src/pages/popover/poplist.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], PoplistPage);
    return PoplistPage;
}());

//# sourceMappingURL=poplist.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CheckPage = /** @class */ (function () {
    function CheckPage() {
    }
    CheckPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/nana/Documents/own_studying/ionic/ionic-helloworld/src/pages/check/check.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Check</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content >\n\n    <ion-item>\n        <ion-label>Daenerys Targaryen</ion-label>\n        <ion-checkbox color="dark" checked="true"></ion-checkbox>\n    </ion-item>\n    <ion-item>\n        <ion-label>Yang Nana</ion-label>\n        <ion-checkbox color="primary"></ion-checkbox>\n    </ion-item>\n    <ion-item>\n        <ion-label>Phan Soong</ion-label>\n        <ion-checkbox color="light"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>Arya Stark</ion-label>\n        <ion-checkbox disabled="true"></ion-checkbox>\n    </ion-item>\n\n</ion-content>\n'/*ion-inline-end:"/Users/nana/Documents/own_studying/ionic/ionic-helloworld/src/pages/check/check.html"*/
        })
    ], CheckPage);
    return CheckPage;
}());

//# sourceMappingURL=check.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RadioPage = /** @class */ (function () {
    function RadioPage() {
    }
    RadioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/nana/Documents/own_studying/ionic/ionic-helloworld/src/pages/radio/radio.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Radio</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <ion-list radio-group>\n        <ion-list-header>\n            Language\n        </ion-list-header>\n\n        <ion-item>\n            <ion-label>Go</ion-label>\n            <ion-radio checked="true" value="go"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Rust</ion-label>\n            <ion-radio value="rust"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Python</ion-label>\n            <ion-radio value="python" disabled="true"></ion-radio>\n        </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/nana/Documents/own_studying/ionic/ionic-helloworld/src/pages/radio/radio.html"*/
        })
    ], RadioPage);
    return RadioPage;
}());

//# sourceMappingURL=radio.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RangePage = /** @class */ (function () {
    function RangePage() {
        this.brightness = 20;
        this.contrast = 0;
        this.warmth = 1300;
        this.structure = { lower: 33, upper: 60 };
        this.text = 0;
    }
    RangePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/nana/Documents/own_studying/ionic/ionic-helloworld/src/pages/range/range.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>\n            Ranges\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="outer-content">\n    <ion-list>\n        <ion-list-header>\n            Adjust Display\n        </ion-list-header>\n        <ion-item>\n            <ion-range [(ngModel)]="brightness">\n                <ion-icon range-left small name="sunny"></ion-icon>\n                <ion-icon range-right name="sunny"></ion-icon>\n            </ion-range>\n        </ion-item>\n        <ion-item>\n            <ion-range min="-200" max="200" pin="true" [(ngModel)]="contrast" color="secondary">\n                <ion-icon range-left small name="contrast"></ion-icon>\n                <ion-icon range-right name="contrast"></ion-icon>\n            </ion-range>\n        </ion-item>\n        <ion-item>\n            <ion-range dualKnobs="true" pin="true" [(ngModel)]="structure" color="dark">\n                <ion-icon range-left small name="brush"></ion-icon>\n                <ion-icon range-right name="brush"></ion-icon>\n            </ion-range>\n        </ion-item>\n        <ion-item>\n            <ion-range min="1000" max="2000" step="100" snaps="true" [(ngModel)]="warmth" color="danger">\n                <ion-icon range-left small color="danger" name="thermometer"></ion-icon>\n                <ion-icon range-right color="danger" name="thermometer"></ion-icon>\n            </ion-range>\n        </ion-item>\n    </ion-list>\n\n    <ion-list>\n        <ion-list-header>\n            Adjust Text\n        </ion-list-header>\n        <ion-item>\n            <ion-range min="-100" step="10" snaps="true" [(ngModel)]="text">\n                <ion-label range-left class="small-text">A</ion-label>\n                <ion-label range-right>A</ion-label>\n            </ion-range>\n        </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/nana/Documents/own_studying/ionic/ionic-helloworld/src/pages/range/range.html"*/
        })
    ], RangePage);
    return RangePage;
}());

//# sourceMappingURL=range.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
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

var SearchPage = /** @class */ (function () {
    function SearchPage() {
        this.initializeItems();
    }
    SearchPage.prototype.initializeItems = function () {
        this.items = [
            'Amsterdam',
            'Bogota',
            'Buenos Aires',
            'Cairo',
            'Dhaka',
            'Edinburgh',
            'Geneva',
            'Genoa',
            'Glasglow',
            'Hanoi',
            'Hong Kong',
            'Islamabad',
            'Istanbul',
            'Jakarta',
            'Kiel',
            'Kyoto',
            'Le Havre',
            'Lebanon',
            'Lhasa',
            'Lima',
            'London',
            'Los Angeles',
            'Madrid',
            'Manila',
            'New York',
            'Olympia',
            'Oslo',
            'Panama City',
            'Peking',
            'Philadelphia',
            'San Francisco',
            'Seoul',
            'Taipeh',
            'Tel Aviv',
            'Tokio',
            'Uelzen',
            'Washington'
        ];
    };
    SearchPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the ev target
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/nana/Documents/own_studying/ionic/ionic-helloworld/src/pages/search/search.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>\n            Searchbars\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n    <ion-list>\n        <ion-item *ngFor="let item of items">\n            {{ item }}\n        </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/nana/Documents/own_studying/ionic/ionic-helloworld/src/pages/search/search.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SegmentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SegmentPage = /** @class */ (function () {
    function SegmentPage(platform) {
        this.pet = "puppies";
        this.isAndroid = false;
        this.isAndroid = platform.is('android');
    }
    SegmentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/nana/Documents/own_studying/ionic/ionic-helloworld/src/pages/segment/segment.html"*/'<ion-header>\n    <ion-navbar no-border-bottom>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>\n            Segments\n        </ion-title>\n    </ion-navbar>\n\n    <ion-toolbar no-border-top>\n        <ion-segment [(ngModel)]="pet">\n            <ion-segment-button value="puppies">\n                Puppies\n            </ion-segment-button>\n            <ion-segment-button value="kittens">\n                Kittens\n            </ion-segment-button>\n            <ion-segment-button value="ducklings">\n                Ducklings\n            </ion-segment-button>\n        </ion-segment>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div [ngSwitch]="pet">\n        <ion-list *ngSwitchCase="\'puppies\'">\n            <ion-item>\n                <ion-thumbnail item-start>\n                    <img src="assets/imgs/thumbnail-puppy-1.jpg">\n                </ion-thumbnail>\n                <h2>Ruby</h2>\n            </ion-item>\n            <ion-item>\n                <ion-thumbnail item-start>\n                    <img src="assets/imgs/thumbnail-puppy-2.jpg">\n                </ion-thumbnail>\n                <h2>Oscar</h2>\n            </ion-item>\n            <ion-item>\n                <ion-thumbnail item-start>\n                    <img src="assets/imgs/thumbnail-puppy-4.jpg">\n                </ion-thumbnail>\n                <h2>Zoey</h2>\n            </ion-item>\n            <ion-item>\n                <ion-thumbnail item-start>\n                    <img src="assets/imgs/thumbnail-puppy-3.jpg">\n                </ion-thumbnail>\n                <h2>Otto</h2>\n            </ion-item>\n        </ion-list>\n\n        <ion-list *ngSwitchCase="\'kittens\'">\n            <ion-item>\n                <ion-thumbnail item-start>\n                    <img src="assets/imgs/thumbnail-kitten-1.jpg">\n                </ion-thumbnail>\n                <h2>Luna</h2>\n            </ion-item>\n            <ion-item>\n                <ion-thumbnail item-start>\n                    <img src="assets/imgs/thumbnail-kitten-3.jpg">\n                </ion-thumbnail>\n                <h2>Milo</h2>\n            </ion-item>\n            <ion-item>\n                <ion-thumbnail item-start>\n                    <img src="assets/imgs/thumbnail-kitten-4.jpg">\n                </ion-thumbnail>\n                <h2>Bandit</h2>\n            </ion-item>\n            <ion-item>\n                <ion-thumbnail item-start>\n                    <img src="assets/imgs/thumbnail-kitten-2.jpg">\n                </ion-thumbnail>\n                <h2>Nala</h2>\n            </ion-item>\n        </ion-list>\n\n        <ion-list *ngSwitchCase="\'ducklings\'">\n            <ion-item>\n                <ion-thumbnail item-start>\n                    <img src="assets/imgs/thumbnail-duckling-1.jpg">\n                </ion-thumbnail>\n                <h2>Daffy</h2>\n            </ion-item>\n            <ion-item>\n                <ion-thumbnail item-start>\n                    <img src="assets/imgs/thumbnail-duckling-2.jpg">\n                </ion-thumbnail>\n                <h2>Huey</h2>\n            </ion-item>\n            <ion-item>\n                <ion-thumbnail item-start>\n                    <img src="assets/imgs/thumbnail-duckling-3.jpg">\n                </ion-thumbnail>\n                <h2>Dewey</h2>\n            </ion-item>\n            <ion-item>\n                <ion-thumbnail item-start>\n                    <img src="assets/imgs/thumbnail-duckling-4.jpg">\n                </ion-thumbnail>\n                <h2>Louie</h2>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/nana/Documents/own_studying/ionic/ionic-helloworld/src/pages/segment/segment.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
    ], SegmentPage);
    return SegmentPage;
}());

//# sourceMappingURL=segment.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectPage; });
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

var SelectPage = /** @class */ (function () {
    function SelectPage() {
        this.gaming = "n64";
        this.gender = "f";
        this.musicAlertOpts = {
            title: '1994 Music',
            subTitle: 'Select your favorite'
        };
    }
    SelectPage.prototype.stpSelect = function () {
        console.log('STP selected');
    };
    SelectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/nana/Documents/own_studying/ionic/ionic-helloworld/src/pages/select/select.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>\n            Selects\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n        <ion-item>\n            <ion-label>Gender</ion-label>\n            <ion-select [(ngModel)]="gender">\n                <ion-option value="f">Female</ion-option>\n                <ion-option value="m">Male</ion-option>\n            </ion-select>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Gaming</ion-label>\n            <ion-select [(ngModel)]="gaming" interface="popover">\n                <ion-option value="nes">NES</ion-option>\n                <ion-option value="n64">Nintendo64</ion-option>\n                <ion-option value="ps">PlayStation</ion-option>\n                <ion-option value="genesis">Sega Genesis</ion-option>\n                <ion-option value="saturn">Sega Saturn</ion-option>\n                <ion-option value="snes">SNES</ion-option>\n            </ion-select>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Notifications</ion-label>\n            <ion-select [(ngModel)]="notifications" interface="action-sheet">\n                <ion-option value="enable">Enable</ion-option>\n                <ion-option value="mute">Mute</ion-option>\n                <ion-option value="mute_week">Mute for a week</ion-option>\n                <ion-option value="mute_year" (ionSelect)="notificationSelect($event)">Mute for a year</ion-option>\n            </ion-select>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Operating System</ion-label>\n            <ion-select [(ngModel)]="os" submitText="Okay" cancelText="Nah">\n                <ion-option value="dos">DOS</ion-option>\n                <ion-option value="lunix">Linux</ion-option>\n                <ion-option value="mac7">Mac OS 7</ion-option>\n                <ion-option value="mac8">Mac OS 8</ion-option>\n                <ion-option value="win3.1">Windows 3.1</ion-option>\n                <ion-option value="win95">Windows 95</ion-option>\n                <ion-option value="win98">Windows 98</ion-option>\n            </ion-select>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Music</ion-label>\n            <ion-select [(ngModel)]="music" [selectOptions]="musicAlertOpts">\n                <ion-option>Alice in Chains</ion-option>\n                <ion-option>Green Day</ion-option>\n                <ion-option>Nirvana</ion-option>\n                <ion-option>Pearl Jam</ion-option>\n                <ion-option>Smashing Pumpkins</ion-option>\n                <ion-option>Soundgarden</ion-option>\n                <ion-option (select)="stpSelect()">Stone Temple Pilots</ion-option>\n            </ion-select>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Date</ion-label>\n            <ion-select [(ngModel)]="month">\n                <ion-option value="01">January</ion-option>\n                <ion-option value="02">February</ion-option>\n                <ion-option value="03">March</ion-option>\n                <ion-option value="04">April</ion-option>\n                <ion-option value="05">May</ion-option>\n                <ion-option value="06">June</ion-option>\n                <ion-option value="07">July</ion-option>\n                <ion-option value="08">August</ion-option>\n                <ion-option value="09">September</ion-option>\n                <ion-option value="10">October</ion-option>\n                <ion-option value="11">November</ion-option>\n                <ion-option value="12" checked="true">December</ion-option>\n            </ion-select>\n            <ion-select [(ngModel)]="year">\n                <ion-option>1989</ion-option>\n                <ion-option>1990</ion-option>\n                <ion-option>1991</ion-option>\n                <ion-option>1992</ion-option>\n                <ion-option>1993</ion-option>\n                <ion-option checked="true">1994</ion-option>\n                <ion-option>1995</ion-option>\n                <ion-option>1996</ion-option>\n                <ion-option>1997</ion-option>\n                <ion-option>1998</ion-option>\n                <ion-option>1999</ion-option>\n            </ion-select>\n        </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/nana/Documents/own_studying/ionic/ionic-helloworld/src/pages/select/select.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SelectPage);
    return SelectPage;
}());

//# sourceMappingURL=select.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlidePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SlidePage = /** @class */ (function () {
    function SlidePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.slides = [
            {
                title: "Welcome to the Docs!",
                description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
                image: "assets/imgs/ica-slidebox-img-1.png",
            },
            {
                title: "What is Ionic?",
                description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
                image: "assets/imgs/ica-slidebox-img-2.png",
            },
            {
                title: "What is Ionic Cloud?",
                description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
                image: "assets/imgs/ica-slidebox-img-3.png",
            }
        ];
    }
    SlidePage.prototype.continue = function () {
        //push another page onto the history stack
        //causing the nav controller to animate the new page in
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    SlidePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/nana/Documents/own_studying/ionic/ionic-helloworld/src/pages/slide/slide.html"*/'<ion-content class="tutorial-page">\n\n    <ion-slides pager>\n        <ion-slide *ngFor="let slide of slides">\n            <ion-toolbar>\n                <ion-buttons end>\n                    <button ion-button color="primary" (click)="continue()">Skip</button>\n                </ion-buttons>\n            </ion-toolbar>\n            <img [src]="slide.image" class="slide-image"/>\n            <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n            <p [innerHTML]="slide.description"></p>\n        </ion-slide>\n        <ion-slide>\n            <ion-toolbar>\n            </ion-toolbar>\n            <img src="assets/imgs/ica-slidebox-img-4.png" class="slide-image"/>\n            <h2 class="slide-title">Ready to Play?</h2>\n            <button ion-button large clear icon-end color="primary" (click)="continue()">\n                Continue\n                <ion-icon name="arrow-forward"></ion-icon>\n            </button>\n        </ion-slide>\n    </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/Users/nana/Documents/own_studying/ionic/ionic-helloworld/src/pages/slide/slide.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], SlidePage);
    return SlidePage;
}());

//# sourceMappingURL=slide.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tabBasicContent__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grid_grid__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__card_card__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TabPage = /** @class */ (function () {
    function TabPage() {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_1__tabBasicContent__["a" /* TabBasicContentPage */];
        this.gridPage = __WEBPACK_IMPORTED_MODULE_2__grid_grid__["a" /* GridPage */];
        this.cardPage = __WEBPACK_IMPORTED_MODULE_3__card_card__["a" /* CardPage */];
    }
    TabPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/nana/Documents/own_studying/ionic/ionic-helloworld/src/pages/tab/tab.html"*/'<ion-tabs class="tabs-basic">\n    <ion-tab tabTitle="Tab 1" [root]="rootPage"></ion-tab>\n    <ion-tab tabIcon="grid" tabTitle="Grid" [root]="gridPage" tabBadge="3" tabBadgeStyle="danger"></ion-tab>\n    <ion-tab tabIcon="albums" tabTitle="Card" [root]="cardPage"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/nana/Documents/own_studying/ionic/ionic-helloworld/src/pages/tab/tab.html"*/
        })
    ], TabPage);
    return TabPage;
}());

//# sourceMappingURL=tab.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabBasicContentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabBasicContentPage = /** @class */ (function () {
    function TabBasicContentPage(platform) {
        this.isAndroid = false;
        this.isAndroid = platform.is('android');
    }
    TabBasicContentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/nana/Documents/own_studying/ionic/ionic-helloworld/src/pages/tab/tabBasicContent.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Tabs</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n</ion-content>\n'/*ion-inline-end:"/Users/nana/Documents/own_studying/ionic/ionic-helloworld/src/pages/tab/tabBasicContent.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
    ], TabBasicContentPage);
    return TabBasicContentPage;
}());

//# sourceMappingURL=tabBasicContent.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(359);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_card_card__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_fab_fab__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_gesture_gesture__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_grid_grid__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_input_input__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_modal_modal__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_popover_popover__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_popover_poplist__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_check_check__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_radio_radio__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_range_range__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_search_search__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_segment_segment__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_select_select__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_slide_slide__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_tab_tab__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_tab_tabBasicContent__ = __webpack_require__(335);
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
                __WEBPACK_IMPORTED_MODULE_12__pages_input_input__["a" /* InputPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_modal_modal__["a" /* ModalPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_popover_popover__["a" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_popover_poplist__["a" /* PoplistPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_check_check__["a" /* CheckPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_radio_radio__["a" /* RadioPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_range_range__["a" /* RangePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_segment_segment__["a" /* SegmentPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_select_select__["a" /* SelectPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_slide_slide__["a" /* SlidePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_tab_tab__["a" /* TabPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_tab_tabBasicContent__["a" /* TabBasicContentPage */]
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
                __WEBPACK_IMPORTED_MODULE_12__pages_input_input__["a" /* InputPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_modal_modal__["a" /* ModalPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_popover_popover__["a" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_popover_poplist__["a" /* PoplistPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_check_check__["a" /* CheckPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_radio_radio__["a" /* RadioPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_range_range__["a" /* RangePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_segment_segment__["a" /* SegmentPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_select_select__["a" /* SelectPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_slide_slide__["a" /* SlidePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_tab_tab__["a" /* TabPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_tab_tabBasicContent__["a" /* TabBasicContentPage */]
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

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_card_card__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_fab_fab__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_gesture_gesture__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_grid_grid__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_input_input__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_popover_popover__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_check_check__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_radio_radio__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_range_range__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_search_search__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_segment_segment__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_select_select__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_slide_slide__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_tab_tab__ = __webpack_require__(334);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_18__pages_slide_slide__["a" /* SlidePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Card', component: __WEBPACK_IMPORTED_MODULE_6__pages_card_card__["a" /* CardPage */] },
            { title: 'Check', component: __WEBPACK_IMPORTED_MODULE_12__pages_check_check__["a" /* CheckPage */] },
            { title: 'Fab', component: __WEBPACK_IMPORTED_MODULE_7__pages_fab_fab__["a" /* FabPage */] },
            { title: 'Gesture', component: __WEBPACK_IMPORTED_MODULE_8__pages_gesture_gesture__["a" /* GesturePage */] },
            { title: 'Grid', component: __WEBPACK_IMPORTED_MODULE_9__pages_grid_grid__["a" /* GridPage */] },
            { title: 'Input', component: __WEBPACK_IMPORTED_MODULE_10__pages_input_input__["a" /* InputPage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { title: 'Popover', component: __WEBPACK_IMPORTED_MODULE_11__pages_popover_popover__["a" /* PopoverPage */] },
            { title: 'Radio', component: __WEBPACK_IMPORTED_MODULE_13__pages_radio_radio__["a" /* RadioPage */] },
            { title: 'Range', component: __WEBPACK_IMPORTED_MODULE_14__pages_range_range__["a" /* RangePage */] },
            { title: 'Search', component: __WEBPACK_IMPORTED_MODULE_15__pages_search_search__["a" /* SearchPage */] },
            { title: 'Segment', component: __WEBPACK_IMPORTED_MODULE_16__pages_segment_segment__["a" /* SegmentPage */] },
            { title: 'Select', component: __WEBPACK_IMPORTED_MODULE_17__pages_select_select__["a" /* SelectPage */] },
            { title: 'Tab', component: __WEBPACK_IMPORTED_MODULE_19__pages_tab_tab__["a" /* TabPage */] }
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/nana/Documents/own_studying/ionic/ionic-helloworld/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n      <button ion-item menuClose="left">\n        Close Menu\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/nana/Documents/own_studying/ionic/ionic-helloworld/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 198,
	"./af.js": 198,
	"./ar": 199,
	"./ar-dz": 200,
	"./ar-dz.js": 200,
	"./ar-kw": 201,
	"./ar-kw.js": 201,
	"./ar-ly": 202,
	"./ar-ly.js": 202,
	"./ar-ma": 203,
	"./ar-ma.js": 203,
	"./ar-sa": 204,
	"./ar-sa.js": 204,
	"./ar-tn": 205,
	"./ar-tn.js": 205,
	"./ar.js": 199,
	"./az": 206,
	"./az.js": 206,
	"./be": 207,
	"./be.js": 207,
	"./bg": 208,
	"./bg.js": 208,
	"./bm": 209,
	"./bm.js": 209,
	"./bn": 210,
	"./bn.js": 210,
	"./bo": 211,
	"./bo.js": 211,
	"./br": 212,
	"./br.js": 212,
	"./bs": 213,
	"./bs.js": 213,
	"./ca": 214,
	"./ca.js": 214,
	"./cs": 215,
	"./cs.js": 215,
	"./cv": 216,
	"./cv.js": 216,
	"./cy": 217,
	"./cy.js": 217,
	"./da": 218,
	"./da.js": 218,
	"./de": 219,
	"./de-at": 220,
	"./de-at.js": 220,
	"./de-ch": 221,
	"./de-ch.js": 221,
	"./de.js": 219,
	"./dv": 222,
	"./dv.js": 222,
	"./el": 223,
	"./el.js": 223,
	"./en-au": 224,
	"./en-au.js": 224,
	"./en-ca": 225,
	"./en-ca.js": 225,
	"./en-gb": 226,
	"./en-gb.js": 226,
	"./en-ie": 227,
	"./en-ie.js": 227,
	"./en-il": 228,
	"./en-il.js": 228,
	"./en-nz": 229,
	"./en-nz.js": 229,
	"./eo": 230,
	"./eo.js": 230,
	"./es": 231,
	"./es-do": 232,
	"./es-do.js": 232,
	"./es-us": 233,
	"./es-us.js": 233,
	"./es.js": 231,
	"./et": 234,
	"./et.js": 234,
	"./eu": 235,
	"./eu.js": 235,
	"./fa": 236,
	"./fa.js": 236,
	"./fi": 237,
	"./fi.js": 237,
	"./fo": 238,
	"./fo.js": 238,
	"./fr": 239,
	"./fr-ca": 240,
	"./fr-ca.js": 240,
	"./fr-ch": 241,
	"./fr-ch.js": 241,
	"./fr.js": 239,
	"./fy": 242,
	"./fy.js": 242,
	"./gd": 243,
	"./gd.js": 243,
	"./gl": 244,
	"./gl.js": 244,
	"./gom-latn": 245,
	"./gom-latn.js": 245,
	"./gu": 246,
	"./gu.js": 246,
	"./he": 247,
	"./he.js": 247,
	"./hi": 248,
	"./hi.js": 248,
	"./hr": 249,
	"./hr.js": 249,
	"./hu": 250,
	"./hu.js": 250,
	"./hy-am": 251,
	"./hy-am.js": 251,
	"./id": 252,
	"./id.js": 252,
	"./is": 253,
	"./is.js": 253,
	"./it": 254,
	"./it.js": 254,
	"./ja": 255,
	"./ja.js": 255,
	"./jv": 256,
	"./jv.js": 256,
	"./ka": 257,
	"./ka.js": 257,
	"./kk": 258,
	"./kk.js": 258,
	"./km": 259,
	"./km.js": 259,
	"./kn": 260,
	"./kn.js": 260,
	"./ko": 261,
	"./ko.js": 261,
	"./ky": 262,
	"./ky.js": 262,
	"./lb": 263,
	"./lb.js": 263,
	"./lo": 264,
	"./lo.js": 264,
	"./lt": 265,
	"./lt.js": 265,
	"./lv": 266,
	"./lv.js": 266,
	"./me": 267,
	"./me.js": 267,
	"./mi": 268,
	"./mi.js": 268,
	"./mk": 269,
	"./mk.js": 269,
	"./ml": 270,
	"./ml.js": 270,
	"./mn": 271,
	"./mn.js": 271,
	"./mr": 272,
	"./mr.js": 272,
	"./ms": 273,
	"./ms-my": 274,
	"./ms-my.js": 274,
	"./ms.js": 273,
	"./mt": 275,
	"./mt.js": 275,
	"./my": 276,
	"./my.js": 276,
	"./nb": 277,
	"./nb.js": 277,
	"./ne": 278,
	"./ne.js": 278,
	"./nl": 279,
	"./nl-be": 280,
	"./nl-be.js": 280,
	"./nl.js": 279,
	"./nn": 281,
	"./nn.js": 281,
	"./pa-in": 282,
	"./pa-in.js": 282,
	"./pl": 283,
	"./pl.js": 283,
	"./pt": 284,
	"./pt-br": 285,
	"./pt-br.js": 285,
	"./pt.js": 284,
	"./ro": 286,
	"./ro.js": 286,
	"./ru": 287,
	"./ru.js": 287,
	"./sd": 288,
	"./sd.js": 288,
	"./se": 289,
	"./se.js": 289,
	"./si": 290,
	"./si.js": 290,
	"./sk": 291,
	"./sk.js": 291,
	"./sl": 292,
	"./sl.js": 292,
	"./sq": 293,
	"./sq.js": 293,
	"./sr": 294,
	"./sr-cyrl": 295,
	"./sr-cyrl.js": 295,
	"./sr.js": 294,
	"./ss": 296,
	"./ss.js": 296,
	"./sv": 297,
	"./sv.js": 297,
	"./sw": 298,
	"./sw.js": 298,
	"./ta": 299,
	"./ta.js": 299,
	"./te": 300,
	"./te.js": 300,
	"./tet": 301,
	"./tet.js": 301,
	"./tg": 302,
	"./tg.js": 302,
	"./th": 303,
	"./th.js": 303,
	"./tl-ph": 304,
	"./tl-ph.js": 304,
	"./tlh": 305,
	"./tlh.js": 305,
	"./tr": 306,
	"./tr.js": 306,
	"./tzl": 307,
	"./tzl.js": 307,
	"./tzm": 308,
	"./tzm-latn": 309,
	"./tzm-latn.js": 309,
	"./tzm.js": 308,
	"./ug-cn": 310,
	"./ug-cn.js": 310,
	"./uk": 311,
	"./uk.js": 311,
	"./ur": 312,
	"./ur.js": 312,
	"./uz": 313,
	"./uz-latn": 314,
	"./uz-latn.js": 314,
	"./uz.js": 313,
	"./vi": 315,
	"./vi.js": 315,
	"./x-pseudo": 316,
	"./x-pseudo.js": 316,
	"./yo": 317,
	"./yo.js": 317,
	"./zh-cn": 318,
	"./zh-cn.js": 318,
	"./zh-hk": 319,
	"./zh-hk.js": 319,
	"./zh-tw": 320,
	"./zh-tw.js": 320
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
webpackContext.id = 411;

/***/ })

},[336]);
//# sourceMappingURL=main.js.map