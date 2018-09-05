import { Component, OnInit,ViewChild,ElementRef} from '@angular/core';
import {InstanceService} from '../../assets/services/instance.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-comprehensive',
  templateUrl: './comprehensive.component.html',
  styleUrls: ['./comprehensive.component.css'],
  
})
export class ComprehensiveComponent implements OnInit {

  activeTab = "email";
  public isVisible= false;
  isEmailVisible=true;
  islandingPageVisible =true;
  downloadpath="./assets/files/Email Details.xlsx";
  sfmcEmails=false;
  eloquaEmails=true;
  chosenFile:File;
  constructor(private httpService: HttpClient,private router: Router,public instanceService: InstanceService) { }
 

  ngOnInit() {
    
    console.log(this.instanceService.getserviceSourceData().env);
    console.log(this.instanceService.getserviceDestinationData().env);
    console.log(this.instanceService.getserviceSourceData());
    console.log(this.instanceService.getserviceDestinationData());
    
    
    if(this.instanceService.getserviceSourceData().env == "eloqua" && this.instanceService.getserviceDestinationData().env =="eloqua"){
      this.sfmcEmails=false;
      this.eloquaEmails=true;
      this.isEmailVisible=false;
        this.islandingPageVisible=false;
        this.downloadpath="./assets/files/Email Details.xlsx";
      //alert("eloquaemaillanding");
    
     }
       else if(this.instanceService.getserviceSourceData().env =="eloqua" && this.instanceService.getserviceDestinationData().env =="sfmc" ){
        this.sfmcEmails=true;
        this.isEmailVisible=false;
       this.islandingPageVisible=true;
       this.eloquaEmails=false;
       //alert("email");
       this.downloadpath="./assets/files/Email Detail Eloqua To MC.xlsx";
     }
  }
  chooseFile(){
        document.getElementById("button-click").click();
        } 
  
        saveFile(event :Event){
          this.chosenFile=(<HTMLInputElement>event.target).files[0];
        }
        submitFile() {
          alert("hi");
          const uploadForm = new FormData();
          uploadForm.append("file", this.chosenFile);
          uploadForm.append("asset-type", this.activeTab);
          uploadForm.append("src", this.instanceService.getserviceSourceData());
          uploadForm.append("dest", this.instanceService.getserviceDestinationData());
         
          this.httpService.post("/uploadFile", uploadForm).subscribe(
            data => {
              alert("2");
              //this.isVisible = false;
             // this.router.navigateByUrl('/summary');
             this.callPythonScript();

            },
            (err: HttpErrorResponse) => {
              alert("3");
              console.log('error')
              console.log(err.message);
            }
          );
        }
          showSpinner(){
            this.isVisible=true;
            this.submitFile();
                    
         
            }

callPythonScript(){
    var clickedTab=this.activeTab
      console.log(clickedTab);
      this.instanceService.setActiveTabData(clickedTab);
      if(this.instanceService.getserviceDestinationData().env =="eloqua" && this.instanceService.getActiveTabdata()=="email" ){
        //alert('email eloqua');
        this.httpService.get('/eloquaEmail').subscribe(
          data => {
            this.isVisible=false;
            this.router.navigateByUrl('/summary');
          },
          (err: HttpErrorResponse) => {
          console.log (err.message);
          }
          ); 
      }
      else if(this.instanceService.getserviceDestinationData().env =="sfmc" && this.instanceService.getActiveTabdata()=="email" ){
        //alert('sfmc email');
        this.httpService.get('/sfmcEmail').subscribe(
          
          data => {
            this.isVisible=false;
            this.router.navigateByUrl('/summary');
          },
          (err: HttpErrorResponse) => {
          console.log (err.message);
          }
          ); 
      }
      else{
        //alert('landing page email');
        this.httpService.get('/eloquaLandingPage').subscribe(
          data => {
            this.isVisible=false;
            this.router.navigateByUrl('/summary');
          },
          (err: HttpErrorResponse) => {
          console.log (err.message);
          }
          ); 
      }
}
