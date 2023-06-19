import { Component, OnInit } from '@angular/core';
import { PackageService } from 'src/package.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  // task: any;
  items: any;
  // image: any;
  tableUploading: boolean =true;

  // microbiologyPackage: any = [];

  constructor(private packageService: PackageService, private router : Router, private http: HttpClient ) { }


  ngOnInit(): void{
    this.getItemData();
    // this.show();
    

  }
  getItemData()
      {
        this.http.get('http://localhost:3000/products').subscribe(res=>{      
           if(res)
           {
            this.tableUploading = false;
           }
           this.items=res;
        
        })
      }


  add(item: any) {
    this.packageService.addToCart(item);
    window.alert('Your product has been added to the cart!');
    console.log(item)
  }
}
