import { Component, OnInit } from '@angular/core';
import { SolicitudService } from 'app/services/solicitud/solicitud.service';
import { Solicitud } from 'app/Model/Solicitud';
import { Alert } from 'selenium-webdriver';
import Swal, { SweetAlertIcon } from 'sweetalert2';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { AlertaService } from 'app/services/alerta/alerta.service';

@Component({
    selector: 'icons-cmp',
    moduleId: module.id,
    templateUrl: 'solicitud.component.html'
})

export class SolicitudComponent implements OnInit{
    ngOnInit(): void {
        this.getAllSolicitud();
    }

    listSolicitudes: [];
    closeResult: string;
    solicitudToEdit: Solicitud;
    

    constructor(private solicitudService: SolicitudService, 
        private alertService: AlertaService, private modalService: NgbModal) {

    }

    open(content, idSolicitud: Number) {
        debugger;
        if(idSolicitud!=0){
            this.getSolicitud(idSolicitud);
        }

        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {

          this.closeResult = `Closed with: ${result}`;

        }, (reason) => {
           this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;

        });
      }

      private getDismissReason(reason: any): string {
        this.solicitudToEdit.NombrePersona = "";
        this.solicitudToEdit.Fecha = null;
        this.solicitudToEdit.Descripcion = "";

        if (reason === ModalDismissReasons.ESC) {
          return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
          return 'by clicking on a backdrop';
        } else {
          return  `with: ${reason}`;
        }
      }

    statusColor(value: String){
        
        if(value=="Eliminada"){
            return 'text-danger';
        }
        else if(value=="Sin Asignar"){
            return 'text-secondary';
        }
        else if(value=="Asignada"){
            return "text-success";
        }
    }

    getAllSolicitud(){
        // SweetAlert.swal("Hello world!");
        
        this.solicitudService.getSolicitudes().subscribe(data=>{
            if(data.value.solicitudes.length>0){
               this.listSolicitudes = data.value.solicitudes; 
                this.alertService.notification("Solicitudes", "Solicitudes Cargadas", "success");
               console.log(data);
            }
        })
    }

    getSolicitudByStatus(status: String){
        this.solicitudService.getSolicitudByStatus(status).subscribe(data=>{
            if(data.value.solicitudes.length>0){
                this.listSolicitudes = data.value.solicitudes; 
                console.log(data);
             }
        })
    }

    getSolicitud(id: Number){
        debugger;
        this.solicitudService.getSolicitud(id).subscribe(data=>{
            if(data.value!=null){
                this.solicitudToEdit = data.value;
                console.log(this.solicitudToEdit);
            }
            else{
                this.alertService.notification("Solicitud", "No se pudo encontrar la solicitud", "warning");
            }
        })
    }

    deleteSolicitud(id: Number){
        debugger;
        Swal.fire({
            title: 'Seguro que desea eliminar la solicitud?',
            text: "No podra recuperar la solicitud!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar'
          }).then((result) => {
            if (result.value) {
                 this.solicitudService.deleteSolicitud(id).subscribe(data=>{
                    console.log(data);
                    if(data.message==="Solicitud Eliminada"){
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: data.message,
                            showConfirmButton: true,
                          }).then(response=>{
                          this.getAllSolicitud();

                          })
                    }
                    else{
                        Swal.fire({
                            position: 'center',
                            icon: 'error',
                            title: data.message,
                            showConfirmButton: true,
                          }).then(response=>{
                          this.getAllSolicitud();

                          })

                    }
                })
              
            }
          })
        
    }
  
}

