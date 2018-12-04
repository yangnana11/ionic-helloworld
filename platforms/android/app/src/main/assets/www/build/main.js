webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
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

/***/ 110:
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
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
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
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_modal__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_list__ = __webpack_require__(100);
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

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
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

/***/ 320:
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

/***/ 321:
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

/***/ 322:
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

/***/ 323:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/nana/Documents/own_studying/ionic/ionic-helloworld/src/pages/radio/radio.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Radio</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-list radio-group>\n    <ion-list-header>\n        Language\n    </ion-list-header>\n\n    <ion-item>\n        <ion-label>Go</ion-label>\n        <ion-radio checked="true" value="go"></ion-radio>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>Rust</ion-label>\n        <ion-radio value="rust"></ion-radio>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>Python</ion-label>\n        <ion-radio value="python" disabled="true"></ion-radio>\n    </ion-item>\n</ion-list>\n'/*ion-inline-end:"/Users/nana/Documents/own_studying/ionic/ionic-helloworld/src/pages/radio/radio.html"*/
        })
    ], RadioPage);
    return RadioPage;
}());

//# sourceMappingURL=radio.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(352);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_card_card__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_fab_fab__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_gesture_gesture__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_grid_grid__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_input_input__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_modal_modal__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_popover_popover__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_popover_poplist__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_check_check__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_radio_radio__ = __webpack_require__(328);
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
                __WEBPACK_IMPORTED_MODULE_17__pages_radio_radio__["a" /* RadioPage */]
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
                __WEBPACK_IMPORTED_MODULE_17__pages_radio_radio__["a" /* RadioPage */]
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

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_card_card__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_fab_fab__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_gesture_gesture__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_grid_grid__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_input_input__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_popover_popover__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_check_check__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_radio_radio__ = __webpack_require__(328);
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
            { title: 'Card', component: __WEBPACK_IMPORTED_MODULE_6__pages_card_card__["a" /* CardPage */] },
            { title: 'Check', component: __WEBPACK_IMPORTED_MODULE_12__pages_check_check__["a" /* CheckPage */] },
            { title: 'Fab', component: __WEBPACK_IMPORTED_MODULE_7__pages_fab_fab__["a" /* FabPage */] },
            { title: 'Gesture', component: __WEBPACK_IMPORTED_MODULE_8__pages_gesture_gesture__["a" /* GesturePage */] },
            { title: 'Grid', component: __WEBPACK_IMPORTED_MODULE_9__pages_grid_grid__["a" /* GridPage */] },
            { title: 'Input', component: __WEBPACK_IMPORTED_MODULE_10__pages_input_input__["a" /* InputPage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { title: 'Popover', component: __WEBPACK_IMPORTED_MODULE_11__pages_popover_popover__["a" /* PopoverPage */] },
            { title: 'Radio', component: __WEBPACK_IMPORTED_MODULE_13__pages_radio_radio__["a" /* RadioPage */] }
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

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 196,
	"./af.js": 196,
	"./ar": 197,
	"./ar-dz": 198,
	"./ar-dz.js": 198,
	"./ar-kw": 199,
	"./ar-kw.js": 199,
	"./ar-ly": 200,
	"./ar-ly.js": 200,
	"./ar-ma": 201,
	"./ar-ma.js": 201,
	"./ar-sa": 202,
	"./ar-sa.js": 202,
	"./ar-tn": 203,
	"./ar-tn.js": 203,
	"./ar.js": 197,
	"./az": 204,
	"./az.js": 204,
	"./be": 205,
	"./be.js": 205,
	"./bg": 206,
	"./bg.js": 206,
	"./bm": 207,
	"./bm.js": 207,
	"./bn": 208,
	"./bn.js": 208,
	"./bo": 209,
	"./bo.js": 209,
	"./br": 210,
	"./br.js": 210,
	"./bs": 211,
	"./bs.js": 211,
	"./ca": 212,
	"./ca.js": 212,
	"./cs": 213,
	"./cs.js": 213,
	"./cv": 214,
	"./cv.js": 214,
	"./cy": 215,
	"./cy.js": 215,
	"./da": 216,
	"./da.js": 216,
	"./de": 217,
	"./de-at": 218,
	"./de-at.js": 218,
	"./de-ch": 219,
	"./de-ch.js": 219,
	"./de.js": 217,
	"./dv": 220,
	"./dv.js": 220,
	"./el": 221,
	"./el.js": 221,
	"./en-au": 222,
	"./en-au.js": 222,
	"./en-ca": 223,
	"./en-ca.js": 223,
	"./en-gb": 224,
	"./en-gb.js": 224,
	"./en-ie": 225,
	"./en-ie.js": 225,
	"./en-il": 226,
	"./en-il.js": 226,
	"./en-nz": 227,
	"./en-nz.js": 227,
	"./eo": 228,
	"./eo.js": 228,
	"./es": 229,
	"./es-do": 230,
	"./es-do.js": 230,
	"./es-us": 231,
	"./es-us.js": 231,
	"./es.js": 229,
	"./et": 232,
	"./et.js": 232,
	"./eu": 233,
	"./eu.js": 233,
	"./fa": 234,
	"./fa.js": 234,
	"./fi": 235,
	"./fi.js": 235,
	"./fo": 236,
	"./fo.js": 236,
	"./fr": 237,
	"./fr-ca": 238,
	"./fr-ca.js": 238,
	"./fr-ch": 239,
	"./fr-ch.js": 239,
	"./fr.js": 237,
	"./fy": 240,
	"./fy.js": 240,
	"./gd": 241,
	"./gd.js": 241,
	"./gl": 242,
	"./gl.js": 242,
	"./gom-latn": 243,
	"./gom-latn.js": 243,
	"./gu": 244,
	"./gu.js": 244,
	"./he": 245,
	"./he.js": 245,
	"./hi": 246,
	"./hi.js": 246,
	"./hr": 247,
	"./hr.js": 247,
	"./hu": 248,
	"./hu.js": 248,
	"./hy-am": 249,
	"./hy-am.js": 249,
	"./id": 250,
	"./id.js": 250,
	"./is": 251,
	"./is.js": 251,
	"./it": 252,
	"./it.js": 252,
	"./ja": 253,
	"./ja.js": 253,
	"./jv": 254,
	"./jv.js": 254,
	"./ka": 255,
	"./ka.js": 255,
	"./kk": 256,
	"./kk.js": 256,
	"./km": 257,
	"./km.js": 257,
	"./kn": 258,
	"./kn.js": 258,
	"./ko": 259,
	"./ko.js": 259,
	"./ky": 260,
	"./ky.js": 260,
	"./lb": 261,
	"./lb.js": 261,
	"./lo": 262,
	"./lo.js": 262,
	"./lt": 263,
	"./lt.js": 263,
	"./lv": 264,
	"./lv.js": 264,
	"./me": 265,
	"./me.js": 265,
	"./mi": 266,
	"./mi.js": 266,
	"./mk": 267,
	"./mk.js": 267,
	"./ml": 268,
	"./ml.js": 268,
	"./mn": 269,
	"./mn.js": 269,
	"./mr": 270,
	"./mr.js": 270,
	"./ms": 271,
	"./ms-my": 272,
	"./ms-my.js": 272,
	"./ms.js": 271,
	"./mt": 273,
	"./mt.js": 273,
	"./my": 274,
	"./my.js": 274,
	"./nb": 275,
	"./nb.js": 275,
	"./ne": 276,
	"./ne.js": 276,
	"./nl": 277,
	"./nl-be": 278,
	"./nl-be.js": 278,
	"./nl.js": 277,
	"./nn": 279,
	"./nn.js": 279,
	"./pa-in": 280,
	"./pa-in.js": 280,
	"./pl": 281,
	"./pl.js": 281,
	"./pt": 282,
	"./pt-br": 283,
	"./pt-br.js": 283,
	"./pt.js": 282,
	"./ro": 284,
	"./ro.js": 284,
	"./ru": 285,
	"./ru.js": 285,
	"./sd": 286,
	"./sd.js": 286,
	"./se": 287,
	"./se.js": 287,
	"./si": 288,
	"./si.js": 288,
	"./sk": 289,
	"./sk.js": 289,
	"./sl": 290,
	"./sl.js": 290,
	"./sq": 291,
	"./sq.js": 291,
	"./sr": 292,
	"./sr-cyrl": 293,
	"./sr-cyrl.js": 293,
	"./sr.js": 292,
	"./ss": 294,
	"./ss.js": 294,
	"./sv": 295,
	"./sv.js": 295,
	"./sw": 296,
	"./sw.js": 296,
	"./ta": 297,
	"./ta.js": 297,
	"./te": 298,
	"./te.js": 298,
	"./tet": 299,
	"./tet.js": 299,
	"./tg": 300,
	"./tg.js": 300,
	"./th": 301,
	"./th.js": 301,
	"./tl-ph": 302,
	"./tl-ph.js": 302,
	"./tlh": 303,
	"./tlh.js": 303,
	"./tr": 304,
	"./tr.js": 304,
	"./tzl": 305,
	"./tzl.js": 305,
	"./tzm": 306,
	"./tzm-latn": 307,
	"./tzm-latn.js": 307,
	"./tzm.js": 306,
	"./ug-cn": 308,
	"./ug-cn.js": 308,
	"./uk": 309,
	"./uk.js": 309,
	"./ur": 310,
	"./ur.js": 310,
	"./uz": 311,
	"./uz-latn": 312,
	"./uz-latn.js": 312,
	"./uz.js": 311,
	"./vi": 313,
	"./vi.js": 313,
	"./x-pseudo": 314,
	"./x-pseudo.js": 314,
	"./yo": 315,
	"./yo.js": 315,
	"./zh-cn": 316,
	"./zh-cn.js": 316,
	"./zh-hk": 317,
	"./zh-hk.js": 317,
	"./zh-tw": 318,
	"./zh-tw.js": 318
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
webpackContext.id = 404;

/***/ })

},[329]);
//# sourceMappingURL=main.js.map