import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar.component';
import { CustomerSidebarComponent } from './customer-sidebar/customer-sidebar.component';
import { SellerSidebarComponent } from './seller-sidebar/seller-sidebar.component';

@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ SidebarComponent, CustomerSidebarComponent, SellerSidebarComponent ],
    exports: [ SidebarComponent, CustomerSidebarComponent, SellerSidebarComponent ]
})

export class SidebarModule {}
