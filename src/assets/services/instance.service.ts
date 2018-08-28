import { Injectable } from '@angular/core';

@Injectable() 
export class InstanceService {
   private serviceSourceData: any;
  private serviceDestinationData:any;
  private activeTabdata:string;
   getserviceSourceData():any { 
    return this.serviceSourceData; 
  } 
   setserviceSourceData (serviceSourceData:any) { 
    this.serviceSourceData = serviceSourceData; 
  } 
   getserviceDestinationData():any { 
    return this.serviceDestinationData; 
  } 
  setserviceDestinationData (serviceDestinationData:any) { 
    this.serviceDestinationData = serviceDestinationData; 
  }
  getActiveTabdata():string{
    return this.activeTabdata; 
  }
  setActiveTabData(activeTabdata:string){
     this.activeTabdata=activeTabdata;
  }
}