import { Component, OnInit } from '@angular/core';
import { RolesSerivce } from 'app/services/roles/roles.service';
import { AlertaService } from 'app/services/alerta/alerta.service';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'roles.component.html'
})

export class RolComponent implements OnInit{
    
    listRoles = [];

    ngOnInit(){
        this.getAllRoles();
    }

    constructor(private rolService: RolesSerivce, private _alert: AlertaService){

    }

    getAllRoles(){
        debugger;
        this.rolService.getRoles().subscribe(data=>{
            console.log(data);
            if(data.value.length>0){
                this.listRoles = data.value;
            }
            else{
                this._alert.notification("Roles", data.message, "warning");
            }
        })
    }

}
