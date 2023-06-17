import { Component, OnInit,ViewChild, AfterViewInit } from '@angular/core';
import { UserProfile } from 'src/app/models/user-profile.model';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PackageService } from 'src/package.service';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

// const cornerstoneWADOImageLoader = require('cornerstone-wado-image-loader');





// import { Component, ElementRef, HostListener, OnInit, ViewChild, ViewChildren } from '@angular/core';
//  import * as cornerstone from "cornerstone-core";
//  import * as cornerstoneMath from "cornerstone-math";
//  import * as cornerstoneTools from "cornerstone-tools";
 // import Hammer from "hammerjs";
// import * as cornerstoneWebImageLoader from "cornerstone-web-image-loader";
// import * as dicomParser from 'dicom-parser';

// var config = {
//   maxWebWorkers: navigator.hardwareConcurrency || 1,
//   startWebWorkersOnDemand : true,
// };
// cornerstoneWADOImageLoader.webWorkerManager.initialize(config);

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html'
})

export class TableComponent implements OnInit {
    task: any;
    items: any;
    // image: any;
    closeModal: string;
    tableUploading: boolean =true;
  
  



    constructor(private http:HttpClient,
        private packageService: PackageService,private modalService: NgbModal, private router : Router )
       {
        }
    



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
        this.http.get('http://3.13.172.54:3000/api/getpatientdata').subscribe(res=>{      
           if(res)
           {
            this.tableUploading = false;
           }
           this.items=res;
        
        })
      }
//       show()
//       {
//   cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
//   const targetDomElement = document.getElementById('targetDomElement');
//   cornerstone.enable(targetDomElement);
//   const imageId = 'C:\Users\osama\Desktop\0004.dcm';
//   cornerstone.LoadImage(imageId).then(image => {
//   cornerstone.displayImage(targetDomElement, image);
// });
//       }
    
      // display(image)
      // {
      //   this.image= image;
      //   console.log(this.image);
      // }



      triggerModal(content) {
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
          this.closeModal = `Closed with: ${res}`;
        }, (res) => {
          this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
        });
      }
      
      private getDismissReason(reason: any): string {
        if (reason == ModalDismissReasons.ESC) {
          return 'by pressing ESC';
        } else if (reason == ModalDismissReasons.BACKDROP_CLICK) {
          return 'by clicking on a backdrop';
        } else {
          return  `with: ${reason}`;
        }
      }

      gotoDynamic(item)
      {
        this.router.navigateByUrl("/viewer", {state: {item}})
      }
      


}
