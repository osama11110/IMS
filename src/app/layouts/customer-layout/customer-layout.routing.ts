import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { TableComponent } from '../../pages/table/table.component';
import { CustomerDashboardComponent } from 'src/app/pages/customer-dashboard/customer-dashboard.component';
import { ProductsComponent } from 'src/app/pages/products/products.component';
import { CartComponent } from 'src/app/cart/cart.component';
import { InvoiceTableComponent } from 'src/app/pages/invoice-table/invoice-table.component';

export const CustomerLayoutRoutes: Routes = [
    { path: 'customer-dashboard',      component:CustomerDashboardComponent },
    { path: 'products',          component: ProductsComponent },
    { path: 'cart',          component: CartComponent },
    { path: 'invoice-table',          component: InvoiceTableComponent },


  
];
