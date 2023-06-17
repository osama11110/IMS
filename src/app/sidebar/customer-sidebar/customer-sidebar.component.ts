import { Component, OnInit } from '@angular/core';

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/customer-layout/customer-dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: '' },
  { path: '/adminlayout/table',         title: 'Patient List',        icon:'nc-tile-56',    class: '' },
];


@Component({
  selector: 'app-customer-sidebar',
  templateUrl: './customer-sidebar.component.html',
  styleUrls: ['./customer-sidebar.component.css']
})
export class CustomerSidebarComponent implements OnInit {

  public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
