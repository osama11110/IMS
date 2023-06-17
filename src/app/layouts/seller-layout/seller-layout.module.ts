import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerDashboardComponent } from 'src/app/pages/seller-dashboard/seller-dashboard.component';
import { TableComponent } from 'src/app/pages/table/table.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SellerLayoutRoutes } from './seller-layout.routing';
@NgModule({
  declarations: [
    SellerDashboardComponent,
    // TableComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(SellerLayoutRoutes),
    FormsModule
  ]
})
export class SellerLayoutModule { }
