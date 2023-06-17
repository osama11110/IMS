import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { TableComponent } from '../../pages/table/table.component';
import { CustomerDashboardComponent } from 'src/app/pages/customer-dashboard/customer-dashboard.component';

export const CustomerLayoutRoutes: Routes = [
    { path: 'customer-dashboard',      component:CustomerDashboardComponent },
    { path: 'table',          component: TableComponent },
  
];
