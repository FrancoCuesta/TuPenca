import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Equipo } from 'src/app/models/equipo';
import { Partido } from 'src/app/models/partido';
import { EquipoService } from 'src/app/services/equipo/equipo.service';
import { PartidoService } from 'src/app/services/partido/partido.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-partido',
  templateUrl: './partido.component.html',
  styleUrls: ['./partido.component.scss']
})
export class PartidoComponent {
  equipo: Equipo[] = [];
  formPartido = new FormGroup({
    fecha: new FormControl('', Validators.required),
    idEquipoA: new FormControl('', Validators.required),
    idEquipoB: new FormControl('', Validators.required),
  });

  constructor(private PartidoService: PartidoService, private EquipoService: EquipoService, private router: Router) { }

  ngOnInit(): void {
    this.EquipoService.listar().subscribe({
      next: value => this.equipo = value,
      error: error => console.log(error)
    });
  }

  partido() {
    let x: Partido = {
      id: "0",
      nombre: "",
      fecha: this.formPartido.controls["fecha"].value,
      golA: '0',
      golB: '0',
      idEquipoA: Number(this.formPartido.controls["idEquipoA"].value),
      idEquipoB: Number(this.formPartido.controls["idEquipoB"].value),
      estado: false,
      resultado: '0',
    }
    this.PartidoService.agregar(x).subscribe({
      next: value => { this.exito("Equipo creado con exito"); },
      error: err => { this.error('Error al agregar el equipo: ') }
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
