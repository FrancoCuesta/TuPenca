import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Premio } from 'src/app/models/Premio';
import { PremioService } from 'src/app/services/premio/premio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ver-premios',
  templateUrl: './ver-premios.component.html',
  styleUrls: ['./ver-premios.component.scss']
})
export class VerPremiosComponent {
  rol = localStorage.getItem("rol");
  token = localStorage.getItem("token");
  PremioU :Premio[] = [];
  PremioA :Premio[] = [];
  monto? : string|null;
  cuanta : string|null = "";
  x = 0;

  constructor(private PremioService :PremioService) { }

  Cuenta = new FormGroup({
    nombre: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    this.PremioService.get().subscribe({
      next: value => this.PremioA = value,
      error: error => console.log(error)
    });
    this.PremioService.getPremios().subscribe({
      next: value => this.PremioU = value,
      error: error => console.log(error)
    });
  }
  seleccionar(x : number|null){
    if(x != null)
    this.x = x;
  }

  Cobrar(){
      this.cuanta = this.Cuenta.controls["nombre"].value,
      this.PremioService.cobrar(this.x,this.cuanta).subscribe({
        next: value => { this.exito(); },
        error: err => { this.error() }
      })
  }

  eliminar(x : number|null){
    this.PremioService.eliminar(x).subscribe({
      next: value => { },
      error: err => { this.error() }
    })
  }

  error(): void {
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      showConfirmButton: false,
      timer: 1500
    })
  }

  exito(): void {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500
    })
  }
}
