import { Component } from '@angular/core';
import { Campeonato } from 'src/app/models/campeonato';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CampeonatoService } from 'src/app/services/campeonato/campeonato.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Partido } from 'src/app/models/partido';

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


  constructor(private CampeonatoService: CampeonatoService, private router: Router) { }

  campeonato() {
    let partido : Partido[] = [];
    let x: Campeonato = {
      id: "0",
      nombre: this.formCampeonato.controls["nombre"].value,
      descripcion: this.formCampeonato.controls["descripcion"].value,
      fechaInicio: this.formCampeonato.controls["fechaInicio"].value,
      fechaFin: this.formCampeonato.controls["fechaFin"].value,
      partidos: partido,
    }
    this.CampeonatoService.agregar(x).subscribe({
      next: value => { this.exito("Equipo creado con exito"); },
      error: err => {
        this.error('Error al agregar el equipo: ')
      }
    })
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
