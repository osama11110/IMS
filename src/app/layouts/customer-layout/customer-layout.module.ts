import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CustomerDashboardComponent } from 'src/app/pages/customer-dashboard/customer-dashboard.component';
import { TableComponent } from 'src/app/pages/table/table.component';
import { CustomerLayoutRoutes } from './customer-layout.routing';
@NgModule({
  declarations: [
    // TableComponent,
    CustomerDashboardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(CustomerLayoutRoutes),
    FormsModule,
  ]
})
export class CustomerLayoutModule { }
