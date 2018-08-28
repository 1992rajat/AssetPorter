import { Component } from '@angular/core';
import { Http , Response } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from '/Users/rbhawsar/Documents/my-new-app 2/src/app/login/login.component';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
  
})
export class AppComponent {
    title = 'app';
  constructor (private httpService: HttpClient) { }
  arrInstance: string [];

  ngOnInit () {
    this.httpService.get('./assets/services/instance.json').subscribe(
      data => {
        this.arrInstance = data as string [];	 // FILL THE ARRAY WITH DATA.
          
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
}

