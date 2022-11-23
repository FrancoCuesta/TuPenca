import { Component } from '@angular/core';
import { Campeonato } from 'src/app/models/campeonato';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-campeonato',
  templateUrl: './campeonato.component.html',
  styleUrls: ['./campeonato.component.scss']
})
export class CampeonatoComponent {
  formCampeonato = new FormGroup({
    nombre: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    fechaInicio: new FormControl('', Validators.required),
    fechaFin: new FormControl('', Validators.required),

  });

  campeonato() {
      let x: Campeonato = {
        id: "0",
        nombre: this.formCampeonato.controls["nombre"].value,
        descripcion: this.formCampeonato.controls["descripcion"].value,
        fechaInicio: this.formCampeonato.controls["fechaInicio"].value,
        fechaFin: this.formCampeonato.controls["fechaFin"].value,
        partidos: null
      }
    }
  }
