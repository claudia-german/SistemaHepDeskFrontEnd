import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Login } from 'app/Model/Login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

private routes = {
    login: '/Login'

}

  constructor(private apiService: ApiService) { 

  }

  login(model: Login){
    return this.apiService.post(this.routes.login);
  }

  
}
