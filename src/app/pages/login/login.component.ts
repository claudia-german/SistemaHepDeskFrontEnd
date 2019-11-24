import { Component, OnInit } from '@angular/core';
import { LoginService } from 'app/services/login/login.service';
import { AlertaService } from 'app/services/alerta/alerta.service';
import { Login } from 'app/Model/Login';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private _alerta: AlertaService, private router: Router) { }

  modelLogin: Login;

  ngOnInit() {

  }


  login(){
   debugger;
    localStorage.setItem("User", "Usuario");
    localStorage.setItem("Rol", "Admministrador");
    localStorage.setItem("Logueado", "true");
    this.router.navigate(['/Solicitud']);
    
  }

}
