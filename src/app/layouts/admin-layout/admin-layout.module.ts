import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
import { UserComponent }            from '../../pages/user/user.component';
import { RolComponent }           from '../../pages/roles/roles.component';
import { CambioSolicitudComponent }      from '../../pages/cambiosolicitud/cambiosolicitud.component';
import { SolicitudComponent }           from '../../pages/solicitud/solicitud.component';
import { MapsComponent }            from '../../pages/maps/maps.component';
import { NotificationsComponent }   from '../../pages/notifications/notifications.component';
import { LoginHelpDesk }         from '../../pages/loginhelpdesk/upgrade.component';
import { LoginComponent} from '../../pages/login/login.component'

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    RolComponent,
    LoginHelpDesk,
    CambioSolicitudComponent,
    SolicitudComponent,
    MapsComponent,
    NotificationsComponent,
    LoginComponent
  ]
})

export class AdminLayoutModule {}
