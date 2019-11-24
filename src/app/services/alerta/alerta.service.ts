import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class AlertaService {

  constructor() { 

  }

  notification(titlemsg: string, message: string, typealert: SweetAlertIcon){
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000
    })
    
    Toast.fire({
      icon:typealert,
      title: titlemsg,
      text: message,

    
    })
  }
}
