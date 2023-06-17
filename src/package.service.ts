import { Injectable } from "@angular/core";
import { UserProfile } from "src/app/models/user-profile.model";
import { Router } from "@angular/router";

@Injectable()

export class PackageService
{
    private taskItem: UserProfile;

    
    setItem(item: any)
    {
        this.taskItem = item;
    }
    getItem()
    {
        return this.taskItem;
    }


    addToTask(item: UserProfile)
    {
        // console.log(item);
        this.taskItem = item;
        
       
    }

// cart items
public count = 0;
cartPackage: any = [];
private cartItem: any = [];


constructor(private router: Router){}
    getcartItems()
    {
      return this.cartItem;
    }
    setItems(item: any)
    {
      this.cartItem = item;
    }
    clearCart() {
    this.cartItem = [];
    this.count=0;

  }
  addToCart(item: any)
  {
      this.cartItem.push(item);
      this.count = this.count+1;
      return this.count;
  }
  checkOut()
  {
    this.setItems(this.cartPackage);
  }



}