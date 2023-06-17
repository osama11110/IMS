import { Component, OnInit,ViewChild, AfterViewInit } from '@angular/core';
import { UserProfile } from 'src/app/models/user-profile.model';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PackageService } from 'src/package.service';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";



declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}
@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {
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

    getItemData()
    {
      this.http.get('http://localgost:3000/api/getpatientdata').subscribe(res=>{      
         if(res)
         {
          this.tableUploading = false;
         }
         this.items=res;
      
      })
    }
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

    // gotoDynamic(item)
    // {
    //   this.router.navigateByUrl("/viewer", {state: {item}})
    // }
    

}
