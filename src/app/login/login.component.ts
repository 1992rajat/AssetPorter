import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router'; 
// import {LoginService, User} from 'C:/my-new-app/src/assets/services/Login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
 
  // providers: [LoginService]
})
export class LoginComponent implements OnInit {
  public logo ="./assets/images/ddlogo@2x.png";
  public assetlogo="./assets/images/asset-porter_logo3_trimmed.png";
     ngOnInit() {
  }


  constructor(public  router :Router){}
   

      // private ID;
      // private password;
     
       login(loginForm){
        
         console.log(loginForm.value);
         if(loginForm.value.loginid == "rbhawsar@deloitte.com" &&  loginForm.value.psw == "1234"){
        
         this.router.navigate(["source"]); 
         }
      else {
        
          alert("Login failed");
        }
       }
}
