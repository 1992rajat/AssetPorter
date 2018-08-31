"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var instance_service_1 = require("../../assets/services/instance.service");
var router_1 = require("@angular/router");
var http_1 = require("@angular/common/http");
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
            this.httpService.get('http://localhost:3010/eloquaEmail').subscribe(function (data) {
                _this.isVisible = false;
                _this.router.navigateByUrl('/summary');
            }, function (err) {
                console.log(err.message);
            });
        }
        else if (this.instanceService.getserviceDestinationData().env == "sfmc" && this.instanceService.getActiveTabdata() == "email") {
            //alert('sfmc email');
            this.httpService.get('http://localhost:3010/sfmcEmail').subscribe(function (data) {
                _this.isVisible = false;
                _this.router.navigateByUrl('/summary');
            }, function (err) {
                console.log(err.message);
            });
        }
        else {
            //alert('landing page email');
            this.httpService.get('http://localhost:3010/eloquaLandingPage').subscribe(function (data) {
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
        core_1.Component({
            selector: 'app-comprehensive',
            templateUrl: './comprehensive.component.html',
            styleUrls: ['./comprehensive.component.css'],
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router, instance_service_1.InstanceService])
    ], ComprehensiveComponent);
    return ComprehensiveComponent;
}());
exports.ComprehensiveComponent = ComprehensiveComponent;
//# sourceMappingURL=comprehensive.component.js.map