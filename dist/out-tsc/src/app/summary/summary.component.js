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
        core_1.Component({
            selector: 'app-summary',
            templateUrl: './summary.component.html',
            styleUrls: ['./summary.component.css']
        }),
        __metadata("design:paramtypes", [instance_service_1.InstanceService])
    ], SummaryComponent);
    return SummaryComponent;
}());
exports.SummaryComponent = SummaryComponent;
//# sourceMappingURL=summary.component.js.map