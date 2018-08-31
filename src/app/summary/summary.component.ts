import { Component, OnInit } from '@angular/core';
import {InstanceService} from '../../assets/services/instance.service';
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  downloadreport="";
  constructor(public instanceService: InstanceService) { }

  ngOnInit() {
   if(this.instanceService.getserviceDestinationData().env =="eloqua" && this.instanceService.getActiveTabdata()=="email")
{
 console.log(this.instanceService.getActiveTabdata())
 this.downloadreport="./assets/backend/Email Report"
}
else if(this.instanceService.getserviceDestinationData().env =="sfmc" && this.instanceService.getActiveTabdata()=="email")
{
  
 console.log(this.instanceService.getActiveTabdata())
 this.downloadreport="./assets/backend/Email Migration Report"
 //this.downloadreport="/Users/rbhawsar/Documents/my-new-app 2 copy/src/assets/backend/Email Migration Report"
}
else 
{
 console.log(this.instanceService.getActiveTabdata())
 this.downloadreport="./assets/backend/Landing Page Report"
}

  }
}
