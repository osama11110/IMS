import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { SessionStorageService } from 'src/app/session-storage.service';


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





  constructor(private http : HttpClient, private sessionstorage : SessionStorageService  )
     {
      }
  



    ngOnInit(): void{
      this.getItemData();
      // this.show();
      

    }

    getItemData()
    {
      const sellerId = this.sessionstorage.getValue('sellerId');
      this.http.get('http://localhost:3000/list-product' , {params:{
        searchId: sellerId
      }}).subscribe(res=>{      
         if(res)
         {
          this.tableUploading = false;
         }
         this.items=res;
      
      })
    }
    
}
