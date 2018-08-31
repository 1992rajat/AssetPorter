import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import {InstanceService} from '../../assets/services/instance.service'
@Component({
  selector: 'app-selectdestination',
  templateUrl: './selectdestination.component.html',
  styleUrls: ['./selectdestination.component.css'],
  })
export class SelectdestinationComponent implements OnInit {
  // items=["fffd","hjgj","hfhj"];
  isValid = false;
    isDisabled= true;
    activeTab=false;
    nameList: any;  
    data:any; 
    nameId:string;
    selectedItem="";
    selectedsfmcItem="";
    constructor (public httpService: HttpClient,public instanceService: InstanceService) { }
    arrInstance: string [];
    eloquaList:any = [];
    sfmcList:any =[];
    public selecteddestinationvalue;
    public env;
    public newInstancevalue;
    public selectedValue="";
    public eloqualogo = "./assets/images/eloqua.png";
    public sfmclogo="./assets/images/Sfmc_edited.png";
    public paradotlogo="./assets/images/pardot.png";
    public marketologo="./assets/images/marketo-logo.png";
    public htmllogo="./assets/images/html.png"
    ngOnInit () {
     
      this.httpService.get('./assets/services/instance.json').subscribe(
        data => {
          this.eloquaList = (data as any[]).filter(item => item.env=='eloqua');	 // FILL THE ARRAY WITH DATA.
          this.sfmcList = (data as any[]).filter(item => item.env=='sfmc');
        },
        (err: HttpErrorResponse) => {
          console.log (err.message);
        }
      );
    }
  enable($event,selecteddestinationvalue){
    console.log(selecteddestinationvalue);
    this.isDisabled = false;
    this.selectedItem=selecteddestinationvalue;
     this.instanceService.setserviceDestinationData(selecteddestinationvalue);
   console.log(this.instanceService.getserviceDestinationData()); 
                                        
 
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
    //this.instanceService.serviceData=newInstancevalue.value;
      newInstancevalue.resetForm();
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
  checkInstance(value){
    console.log(value);
    this.selectedValue=value;
  }
}
