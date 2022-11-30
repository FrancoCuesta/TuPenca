import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Equipo } from 'src/app/models/equipo';
import { Partido } from 'src/app/models/partido';
import { Predicsion } from 'src/app/models/Predicsion';
import { PredicsionService } from 'src/app/services/predicsion/predicsion.service';
import { EquipoService } from 'src/app/services/equipo/equipo.service';
import { PartidoService } from 'src/app/services/partido/partido.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-predicsion',
  templateUrl: './predicsion.component.html',
  styleUrls: ['./predicsion.component.scss']
})
export class PredicsionComponent {
  prediccion!: Predicsion;
  partido!:Partido;
  equipoA!:Equipo;
  equipoB!:Equipo;

  constructor( private PredicsionService:PredicsionService ,private PartidoService:PartidoService, private EquipoService:EquipoService ,private router: Router) { }

  formPredicsion = new FormGroup({
    golA: new FormControl('', Validators.required),
    golB: new FormControl('', Validators.required),
  });


  ngOnInit(): void {
    this.prediccion= this.PartidoService.traer();
    console.log(this.prediccion);
    this.PartidoService.get(this.prediccion.partidoid).subscribe({
      next: value => {this.partido = value,
        this.EquipoService.get(value.idEquipoA).subscribe({
        next: value => this.equipoA = value,
        error: error => console.log(error)
      }),
      this.EquipoService.get(value.idEquipoB).subscribe({
        next: value => this.equipoB = value,
        error: error => console.log(error)
      })},
      error: error => console.log(error)
    });
  }

  Prediccion() {
    {
      this.prediccion.golA = Number(this.formPredicsion.controls["golA"].value);
      this.prediccion.golB = Number(this.formPredicsion.controls["golB"].value);
      this.PredicsionService.SetPrediccion(this.prediccion).subscribe({
        next: value => { this.exito("Prediccion creada con exito"); },
        error: err => { this.error('Error al agregar la prediccion: ') }
      });
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
