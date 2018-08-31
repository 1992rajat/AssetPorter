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
var http_1 = require("@angular/common/http");
var instance_service_1 = require("../../assets/services/instance.service");
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
    SelectdestinationComponent.prototype.checkInstance = function (value) {
        console.log(value);
        this.selectedValue = value;
    };
    SelectdestinationComponent = __decorate([
        core_1.Component({
            selector: 'app-selectdestination',
            templateUrl: './selectdestination.component.html',
            styleUrls: ['./selectdestination.component.css'],
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, instance_service_1.InstanceService])
    ], SelectdestinationComponent);
    return SelectdestinationComponent;
}());
exports.SelectdestinationComponent = SelectdestinationComponent;
//# sourceMappingURL=selectdestination.component.js.map