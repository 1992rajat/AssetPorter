"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var login_component_1 = require("./login/login.component");
var selectsource_component_1 = require("./selectsource/selectsource.component");
var selectdestination_component_1 = require("./selectdestination/selectdestination.component");
var comprehensive_component_1 = require("./comprehensive/comprehensive.component");
var summary_component_1 = require("./summary/summary.component");
var forms_1 = require("@angular/forms");
var http_2 = require("@angular/common/http");
var instance_service_1 = require("../assets/services/instance.service");
var appRoutes = [
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'source', component: selectsource_component_1.SelectsourceComponent },
    { path: 'destination', component: selectdestination_component_1.SelectdestinationComponent },
    { path: 'comprehensive', component: comprehensive_component_1.ComprehensiveComponent },
    { path: 'summary', component: summary_component_1.SummaryComponent },
    { path: '', component: login_component_1.LoginComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                selectsource_component_1.SelectsourceComponent,
                selectdestination_component_1.SelectdestinationComponent,
                comprehensive_component_1.ComprehensiveComponent,
                summary_component_1.SummaryComponent
            ],
            imports: [
                platform_browser_1.BrowserModule, http_1.HttpModule, http_2.HttpClientModule, router_1.RouterModule.forRoot(appRoutes), forms_1.FormsModule
            ],
            providers: [instance_service_1.InstanceService],
            bootstrap: [app_component_1.AppComponent],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map