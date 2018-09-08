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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    font-family: \"Lato\",sans-serif;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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
    function AppComponent(httpService) {
        this.httpService = httpService;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.get('./assets/services/instance.json').subscribe(function (data) {
            _this.arrInstance = data; // FILL THE ARRAY WITH DATA.
        }, function (err) {
            console.log(err.message);
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _selectsource_selectsource_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./selectsource/selectsource.component */ "./src/app/selectsource/selectsource.component.ts");
/* harmony import */ var _selectdestination_selectdestination_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./selectdestination/selectdestination.component */ "./src/app/selectdestination/selectdestination.component.ts");
/* harmony import */ var _comprehensive_comprehensive_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./comprehensive/comprehensive.component */ "./src/app/comprehensive/comprehensive.component.ts");
/* harmony import */ var _summary_summary_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./summary/summary.component */ "./src/app/summary/summary.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_assets_services_instance_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/assets/services/instance.service */ "./src/assets/services/instance.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var appRoutes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'source', component: _selectsource_selectsource_component__WEBPACK_IMPORTED_MODULE_6__["SelectsourceComponent"] },
    { path: 'destination', component: _selectdestination_selectdestination_component__WEBPACK_IMPORTED_MODULE_7__["SelectdestinationComponent"] },
    { path: 'comprehensive', component: _comprehensive_comprehensive_component__WEBPACK_IMPORTED_MODULE_8__["ComprehensiveComponent"] },
    { path: 'summary', component: _summary_summary_component__WEBPACK_IMPORTED_MODULE_9__["SummaryComponent"] },
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _selectsource_selectsource_component__WEBPACK_IMPORTED_MODULE_6__["SelectsourceComponent"],
                _selectdestination_selectdestination_component__WEBPACK_IMPORTED_MODULE_7__["SelectdestinationComponent"],
                _comprehensive_comprehensive_component__WEBPACK_IMPORTED_MODULE_8__["ComprehensiveComponent"],
                _summary_summary_component__WEBPACK_IMPORTED_MODULE_9__["SummaryComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes), _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]
            ],
            providers: [src_assets_services_instance_service__WEBPACK_IMPORTED_MODULE_12__["InstanceService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/comprehensive/comprehensive.component.css":
/*!***********************************************************!*\
  !*** ./src/app/comprehensive/comprehensive.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    font-family: Lato, sans-serif !important;\r\n}\r\nheader{\r\n    width:100%;\r\n    background-color:#000000;\r\n    height:70px;\r\n}\r\n.header-title{\r\ncolor:#ffffff;\r\nfont-family: 'Lato',sans-serif;\r\n-webkit-margin-before: 0 !important;\r\n-webkit-margin-after: 0 !important;\r\n padding: 15px 15px 2px 15px;\r\n}\r\n.heading{\r\nfont-family: 'Lato',sans-serif;\r\n}\r\n.header-subtitle{\r\ncolor:#86BC25;\r\nfont-size: 12px;\r\npadding:0 0 10px 15px;\r\n}\r\n* {box-sizing: border-box}\r\n.comprehensive-container{\r\n    font-family: 'Lato',sans-serif;\r\n}\r\n/* Style the tab */\r\n.tab {\r\nfloat: left;\r\nborder-top: 1px solid #86BC25;\r\nbackground-color: #000000;\r\nwidth: 30%;\r\nheight: 320px;\r\n}\r\n.inline-Block{\r\n    display: inline-block;\r\n}\r\n.previous-button{\r\n    margin:0 0 0 20%;\r\n}\r\n/* Style the buttons inside the tab */\r\n.tab button {\r\ndisplay: block;\r\nbackground-color: inherit;\r\ncolor: #fff;\r\npadding: 22px 16px;\r\nwidth: 100%;\r\nborder: none;\r\noutline: none;\r\ntext-align: left;\r\ncursor: pointer;\r\ntransition: 0.3s;\r\nfont-size: 17px;\r\n}\r\n/* Change background color of buttons on hover */\r\n.tab button:hover {\r\nbackground-color: #fff;\r\ncolor:#000000;\r\n}\r\n/* Create an active/current \"tab button\" class */\r\n.tab button.active {\r\nbackground-color: #fff;\r\ncolor:#000000;\r\n}\r\n/* Style the tab content */\r\n.tabcontent {\r\nfloat: left;\r\npadding: 0px 12px;\r\nborder: 1px solid #ccc;\r\nwidth: 70%;\r\nborder-left: none;\r\nheight: 320px;\r\n}\r\nbutton,registerButton {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 14px 20px;\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n.registerButton{\r\n    float:right;\r\n    margin-right:7%;\r\n}\r\n.buttonstyle {\r\n    padding: 10px 18px;\r\n    background-color: #86BC25;\r\n}\r\n.deploy-container{\r\n    margin-top:40px;\r\n}\r\n.deploy-container input[type=file] {\r\n    /* display:none; */\r\n}\r\n.deploy-button{\r\n    display: inline-block;\r\n}\r\n.custom-file-upload {\r\n    color:#ffffff;\r\n    background-color: #86BC25;\r\n    display: inline-block;\r\n    padding: 10px 20px;\r\n    cursor: pointer;\r\n    /* margin-right: 10%; */\r\n    margin-top: 40px;\r\n    position: relative;\r\n    left:6.5%;\r\n    }\r\n/*spinner style start*/\r\n.loader {\r\n    border: 16px solid #f3f3f3;\r\n    border-radius: 50%;\r\n    border-top: 16px solid #86bc25;\r\n    width: 120px;\r\n    height: 120px;\r\n    position: absolute;\r\n    top: 40%;\r\n    left: 50%;\r\n    -webkit-animation: spin 2s linear infinite; /* Safari */\r\n    animation: spin 2s linear infinite;\r\n  }\r\n.shim{\r\n      background-color:#ffffff;\r\n      opacity:0.1;\r\n  }\r\n/* Safari */\r\n@-webkit-keyframes spin {\r\n    0% { -webkit-transform: rotate(0deg); }\r\n    100% { -webkit-transform: rotate(360deg); }\r\n  }\r\n@keyframes spin {\r\n    0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\r\n    100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\r\n  }\r\n/*spinner style end*/"

/***/ }),

/***/ "./src/app/comprehensive/comprehensive.component.html":
/*!************************************************************!*\
  !*** ./src/app/comprehensive/comprehensive.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loader\" *ngIf=\"isVisible\"></div>\n<div class=\"comprehensive-container\">\n  <div>\n  <header>\n      <div>\n        <h3 class=\"header-title\">Asset Porter</h3>\n        <p class=\"header-subtitle\">Select Asset Page</p>\n      </div>\n    </header>\n  </div>\n  <div >\n    <div class=\"tab\">\n        <button class=\"tablinks\" [ngClass]=\"{'active':activeTab=='email'}\" (click)=\"activeTab='email'\" *ngIf=\"!isEmailVisible\" >Email</button>\n        <button class=\"tablinks\" [ngClass]=\"{'active':activeTab=='landingpage'}\" (click)=\"activeTab='landingpage'\" *ngIf=\"!islandingPageVisible\">Landing Page</button>\n      </div>\n    \n      <div id=\"Eloqua\" class=\"tabcontent\" *ngIf=\"activeTab=='email' && !isEmailVisible\">\n        <h3>Email</h3>\n        <div class=\"registerButton clearfix\">\n            <button  class=\"buttonstyle\"><a [href]=\"downloadpath\">Download Template</a></button>\n        </div>\n        <div *ngIf=\"eloquaEmails\">\n        <p>\n            <strong>\n              Email Workbook\n            </strong>\n          </p>\n          <ul>\n            <li>\n              Email workbook name should be 'Email Details' with xlsx extension.\n            </li>\n            <li>\n              Workbook contains 4 sheets:\n              <ul>\n                <li>\n                  <strong>\n                    Email Headers:\n                  </strong>\n                  Row 1 contains column label ie source Header Id, Header Name and New Folder Id. Actual data begins from row 2.\n                </li>\n                <li>\n                  <strong>\n                    Email Footers:\n                  </strong>\n                  Row 1 contains column label ie source Footer Id, Footer Name and New Folder Id. Actual data begins from row 2.\n                </li>\n                <li>\n                  <strong>\n                    Email Groups:\n                  </strong>\n                  Row 1 contains column label ie source Group Id and Group Name. Actual data begins from row 2.\n                </li>\n              </ul>\n            </li>\n          </ul>\n        </div>\n          <div *ngIf=\"sfmcEmails\">\n              <!-- <strong>\n                  Email Workbook\n                </strong>\n                <p>\n                  <strong>\n                    Emails:\n                  </strong>\n                  &nbsp;row 1 contains column label ie source Email Id, Email Name and New Folder Id. Actual data begins from row 2.\n                </p> -->\n                <ul>\n                    <li>\n                        Email workbook name should be 'Email Detail Eloqua To MC' with xlsx extension.\n                      </li>\n                      <li>\n                        Workbook contains 1 sheet:\n                        <ul>\n                    <li><strong>Emails:&nbsp;</strong>row 1 contains column label ie source Email Id and Email Name. Actual data begins from row 2.<br /> </li>\n                    </ul>\n                    </li>\n                    </ul>\n        </div>\n      </div>\n  \n      <div id=\"sfmc\" class=\"tabcontent\" *ngIf=\"activeTab=='landingpage'&& !islandingPageVisible\">\n        <h3>Landing Page</h3>\n        <div class=\"registerButton clearfix\">\n            <button class=\"buttonstyle\"><a href=\"./assets/files/Landing Page.xlsx\">Download Template</a></button>\n        </div>\n        <ul>\n            <li>\n                Landing Page workbook name should be 'Landing Page' with xlsx extension.\n              </li>\n              <li>\n                Workbook contains 1 sheet:\n                <ul>\n            <li><strong>LandingPages:&nbsp;</strong>Row 1 contains column label ie&nbsp; source Landing Page Id and Landing Page name. Actual data begins from row 2.<br /> </li>\n            </ul>\n            </li>\n            </ul>\n            <!-- <p><strong>Email Workbook(Eloqua to SFMC)</strong></p>\n            <ul>\n            <li><strong>Emails:&nbsp;</strong>row 1 contains column label ie&nbsp; source Email Id and Email Name. Actual data begins from row 2.</li>\n            </ul> -->\n      </div>\n</div>\n<div class=\"deploy-container\">\n    <div class=\" previous-button inline-Block\">\n    <a routerLink=\"/destination\"><button class=\"buttonstyle\">Previous</button></a>\n    </div>\n    <!-- <label class=\"custom-file-upload inline-Block\">\n    <input type=\"file\" name=\"excel\" accept=\".xlsx\">\n    Choose File\n    </label> -->\n    <button type=\"button\" class=\"custom-file-upload inline-Block\" (click)=\"chooseFile()\">Choose File</button>\n    <div class=\"inline-Block\" >\n    <input type=\"file\" name=\"excel\" accept=\".xlsx\" id=\"button-click\">\n    </div>\n    <div class=\"deploy-button inline-Block\">\n    <button class=\"buttonstyle\" (click)=\"showSpinner()\" >Deploy</button>\n    </div>\n    </div> \n    \n</div>   "

/***/ }),

/***/ "./src/app/comprehensive/comprehensive.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/comprehensive/comprehensive.component.ts ***!
  \**********************************************************/
/*! exports provided: ComprehensiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComprehensiveComponent", function() { return ComprehensiveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_assets_services_instance_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/assets/services/instance.service */ "./src/assets/services/instance.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ComprehensiveComponent = /** @class */ (function () {
    function ComprehensiveComponent(httpService, router, instanceService) {
        this.httpService = httpService;
        this.router = router;
        this.instanceService = instanceService;
        this.activeTab = "email";
        this.isVisible = false;
        this.isEmailVisible = true;
        this.islandingPageVisible = true;
        this.downloadpath = "./assets/files/Email Details.xlsx";
        this.sfmcEmails = false;
        this.eloquaEmails = true;
    }
    ComprehensiveComponent.prototype.ngOnInit = function () {
        console.log(this.instanceService.getserviceSourceData().env);
        console.log(this.instanceService.getserviceDestinationData().env);
        console.log(this.instanceService.getserviceSourceData());
        console.log(this.instanceService.getserviceDestinationData());
        if (this.instanceService.getserviceSourceData().env == "eloqua" && this.instanceService.getserviceDestinationData().env == "eloqua") {
            this.sfmcEmails = false;
            this.eloquaEmails = true;
            this.isEmailVisible = false;
            this.islandingPageVisible = false;
            this.downloadpath = "./assets/files/Email Details.xlsx";
            //alert("eloquaemaillanding");
        }
        else if (this.instanceService.getserviceSourceData().env == "eloqua" && this.instanceService.getserviceDestinationData().env == "sfmc") {
            this.sfmcEmails = true;
            this.isEmailVisible = false;
            this.islandingPageVisible = true;
            this.eloquaEmails = false;
            //alert("email");
            this.downloadpath = "./assets/files/Email Detail Eloqua To MC.xlsx";
        }
    };
    ComprehensiveComponent.prototype.chooseFile = function () {
        document.getElementById("button-click").click();
    };
    ComprehensiveComponent.prototype.showSpinner = function () {
        var _this = this;
        this.isVisible = true;
        var clickedTab = this.activeTab;
        console.log(clickedTab);
        this.instanceService.setActiveTabData(clickedTab);
        if (this.instanceService.getserviceDestinationData().env == "eloqua" && this.instanceService.getActiveTabdata() == "email") {
            //alert('email eloqua');
            this.httpService.get('/eloquaEmail').subscribe(function (data) {
                _this.isVisible = false;
                _this.router.navigateByUrl('/summary');
            }, function (err) {
                console.log(err.message);
            });
        }
        else if (this.instanceService.getserviceDestinationData().env == "sfmc" && this.instanceService.getActiveTabdata() == "email") {
            //alert('sfmc email');
            this.httpService.get('/sfmcEmail').subscribe(function (data) {
                _this.isVisible = false;
                _this.router.navigateByUrl('/summary');
            }, function (err) {
                console.log(err.message);
            });
        }
        else {
            //alert('landing page email');
            this.httpService.get('/eloquaLandingPage').subscribe(function (data) {
                _this.isVisible = false;
                _this.router.navigateByUrl('/summary');
            }, function (err) {
                console.log(err.message);
            });
        }
        /*
        setTimeout(()=>{    //<<<---    using ()=> syntax
          console.log("hi")
          this.isVisible=false;
          this.router.navigateByUrl('/summary');
     },20000);

      */
    };
    ComprehensiveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-comprehensive',
            template: __webpack_require__(/*! ./comprehensive.component.html */ "./src/app/comprehensive/comprehensive.component.html"),
            styles: [__webpack_require__(/*! ./comprehensive.component.css */ "./src/app/comprehensive/comprehensive.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_assets_services_instance_service__WEBPACK_IMPORTED_MODULE_1__["InstanceService"]])
    ], ComprehensiveComponent);
    return ComprehensiveComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    font-family: 'Lato', sans-serif !important;\r\n}\r\nheader{\r\n    width:100%;\r\n    background-color:#000000;\r\n    height:70px;\r\n}\r\n.header-title{\r\ncolor:#ffffff;\r\nfont-family: 'Lato',sans-serif;\r\n-webkit-margin-before: 0 !important;\r\n-webkit-margin-after: 0 !important;\r\n padding: 15px 15px 2px 15px;\r\n}\r\n.heading{\r\nfont-family: 'Lato',sans-serif ;\r\n}\r\n.right-login-container h2{\r\n    font-family: 'Lato',sans-serif ;\r\n}\r\n.header-subtitle{\r\ncolor:#86BC25;\r\nfont-size: 12px;\r\npadding:0 0 10px 15px;\r\n}\r\n.img-container{\r\n    padding:10px;\r\n}\r\n.logo{\r\n    width:122px;\r\n}\r\nbutton:disabled{\r\nbackground-color:#cccccc;\r\ncursor:none;\r\n}\r\ninput[type=text], input[type=password] {\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n}\r\nbutton {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 100%;\r\n}\r\nbutton:hover {\r\n    opacity: 0.8;\r\n}\r\n.buttonstyle {\r\n    padding: 10px 18px;\r\n    background-color: #86BC25;\r\n}\r\n.imgcontainer {\r\n    text-align: center;\r\n    margin: 24px 0 12px 0;\r\n}\r\n.asset-logo-container{\r\n    text-align:center;\r\n}\r\nimg.avatar {\r\n    width: 20%;\r\n}\r\n.form-container{\r\n    padding: 16px;\r\n}\r\nspan.psw {\r\n    float: right;\r\n    padding-top: 16px;\r\n}\r\n.left-login-container{\r\n\tbackground-color: #000000;\r\n    height: 1000px;\r\n}\r\n.left-login-container .content{\r\n\tposition:relative;\r\n    top: 2%;\r\n}\r\n.right-login-container{\r\n\t height: 1000px;\r\n}\r\n.tool-title{\r\n\tcolor:#86BC25;\r\n    text-align:center;\r\n    font-family: 'Lato',sans-serif;\r\n    font-weight: 400;\r\n}\r\n.tool-description{\r\n\tcolor:#ffffff;\r\n\ttext-align:center;\r\n    padding:10px;\r\n    font-family: 'Lato',sans-serif;\r\n    font-weight: 200;\r\n    font-size: 20px;\r\n}\r\n.tool-description-heading{\r\n    font-size:30px;\r\n    font-weight: 300;\r\n}\r\n.row{\r\n    font-family: 'Lato',sans-serif;\r\n}\r\n/* Change styles for span and cancel button on extra small screens */\r\n@media screen and (max-width: 300px) {\r\n    span.psw {\r\n       display: block;\r\n       float: none;\r\n    }\r\n    .cancelbtn {\r\n       width: 100%;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t<div class=\"row\">\n\n\t\t<div class=\"left-login-container col-sm-8 hidden-xs\">\n\t\t\t<div class=\"img-container\">\n\t\t\t\t\t<img [src]=\"logo\" class=\"logo\">\n\t\t\t</div>\t\n\t\t\t\t<div class=\"content\">\t\n\t\t\t\t\t<div class=\"asset-logo-container\">\n\t\t\t\t\t\t\t<img [src]=\"assetlogo\" alt=\"Avatar\" class=\"avatar\">\n\t\t\t\t\t</div> \n\t\t\t\t<!-- <h1 class=\"tool-title\">Asset Porter</h1> -->\n\t\t\t\t<div class=\"tool-description\"><p class=\"tool-description-heading\"> Having difficulty in migrating assets?</p> <p class=\"tool-description-content\" >Here is the easy way...Migrate Emails & Landing Pages from Sandbox to Production or from one Marketing instance to another with just a few clicks !!</p></div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"right-login-container col-sm-4\">\n\t\t\t<div>\n\t\t\t\t<h2 class=\"text-center\">Login</h2>\n\t\t\t\t<form #loginForm=\"ngForm\" action=\"/action_page.php\" (ngSubmit)=\"login(loginForm)\">\n\t\t\t\t  \n\t\t\t\t  <div class=\"form-container\">\n\t\t\t\t    <label for=\"ID\"><b>ID</b></label>\n\t\t\t\t    <input type=\"text\" placeholder=\"Enter ID\" name=\"loginid\" ngModel  required>\n\n\t\t\t\t    <label for=\"password\"><b>Password</b></label>\n\t\t\t\t    <input type=\"password\" placeholder=\"Enter Password\" name=\"psw\" ngModel required pattern>\n\t\t\t\t       \n\t\t\t\t     <div class=\"row center\">\n\t\t\t\t     \t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t <button type=\"submit\" class=\"buttonstyle\" [disabled]=\"!loginForm.valid\" name=\"action\">Login</button>\n\t\t\t\t\t\t\t\t\t <span>{{errorMsg}}</span>\n\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t \n\t\t\t\t     \t\t<div class=\"col-sm-4\">\n\t\t\t\t     \t\t\t<button type=\"button\" class=\"buttonstyle\">Sign Up</button>\n\t\t\t\t     \t\t</div>\n\t\t\t\t     </div>   \n\t\t\t\t  </div>\n\n\t\t\t\t  <div class=\"form-container\">\n\t\t\t\t    <p class=\"psw\"><a href=\"javascript:void(0)\">Forgot password?</a></p>\n\t\t\t\t  </div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import {LoginService, User} from 'C:/my-new-app/src/assets/services/Login.service'
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
        this.logo = "./assets/images/ddlogo@2x.png";
        this.assetlogo = "./assets/images/asset-porter_logo3_trimmed.png";
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    // private ID;
    // private password;
    LoginComponent.prototype.login = function (loginForm) {
        console.log(loginForm.value);
        if (loginForm.value.loginid == "rbhawsar@deloitte.com" && loginForm.value.psw == "1234") {
            this.router.navigate(["source"]);
        }
        else {
            alert("Login failed");
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/selectdestination/selectdestination.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/selectdestination/selectdestination.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    font-family: 'Lato', sans-serif;\r\n}\r\n.margin-bottom-5{\r\n    margin-bottom:5px;\r\n}\r\nheader{\r\n    width:100%;\r\n    background-color:#000000;\r\n    height:70px;\r\n}\r\n.header-title{\r\n    color:#ffffff;\r\n    font-family: 'Lato',sans-serif;\r\n     -webkit-margin-before: 0 !important;\r\n    -webkit-margin-after: 0 !important;\r\n     padding: 15px 15px 2px 15px;\r\n}\r\n.heading{\r\n    font-family: 'Lato',sans-serif;\r\n   }\r\n.container{\r\n    font-family: 'Lato',sans-serif;\r\n}\r\n.header-subtitle{\r\n    color:#86BC25;\r\n    font-size: 12px;\r\n    padding:0 0 10px 15px;\r\n}\r\nbutton,registerButton {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n.registerButton{\r\n    float:right;\r\n    }\r\nli.active{\r\n        background-color: #86BC25;\r\n    }\r\nbutton:hover {\r\n    opacity: 0.8;\r\n}\r\nbutton:disabled{\r\n    background-color:#cccccc;\r\n    cursor:none;\r\n    }\r\n.buttonstyle {\r\n    padding: 10px 18px;\r\n    background-color: #86BC25;\r\n}\r\n.card-container{\r\n    margin-top:40px;\r\n    position: relative;\r\n    height:307px;\r\n}\r\nbutton[disabled]{\r\n    background-color: #cccccc;\r\n    cursor: not-allowed;\r\n}\r\n.inline-Block{\r\n    display: inline-block;\r\n}\r\n.previous-button{\r\n    margin-right: 9%;\r\n}\r\n.eloqua button[disabled]{\r\n    background-color:#ccc;\r\n    cursor:none;\r\n    }\r\n/*flip animation starts*/\r\n.first-container{\r\n    -webkit-perspective: 1000px;\r\n    perspective: 1000px;\r\n    -webkit-transform-style: preserve-3d;\r\n    transform-style: preserve-3d;\r\n    display: block;\r\n    width: 300px;\r\n    height: 200px;\r\n    /* position: absolute;\r\n    left: 28%;\r\n    top: 53%; */\r\n    margin-left: 46%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n    transform: translate(-50%, -50%);\r\n    cursor: pointer;\r\n    }\r\n.second-container{\r\n    -webkit-perspective: 1000px;\r\n    perspective: 1000px;\r\n    -webkit-transform-style: preserve-3d;\r\n    transform-style: preserve-3d;\r\n    display:inline-block;\r\n    width: 300px;\r\n    height: 200px;\r\n    /* position: absolute;\r\n    top: 53%;\r\n    left: 60%; */\r\n    -webkit-transform: translate(-50%, -50%);\r\n    transform: translate(-50%, -50%);\r\n    cursor: pointer;\r\n    }\r\n.third-container {\r\n        -webkit-perspective: 1000px;\r\n        perspective: 1000px;\r\n        -webkit-transform-style: preserve-3d;\r\n        transform-style: preserve-3d;\r\n        display: inline-block;\r\n        width: 300px;\r\n        height: 200px;\r\n        /* position: absolute;\r\n        top: 200%;\r\n        left: 28%; */\r\n        margin:4% 0 0 46%;\r\n        -webkit-transform: translate(-50%, -50%);\r\n        transform: translate(-50%, -50%);\r\n        cursor: pointer;\r\n    }\r\n.fourth-container {\r\n        position: absolute;\r\n        -webkit-perspective: 1000px;\r\n        perspective: 1000px;\r\n        -webkit-transform-style: preserve-3d;\r\n        transform-style: preserve-3d;\r\n        display:inline-block;\r\n        width: 300px;\r\n        height: 200px;\r\n        /* position: absolute;\r\n        top: 90%;\r\n        left: 60%; */\r\n        margin:4% 0 0 0%;\r\n        -webkit-transform: translate(-50%, -50%);\r\n        transform: translate(-50%, -50%);\r\n        cursor: pointer;\r\n    }\r\n.fifth-container {\r\n        position: absolute;\r\n        -webkit-perspective: 1000px;\r\n        perspective: 1000px;\r\n        -webkit-transform-style: preserve-3d;\r\n        transform-style: preserve-3d;\r\n        display: block;\r\n        width: 300px;\r\n        height: 200px;\r\n        /* position: absolute;\r\n        top: 128%;\r\n        left: 28%; */\r\n        -webkit-transform: translate(-50%, -50%);\r\n        transform: translate(-50%, -50%);\r\n        cursor: pointer;\r\n    }\r\n.card-container label {\r\n-webkit-perspective: 1000px;\r\nperspective: 1000px;\r\n-webkit-transform-style: preserve-3d;\r\ntransform-style: preserve-3d;\r\ndisplay: block;\r\nwidth: 300px;\r\nheight: 200px;\r\nposition: absolute;\r\nleft: 50%;\r\ntop: 50%;\r\n-webkit-transform: translate(-50%, -50%);\r\ntransform: translate(-50%, -50%);\r\ncursor: pointer;\r\n}\r\n.card {\r\nposition: relative;\r\nheight: 100%;\r\nwidth: 100%;\r\n-webkit-transform-style: preserve-3d;\r\ntransform-style: preserve-3d;\r\ntransition: all 600ms;\r\nz-index: 20;\r\n}\r\n.card div {\r\n    position: absolute;\r\n    height: 100%;\r\n    width: 100%;\r\n    background: #86BC25;\r\n    text-align: center;\r\n    line-height: 200px;\r\n    -webkit-backface-visibility: hidden;\r\n    backface-visibility: hidden;\r\n    border-radius: 2px;\r\n}\r\n.card .back ul{\r\n    overflow: auto;\r\n    max-height: 158px;\r\n    -webkit-padding-start: 0;\r\n}\r\n.card .back li{\r\n    line-height: 36px;\r\n    text-align:left;\r\n    list-style-type: none;\r\n    padding-left: 40px;\r\n}\r\n.card .back {\r\n    background: #222;\r\n    color: #FFF;\r\n    -webkit-transform: rotateX(180deg);\r\n    transform: rotateX(180deg);\r\n}\r\n.back ul a{\r\n    color:#ffffff;\r\n    display:inline-block;\r\n    width: 100%;\r\n      \r\n}\r\n.back ul a{\r\n    color:#ffffff;\r\n}\r\n.back ul li:hover{\r\n    background-color: #86BC25;\r\n\r\n}\r\n.card-container label:hover .card {\r\nbox-shadow: 0 20px 20px rgba(50,50,50,.2);\r\n}\r\n.card-container label:hover .card {\r\nbox-shadow: 0 20px 20px rgba(50,50,50,.2);\r\n}\r\n.card-container input {\r\ndisplay: none;\r\n}\r\n:checked + .card {\r\ntransform: rotateX(180deg);\r\n-webkit-transform: rotateX(180deg);\r\n}\r\n.card-container label:hover :checked + .card {\r\n    box-shadow: 0 -20px 6px -6px rgba(50,50,50,.2);\r\n}\r\n/* flip animation ends*/\r\n.front img{\r\n     width:160px;\r\n }\r\n.fourth-container .front img{\r\n    width:100px;\r\n }"

/***/ }),

/***/ "./src/app/selectdestination/selectdestination.component.html":
/*!********************************************************************!*\
  !*** ./src/app/selectdestination/selectdestination.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n\t\t<div>\n\t\t\t<h3 class=\"header-title\">Asset Porter</h3>\n\t\t\t<p class=\"header-subtitle\">Select Destination Page</p>\n\t\t</div>\n  </header>\n  \n\t<div class=\"container\">\n    <h1 class=\"heading\">Select Destination</h1>\n    <div class=\"registerButton\">\n\t\t<!-- Trigger the modal with a button -->\n\t\t<button type=\"button\" class=\"buttonstyle\" data-toggle=\"modal\" data-target=\"#myModal\">Register New Instance</button>\n</div>\n<div class=\" clearfix\"></div>\n\t<!-- Modal -->\n\t<div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\n\t\t\t<div class=\"modal-dialog\">\n\t\n\t\t\t\t<!-- Modal content-->\n\t\t\t\t<div class=\"modal-content\">\n\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\t\t\t\t\t\t<h4 class=\"modal-title\">Insert New Instance</h4>\n\t\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t<!--Dropdown-->\n\t\t\t\t\t<div class=\"box-header with-border\">  \n\t\t\t\t\t\t\t<div class=\"form-group voffset row\" >  \n\t\t\t\t\t\t\t\t<label for=\"\" class=\"vertical-label col-sm-4 col-md-8 text-center\">  Select Platform</label>  \n\t\t\t\t\t\t\t\t<div class=\"col-sm-8 col-md-4\">  \n\t\t\t\t\t\t\t\t\t<select class=\"hideLabel form-control\"  [(ngModel)]=\"selectedValue\"  (ngModelChange)=\"checkInstance(selectedValue)\">  \n\t\t\t\t\t\t\t\t\t\t\t<option selected=\"\" value=\"\">--None--</option>  \n\t\t\t\t\t\t\t\t\t <!-- <option [ngValue]=\"selectedValue\" *ngFor=\"let k of nameList\">  \n\t\t\t\t\t\t\t\t\t\t\t {{k.Name}}  \n\t\t\t\t\t\t\t\t\t  </option>   -->\n\t\t\t\t\t\t\t\t\t  <option value=\"eloqua\" >  \n\t\t\t\t\t\t\t\t\t\t\tEloqua\n\t\t\t\t\t\t\t\t\t </option> \n\t\t\t\t\t\t\t\t\t <option value=\"sfmc\">   \n\t\t\t\t\t\t\t\t\t\t\tSFMC\n\t\t\t\t\t\t\t\t\t </option>\n\t\t\t\t\t\t\t\t\t <option value=\"paradot\">   \n\t\t\t\t\t\t\t\t\t\t\tParadot\n\t\t\t\t\t\t\t\t\t </option>\n\t\t\t\t\t\t\t\t\t <option value=\"rawHtml\">   \n\t\t\t\t\t\t\t\t\t\t\tRAW HTML\n\t\t\t\t\t\t\t\t\t </option>\n\t\t\t\t\t\t\t\t </select>  \n\t\t\t\t\t\t\t\t</div>  \n\t\t\t\t\t\t\t</div>  \n\t\t\t\t\t</div> \n\t\t\t\t\t<div class=\"eloqua\" *ngIf=\"selectedValue=='eloqua'\">\n\t\t\t\t\t\t<form #eloquafields=\"ngForm\" (ngSubmit)=\"addInstance(eloquafields)\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"col-sm-12 margin-bottom-5\">\n\t\t\t\t\t\t\t\t\t<label>Instance Name</label>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"instance_name\" class=\"form-control\" placeholder =\"instance Name\" required ngModel />\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 margin-bottom-5\">\n\t\t\t\t\t\t\t\t\t\t<label>Company Name</label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"companyName\" class=\"form-control\" placeholder =\"Company Name\" required ngModel />\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-12  margin-bottom-5\">\n\t\t\t\t\t\t\t<label>User Id</label>\n\t\t\t\t\t\t\t\t<input type=\"text\"  name=\"User Id\" class=\"form-control\" placeholder =\"User ID\" required ngModel/>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-12  margin-bottom-5\">\n\t\t\t\t\t\t\t<label>Password</label>\n\t\t\t\t\t\t\t<input type=\"password\"  name=\"password\" class=\"form-control\"  placeholder =\"password\" required ngModel/>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"add-button\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"buttonstyle\" [disabled]=\"!eloquafields.valid\" name=\"action\"  >Add Instance</button>\n\t\t\t\t\t\t</div> \n\t\t\t\t\t\t</form>\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"sfmc\" *ngIf=\"selectedValue=='sfmc'\" >\n\t\t\t\t\t\t\t<form #sfmcfields=\"ngForm\" (ngSubmit)=\"addInstance(sfmcfields)\">\n\t\t\t\t\t\t\t\t<label>Instnace Name</label>\n\t\t\t\t\t\t\t\t<input type=\"text\" name=\"instance_name\" class=\"form-control\" placeholder=\"client Id\" ngModel/>\n\t\t\t\t\t\t\t\t<label>Client ID</label>\n\t\t\t\t\t\t\t\t<input type=\"text\" name=\"clientId\" class=\"form-control\" placeholder=\"client Id\" ngModel/>\n\t\t\t\t\t\t\t\t<label>Client Secret ID</label>\n\t\t\t\t\t\t\t\t<input type=\"text\" name=\"clientsecretId\" class=\"form-control\" placeholder=\"client secret Id\" ngModel />\n\t\t\t\t\t\t\t\t<div class=\"add-button\">\n\t\t\t\t\t\t\t\t\t<button class=\"buttonstyle\" [disabled]=\"!sfmcfields.valid\" name=\"action\" >Add Instance</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t<!--dropdown ends-->\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-footer\">\n\t\t\t\t\t<button type=\"button\" class=\"btn\" data-dismiss=\"modal\" id=\"closebutton\">Close</button>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\n\t\t\t</div>\n\t\t\t</div><!--Modal ends-->\n\t\n\t\t\t<div class=\"row card-container\">\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"first-container\">\n\t\t\t\t\t\t\t<label> \n\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t<div class=\"front\"><!--ELOQUA--><img [src]=\"eloqualogo\"/></div>\n\t\t\t\t\t\t\t\t<div class=\"back\">\n\t\t\t\t\t\t\t<h4>Eloqua</h4>\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li *ngFor=\"let item of eloquaList\" [ngClass]=\"{'active': selectedItem.instance_name==item.instance_name && selectedItem.env == item.env}\"><a href=\"javascript:void(0)\" (click)=\"enable($event,item)\">{{item.instance_name}}</a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-6 clearfix\">\n\t\t\t\t\t<div class=\"second-container\">\n\t\t\t\t\t\t\t<label> \n\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t<div class=\"front\"><!--SFMC--><img [src]=\"sfmclogo\"/></div>\n\t\t\t\t\t\t\t\t<div class=\"back\">\n\t\t\t\t\t\t\t<h4>SFMC</h4>\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li *ngFor=\"let item of sfmcList\" [ngClass]=\"{'active': selectedItem.instance_name==item.instance_name && selectedItem.env == item.env}\"><a href=\"javascript:void(0)\" (click)=\"enable($event,item)\">{{item.instance_name}}</a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-6 clearfix\">\n\t\t\t\t\t\t<div class=\"third-container\">\n\t\t\t\t\t\t\t\t<label> \n\t\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t\t<div class=\"front\"><!--PARADOT--><img [src]=\"paradotlogo\"/></div>\n\t\t\t\t\t\t\t\t\t<div class=\"back\">\n\t\t\t\t\t\t\t\t<h4>Paradot</h4>\n\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t<li *ngFor=\"let item of paradotList\" [ngClass]=\"{'active': selectedItem.instance_name==item.instance_name && selectedItem.env == item.env}\"><a href=\"javascript:void(0)\" (click)=\"enable($event,item)\">{{item.instance_name}}</a></li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"col-sm-6 clearfix\">\t\n\t\t\t\t\t\t\t<div class=\"fourth-container\">\n\t\t\t\t\t\t\t\t\t<label> \n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"front\"><!--HTML--><img [src]=\"htmllogo\"/></div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"back\">\n\t\t\t\t\t\t\t\t\t\t\t<h4>Html</h4>\n\t\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let item of htmlList\" [ngClass]=\"{'active': selectedItem.instance_name==item.instance_name && selectedItem.env == item.env}\"><a href=\"javascript:void(0)\" (click)=\"enable($event,item)\">{{item.instance_name}}</a></li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!--\t\t<div class=\"fifth-container\">\n\t\t\t\t\t\t\t\t\t\t<label> \n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"front\">MARKETO</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"back\">\n\t\t\t\t\t\t\t\t\t<h4>Marketo</h4>\n\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let item of marketoList\" [ngClass]=\"{'active': selectedItem.instance_name==item.instance_name && selectedItem.env == item.env}\"><a href=\"javascript:void(0)\" (click)=\"enable($event,item)\">{{item.instance_name}}</a></li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t</div>-->\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"text-right\">\n\t\t\t\t\t\t\t\t\t<div class=\" previous-button inline-Block\">\n\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/source\"><button class=\"buttonstyle\">Previous</button></a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\" next-button inline-Block \">\n\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/comprehensive\"><button class=\"buttonstyle\" [disabled]=\"isDisabled\" >Select Asset</button></a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\n\t\t"

/***/ }),

/***/ "./src/app/selectdestination/selectdestination.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/selectdestination/selectdestination.component.ts ***!
  \******************************************************************/
/*! exports provided: SelectdestinationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectdestinationComponent", function() { return SelectdestinationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_assets_services_instance_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/services/instance.service */ "./src/assets/services/instance.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SelectdestinationComponent = /** @class */ (function () {
    function SelectdestinationComponent(httpService, instanceService) {
        this.httpService = httpService;
        this.instanceService = instanceService;
        // items=["fffd","hjgj","hfhj"];
        this.isValid = false;
        this.isDisabled = true;
        this.activeTab = false;
        this.selectedItem = "";
        this.selectedsfmcItem = "";
        this.eloquaList = [];
        this.sfmcList = [];
        this.selectedValue = "";
        this.eloqualogo = "./assets/images/eloqua.png";
        this.sfmclogo = "./assets/images/Sfmc_edited.png";
        this.paradotlogo = "./assets/images/pardot.png";
        this.marketologo = "./assets/images/marketo-logo.png";
        this.htmllogo = "./assets/images/html.png";
    }
    SelectdestinationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.get('./assets/services/instance.json').subscribe(function (data) {
            _this.eloquaList = data.filter(function (item) { return item.env == 'eloqua'; }); // FILL THE ARRAY WITH DATA.
            _this.sfmcList = data.filter(function (item) { return item.env == 'sfmc'; });
        }, function (err) {
            console.log(err.message);
        });
    };
    SelectdestinationComponent.prototype.enable = function ($event, selecteddestinationvalue) {
        console.log(selecteddestinationvalue);
        this.isDisabled = false;
        this.selectedItem = selecteddestinationvalue;
        this.instanceService.setserviceDestinationData(selecteddestinationvalue);
        console.log(this.instanceService.getserviceDestinationData());
    };
    SelectdestinationComponent.prototype.addInstance = function (newInstancevalue) {
        console.log(newInstancevalue.value);
        if (this.selectedValue == "eloqua") {
            this.eloquaList.push(newInstancevalue.value);
        }
        else if (this.selectedValue == "sfmc") {
            this.sfmcList.push(newInstancevalue.value);
        }
        //alert("New Instance has been registered successfully!!");
        //this.instanceService.serviceData=newInstancevalue.value;
        newInstancevalue.resetForm();
        document.getElementById("closebutton").click();
    };
    SelectdestinationComponent.prototype.getNameList = function () {
        this.nameList = this.data = [
            {
                "Id": "eloqua",
                "Name": "Eloqua"
            },
            {
                "Id": "sfmc",
                "Name": "SFMC"
            }
        ];
    };
    SelectdestinationComponent.prototype.selectName = function () {
        //alert(this.nameId);
    };
    SelectdestinationComponent.prototype.checkInstance = function (value, selected) {
        console.log(value);
        selected = value;
        console.log(selected);
    };
    SelectdestinationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-selectdestination',
            template: __webpack_require__(/*! ./selectdestination.component.html */ "./src/app/selectdestination/selectdestination.component.html"),
            styles: [__webpack_require__(/*! ./selectdestination.component.css */ "./src/app/selectdestination/selectdestination.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], src_assets_services_instance_service__WEBPACK_IMPORTED_MODULE_2__["InstanceService"]])
    ], SelectdestinationComponent);
    return SelectdestinationComponent;
}());



/***/ }),

/***/ "./src/app/selectsource/selectsource.component.css":
/*!*********************************************************!*\
  !*** ./src/app/selectsource/selectsource.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    font-family: 'Lato', sans-serif;\r\n}\r\nheader{\r\n    width:100%;\r\n    background-color:#000000;\r\n    height:70px;\r\n}\r\n.header-title{\r\n    color:#ffffff;\r\n    font-family: 'Lato',sans-serif;\r\n    -webkit-margin-before: 0 !important;\r\n    -webkit-margin-after: 0 !important;\r\n     padding: 15px 15px 2px 15px;\r\n}\r\n.heading{\r\n    font-family: 'Lato',sans-serif;\r\n}\r\n.container{\r\n    font-family: 'Lato',sans-serif;\r\n}\r\n.header-subtitle{\r\n    color:#86BC25;\r\n    font-size: 12px;\r\n    padding:0 0 10px 15px;\r\n}\r\n.card-container{\r\n    margin-top:40px;\r\n    position: relative;\r\n    height: 307px;\r\n}\r\nbutton,registerButton {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n.registerButton{\r\n    float:right;\r\n   \r\n}\r\n.button{\r\n    position: absolute;\r\n    top: 70%;\r\n    right: 9%;\r\n}\r\nbutton:hover {\r\n    opacity: 0.8;\r\n}\r\n.buttonstyle {\r\n    padding: 10px 18px;\r\n    background-color: #86BC25;\r\n}\r\nbutton[disabled]{\r\n    background-color: #cccccc;\r\n    cursor: not-allowed;\r\n}\r\na.active{\r\n    background-color: #86BC25;\r\n}\r\n.none{\r\n    display:none;\r\n}\r\n/*flip animation starts*/\r\n.first-container{\r\n-webkit-perspective: 1000px;\r\nperspective: 1000px;\r\n-webkit-transform-style: preserve-3d;\r\ntransform-style: preserve-3d;\r\ndisplay:inline-block;\r\nwidth: 300px;\r\nheight: 200px;\r\n/* position: absolute;\r\nleft: 28%;\r\ntop: 53%; */\r\nmargin-left: 46%;\r\n-webkit-transform: translate(-50%, -50%);\r\ntransform: translate(-50%, -50%);\r\ncursor: pointer;\r\n}\r\n.second-container{\r\n-webkit-perspective: 1000px;\r\nperspective: 1000px;\r\n-webkit-transform-style: preserve-3d;\r\ntransform-style: preserve-3d;\r\ndisplay:inline-block;\r\nwidth: 300px;\r\nheight: 200px;\r\n/* position: absolute;\r\ntop: 53%;\r\nleft: 60%; */\r\n-webkit-transform: translate(-50%, -50%);\r\ntransform: translate(-50%, -50%);\r\ncursor: pointer;\r\n}\r\n.third-container {\r\n    /* position: absolute; */\r\n    -webkit-perspective: 1000px;\r\n    perspective: 1000px;\r\n    -webkit-transform-style: preserve-3d;\r\n    transform-style: preserve-3d;\r\n    display: inline-block;\r\n    width: 300px;\r\n    height: 200px;\r\n    /* position: absolute;\r\n    top: 200%;\r\n    left: 28%; */\r\n    margin:4% 0 0 46%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n    transform: translate(-50%, -50%);\r\n    cursor: pointer;\r\n}\r\n.fourth-container {\r\n    /* position: absolute; */\r\n    -webkit-perspective: 1000px;\r\n    perspective: 1000px;\r\n    -webkit-transform-style: preserve-3d;\r\n    transform-style: preserve-3d;\r\n    display:inline-block;\r\n    width: 300px;\r\n    height: 200px;\r\n    /* position: absolute;\r\n    top: 90%;\r\n    left: 60%; */\r\n    -webkit-transform: translate(-50%, -50%);\r\n    transform: translate(-50%, -50%);\r\n    cursor: pointer;\r\n    margin:4% 0 0 0%;\r\n  \r\n}\r\n.fifth-container {\r\n    /* position: absolute; */\r\n    -webkit-perspective: 1000px;\r\n    perspective: 1000px;\r\n    -webkit-transform-style: preserve-3d;\r\n    transform-style: preserve-3d;\r\n    display: block;\r\n    width: 300px;\r\n    height: 200px;\r\n    /* position: absolute;\r\n    top: 128%;\r\n    left: 28%; */\r\n    -webkit-transform: translate(-50%, -50%);\r\n    transform: translate(-50%, -50%);\r\n    cursor: pointer;\r\n}\r\n.card-container label {\r\n-webkit-perspective: 1000px;\r\nperspective: 1000px;\r\n-webkit-transform-style: preserve-3d;\r\ntransform-style: preserve-3d;\r\ndisplay: block;\r\nwidth: 300px;\r\nheight: 200px;\r\nposition: absolute;\r\nleft: 50%;\r\ntop: 50%;\r\n-webkit-transform: translate(-50%, -50%);\r\ntransform: translate(-50%, -50%);\r\ncursor: pointer;\r\n}\r\n.card {\r\nposition: relative;\r\nheight: 100%;\r\nwidth: 100%;\r\n-webkit-transform-style: preserve-3d;\r\ntransform-style: preserve-3d;\r\ntransition: all 600ms;\r\nz-index: 20;\r\n}\r\n.card div {\r\n    position: absolute;\r\n    height: 100%;\r\n    width: 100%;\r\n    background: #86BC25;\r\n    text-align: center;\r\n    line-height: 200px;\r\n    -webkit-backface-visibility: hidden;\r\n    backface-visibility: hidden;\r\n    border-radius: 2px;\r\n}\r\n.card .back ul{\r\n    overflow: auto;\r\n    max-height: 158px;\r\n    -webkit-padding-start: 0;\r\n}\r\n.card .back li{\r\n    line-height: 36px;\r\n    text-align:left;\r\n    list-style-type: none;\r\n    padding-left: 40px;\r\n}\r\n.card .back {\r\n    background: #222;\r\n    color: #FFF;\r\n    -webkit-transform: rotateX(180deg);\r\n    transform: rotateX(180deg);\r\n}\r\n.back ul a{\r\n    color:#ffffff;\r\n    display:inline-block;\r\n    width: 100%;\r\n      \r\n}\r\n.back ul li:hover,.active{\r\n    background-color: #86BC25;\r\n\r\n}\r\n.card-container label:hover .card {\r\nbox-shadow: 0 20px 20px rgba(50,50,50,.2);\r\n}\r\n.card-container input {\r\ndisplay: none;\r\n}\r\n:checked + .card {\r\ntransform: rotateX(180deg);\r\n-webkit-transform: rotateX(180deg);\r\n}\r\n.card-container label:hover :checked + .card {\r\n    box-shadow: 0 -20px 6px -6px rgba(50,50,50,.2);\r\n}\r\n/* flip animation ends*/\r\n.front img{\r\n     width:160px;\r\n }\r\n.fourth-container .front img{\r\n    width:100px;\r\n }"

/***/ }),

/***/ "./src/app/selectsource/selectsource.component.html":
/*!**********************************************************!*\
  !*** ./src/app/selectsource/selectsource.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t<header>\n\t\t<div>\n\t\t\t<h3 class=\"header-title\">Asset Porter</h3>\n\t\t\t<p class=\"header-subtitle\">Select Source Page</p>\n\t\t</div>\n\t</header>\n\t<div class=\"container\">\n    <h1 class=\"heading\" #source>Select Source</h1>\n\t<div class=\"registerButton\">\n\t\t\t<!-- Trigger the modal with a button -->\n\t\t\t<button type=\"button\" class=\"buttonstyle\" data-toggle=\"modal\" data-target=\"#myModal\">Register New Instance</button>\n\t</div>\n\t<div class=\"clearfix\"></div>\n\t<!-- Modal -->\n\t\t\t<div id=\"myModal\" class=\"modal fade\" role=\"dialog\" >\n\t\t\t<div class=\"modal-dialog\">\n\t\n\t\t\t\t<!-- Modal content-->\n\t\t\t\t<div class=\"modal-content\">\n\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\t\t\t\t\t<h4 class=\"modal-title\">Insert New Instance</h4>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t<!--Dropdown-->\n\t\t\t\t\t<div class=\"box-header with-border\">  \n\t\t\t\t\t\t\t<div class=\"form-group voffset row\" >  \n\t\t\t\t\t\t\t\t<label for=\"\" class=\"vertical-label col-sm-4 col-md-8 text-center\"> Select Platform</label>  \n\t\t\t\t\t\t\t\t<div class=\"col-sm-8 col-md-4\">  \n\t\t\t\t\t\t\t\t\t<select class=\"hideLabel form-control\" name=\"selectedValue\" [(ngModel)]=\"selectedValue\" (ngModelChange)=\"checkInstance(selectedValue)\">  \n\t\t\t\t\t\t\t\t\t\t\t <option selected=\"\" value=\"\">--None--</option>  \n\t\t\t\t\t\t\t\t\t\t\t <!--<option [ngValue]=\"k.Id\" *ngFor=\"let k of nameList\" >  \n\t\t\t\t\t\t\t\t\t\t\t {{k.Name}}  \n\t\t\t\t\t\t\t\t\t  </option>   -->\n\t\t\t\t\t\t\t\t\t  <option value=\"eloqua\">  \n\t\t\t\t\t\t\t\t\t\t\tEloqua\n\t\t\t\t\t\t\t\t\t </option> \n\t\t\t\t\t\t\t\t\t <option value=\"sfmc\">   \n\t\t\t\t\t\t\t\t\t\t\tSFMC\n\t\t\t\t\t\t\t\t\t </option>\n\t\t\t\t\t\t\t\t\t <option value=\"paradot\">   \n\t\t\t\t\t\t\t\t\t\t\tParadot\n\t\t\t\t\t\t\t\t\t </option>\n\t\t\t\t\t\t\t\t\t <option value=\"rawHtml\">   \n\t\t\t\t\t\t\t\t\t\t\tRAW HTML\n\t\t\t\t\t\t\t\t\t </option>\n\t\t\t\t\t\t\t\t </select>  \n\t\t\t\t\t\t\t\t</div>  \n\t\t\t\t\t\t\t</div>  \n\t\t\t\t\t</div> \n\t\t\t\t\t<div class=\"eloqua\" *ngIf=\"selectedValue=='eloqua'\">\n\t\t\t\t\t<form #eloquafields=\"ngForm\" (ngSubmit)=\"addInstance(eloquafields)\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"col-sm-12 margin-bottom-5\">\n\t\t\t\t\t\t\t\t<label>Instance Name</label>\n\t\t\t\t\t\t\t\t<input type=\"text\" name=\"instance_name\" class=\"form-control\" placeholder =\"instance Name\" ngModel required />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-12 margin-bottom-5\">\n\t\t\t\t\t\t\t\t\t<label>Company Name</label>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"company_name\" class=\"form-control\" placeholder =\"Company Name\" ngModel required/>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-12 margin-bottom-5\">\n\t\t\t\t\t\t<label>User Id</label>\n\t\t\t\t\t\t\t<input type=\"text\"  name=\"User Id\" class=\"form-control\" placeholder =\"User ID\" ngModel required/>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-12 margin-bottom-5\">\n\t\t\t\t\t\t<label>Password</label>\n\t\t\t\t\t\t<input type=\"password\"  name=\"password\" class=\"form-control\"  placeholder =\"password\" ngModel required/>\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"add-button\">\n\t\t\t\t\t\t<button type=\"submit\" class=\"buttonstyle\"  [disabled]=\"!eloquafields.valid\" name=\"action\" (click)=\"hide=true\"  >Add Instance</button>\n\t\t\t\t\t</div> \n\t\t\t\t\t</form>\t\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"sfmc\" *ngIf=\"selectedValue=='sfmc'\" >\n\t\t\t\t\t\t<form #sfmcfields=\"ngForm\" (ngSubmit)=\"addInstance(sfmcfields)\" >\n\t\t\t\t\t\t\t\t<label>Instnace Name</label>\n\t\t\t\t\t\t\t\t<input type=\"text\" name=\"instance_name\" class=\"form-control\" placeholder=\"client Id\" ngModel required/>\n\t\t\t\t\t\t\t<label>Client ID</label>\n\t\t\t\t\t\t\t<input type=\"text\" name=\"clientId\" class=\"form-control\" placeholder=\"client Id\" ngModel required/>\n\t\t\t\t\t\t\t<label>Client Secret ID</label>\n\t\t\t\t\t\t\t<input type=\"text\" name=\"clientsecretId\" class=\"form-control\" placeholder=\"client secret Id\" ngModel required/>\n\t\t\t\t\t\t\t<div class=\"add-button\">\n\t\t\t\t\t\t\t\t<button class=\"buttonstyle\" [disabled]=\"!sfmcfields.valid\" name=\"action\" (click)=\"hide=true\" >Add Instance</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<!--dropdown ends-->\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-footer\">\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" id=\"closebutton\">Close</button>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\n\t\t\t</div>\n\t\t\t</div><!--Modal ends-->\n\t\t\n\t\t<div class=\"row card-container\">\n\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t<div class=\"first-container\">\n\t\t\t\t\t<label> \n\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t <div class=\"front\"><!--ELOQUA--><img [src]=\"eloqualogo\"/></div> \n\t\t\t\t\t\t<div class=\"back\">\n\t\t\t\t\t<h4>Eloqua</h4>\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li *ngFor=\"let item of eloquaList\" [ngClass]=\"{'active': selectedItem.instance_name==item.instance_name && selectedItem.env == item.env}\"><a href=\"javascript:void(0)\" (click)=\"enable($event,item)\">{{item.instance_name}}</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-6 clearfix\">\n\t\t\t<div class=\"second-container\">\n\t\t\t\t\t<label> \n\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"front\"><!--SFMC--><img [src]=\"sfmclogo\"/></div>\n\t\t\t\t\t\t<div class=\"back\">\n\t\t\t\t\t<h4>SFMC</h4>\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li *ngFor=\"let item of sfmcList\" [ngClass]=\"{'active': selectedItem.instance_name==item.instance_name && selectedItem.env == item.env}\" ><a href=\"javascript:void(0)\" (click)=\"enable($event,item)\">{{item.instance_name}}</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-6 clearfix\">\n\t\t\t\t<div class=\"third-container\">\n\t\t\t\t\t\t<label> \n\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"front\"><!--PARADOT--><img [src]=\"paradotlogo\"/></div>\n\t\t\t\t\t\t\t<div class=\"back\">\n\t\t\t\t\t\t<h4>Paradot</h4>\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li *ngFor=\"let item of paradotList\" [ngClass]=\"{'active': selectedItem.instance_name==item.instance_name && selectedItem.env == item.env}\"><a href=\"javascript:void(0)\" (click)=\"enable($event,item)\">{{item.instance_name}}</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t  </div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6 clearfix\">\n\t\t\t\t\t<div class=\"fourth-container\">\n\t\t\t\t\t\t\t\t\t<label> \n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"front\"><!--HTML--> <img [src]=\"htmllogo\"/></div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"back\">\n\t\t\t\t\t\t\t\t\t<h4>Html</h4>\n\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let item of htmlList\" [ngClass]=\"{'active': selectedItem.instance_name==item.instance_name && selectedItem.env == item.env}\"><a href=\"javascript:void(0)\" (click)=\"enable($event,item)\">{{item.instance_name}}</a></li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!--\t<div class=\"fifth-container\">\n\t\t\t\t\t\t\t<label> \n\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t<div class=\"front\">MARKETO <img [src]=\"marketologo\"/></div>\n\t\t\t\t\t\t\t\t<div class=\"back\">\n\t\t\t\t\t\t\t<h4>Marketo</h4>\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t<li *ngFor=\"let item of marketoList\" [ngClass]=\"{'active': selectedItem.instance_name==item.instance_name && selectedItem.env == item.env}\"><a href=\"javascript:void(0)\" (click)=\"enable($event,item)\">{{item.instance_name}}</a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t-->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\n\t\t\t\n\t\t\t\t<div class=\"text-right\">\n\t\t\t\t\t\t<div class=\"next-button\">\n\t\t\t\t\t\t\t\t<a routerLink=\"/destination\"><button class=\"buttonstyle\" [disabled]=\"isDisabled\" >Select Destination</button></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\n    </div>\n\n"

/***/ }),

/***/ "./src/app/selectsource/selectsource.component.ts":
/*!********************************************************!*\
  !*** ./src/app/selectsource/selectsource.component.ts ***!
  \********************************************************/
/*! exports provided: SelectsourceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectsourceComponent", function() { return SelectsourceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_assets_services_instance_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/assets/services/instance.service */ "./src/assets/services/instance.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SelectsourceComponent = /** @class */ (function () {
    function SelectsourceComponent(httpService, instanceService) {
        this.httpService = httpService;
        this.instanceService = instanceService;
        // items=["jhk","jkgj","hgjh"];
        this.isValid = false;
        this.isDisabled = true;
        this.activeTab = false;
        this.selectedItem = "";
        this.selectedsfmcItem = "";
        this.eloquaList = [];
        this.sfmcList = [];
        this.eloqualogo = "./assets/images/eloqua.png";
        this.sfmclogo = "./assets/images/Sfmc_edited.png";
        this.paradotlogo = "./assets/images/pardot.png";
        this.marketologo = "./assets/images/marketo-logo.png";
        this.htmllogo = "./assets/images/html.png";
        this.selectedValue = "";
    }
    SelectsourceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.get('./assets/services/instance.json').subscribe(function (data) {
            _this.arrInstance = data;
            _this.eloquaList = data.filter(function (item) { return item.env == 'eloqua'; }); // FILL THE ARRAY WITH DATA.
            _this.sfmcList = data.filter(function (item) { return item.env == 'sfmc'; });
        }, function (err) {
            console.log(err.message);
        });
    };
    SelectsourceComponent.prototype.enable = function ($event, selectedsourcevalue) {
        console.log(selectedsourcevalue);
        this.isDisabled = false;
        this.selectedItem = selectedsourcevalue;
        //var selectedItem = selectedsourcevalue;
        this.instanceService.setserviceSourceData(selectedsourcevalue);
        console.log(this.instanceService.getserviceSourceData());
    };
    SelectsourceComponent.prototype.addInstance = function (newInstancevalue) {
        console.log(newInstancevalue.value);
        if (this.selectedValue == "eloqua") {
            this.eloquaList.push(newInstancevalue.value);
        }
        else if (this.selectedValue == "sfmc") {
            this.sfmcList.push(newInstancevalue.value);
        }
        //alert("New Instance has been registered successfully!!");
        newInstancevalue.resetForm();
        // debugger;
        document.getElementById("closebutton").click();
    };
    SelectsourceComponent.prototype.getNameList = function () {
        this.nameList = this.data = [
            {
                "Id": "eloqua",
                "Name": "Eloqua"
            },
            {
                "Id": "sfmc",
                "Name": "SFMC"
            }
        ];
    };
    SelectsourceComponent.prototype.selectName = function () {
        //alert(this.nameId);
    };
    SelectsourceComponent.prototype.checkInstance = function (env) {
        console.log("env:" + env);
    };
    SelectsourceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-selectsource',
            template: __webpack_require__(/*! ./selectsource.component.html */ "./src/app/selectsource/selectsource.component.html"),
            styles: [__webpack_require__(/*! ./selectsource.component.css */ "./src/app/selectsource/selectsource.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_assets_services_instance_service__WEBPACK_IMPORTED_MODULE_1__["InstanceService"]])
    ], SelectsourceComponent);
    return SelectsourceComponent;
}());



/***/ }),

/***/ "./src/app/summary/summary.component.css":
/*!***********************************************!*\
  !*** ./src/app/summary/summary.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    font-family: Lato, sans-serif !important;\r\n}\r\nheader{\r\n    width:100%;\r\n    background-color:#000000;\r\n    height:70px;\r\n}\r\n.header-title{\r\ncolor:#ffffff;\r\nfont-family: 'Lato',sans-serif;\r\n\r\n-webkit-margin-before: 0 !important;\r\n-webkit-margin-after: 0 !important;\r\n padding: 15px 15px 2px 15px;\r\n}\r\n.heading{\r\nfont-family: 'Lato',sans-serif !important;\r\n\r\n}\r\n.header-subtitle{\r\ncolor:#86BC25;\r\nfont-size: 12px;\r\npadding:0 0 10px 15px;\r\n}\r\nh1{\r\n    font-family: 'Lato',sans-serif;\r\n    font-weight: 500;   \r\n}\r\n.summary-content{\r\nfont-size: 20px;\r\nfont-family: 'Lato',sans-serif;\r\n}\r\n.summary-content .success{\r\ncolor:#86BC25;\r\n}\r\n.summary-content .error{\r\ncolor:#ff3333;\r\n}\r\n.download-button{\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n.downloadButton{\r\n    margin-right:5%;\r\n}\r\n.buttonstyle {\r\n    padding: 10px 18px;\r\n    background-color: #86BC25;\r\n}\r\n.button-container{\r\n    margin-top:40px;\r\n}\r\n.inline-Block{\r\n    display: inline-block;\r\n}"

/***/ }),

/***/ "./src/app/summary/summary.component.html":
/*!************************************************!*\
  !*** ./src/app/summary/summary.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n    <div >\n      <h3 class=\"header-title\">Asset Porter</h3>\n      <p class=\"header-subtitle\">Summary Page</p>\n    </div>\n  </header>\n  <div class=\"text-center\">\n    <h1>Summary</h1>\n    <div class=\"summary-content\">\n      <!-- <p class=\"success\">13 pages have been successfully migrated</p>\n      <p class=\"error\">2 pages have error while migrating</p> -->\n      <p>The migration has been done successfully .For the report click below</p>\n      <div class=\"button-container\">\n        <button  class=\"download-button buttonstyle downloadButton\"><!--<a [href]=\"downloadreport\">--><a href=\"./assets/backend/Email Migration Report\">Download Report</a></button>\n        <a routerLink=\"/source\"><button  class=\"download-button buttonstyle\">Make another Deployment</button></a>\n       \n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/summary/summary.component.ts":
/*!**********************************************!*\
  !*** ./src/app/summary/summary.component.ts ***!
  \**********************************************/
/*! exports provided: SummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryComponent", function() { return SummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_assets_services_instance_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/assets/services/instance.service */ "./src/assets/services/instance.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SummaryComponent = /** @class */ (function () {
    function SummaryComponent(instanceService) {
        this.instanceService = instanceService;
        this.downloadreport = "";
    }
    SummaryComponent.prototype.ngOnInit = function () {
        if (this.instanceService.getserviceDestinationData().env == "eloqua" && this.instanceService.getActiveTabdata() == "email") {
            console.log(this.instanceService.getActiveTabdata());
            this.downloadreport = "./assets/backend/Email Report";
        }
        else if (this.instanceService.getserviceDestinationData().env == "sfmc" && this.instanceService.getActiveTabdata() == "email") {
            console.log(this.instanceService.getActiveTabdata());
            this.downloadreport = "./assets/backend/Email Migration Report";
            //this.downloadreport="/Users/rbhawsar/Documents/my-new-app 2 copy/src/assets/backend/Email Migration Report"
        }
        else {
            console.log(this.instanceService.getActiveTabdata());
            this.downloadreport = "./assets/backend/Landing Page Report";
        }
    };
    SummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-summary',
            template: __webpack_require__(/*! ./summary.component.html */ "./src/app/summary/summary.component.html"),
            styles: [__webpack_require__(/*! ./summary.component.css */ "./src/app/summary/summary.component.css")]
        }),
        __metadata("design:paramtypes", [src_assets_services_instance_service__WEBPACK_IMPORTED_MODULE_1__["InstanceService"]])
    ], SummaryComponent);
    return SummaryComponent;
}());



/***/ }),

/***/ "./src/assets/services/instance.service.ts":
/*!*************************************************!*\
  !*** ./src/assets/services/instance.service.ts ***!
  \*************************************************/
/*! exports provided: InstanceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstanceService", function() { return InstanceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var InstanceService = /** @class */ (function () {
    function InstanceService() {
    }
    InstanceService.prototype.getserviceSourceData = function () {
        return this.serviceSourceData;
    };
    InstanceService.prototype.setserviceSourceData = function (serviceSourceData) {
        this.serviceSourceData = serviceSourceData;
    };
    InstanceService.prototype.getserviceDestinationData = function () {
        return this.serviceDestinationData;
    };
    InstanceService.prototype.setserviceDestinationData = function (serviceDestinationData) {
        this.serviceDestinationData = serviceDestinationData;
    };
    InstanceService.prototype.getActiveTabdata = function () {
        return this.activeTabdata;
    };
    InstanceService.prototype.setActiveTabData = function (activeTabdata) {
        this.activeTabdata = activeTabdata;
    };
    InstanceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], InstanceService);
    return InstanceService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/chibhatia/Downloads/Asset Porter/Front end/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map