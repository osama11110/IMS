import { Routes } from '@angular/router';

import { TableComponent } from '../../pages/table/table.component';
import { SellerDashboardComponent } from 'src/app/pages/seller-dashboard/seller-dashboard.component';

export const SellerLayoutRoutes: Routes = [
    { path: 'seller-dashboard',      component: SellerDashboardComponent },
    { path: 'table',          component: TableComponent },
  
];
