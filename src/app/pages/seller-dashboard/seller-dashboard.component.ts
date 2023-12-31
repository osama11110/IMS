import { Component, OnInit } from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { PackageService } from 'src/package.service';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import swal from 'sweetalert2';
import { SessionStorageService } from 'src/app/session-storage.service';
declare var $: any;
@Component({
  selector: 'app-seller-dashboard',
  templateUrl: './seller-dashboard.component.html',
  styleUrls: ['./seller-dashboard.component.css']
})
export class SellerDashboardComponent implements OnInit {
  closeModal: string;
  fileUpload : File = null;
  file_uploaded : boolean = false;
  fileName: any;
  fileAdded: boolean = false;
  fileUploading: boolean = false;

  // userName: string = '';
  // userAge: string = '';
  // userGender: string='';
  // userAddress: string = '';
  // userSymptom: string = '';


  // myForm = new FormGroup({

  // });
  sellername: string = '';
  selleremail: string = '';
  sellercity: string = '';
  selleraddress: string = '';
  sellerphone: string = '';
  sellerpassword: string = '';
  productname: string = '';
  productprice: string = '';
  productcolor: string = '';


  
  
  constructor(private modalService: NgbModal, private packageService: PackageService, private http:HttpClient, private sessionstorage: SessionStorageService) {}

  ngOnInit(){
   
     };
    
  triggerModal(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  }
 
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  onSellerSubmit() {
    // console.log(f.value);  // { first: '', last: '' }
    const  sellerid = this.sessionstorage.getValue('sellerId')
    console.log(this.selleraddress)
     this.http.put('http://localhost:3000/update-seller', {sellerid : sellerid, sellername : this.sellername, selleremail : this.selleremail, sellercity : this.sellercity, selleraddress : this.selleraddress, sellerphone : this.sellerphone, customerpassword : this.sellerpassword} ).subscribe(res=> {
      console.log(res);
      if(res)
      {
    swal.fire({title: 'Success!',
    text: 'User has been Added',
    icon: 'success',
    confirmButtonText: 'ok'});
  }
  });
  }
  onProductSubmit() {
    // console.log(f.value);  // { first: '', last: '' }
    const  sellerId = this.sessionstorage.getValue('sellerId')
    this.http.post('http://localhost:3000/add-product',{productname: this.productname, productprice: this.productprice, productcolor : this.productcolor ,sellerid: sellerId } ).subscribe(res=> {
      console.log(res);
      if(res)
      {
    swal.fire({title: 'Success!',
    text: 'Product has been Added',
    icon: 'success',
    confirmButtonText: 'ok'});
  }
  });
  }
  
     
  handleFileInput(files: FileList)
  { 
    this.fileUploading = true
    this.fileUpload = files.item(0);
    this.fileAdded = true;
    this.fileName = this.fileUpload.name;

    const formData = new FormData();
    formData.append("file", this.fileUpload, this.fileUpload.name)
    this.http.post('http://3.13.172.54:3000/uploadfile', formData)
    .subscribe(responseData => {
      if(responseData)
      {
        this.file_uploaded = true;
        this.fileUploading = false;
      }
    }
    ,error => {
      console.log("Error occurred while uploading" + error.message);
    });
    this.file_uploaded = false;
  }



}
