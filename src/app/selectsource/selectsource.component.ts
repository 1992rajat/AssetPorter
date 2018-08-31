import { Component, OnInit,ViewEncapsulation  } from '@angular/core';
import { Response } from '@angular/http/src/static_response';
import {InstanceService} from '../../assets/services/instance.service';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-selectsource',
  templateUrl: './selectsource.component.html',
  styleUrls: ['./selectsource.component.css'],
  encapsulation: ViewEncapsulation.None 
})
export class SelectsourceComponent implements OnInit {
    // items=["jhk","jkgj","hgjh"];
    isValid = false;
    isDisabled= true;
    activeTab=false;
    nameList: any;  
    data:any; 
    nameId:string;
    selectedItem="";
    selectedsfmcItem="";
    constructor (public httpService: HttpClient,public instanceService: InstanceService) { }
    public arrInstance: string [];
    eloquaList:any = [];
    sfmcList:any =[];
    paradotList:any[];
    htmlList:any[];
    public eloqualogo = "./assets/images/eloqua.png";
    public sfmclogo="./assets/images/Sfmc_edited.png";
    public paradotlogo="./assets/images/pardot.png";
    public marketologo="./assets/images/marketo-logo.png";
    public htmllogo="./assets/images/html.png"
    public selectedsourcevalue;
    public env;
    public newInstancevalue;
    selectedValue="";
  
    ngOnInit () {
     
      this.httpService.get('./assets/services/instance.json').subscribe(
        data => {
          this.arrInstance = (data as string[]);
          this.eloquaList = (data as any[]).filter(item => item.env=='eloqua');	 // FILL THE ARRAY WITH DATA.
          this.sfmcList = (data as any[]).filter(item => item.env=='sfmc');
          this.paradotList =(data as any[]).filter(item => item.env=='sfmc');
          this.htmlList = (data as any[]).filter(item => item.env=='sfmc');
        },
        (err: HttpErrorResponse) => {
          console.log (err.message);
        }
     
      );
  
    }
  enable($event,selectedsourcevalue){
    console.log(selectedsourcevalue);
    this.isDisabled = false;
     this.selectedItem=selectedsourcevalue;
      //var selectedItem = selectedsourcevalue;
      this.instanceService.setserviceSourceData(selectedsourcevalue);
      console.log(this.instanceService.getserviceSourceData());
 
  }
   
  addInstance(newInstancevalue){
    
    console.log(newInstancevalue.value);
    if(this.selectedValue=="eloqua"){
      this.eloquaList.push(newInstancevalue.value);
    }
   else if(this.selectedValue=="sfmc"){
    this.sfmcList.push(newInstancevalue.value);
    }
    //alert("New Instance has been registered successfully!!");
   
    newInstancevalue.resetForm();
   // debugger;
      document.getElementById("closebutton").click();
  }
  getNameList()  
  {   
  this.nameList= this.data=[    
    {    
      "Id": "eloqua",    
      "Name": "Eloqua"    
    },    
    {    
      "Id": "sfmc",    
      "Name": "SFMC"    
    }       
  ];   
  }
  selectName()
  {
  //alert(this.nameId);
  }  
  checkInstance(env){
    console.log("env:" +env);
    
   
  }
}
