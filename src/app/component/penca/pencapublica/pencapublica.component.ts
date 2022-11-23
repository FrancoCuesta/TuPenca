import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Penca } from 'src/app/models/penca';

@Component({
  selector: 'app-pencapublica',
  templateUrl: './pencapublica.component.html',
  styleUrls: ['./pencapublica.component.scss']
})
export class PencapublicaComponent {
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
        nombre: this.formPenca.controls["nombre"].value,
        costo_entrada: this.formPenca.controls["costo_entrada"].value,
        comision: this.formPenca.controls["comision"].value,
        cant_participantes: this.formPenca.controls["cant_participantes"].value, 
        priada: false,
        poso: '0',
        codigo: '0',
        user_Penca: [],
        campeonatoId: '0',
      }
    }
  }
}
