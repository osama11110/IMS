import { Component, OnInit } from '@angular/core';

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/seller-layout/seller-dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: '' },
  { path: '/adminlayout/table',         title: 'Patient List',        icon:'nc-tile-56',    class: '' },
];


@Component({
  selector: 'app-seller-sidebar',
  templateUrl: './seller-sidebar.component.html',
  styleUrls: ['./seller-sidebar.component.css']
})
export class SellerSidebarComponent implements OnInit {
  public menuItems: any[];
  ngOnInit() {
      this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
}
