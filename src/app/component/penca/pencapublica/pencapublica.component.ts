import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Penca } from 'src/app/models/penca';
import { PencaService } from 'src/app/services/penca/penca.service';
import Swal from 'sweetalert2';

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

  constructor(private PencaService: PencaService) { }

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
      this.PencaService.agregar(x).subscribe({
        next: value => { this.exito("Penca creada con exito"); },
        error: err => { this.error('Error al agregar la penca: ') }
      })
    }
  }

  error(x: string): void {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: x,
    })
  }

  exito(x: string): void {
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
