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
        nombre: this.formCampeonato.value.nombre ? this.formCampeonato.value.nombre : '',
        descripcion: this.formCampeonato.value.descripcion ? this.formCampeonato.value.descripcion : '',
        fechaInicio: this.formCampeonato.value.fechaInicio ? this.formCampeonato.value.fechaInicio : '',
        fechaFin: this.formCampeonato.value.fechaFin ? this.formCampeonato.value.fechaFin : '',
        partidos: null
      }
    }
  }
