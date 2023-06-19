import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { SessionStorageService } from 'src/app/session-storage.service';

@Component({
  selector: 'app-invoice-table',
  templateUrl: './invoice-table.component.html',
  styleUrls: ['./invoice-table.component.css']
})
export class InvoiceTableComponent implements OnInit {
  task: any;
    items: any;
    // image: any;
    closeModal: string;
    tableUploading: boolean =true;
  constructor(private http : HttpClient, private sessionstorage : SessionStorageService ) { }
 
  ngOnInit(): void{
    this.getItemData();
    // this.show();
    

  }
  

//      show()
//      {
//       const element = document.getElementById('element');
//       const imageId = this.items.userDicom;
//       console.log(this.items.userDicom)
//       cornerstone.enable(element);
//     cornerstone.loadAndCacheImage(imageId).then(function(image) {
//   cornerstone.displayImage(element, image);

//   // Enable our tools
//   cornerstoneTools.mouseInput.enable(element);
//   cornerstoneTools.mouseWheelInput.enable(element);
//   cornerstoneTools.wwwc.activate(element, 1); // Left Click
//   cornerstoneTools.pan.activate(element, 2); // Middle Click
//   cornerstoneTools.zoom.activate(element, 4); // Right Click
//   cornerstoneTools.zoomWheel.activate(element); // Mouse Wheel
// });
//      } 
 




  getItemData()
  {
    const customerid = this.sessionstorage.getValue('customerId');
    this.http.get('http://localhost:3000/list-invoice' , {params:{
      searchId: customerid
    }}).subscribe(res=>{      
       if(res)
       {
        this.tableUploading = false;
       }
       this.items=res;
    
    })
  }
//      

}
