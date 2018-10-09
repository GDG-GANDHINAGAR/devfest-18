(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-fixed\" [ngClass]=\"{'shadow': isOnHome}\">\n  <nav  [ngClass]=\"{'hidenav': !loaded}\"> \n    <div class=\"nav-wrapper \">\n      <a data-target=\"slide-out\" class=\" sidenav-trigger hide-on-large-only\"><i class=\"material-icons\">menu</i></a>\n      <div class=\"container\">\n        <a href=\"#\" class=\"brand-logo\">\n          <!-- <img src=\"assets/images/df_logo_mono_purple.svg\" alt=\"\"> -->\n        </a>\n        <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n          <li routerLinkActive=\"active\"><a routerLink=\"/home\">Home</a></li>\n          <!-- <li><a href=\"speakers.html\">Schedule</a></li>\n          <li routerLinkActive=\"active\" ><a routerLink=\"/speakers\" >Speakers</a></li> -->\n          <li routerLinkActive=\"active\"><a routerLink=\"/team\">Team</a></li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n</div>\n<ul id=\"slide-out\" class=\"sidenav\">\n  <li>\n    <div class=\"user-view\">\n      <div class=\"background\">\n        <img src=\"assets/images/home.jpg\">\n      </div>\n      <a href=\"#user\" id='nav-logo'><img class=\"\" src=\"assets/images/df_logo.svg\"></a>\n    </div>\n  </li>\n  <li><a class=\"sidenav-close\" routerLink='/home'>Home</a></li>\n  <li><a class=\"sidenav-close\" routerLink='/team'>Team</a></li>\n  <li>\n    <div class=\"divider\"></div>\n  </li>\n  <li><a class=\"subheader\">Resources</a></li>\n  <li><a class=\"sidenav-close waves-effect\" href=\"https://goo.gl/forms/BS1SCfp07OeZNb2S2\" target=\"_blank\">Call for\n      Speakers</a></li>\n</ul>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(router, activeRoute, db, taskService) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.db = db;
        this.taskService = taskService;
        this.isOnHome = false;
        this.loaded = false;
        this.title = 'devfestSite';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (data) { return data instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; })).subscribe(function (data) {
            _this.url = data['url'];
            if (data['url'] !== '' || data['url'] !== '/home') {
                _this.isOnHome = true;
            }
            console.log(data);
        });
        setTimeout(function (val) {
            _this.destroySideNav();
            $('.sidenav').sidenav({
                closeOnClick: true
            });
            _this.isOnHome = _this.getIsonHome();
            _this.loaded = true;
        }, 500);
    };
    AppComponent.prototype.onWindowScroll = function (event) {
        this.isOnHome = this.getIsonHome();
    };
    AppComponent.prototype.getIsonHome = function () {
        if (this.url === '' || this.url === '/home') {
            return window.pageYOffset > (window.innerHeight * 0.5) ? true : false;
        }
        else {
            return true;
        }
    };
    // destroy side nav
    AppComponent.prototype.destroySideNav = function () {
        var $overlay = $('#sidenav-overlay');
        var $dragTarget = $('.drag-target[data-sidenav="' + $('.button-collapse').attr('data-activates') + '"]');
        $overlay.trigger('click');
        $dragTarget.remove();
        $('.button-collapse').off('click');
        $overlay.remove();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("window:scroll", ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "onWindowScroll", null);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.config.ts":
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
var config = {
    collection_endpoint: 'Subscribers'
};


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.router */ "./src/app/app.router.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home-page/home-page.component */ "./src/app/components/home-page/home-page.component.ts");
/* harmony import */ var _components_home_page_home_block_home_block_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home-page/home-block/home-block.component */ "./src/app/components/home-page/home-block/home-block.component.ts");
/* harmony import */ var _components_home_page_about_block_about_block_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home-page/about-block/about-block.component */ "./src/app/components/home-page/about-block/about-block.component.ts");
/* harmony import */ var _components_home_page_speaker_block_speaker_block_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home-page/speaker-block/speaker-block.component */ "./src/app/components/home-page/speaker-block/speaker-block.component.ts");
/* harmony import */ var _components_home_page_ticket_block_ticket_block_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home-page/ticket-block/ticket-block.component */ "./src/app/components/home-page/ticket-block/ticket-block.component.ts");
/* harmony import */ var _components_home_page_team_block_team_block_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home-page/team-block/team-block.component */ "./src/app/components/home-page/team-block/team-block.component.ts");
/* harmony import */ var _components_home_page_map_block_map_block_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home-page/map-block/map-block.component */ "./src/app/components/home-page/map-block/map-block.component.ts");
/* harmony import */ var _components_home_page_partners_block_partners_block_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home-page/partners-block/partners-block.component */ "./src/app/components/home-page/partners-block/partners-block.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_speakers_page_speakers_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/speakers-page/speakers-page.component */ "./src/app/components/speakers-page/speakers-page.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _components_team_page_team_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/team-page/team-page.component */ "./src/app/components/team-page/team-page.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var config = {
    apiKey: "AIzaSyBUMZKY2ji3Dpe-Yoicos30GrpP9Au_LFM",
    authDomain: "devfest-18-6be27.firebaseapp.com",
    databaseURL: "https://devfest-18-6be27.firebaseio.com",
    projectId: "devfest-18-6be27",
    storageBucket: "devfest-18-6be27.appspot.com",
    messagingSenderId: "823654264989"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"],
                _components_home_page_home_block_home_block_component__WEBPACK_IMPORTED_MODULE_5__["HomeBlockComponent"],
                _components_home_page_about_block_about_block_component__WEBPACK_IMPORTED_MODULE_6__["AboutBlockComponent"],
                _components_home_page_speaker_block_speaker_block_component__WEBPACK_IMPORTED_MODULE_7__["SpeakerBlockComponent"],
                _components_home_page_ticket_block_ticket_block_component__WEBPACK_IMPORTED_MODULE_8__["TicketBlockComponent"],
                _components_home_page_team_block_team_block_component__WEBPACK_IMPORTED_MODULE_9__["TeamBlockComponent"],
                _components_home_page_map_block_map_block_component__WEBPACK_IMPORTED_MODULE_10__["MapBlockComponent"],
                _components_home_page_partners_block_partners_block_component__WEBPACK_IMPORTED_MODULE_11__["PartnersBlockComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                _components_speakers_page_speakers_page_component__WEBPACK_IMPORTED_MODULE_13__["SpeakersPageComponent"],
                _components_team_page_team_page_component__WEBPACK_IMPORTED_MODULE_16__["TeamPageComponent"],
            ],
            imports: [
                _app_router__WEBPACK_IMPORTED_MODULE_2__["routes"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_14__["AngularFireModule"].initializeApp(config),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_15__["AngularFirestoreModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_18__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyDECYAKntxXNoXm0_bsW9DEiZcg-hlaQqQ'
                })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.router.ts":
/*!*******************************!*\
  !*** ./src/app/app.router.ts ***!
  \*******************************/
/*! exports provided: router, routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "router", function() { return router; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home-page/home-page.component */ "./src/app/components/home-page/home-page.component.ts");
/* harmony import */ var _components_speakers_page_speakers_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/speakers-page/speakers-page.component */ "./src/app/components/speakers-page/speakers-page.component.ts");
/* harmony import */ var _components_team_page_team_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/team-page/team-page.component */ "./src/app/components/team-page/team-page.component.ts");




var router = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__["HomePageComponent"] },
    { path: 'speakers', component: _components_speakers_page_speakers_page_component__WEBPACK_IMPORTED_MODULE_2__["SpeakersPageComponent"] },
    { path: 'team', component: _components_team_page_team_page_component__WEBPACK_IMPORTED_MODULE_3__["TeamPageComponent"] },
];
var routes = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(router, { useHash: true });


/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppService = /** @class */ (function () {
    function AppService(db) {
        this.db = db;
        this.emails = db.collection(_app_config__WEBPACK_IMPORTED_MODULE_0__["config"].collection_endpoint);
    }
    AppService.prototype.addEmails = function (emails) {
        return this.emails.add(emails);
    };
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div class=\"container\">\n    <div class=\"social hide row\">\n      <div class=\"share col\">\n        <div class=\"text inline-block col\">\n          SHARE\n        </div>\n        <div class=\"icon waves-effect waves-dark col\">\n          <a href=\"https://www.facebook.com/\">\n            <img src=\"assets/images/facebook.svg\" alt=\"\">\n          </a>\n        </div>\n        <div class=\"icon waves-effect waves-dark col\">\n          <a href=\"https://www.facebook.com/\">\n            <img src=\"assets/images/instagram.svg\" alt=\"\">\n          </a>\n        </div>\n        <div class=\"icon waves-effect waves-dark col\">\n          <a href=\"https://www.facebook.com/\">\n            <img src=\"assets/images/twitter.svg\" alt=\"\">\n          </a>\n        </div>\n      </div>\n      <div class=\"follow col\">\n        <div class=\"text inline-block col\">\n          Follow us\n        </div>\n        <div class=\"icon waves-effect waves-dark col\">\n          <a href=\"https://www.facebook.com/\">\n            <img src=\"assets/images/fb-dark.svg\" alt=\"\">\n          </a>\n        </div>\n        <div class=\"icon waves-effect waves-dark col\">\n          <a href=\"https://www.facebook.com/\">\n            <img src=\"assets/images/insta-dark.svg\" alt=\"\">\n          </a>\n        </div>\n        <div class=\"icon waves-effect waves-dark col\">\n          <a href=\"https://www.facebook.com/\">\n            <img src=\"assets/images/twitter-dark.svg\" alt=\"\">\n          </a>\n        </div>\n      </div>\n      <div class=\"email col\">\n        <div class=\"text\">\n          <a href=\"\">email us</a>\n        </div>\n      </div>\n    </div>\n    <div class=\"divider hide\">\n\n    </div>\n\n    <div class=\"links row\">\n      <div class=\"about col s12 m6 l4\">\n        <div class=\"footer-section-title\">\n          About\n        </div>\n        <ul class=\"list\">\n          <li>\n            <a href=\"https://www.meetup.com/GDG-Gandhinagar/\" target='_blank' class=\"text\">\n              GDG Gandhinagar\n            </a>\n          </li>\n          <li>\n            <a href=\"https://developers.google.com/programs/community/gdg/\" target=\"_blank\" class=\"text\">\n              Google Developers Group\n            </a>\n          </li>\n          <li>\n            <a routerLink=\"/team\"   class=\"text\">\n              Meet the Team\n            </a>\n          </li>\n        </ul>\n      </div>\n      <div class=\"resources col s12 m6 l4\">\n        <div class=\"footer-section-title\">\n          Event Resources\n        </div>\n        <ul class=\"list\">\n          <!-- <li>\n            <a href=\"\" class=\"text\">\n              Mediakit\n            </a>\n          </li> -->\n          <li>\n            <a href=\"https://goo.gl/forms/BS1SCfp07OeZNb2S2\" target=\"_blank\" class=\"text\">\n              Call for Papers\n            </a>\n          </li> \n          <li>\n            <!-- <a href=\"\" class=\"text\">\n              Faq\n            </a>\n          </li> -->\n        </ul>\n      </div>\n      <div class=\"Subsscribe col s12 m6 l4\">\n        <div class=\"footer-section-title small\">\n          No spam, only the latest news and updates!\n        </div>\n        <form action=\"\" [formGroup]=\"subscribeForm\" (ngSubmit)=\"subscribe()\">\n          <div class=\"input-field col s12\">\n            <input #subInput id=\"email\" name=\"email\" formControlName=\"email\" type=\"text\" class=\"validate\">\n            <label for=\"email\">Email</label>\n          </div>\n          <button class=\"waves-effect waves-dark btn btn-arrow right\" type=\"submit\" [disabled]=\"!subscribeForm.valid\">\n            <span>\n              Subscribe\n            </span>\n            <i class=\"large material-icons\">arrow_forward</i>\n          </button>\n        </form>\n      </div>\n    </div>\n    <div class=\"divider\"></div>\n    <div class=\"copywrite row no-marg\">\n      <div class=\"col s12 m6\">\n        <div class=\"logo left-align\">\n          <img src=\"assets/images/gdg_logo_dark.svg\" alt=\"\">\n        </div>\n      </div>\n      <div class=\"col s12 m6\">\n        <div class=\"text right-align\">\n          © GDG Gandhinagar\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.sass":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.sass ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n  background: #F5F5F5; }\n  footer .social {\n    margin: 0;\n    vertical-align: middle;\n    padding: 15px 0; }\n  footer .social .text {\n      font-family: Roboto;\n      vertical-align: middle;\n      line-height: 35px;\n      font-size: 14px;\n      color: #5d5d5d;\n      font-weight: 500;\n      text-transform: uppercase; }\n  footer .social .icon {\n      margin: 0 10px;\n      padding: 0;\n      width: 35px;\n      height: 35px;\n      border-radius: 20px; }\n  footer .social .icon a {\n        width: 35px;\n        display: inline-block;\n        height: 35px; }\n  footer .social .icon a img {\n          padding: 7.5px;\n          height: 100%;\n          width: 100%;\n          -o-object-fit: contain;\n             object-fit: contain; }\n  footer .social .share {\n      margin-right: 50px; }\n  footer .social .email .text a {\n      color: #5d5d5d;\n      text-decoration: underline; }\n  footer .Subsscribe .btn-arrow {\n    background: #F5F5F5; }\n  footer .Subsscribe .btn-arrow:hover {\n      background: #F0EBF8; }\n  footer .links .footer-section-title {\n    font-size: 18px;\n    font-weight: 500;\n    line-height: 21px;\n    margin-top: 25px;\n    margin-bottom: 10px;\n    color: #5d5d5d; }\n  footer .links .footer-section-title.small {\n      font-size: 14px; }\n  footer .links .text {\n    font-size: 14px;\n    font-family: Roboto;\n    font-weight: 400;\n    line-height: 21px;\n    color: #7b7b7b;\n    margin-top: 25px;\n    margin-bottom: 10px; }\n  footer .copywrite .logo img {\n    padding: 17.5px 0 12.5px;\n    height: 50px;\n    -o-object-fit: contain;\n       object-fit: contain;\n    vertical-align: middle; }\n  footer .copywrite .text {\n    line-height: 50px;\n    font-size: 14px;\n    font-family: Roboto;\n    font-weight: 400;\n    color: #7b7b7b; }\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FooterComponent = /** @class */ (function () {
    function FooterComponent(email) {
        this.email = email;
        this.subscribeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email])
        });
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.subscribe = function () {
        if (this.subscribeForm.valid) {
            console.log(this.subscribeForm.controls['email']);
            var result = this.email.addEmails({ 'EmailId': this.subscribeForm.controls['email'].value });
            M.toast({ html: 'Thank you for subscribing!' });
        }
        else {
            M.toast({ html: 'Please enter valid email ' });
        }
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.sass */ "./src/app/components/footer/footer.component.sass")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/home-page/about-block/about-block.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/home-page/about-block/about-block.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"about\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s12 m12 l6\">\n        <div class=\"title\">\n          What you need to know, before you ask.\n        </div>\n        <div class=\"text about-devfest\">\n          GDG DevFest Gandhinagar brings together the renowned experts in Android, Web and Cloud technologies to\n          Gandhinagar for sessions, workshops and showcases.\n        </div>\n        <!-- <div class=\"waves-effect waves-dark btn btn-arrow \">\n          <span>\n            explore featured session\n          </span>\n          <i class=\"large material-icons\">arrow_forward</i>\n        </div> -->\n        <div class=\"text about-devfest\" style=\"padding: 10px 0 20px 0\">\n          Described by many as 'Best Tech Conference' in Gandhinagar, our team creates DevFest to be the best place for experience\n          sharing in a phenomenal atmosphere.\n        </div>\n        <a href=\"https://photos.app.goo.gl/5rg5K8xsQ9yD9sBE6\"  target=\"_blank\"class=\"waves-effect waves-dark btn btn-arrow \">\n          <span>\n            See how was it in 2017\n          </span>\n          <i class=\"large material-icons\">arrow_forward</i>\n        </a>\n      </div>\n      <div class=\"col s12 m12 l6\">\n        <div class=\"row\" style=\"margin-top: 30px\">\n          <div class=\"col s6\">\n            <div class=\"title stats underline\">\n              150\n            </div>\n            <div class=\"text\">\n              Attendees\n            </div>\n          </div>\n          <div class=\"col s6\">\n            <div class=\"title stats underline\">\n              1\n            </div>\n            <div class=\"text\">\n              Day\n            </div>\n          </div>\n        </div>\n        <div class=\"row\" style=\"margin-top: 30px\">\n          <div class=\"col s6\">\n            <div class=\"title stats underline\">\n              15\n            </div>\n            <div class=\"text\">\n              Sessions\n            </div>\n          </div>\n          <div class=\"col s6\">\n            <div class=\"title stats underline\">\n              2\n            </div>\n            <div class=\"text\">\n              Tracks\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/home-page/about-block/about-block.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/home-page/about-block/about-block.component.ts ***!
  \***************************************************************************/
/*! exports provided: AboutBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutBlockComponent", function() { return AboutBlockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutBlockComponent = /** @class */ (function () {
    function AboutBlockComponent() {
    }
    AboutBlockComponent.prototype.ngOnInit = function () {
    };
    AboutBlockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-block',
            template: __webpack_require__(/*! ./about-block.component.html */ "./src/app/components/home-page/about-block/about-block.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], AboutBlockComponent);
    return AboutBlockComponent;
}());



/***/ }),

/***/ "./src/app/components/home-page/home-block/home-block.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/home-page/home-block/home-block.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"home\">\n    <div class=\"warpper\">\n      <div class=\"bg-img\"></div>\n      <!-- <img class='bg-img' src=\"assets\\images\\home.png\" alt=\"\"> -->\n      <div class=\"content\">\n        <div class=\"row no-marg\">\n          <div class=\"col s12 center-align\">\n            <div class=\"logo-wrapper\">\n              <img src=\"assets/images/home_top.png\" alt=\"\">\n            </div>\n          </div>\n          <!-- <div class=\"col s12 center-align\">\n            <div class=\"text\">\n              {{homePageData.general.city}}. {{date | date : 'MMMM d, yyyy'}}\n            </div>\n          </div> -->\n          <!-- <div class=\"col s12 center-align\">\n            <div class=\"text\">\n              {{homePageData.general.slogan}}\n            </div>\n          </div> -->\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/home-page/home-block/home-block.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/home-page/home-block/home-block.component.ts ***!
  \*************************************************************************/
/*! exports provided: HomeBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeBlockComponent", function() { return HomeBlockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeBlockComponent = /** @class */ (function () {
    function HomeBlockComponent(dataService) {
        this.dataService = dataService;
        this.homePageData = this.dataService.data;
        this.date = new Date(this.homePageData.general.date);
    }
    HomeBlockComponent.prototype.ngOnInit = function () {
    };
    HomeBlockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-block',
            template: __webpack_require__(/*! ./home-block.component.html */ "./src/app/components/home-page/home-block/home-block.component.html"),
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], HomeBlockComponent);
    return HomeBlockComponent;
}());



/***/ }),

/***/ "./src/app/components/home-page/home-page.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/home-page/home-page.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-home-block></app-home-block>\n<app-about-block></app-about-block>\n<app-speaker-block></app-speaker-block>\n<div id=\"subsscribe\">\n  <div class=\"container\">\n    <div class=\"wrapper center-align\">\n\n      <div class=\"content\">\n        Get notified about the important conference updates\n      </div>\n      <div (click)='focusInputForm()' class=\"waves-effect waves-lite btn btn-arrow lite\">\n        <span>\n          Subsscribe\n        </span>\n        <i class=\"large material-icons\">arrow_forward</i>\n      </div>\n    </div>\n  </div>\n</div>\n<app-ticket-block></app-ticket-block>\n<app-team-block></app-team-block>\n<app-map-block></app-map-block>\n<app-partners-block></app-partners-block>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/components/home-page/home-page.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/home-page/home-page.component.ts ***!
  \*************************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent.prototype.focusInputForm = function () {
        console.log($('#email'));
        $('html,body').animate({ scrollTop: $('#email').offset().top }, 200, function () {
            $('#email').focus();
        });
    };
    HomePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/components/home-page/home-page.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/components/home-page/map-block/map-block.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/home-page/map-block/map-block.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"location\">\n  <div class=\"row\">\n    <div class=\"address col s12 m12 l3\">\n      <div class=\"title\">\n        Venue\n      </div>\n      <div class=\"text\">\n        <div class=\"large\">\n          Pandit Deendayal Petroleum University\n        </div>\n        <div class=\"small\">\n          Raisan, Gandhinagar, Gujarat\n        </div>\n      </div>\n      <div class=\"btn-wrapper\">\n        <a href=\"https://www.google.com/maps?ll=23.156333,72.665521&z=13&t=m&hl=en-GB&gl=US&mapclient=embed&daddr=Pandit+Deendayal+Petroleum+University+Raisan+Gandhinagar,+Gujarat+382421@23.1563332,72.66552109999999\" target=\"_blank\" class=\"waves-effect waves-lite lite btn btn-arrow \">\n          <span>\n            Directions\n          </span>\n          <i class=\"large material-icons\">directions</i>\n        </a>\n\n      </div>\n    </div>\n    <div class=\"map-wrapper col s12 m12 l9\">\n      <div class=\"mapouter\">\n        <div class=\"gmap_canvas\"><iframe wdith='100%' id=\"gmap_canvas\" src=\"https://maps.google.com/maps?q=Pandit%20Deendayal%20Petroleum%20University&t=&z=13&ie=UTF8&iwloc=&output=embed\"\n            frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\"></iframe></div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/home-page/map-block/map-block.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/home-page/map-block/map-block.component.ts ***!
  \***********************************************************************/
/*! exports provided: MapBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapBlockComponent", function() { return MapBlockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapBlockComponent = /** @class */ (function () {
    function MapBlockComponent() {
        this.title = 'My first AGM project';
        this.lat = 51.678418;
        this.lng = 7.809007;
    }
    MapBlockComponent.prototype.ngOnInit = function () {
        var mapProp = {};
    };
    MapBlockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map-block',
            template: __webpack_require__(/*! ./map-block.component.html */ "./src/app/components/home-page/map-block/map-block.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], MapBlockComponent);
    return MapBlockComponent;
}());



/***/ }),

/***/ "./src/app/components/home-page/partners-block/partners-block.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/home-page/partners-block/partners-block.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"partners center-align\">\n  <div class=\"title\">\n    Partners\n  </div>\n  <div class=\"template\">\n    <div class=\"sub-title\">\n      Design Inspired From\n    </div>\n    <div class=\"content\">\n      <div class=\"logo-wrapper\">\n        <div class=\"img-wrapper small\">\n          <img src=\"assets/images/gdgx_logo.png\" alt=\"\">\n          <div class=\"text\">\n            Project HoverBoard\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"general\">\n    <div class=\"sub-title\">\n      General Partner\n    </div>\n    <div class=\"logo-wrapper row\">\n      <div class=\"col s12 m4 l4\">\n        <div class=\"img-wrapper logo\">\n          <img src=\"assets/images/google_logo.png\" alt=\"\">\n        </div>\n      </div>\n      <div class=\"col s12 m4 l4\">\n        <div class=\"img-wrapper logo\">\n          <img src=\"assets/images/gdgindia.png\" alt=\"\">\n        </div>\n      </div>\n      <div class=\"col s12 m4 l4\">\n        <div class=\"img-wrapper logo\">\n          <img src=\"assets/images/1947.png\" alt=\"\">\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"general\">\n    <div class=\"sub-title\">\n      venue Partner\n    </div>\n    <div class=\"logo-wrapper row\">\n      <div class=\"col s12 m4 l4\">\n        <div class=\"img-wrapper logo\">\n          <img src=\"assets/images/encode.jpg\" alt=\"\">\n        </div>\n      </div>\n      <div class=\"col s12 m4 l4\">\n        <div class=\"img-wrapper logo\">\n          <img src=\"assets/images/PDPU.png\" alt=\"\">\n        </div>\n      </div>\n      <div class=\"col s12 m4 l4\">\n        <div class=\"img-wrapper logo\">\n          <img src=\"assets/images/SAIL.png\" alt=\"\">\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- <div class=\"general\">\n      <div class=\"sub-title\">\n          Venue Partner\n      </div>\n      <div class=\"logo-wrapper\">\n          <div class=\"content inline-block\">\n              <div class=\"img-wrapper\">\n                  <img src=\"assets/images/UCIED Logo.png\" alt=\"\">\n              </div>\n          </div>\n      </div>\n  </div> -->\n</div>\n"

/***/ }),

/***/ "./src/app/components/home-page/partners-block/partners-block.component.sass":
/*!***********************************************************************************!*\
  !*** ./src/app/components/home-page/partners-block/partners-block.component.sass ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".partners .title {\n  font-size: 3em;\n  padding: 20px;\n  font-weight: 300; }\n\n.partners .sub-title {\n  font-size: 1.4em;\n  font-weight: 300;\n  padding: 10px 0; }\n\n.partners .logo-wrapper .text {\n  color: #90a4ae;\n  padding: 10px 0; }\n\n.partners .logo-wrapper .img-wrapper {\n  width: 200px;\n  height: 200px;\n  margin: auto;\n  padding: 10px; }\n\n.partners .logo-wrapper .img-wrapper.small {\n    height: auto; }\n\n.partners .logo-wrapper .img-wrapper img {\n    width: 100%;\n    height: 100%;\n    -o-object-fit: contain;\n       object-fit: contain; }\n"

/***/ }),

/***/ "./src/app/components/home-page/partners-block/partners-block.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/home-page/partners-block/partners-block.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PartnersBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnersBlockComponent", function() { return PartnersBlockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PartnersBlockComponent = /** @class */ (function () {
    function PartnersBlockComponent() {
    }
    PartnersBlockComponent.prototype.ngOnInit = function () {
    };
    PartnersBlockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-partners-block',
            template: __webpack_require__(/*! ./partners-block.component.html */ "./src/app/components/home-page/partners-block/partners-block.component.html"),
            styles: [__webpack_require__(/*! ./partners-block.component.sass */ "./src/app/components/home-page/partners-block/partners-block.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], PartnersBlockComponent);
    return PartnersBlockComponent;
}());



/***/ }),

/***/ "./src/app/components/home-page/speaker-block/speaker-block.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/home-page/speaker-block/speaker-block.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"speakers\">\n  <div class=\"container\">\n    <div class=\"title\">Rockstar Speakers</div>\n    <div class=\"speaker-wrapper\">\n      <div class=\"row\">\n        <div class=\"col s12 center-align\">\n          <div class=\"text cmg-soon\">\n              All of the speakers are busy preparing there deck they will magically appear here as soon as they are ready!<br>While they are busy you can see our previous speakers and apply as a speaker if you are interested.\n          </div>\n        </div>\n      </div>\n      <!-- <div class=\"row\">\n        <div class=\"col s12 m6 l3\" *ngFor='let i of [1,2,3,4]'>\n          <div class=\"speaker\">\n            <div class=\"profile-pic\">\n              <img src=\"https://avatars2.githubusercontent.com/u/17850142?s=460&v=4\" alt=\"\">\n            </div>\n            <div class=\"organization\">\n              <img src=\"assets/images/gdg-logo.png\" alt=\"\">\n            </div>\n            <div class=\"name\">\n              Parth Jansari\n            </div>\n            <div class=\"location\">\n              Gandhinagar, Gujarat\n            </div>\n          </div>\n        </div>\n      </div> -->\n      <div class=\"row prev-speaker-row\">\n        <div class=\"col s12\">\n          <div class=\"title center-align\">\n            Previous Speakers\n          </div>\n        </div>\n        <div class=\"col l8 m12 s12  offset-l2 auto-mid\">\n          <div class=\"wrapper\">\n            <div class=\"col s4 m3 l2\" *ngFor='let speaker of prevspeakers;let i = index'>\n  \n              <div class=\"prev-speaker\">\n                <div class=\"img-wrapper\">\n                  <div class=\"profile-pic\">\n                    <img src=\"{{speaker.pic}}\" alt=\"\">\n                  </div>\n                </div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col s12 center-align\">\n      <a href=\"https://goo.gl/forms/BS1SCfp07OeZNb2S2\" target=\"_blank\" class=\"waves-effect waves-dark btn btn-arrow \">\n        <span>\n          Call for Speakers\n        </span>\n        <i class=\"large material-icons\">arrow_forward</i>\n      </a>\n      <!-- <a href=\"https://photos.app.goo.gl/5rg5K8xsQ9yD9sBE6\" target=\"_blank\" class=\"waves-effect waves-dark btn btn-arrow \">\n        <span>\n          See More\n        </span>\n        <i class=\"large material-icons\">arrow_forward</i>\n      </a>\n  -->\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/home-page/speaker-block/speaker-block.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/home-page/speaker-block/speaker-block.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SpeakerBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeakerBlockComponent", function() { return SpeakerBlockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpeakerBlockComponent = /** @class */ (function () {
    function SpeakerBlockComponent() {
        this.prevspeakers = [
            {
                'pic': 'assets/images/prev_1.jpg',
            },
            {
                'pic': 'assets/images/prev_2.jpg',
            },
            {
                'pic': 'assets/images/prev_3.jpg',
            },
            {
                'pic': 'assets/images/team_2.png',
            },
            {
                'pic': 'assets/images/prev_5.jpg',
            },
            {
                'pic': 'assets/images/prev_6.jpg',
            },
        ];
    }
    SpeakerBlockComponent.prototype.ngOnInit = function () {
    };
    SpeakerBlockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-speaker-block',
            template: __webpack_require__(/*! ./speaker-block.component.html */ "./src/app/components/home-page/speaker-block/speaker-block.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], SpeakerBlockComponent);
    return SpeakerBlockComponent;
}());



/***/ }),

/***/ "./src/app/components/home-page/team-block/team-block.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/home-page/team-block/team-block.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"team\">\n  <div class=\"container\">\n    <div class=\"row \">\n      <div class=\"col s12 m12 l6\">\n        <div class=\"image-wrapper team-pic\">\n          <img src=\"assets/images/team.png\" alt=\"\">\n        </div>\n      </div>\n      <div class=\"col s12 m12 l6\">\n        <div class=\"col S12\">\n          <div class=\"content-wrapper\">\n            <div class=\"title\">\n              Organizer\n            </div>\n            <div class=\"text\">\n              GDG Gandhinagar with support of many geeks from all around Gandhinagar is proud organizer of DevFest Gandhinagar\n            </div>\n            <a routerLink='/team' class=\"waves-effect waves-dark btn btn-arrow \">\n              <span>\n                Open Team Page\n              </span>\n              <i class=\"large material-icons\">arrow_forward</i>\n            </a> \n          </div>\n        </div>\n        <div class=\"col S12\">\n          <div class=\"content-wrapper\">\n            <div class=\"title\">\n                What is GDG?\n            </div>\n            <div class=\"text\">\n              Google Developers Group (GDG) - is open and volunteer geek community who create exciting projects and share experience about Google technologies with a passion \n            </div>\n            <a href=\"https://developers.google.com/programs/community/gdg/\" target=\"_blank\" class=\"waves-effect waves-dark btn btn-arrow\">\n              <span>\n                ReadMore\n              </span>\n              <i class=\"large material-icons\">arrow_forward</i>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/home-page/team-block/team-block.component.sass":
/*!***************************************************************************!*\
  !*** ./src/app/components/home-page/team-block/team-block.component.sass ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#team {\n  margin-top: 60px; }\n  #team .image-wrapper.team-pic {\n    width: 80%;\n    margin: auto; }\n  #team .image-wrapper.team-pic img {\n      width: 100%;\n      -o-object-fit: contain;\n         object-fit: contain;\n      box-shadow: 0 0 12px rgba(0, 0, 0, 0.42);\n      border-radius: 5px;\n      padding: 5px; }\n  #team .title {\n    font-size: 25px;\n    margin: 0 0 15px 0; }\n  #team .btn-arrow {\n    margin: 15px 0 15px 0; }\n"

/***/ }),

/***/ "./src/app/components/home-page/team-block/team-block.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/home-page/team-block/team-block.component.ts ***!
  \*************************************************************************/
/*! exports provided: TeamBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamBlockComponent", function() { return TeamBlockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TeamBlockComponent = /** @class */ (function () {
    function TeamBlockComponent() {
    }
    TeamBlockComponent.prototype.ngOnInit = function () {
    };
    TeamBlockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-team-block',
            template: __webpack_require__(/*! ./team-block.component.html */ "./src/app/components/home-page/team-block/team-block.component.html"),
            styles: [__webpack_require__(/*! ./team-block.component.sass */ "./src/app/components/home-page/team-block/team-block.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], TeamBlockComponent);
    return TeamBlockComponent;
}());



/***/ }),

/***/ "./src/app/components/home-page/ticket-block/ticket-block.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/home-page/ticket-block/ticket-block.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"ticket\">\n  <div class=\"container\">\n    <div class=\"title center-align\">\n      Tickets\n    </div>\n    <div class=\"wrapper\">\n      <div class=\"row\">\n        <div class=\"col s12 center-align \">\n          <a href=\"https://docs.google.com/forms/d/e/1FAIpQLScLTMFX6Y38pW2eUmPsSjXptwcCZV394olywUkGpoNbr1QZbQ/viewform\" target=\"_blank\" class=\"ticket center-align waves-effect waves-dark\">\n            <div class=\"type\">\n              Regular\n            </div>\n            <div class=\"price\">\n                ₹ 0.0\n            </div>\n            <div class=\"details\">\n              This tickets includes lunch, lots of fun and schwags form us.\n            </div>\n            <a href=\"https://docs.google.com/forms/d/e/1FAIpQLScLTMFX6Y38pW2eUmPsSjXptwcCZV394olywUkGpoNbr1QZbQ/viewform\" target=\"_blank\" class=\"btn-flat waves-effect waves-lite purple white-text\">Register</a> \n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/home-page/ticket-block/ticket-block.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/home-page/ticket-block/ticket-block.component.ts ***!
  \*****************************************************************************/
/*! exports provided: TicketBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketBlockComponent", function() { return TicketBlockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TicketBlockComponent = /** @class */ (function () {
    function TicketBlockComponent() {
    }
    TicketBlockComponent.prototype.ngOnInit = function () {
    };
    TicketBlockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ticket-block',
            template: __webpack_require__(/*! ./ticket-block.component.html */ "./src/app/components/home-page/ticket-block/ticket-block.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], TicketBlockComponent);
    return TicketBlockComponent;
}());



/***/ }),

/***/ "./src/app/components/speakers-page/speakers-page.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/speakers-page/speakers-page.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"speakers\">\n  <div class=\"container\">\n    <div class=\"title-warpper\">\n      <div class=\"title\">\n        Speakers\n      </div>\n      <div class=\"text\">\n        Hear from the Googlers, Partners, and Guest Speakers who are building the future of cloud. Check back often as\n        we add more speakers, including our customers and partners.\n      </div>\n    </div>\n    <div class=\"divider\"></div>\n    <div class=\"col s12  fliter-row right-align\">\n      <div class=\"btn\">fliter<i class=\"fas fa-filter\"></i></div>\n    </div>\n    <div class=\"filter\">\n      <div class=\"tags\">\n        <div class=\"tag col\" *ngFor='let filter of availableFilters' (click)=\"setFilters(filter)\" [ngClass]=\"{'active': activeFilters.indexOf(filter) !== -1}\">\n          {{filter}}\n        </div>\n      </div>\n    </div>\n    <div class=\"divider\"></div>\n    <div class=\"speaker-wrapper\">\n      <div class=\"row\">\n        <ng-container *ngFor='let i of speakers'>\n          <div class=\"col s12 m6 l4\" *ngIf=\"filter(i.tag)\">\n            {{i.tag}}\n\n            <div class=\"speaker waves-effect waves-block modal-trigger\" data-target=\"modal\">\n              <div class=\"img-wrapper \">\n                <img src=\"https://secure.gravatar.com/avatar/db320b5322d591e515391a7a60375fc4/?s=120&d=identicon\" alt=\"\">\n              </div>\n              <div class=\"content\">\n                <div class=\"name\">\n                  {{i.name}}\n                </div>\n                <div class=\"about\">\n                  <div class=\"work\">\n                    Infosenseglobal//Gandhingar\n                  </div>\n                  <div class=\"text\">\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus sint fugit molestias error et\n                    veritatis itaque magni quisquam iure, nemo rem corrupti nulla officia sit numquam dolores nobis?\n                    Non,\n                    quibusdam?\n                  </div>\n                  <div class=\"links\">\n                    <a href=\"https://www.facebook.com/yatendrajoddha\" target=\"_blank\"><i class=\"fab fa-github\"></i></a>\n                    <a href=\"https://github.com/yatendrajoddha/\" target=\"_blank\"><i class=\"fab fa-facebook\"></i></a>\n                    <a href=\"https://yatendrasinh.wordpress.com/\" target=\"_blank\"><i class=\"fa fa-link\"></i></a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </ng-container>\n      </div>\n    </div>\n  </div>\n</div>\n<div id=\"modal\" class=\"modal\">\n  <div class=\"bg\">\n\n  </div>\n  <div class=\"modal-content\">\n    <div class=\"title-wrapper row\">\n\n      <div class=\"img-wrapper col\">\n        <img src=\"https://avatars2.githubusercontent.com/u/3306366?v=4&s=460\" alt=\"\">\n      </div>\n      <div class=\"name col\">\n        Pratik Butani\n      </div>\n    </div>\n    <div class=\"about\">\n      <div class=\"place\">\n        Gandhinagar\n      </div>\n      <div class=\"work\">\n        Owner, iTanic\n      </div>\n      <div class=\"about-text\">\n        I am Android Application Developer with the 4 years of Experience, Organizer and Speaker at Google Developer\n        Group – Rajkot.\n      </div>\n      <div class=\"links\">\n        <a href=\"https://github.com/pratikbutani/\" class=\"waves-effect\" target=\"_blank\"><i class=\"fab fa-github\"></i></a>\n      </div>\n      <div class=\"session\">\n        <div class=\"title\">\n          Session\n        </div>\n        <div class=\"text\">\n          Hands-on with Cloud Firestore\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <a href=\"#!\" class=\"modal-action modal-close waves-effect waves-green btn-flat\">close</a>\n  </div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/components/speakers-page/speakers-page.component.sass":
/*!***********************************************************************!*\
  !*** ./src/app/components/speakers-page/speakers-page.component.sass ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal {\n  border-radius: 20px;\n  outline: none; }\n  .modal .bg {\n    z-index: -1;\n    background: radial-gradient(farthest-side at 0 0, rgba(255, 26, 198, 0.4), rgba(255, 26, 198, 0)), radial-gradient(farthest-side at 100% 0, rgba(60, 221, 221, 0.5), rgba(60, 221, 221, 0)), radial-gradient(farthest-side at 50% 0, rgba(255, 26, 198, 0.2), rgba(255, 26, 198, 0));\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100px; }\n  .modal .modal-content {\n    margin: 0 40px; }\n  .modal .modal-content .title-wrapper .img-wrapper {\n      width: 120px;\n      padding: 0;\n      height: 120px;\n      min-width: 120px;\n      border-radius: 120px;\n      overflow: hidden;\n      border: 4px solid #fff; }\n  .modal .modal-content .title-wrapper .img-wrapper img {\n        height: 100%;\n        width: 100%;\n        -o-object-fit: cover;\n           object-fit: cover; }\n  .modal .modal-content .title-wrapper .name {\n      font-size: 30px;\n      line-height: 120px; }\n  .modal .modal-content .about .place, .modal .modal-content .about .work {\n      line-height: 30px;\n      font-size: 25px; }\n  .modal .modal-content .about .place.work, .modal .modal-content .about .work.work {\n        margin-bottom: 20px;\n        font-size: 20px;\n        font-weight: lighter; }\n  .modal .modal-content .about .about-text {\n      line-height: 25px;\n      font-size: 15px; }\n  .modal .modal-content .about .links {\n      margin: 30px 0; }\n  .modal .modal-content .about .links a {\n        font-size: 30px;\n        color: #7446C4;\n        display: inline-block;\n        height: 50px;\n        padding: 10px;\n        border-radius: 25px;\n        width: 50px; }\n  .modal .modal-content .about .links a:hover {\n          box-shadow: 0 0 25px 3px #cccccc; }\n  .modal .modal-content .about .links a i {\n          font-size: 30px;\n          vertical-align: top; }\n  .modal-overlay {\n  position: fixed;\n  height: 100vh;\n  width: 100vh;\n  top: 0;\n  left: 0; }\n  #speakers .filter .tags {\n  padding: 10px 0; }\n  #speakers .filter .tags .tag {\n    margin-right: 10px;\n    display: inline;\n    padding: 3px 10px;\n    text-transform: capitalize;\n    line-height: 35px;\n    border: 1px solid #000000;\n    border-radius: 30px;\n    transition: all  0.2s ease; }\n  #speakers .filter .tags .tag.active {\n      color: #ffffff;\n      background: #000000; }\n  #speakers .filter .tags .tag:hover {\n      cursor: pointer;\n      color: #ffffff;\n      background: #000000; }\n  #speakers .title-warpper {\n  background: #fff;\n  width: 100%;\n  position: relative;\n  margin-bottom: 20px; }\n  #speakers .title-warpper .title {\n    color: #673AB7;\n    line-height: 200px;\n    font-size: 3em; }\n  #speakers .title-warpper .text {\n    bottom: 30px;\n    color: #5d5d5d;\n    left: 50px;\n    font-size: 15px;\n    font-family: Roboto;\n    font-weight: 400;\n    max-width: 700px; }\n  #speakers .fliter-row {\n  padding: 20px 0; }\n  #speakers .fliter-row .btn {\n    font-size: 14px; }\n  #speakers .fliter-row .btn i {\n      padding-left: 5px;\n      font-size: 14px; }\n  #speakers .speaker-wrapper {\n  margin: 50px 0; }\n  #speakers .speaker-wrapper .speaker {\n    max-width: 320px;\n    margin: 30px auto;\n    height: 430px;\n    text-align: center;\n    padding: 20px;\n    border-radius: 20px;\n    transition: all 0.5s ease; }\n  #speakers .speaker-wrapper .speaker .img-wrapper {\n      width: 150px;\n      height: 150px;\n      border-radius: 100px;\n      margin: auto;\n      overflow: hidden; }\n  #speakers .speaker-wrapper .speaker .img-wrapper img {\n        width: 100%;\n        height: 100%;\n        -o-object-fit: cover;\n           object-fit: cover; }\n  #speakers .speaker-wrapper .speaker .name {\n      margin: 20px 0;\n      font-size: 1.6em; }\n  #speakers .speaker-wrapper .speaker .about {\n      color: #888888; }\n  #speakers .speaker-wrapper .speaker .about .place {\n        margin: 20px 0; }\n  #speakers .speaker-wrapper .speaker .about .work {\n        margin: 20px 0; }\n  #speakers .speaker-wrapper .speaker .links {\n      margin: 20px 0; }\n  #speakers .speaker-wrapper .speaker .links a {\n        margin: 5px;\n        font-size: 1.3em;\n        color: #888888;\n        transition: all 0.3s ease; }\n  #speakers .speaker-wrapper .speaker .links a:hover {\n          color: #454545; }\n"

/***/ }),

/***/ "./src/app/components/speakers-page/speakers-page.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/speakers-page/speakers-page.component.ts ***!
  \*********************************************************************/
/*! exports provided: SpeakersPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeakersPageComponent", function() { return SpeakersPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpeakersPageComponent = /** @class */ (function () {
    function SpeakersPageComponent() {
        this.speakers = [
            { name: 'parth', tag: 'android' },
            { name: 'parth', tag: 'android' },
            { name: 'parth', tag: 'web' },
            { name: 'parth', tag: 'android' },
            { name: 'parth', tag: 'android' },
            { name: 'parth', tag: 'web' }
        ];
        this.activeFilters = [];
        this.availableFilters = [];
    }
    SpeakersPageComponent.prototype.ngOnInit = function () {
        for (var i in this.speakers) {
            console.log(i);
            this.availableFilters.push(this.speakers[i].tag);
        }
        this.availableFilters = _.uniq(this.availableFilters);
        console.log(this.availableFilters);
        setTimeout(function () {
            $('.modal').modal();
        }, 500);
    };
    SpeakersPageComponent.prototype.setFilters = function (name) {
        if (this.activeFilters.indexOf(name) !== -1) {
            this.activeFilters.splice(this.activeFilters.indexOf(name), 1);
        }
        else {
            this.activeFilters.push(name);
        }
        console.log(this.activeFilters);
    };
    SpeakersPageComponent.prototype.filter = function (tag) {
        console.log(tag);
        if (this.activeFilters.length !== 0) {
            return this.activeFilters.indexOf(tag) !== -1 ? true : false;
            console.log(this.activeFilters.indexOf(tag) !== -1 ? true : false);
        }
        else {
            return true;
        }
    };
    SpeakersPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-speakers-page',
            template: __webpack_require__(/*! ./speakers-page.component.html */ "./src/app/components/speakers-page/speakers-page.component.html"),
            styles: [__webpack_require__(/*! ./speakers-page.component.sass */ "./src/app/components/speakers-page/speakers-page.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], SpeakersPageComponent);
    return SpeakersPageComponent;
}());



/***/ }),

/***/ "./src/app/components/team-page/team-page.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/team-page/team-page.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"team\">\n  <div class=\"container\">\n    <div class=\"title-warpper\">\n      <div class=\"title\">\n        Team\n      </div>\n      <div class=\"text\">\n        DevFest Gandhinagar is brought to you with love, efforts and endless fun from GDG Gandhinagar team. <br><br>\n\n        So what is GDG exactly? Perhaps Google doesn't need an introduction. Google services became common nouns —\n        every day we \"google\" things we need to know, check our Gmail on the go, and Google Maps is a lifesaver. For\n        regular users, they are just handy services, but not for us. Developers see much more: APIs, scalability\n        issues, complex technology stacks. And that is what GDG is about. <br><br>\n\n        Ever wondered what does it take to make a big tech conference? Here it is: 6 people working all year round, 0\n        full time workers and sometimes a lot of compromise :) If you're curious what's under the hood, we share a lot\n        of tips, confessions and lessons learned in our events. <br><br>\n\n        Also we are very talkative, so if you're a fellow community organizer or just have some random questions, feel\n        free to reach any of us on social media. We'd love to help! <br><br>\n      </div>\n    </div>\n    <div class=\"divider\"></div>\n    <div class=\"team-wrapper\">\n      <div class=\"row\">\n        <div class=\"col s12 m6 l4\" *ngFor='let member of team'>\n\n          <div class=\"team waves-effect waves-block modal-trigger\" data-target=\"modal\">\n            <div class=\"img-wrapper \">\n              <img src=\"{{member.pic}}\" alt=\"\">\n            </div>\n            <div class=\"content\">\n              <div class=\"name\">\n                {{member.name}}\n              </div>\n              <div class=\"about\">\n                <div class=\"text\">\n                  {{member.task}}\n                </div>\n                <div class=\"links\">\n                  <ng-container *ngFor='let link of member.links'>\n                    <!-- <a href=\"https://www.facebook.com/yatendrajoddha\" target=\"_blank\"><i class=\"fab fa-github\"></i></a> -->\n                  </ng-container>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/components/team-page/team-page.component.sass":
/*!***************************************************************!*\
  !*** ./src/app/components/team-page/team-page.component.sass ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#team .title-warpper {\n  background: #fff;\n  width: 100%;\n  position: relative;\n  margin-bottom: 20px; }\n  #team .title-warpper .title {\n    color: #673AB7;\n    line-height: 200px;\n    font-size: 3em; }\n  #team .title-warpper .text {\n    bottom: 30px;\n    color: #5d5d5d;\n    left: 50px;\n    font-size: 15px;\n    font-family: Roboto;\n    font-weight: 400; }\n  #team .team-wrapper {\n  margin: 50px 0; }\n  #team .team-wrapper .team {\n    max-width: 320px;\n    margin: 30px auto;\n    text-align: center;\n    padding: 20px;\n    border-radius: 20px;\n    transition: all 0.5s ease; }\n  #team .team-wrapper .team .img-wrapper {\n      width: 150px;\n      height: 150px;\n      border-radius: 100px;\n      margin: auto;\n      overflow: hidden; }\n  #team .team-wrapper .team .img-wrapper img {\n        width: 100%;\n        height: 100%;\n        -o-object-fit: cover;\n           object-fit: cover; }\n  #team .team-wrapper .team .name {\n      margin: 20px 0;\n      font-size: 1.6em; }\n  #team .team-wrapper .team .about {\n      color: #888888; }\n  #team .team-wrapper .team .about .place {\n        margin: 20px 0; }\n  #team .team-wrapper .team .about .work {\n        margin: 20px 0; }\n  #team .team-wrapper .team .links {\n      margin: 20px 0; }\n  #team .team-wrapper .team .links a {\n        margin: 5px;\n        font-size: 1.3em;\n        color: #888888;\n        transition: all 0.3s ease; }\n  #team .team-wrapper .team .links a:hover {\n          color: #454545; }\n"

/***/ }),

/***/ "./src/app/components/team-page/team-page.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/team-page/team-page.component.ts ***!
  \*************************************************************/
/*! exports provided: TeamPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamPageComponent", function() { return TeamPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TeamPageComponent = /** @class */ (function () {
    function TeamPageComponent() {
        this.team = [
            {
                'name': 'Parth Jansari',
                'task': 'Planing & Designing',
                'pic': 'assets/images/prev_1.jpg',
                'links': [{
                        'icon': '',
                        'url': ''
                    }]
            },
            {
                'name': 'Yatendrasinh Joddha',
                'task': 'Venue & Food',
                'pic': 'assets/images/team_2.png',
                'links': [{
                        'icon': '',
                        'url': ''
                    }]
            },
            {
                'name': 'Bahvesh Valand',
                'task': 'Social Media',
                'pic': 'assets/images/team_3.jpeg',
                'links': [{
                        'icon': '',
                        'url': ''
                    }]
            },
            {
                'name': 'Arif Khoja',
                'task': 'Precipitance',
                'pic': 'assets/images/team_4.png',
                'links': [{
                        'icon': '',
                        'url': ''
                    }]
            },
            {
                'name': 'Naresh kumar',
                'task': 'Quiz Master',
                'pic': 'assets/images/prev_6.jpg',
                'links': [{
                        'icon': '',
                        'url': ''
                    }]
            },
        ];
    }
    TeamPageComponent.prototype.ngOnInit = function () {
    };
    TeamPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-team-page',
            template: __webpack_require__(/*! ./team-page.component.html */ "./src/app/components/team-page/team-page.component.html"),
            styles: [__webpack_require__(/*! ./team-page.component.sass */ "./src/app/components/team-page/team-page.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], TeamPageComponent);
    return TeamPageComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataService = /** @class */ (function () {
    function DataService() {
        this.data = {
            "general": {
                "city": "Gandhinagar",
                "date": "2018-10-28T08:30:00Z",
                'slogan': 'Be a hero. Be a GDG!'
            }
        };
    }
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/GDG-GANDHINAGAR/devfest-18/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map