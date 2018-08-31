import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SelectsourceComponent } from './selectsource/selectsource.component';
import { SelectdestinationComponent } from './selectdestination/selectdestination.component';
import { ComprehensiveComponent } from './comprehensive/comprehensive.component';
import { SummaryComponent } from './summary/summary.component';
import {FormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import {InstanceService} from '../assets/services/instance.service'

const appRoutes :Routes =[
  { path: 'login', component: LoginComponent },
   { path: 'source', component: SelectsourceComponent },
   { path: 'destination', component: SelectdestinationComponent },
   { path: 'comprehensive', component: ComprehensiveComponent },
   { path: 'summary', component: SummaryComponent },
   { path: '', component: LoginComponent }

]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SelectsourceComponent,
    SelectdestinationComponent,
    ComprehensiveComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,HttpModule,HttpClientModule,RouterModule.forRoot(appRoutes),FormsModule
  ],
  providers: [InstanceService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
