import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    // { path: '/dashboard', title: 'Dashboard', icon: 'nc-bank', class: '' },
    { path: '/solicitud', title: 'Solicitudes', icon: 'nc-send', class: '' },
    { path: '/Usuarios', title: 'Usuarios', icon: 'nc-single-02', class: '' },
    { path: '/Roles', title: 'Roles', icon: 'nc-circle-10', class: '' },
    { path: '/SolicitudCambio', title: 'Cambio de Solicitud', icon: 'nc-share-66', class: '' },
    // {path:'/Login', title: 'Login', icon:'nc-single-02', class:''},
    // { path: '/table',         title: 'Table List',        icon:'nc-tile-56',    class: '' },
    // { path: '/typography',    title: 'Typography',        icon:'nc-caps-small', class: '' },
    { path: '/upgrade',       title: 'Upgrade to PRO',    icon:'nc-spaceship',  class: 'active-pro' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
