import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  isLogin: any;

  ngOnInit() { 

  }

  checkIfLogin(){
    debugger;
    this.isLogin = localStorage.getItem("Logueado");
    if(this.isLogin && this.isLogin=="true"){
      return true;
    }
    else{
      return false;
    }
  }

}
