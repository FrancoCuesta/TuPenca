import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Partido } from 'src/app/models/partido';

@Component({
  selector: 'app-partido',
  templateUrl: './partido.component.html',
  styleUrls: ['./partido.component.scss']
})
export class PartidoComponent {
  formPartido = new FormGroup({
    fecha: new FormControl('', Validators.required),
    idEquipoA: new FormControl('', Validators.required),
    idEquipoB: new FormControl('', Validators.required),
  });

  partido() {
    let x: Partido = {
      id: "0",
      fecha: this.formPartido.value.fecha ? this.formPartido.value.fecha : '',
      golA: "0",
      golB:'0s',
      idEquipoA: this.formPartido.value.idEquipoA ? this.formPartido.value.idEquipoA : '',
      idEquipoB: this.formPartido.value.idEquipoB ? this.formPartido.value.idEquipoB : '',
      estado: false,
      resultado: "",
    }
  }
}
