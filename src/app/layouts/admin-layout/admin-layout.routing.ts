import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { RolComponent } from '../../pages/roles/roles.component';
import { CambioSolicitudComponent } from '../../pages/cambiosolicitud/cambiosolicitud.component';
import { SolicitudComponent } from '../../pages/solicitud/solicitud.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { LoginHelpDesk } from '../../pages/loginhelpdesk/upgrade.component';
import { Component } from '@angular/core';
import { LoginComponent } from 'app/pages/login/login.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'Usuarios',           component: UserComponent },
    { path: 'Roles',          component: RolComponent },
    { path: 'SolicitudCambio',     component: CambioSolicitudComponent },
    { path: 'solicitud',          component: SolicitudComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: LoginHelpDesk },
    {path:'login',              component: LoginComponent},
    {path:'loginheldesk',              component: LoginHelpDesk}
    
];
