import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Penca } from 'src/app/models/penca';

@Component({
  selector: 'app-pencaprivada',
  templateUrl: './pencaprivada.component.html',
  styleUrls: ['./pencaprivada.component.scss']
})
export class PencaprivadaComponent {
  formPenca = new FormGroup({
    nombre: new FormControl('', Validators.required),
    costo_entrada: new FormControl('', Validators.required),
    poso: new FormControl('', Validators.required),
    comision: new FormControl('', Validators.required),
    cant_participantes: new FormControl('', Validators.required),
  });

  Penca() {
    {
      let x: Penca = {
        id: 0,
        nombre: this.formPenca.value.nombre ? this.formPenca.value.nombre : '',
        costo_entrada: this.formPenca.value.costo_entrada ? this.formPenca.value.costo_entrada : '',
        comision: this.formPenca.value.comision ? this.formPenca.value.comision : '',
        cant_participantes: this.formPenca.value.cant_participantes ? this.formPenca.value.cant_participantes : '',
        priada: false,
        poso: '0',
        codigo: '0',
        user_Penca: [],
        campeonatoId: '0',
        activa: true,
      }
    }
  }
}
