import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

// export const ROUTES: RouteInfo[] = [
//     { path: '/dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: '' },
//     { path: '/icons',         title: 'Icons',             icon:'nc-diamond',    class: '' },
//     { path: '/maps',          title: 'Maps',              icon:'nc-pin-3',      class: '' },
//     { path: '/notifications', title: 'Notifications',     icon:'nc-bell-55',    class: '' },
//     { path: '/user',          title: 'User Profile',      icon:'nc-single-02',  class: '' },
//     { path: '/table',         title: 'Table List',        icon:'nc-tile-56',    class: '' },
//     { path: '/typography',    title: 'Typography',        icon:'nc-caps-small', class: '' },
// ];
export const ROUTES: RouteInfo[] = [
    { path: '/user-profile', title: 'Profile', icon: 'bi bi-person', class: 'nav-link collapsed' },
    { path: '/pages-register', title: 'Register', icon: 'bi bi-card-list', class: 'nav-link collapsed' },
    { path: '/pages-login', title: 'Login', icon: 'bi bi-box-arrow-in-right', class: 'nav-link collapsed' },
    { path: '/pages-error404', title: 'Error 404', icon: 'bi bi-dash-circle', class: 'nav-link collapsed' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: RouteInfo[] = [];
    public selectedItem: any;

    ngOnInit() {
        this.menuItems = ROUTES;
        this.selectedItem = this.menuItems[0];
    }
    selectMenuItem(menuItem: RouteInfo) {
        this.selectedItem.class = "nav-link collapsed";
        this.selectedItem = menuItem;
        menuItem.class = "nav-link"
    }
}
