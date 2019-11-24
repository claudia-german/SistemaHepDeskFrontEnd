import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RolesSerivce {

  routes = {
    getAllRoles: '/Rol/GetAll'

}



constructor(
    private apiService: ApiService,
    private route: Router,
) {

}

public getRoles(){
   return this.apiService.get(this.routes.getAllRoles);
}


}
