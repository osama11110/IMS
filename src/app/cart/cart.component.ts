import { Component, OnInit } from '@angular/core';
import { PackageService } from 'src/package.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import swal from 'sweetalert2';
import { SessionStorageService } from '../session-storage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  orderaddress: string = '';
  orderpmethod: string ='cash on delivery';
  cart: any;
  items = this.cartService.getcartItems();
  constructor(
   private cartService: PackageService, private router: Router, private http: HttpClient, private sessionstorage: SessionStorageService)
  { }

 ngOnInit(): void{
 }

 emptyCart(): void
{
 this.cartService.clearCart();
 let currentUrl = this.router.url;
     this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
         this.router.navigate([currentUrl]);
     });
 }
 checkout()
 {
  const customerId = this.sessionstorage.getValue('customerId')
  const productId = this.items[0].PRODUCT_ID
  console.log(productId);
   this.http.post('http://localhost:3000/add-order', {ordercustomerid : customerId, orderaddress : this.orderaddress, orderpmethod : this.orderpmethod, productid : productId} ).subscribe(res=> {
    console.log(res);
    if(res)
    {
      const invocieorderid = res[1][0].ORDER_ID
      console.log(invocieorderid);
      const invoiceprice = this.items[0].PRODUCT_PRICE
      const invoicetitle = this.items[0].PRODUCT_NAME
      this.http.post('http://localhost:3000/add-invoice', {invoiceprice : invoiceprice, invoicetitle : invoicetitle, invoiceorderid : invocieorderid} ).subscribe(response=> {
    console.log(response);
  });
  swal.fire({title: 'Success!',
  text: 'User has been Added',
  icon: 'success',
  confirmButtonText: 'ok'});
}
});
 }

}
