import { ElementSchemaRegistry } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Equipo} from 'src/app/models/equipo';
import { EquipoService } from 'src/app/services/equipo/equipo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.scss']
})
export class EquipoComponent {

  constructor( private api:EquipoService, private router:Router) { }

  formEquipo = new FormGroup({
    nombre: new FormControl('', Validators.required),
    imagen: new FormControl('', Validators.required),
  });

  equipo() {
      let x: Equipo = {
        id: 0,
        nombre: this.formEquipo.controls["nombre"].value,
        imagen: this.formEquipo.controls["imagen"].value
      }
      this.api.agregar(x).subscribe({
        next: value => {this.exito("Equipo creado con exito");},
        error: err => { this.error('Error al agregar el equipo: ') }
        })
  }
  
  error(x:string):void{
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: x,
    })
   }

   exito(x:string):void{
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Creado con exito',
      text: x,
      showConfirmButton: false,
      timer: 1500
    })
   }
}
