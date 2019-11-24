import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Router } from '@angular/router';
import { Solicitud } from 'app/Model/Solicitud';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  routes = {
    getAllSolicitudes: '/Solicitud/GetAll',
    deleteSolicitud: '/Solicitud/Eliminar/',
    createSolicitud: '/Solicitud/Agregar',
    editarSolicitud: '/Solicitud/Editar',
    getSolicitudByStatus: '/Solicitud/GetSolicitudEstado/',
    getSolicitud: '/Solicitud/GetSolicitud/'

}



constructor(
    private apiService: ApiService,
    private route: Router,
) {

}

public getSolicitudes(){
   return this.apiService.get(this.routes.getAllSolicitudes);
}

public createSolicitud(model: Solicitud){
    return this.apiService.post(this.routes.createSolicitud, model)
} 

public editarSolicitud(model: Solicitud){
    return this.apiService.put(this.routes.editarSolicitud, model);
}

public deleteSolicitud(id: Number){
    return this.apiService.delete(this.routes.deleteSolicitud+id)
}

public getSolicitudByStatus(status: String){
    return this.apiService.get(this.routes.getSolicitudByStatus+status)
}

public getSolicitud(id: Number){
    return this.apiService.get(this.routes.getSolicitud+id);
}
}
