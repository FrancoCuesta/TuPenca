import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Equipo} from 'src/app/models/equipo';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.scss']
})
export class EquipoComponent {
  formEquipo = new FormGroup({
    nombre: new FormControl('', Validators.required),
    imagen: new FormControl('', Validators.required),
  });

  equipo() {
      let x: Equipo = {
        id: 0,
        nombre: this.formEquipo.value.nombre ? this.formEquipo.value.nombre : '',
        imagen: this.formEquipo.value.imagen ? this.formEquipo.value.imagen : '',
      }
  }
}
