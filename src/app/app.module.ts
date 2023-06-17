import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Component, NgModule } from '@angular/core';



import { HttpClientModule } from "@angular/common/http";
import { Routes, RouterModule } from "@angular/router";
import { ToastrModule } from "ngx-toastr";
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from "@angular/forms";




import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { CustomerLayoutComponent } from "./layouts/customer-layout/customer-layout/customer-layout.component";
import { SellerLayoutComponent } from "./layouts/seller-layout/seller-layout/seller-layout.component";
import { LoginComponent } from './login/login.component';


// import { DashboardComponent }       from './pages/dashboard/dashboard.component';
// // import { UserComponent }            from './pages/user/user.component';
// // import { TableComponent }           from './pages/table/table.component';






import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
// import { componentFactoryName } from "@angular/compiler";
import { PackageService } from "src/package.service";
import { TableComponent } from "./pages/table/table.component";
import { ProductTableComponent } from './pages/product-table/product-table.component';
import { InvoiceTableComponent } from './pages/invoice-table/invoice-table.component';
import { ProductsComponent } from './pages/products/products.component';
import { EditCustomerComponent } from './functions/edit-customer/edit-customer.component';
import { EditSellerComponent } from './functions/edit-seller/edit-seller.component';
import { AddProductComponent } from './functions/add-product/add-product.component';
import { CartComponent } from './cart/cart.component';
import { RegistrationComponent } from './registration/registration.component';




const appRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'table', component: TableComponent},
  // { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  // { path: 'task-list', component: TaskListComponent},
  // { path: 'navbar', component: NavbarComponent},
  { path: 'adminlayout', component: AdminLayoutComponent, 
  children: [
    { path: '', loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)}
 ],
 canActivate: [AuthGuard]
},
{ path: 'customerlayout', component: CustomerLayoutComponent, 
children: [
  { path: '', loadChildren: () => import('./layouts/customer-layout/customer-layout.module').then(m => m.CustomerLayoutModule)}
],
canActivate: [AuthGuard]
},
{ path: 'sellerlayout', component: SellerLayoutComponent, 
children: [
  { path: '', loadChildren: () => import('./layouts/seller-layout/seller-layout.module').then(m => m.SellerLayoutModule)}
],
canActivate: [AuthGuard]
},
  // { path: 'dashboard',      component: DashboardComponent },
  // { path: 'user',           component: UserComponent },
  
  { path: '', redirectTo:'/login', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    ProductTableComponent,
    InvoiceTableComponent,
    ProductsComponent,
    CustomerLayoutComponent,
    SellerLayoutComponent,
    EditCustomerComponent,
    EditSellerComponent,
    AddProductComponent,
    CartComponent,
    RegistrationComponent,
   
   
    
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
    NgbModule,
    HttpClientModule ,
    ReactiveFormsModule,
   
 

   
   
   
    


    
  ],
  providers: [AuthService, AuthGuard,PackageService],
  bootstrap: [AppComponent],
   exports : [
  ]
})
export class AppModule { }
