import { Component, OnInit } from '@angular/core';
import { PackageService } from 'src/package.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: any;
  items = this.cartService.getcartItems();
  constructor(
   private cartService: PackageService, private router: Router)
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

}
