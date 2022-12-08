import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Campeonato } from 'src/app/models/campeonato';
import { Partido } from 'src/app/models/partido';
import { Penca } from 'src/app/models/penca';
import { Predicsion } from 'src/app/models/Predicsion';
import { CampeonatoService } from 'src/app/services/campeonato/campeonato.service';
import { PartidoService } from 'src/app/services/partido/partido.service';
import { PencaService } from 'src/app/services/penca/penca.service';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { Usuario } from 'src/app/models/usuario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ver-penca',
  templateUrl: './ver-penca.component.html',
  styleUrls: ['./ver-penca.component.scss']
})
export class VerPencaComponent {
  public payPalConfig?: IPayPalConfig;
  rol = localStorage.getItem('rol');
  penca!: Penca;
  campeonato: Campeonato[] = [];
  unido!: boolean;
  partidos: Partido[] = [];
  uauarios: Usuario [] = [];
  constructor(private PartidoService:PartidoService ,private PencaService: PencaService, private CampeonatoService: CampeonatoService, private router: Router, private route: ActivatedRoute) { }

  VerCampeonato(id: string | null) {
    if (id != null) {
      this.router.navigate(['/Campeonato', id]);
    }
  }
  ngOnInit(): void {
    this.initConfig();
    this.route.params.subscribe((params: Params) => {
      this.PencaService.get(params['id']).subscribe({
        next: value => {
          this.penca = value,
          this.CampeonatoService.get(value.campeonatoId).subscribe({
            next: value => this.partidos = value.partidos,
            error: error => console.log(error)
          }),
          this.PencaService.estasUnido(this.penca.id).subscribe({
            next: value => this.unido = true,
            error: error => this.unido = false
          }),
          this.PencaService.getUsuarios(this.penca.id).subscribe({
            next: value => this.uauarios = value,
            error: error => console.log(error)
          })
        },
        error: error => console.log(error)
      });
      this.CampeonatoService.listar().subscribe({
        next: value => {this.campeonato = value, 
          localStorage.setItem('total', Number(this.penca.costo_entrada).toString())},
        error: error => console.log(error)
      });
    });
  }
  agregarCampeonato(id: string | null) {
    this.PencaService.setCampeonato(id, this.penca.id).subscribe({
      next: value => console.log(value),
      error: error => console.log(error)
    });
    location.reload();
  }

  Unirme() {
    this.PencaService.unirme(this.penca.id).subscribe({
      next: value => console.log(value),
      error: error => console.log(error)
    });
    setTimeout(function(){
      location.reload();
    },3000);
  }

  Salir() {
    this.PencaService.Salir(this.penca.id).subscribe({
      next: value => console.log(value),
      error: error => console.log(error)
    });
    location.reload();
  }
  Predicsion(id: string | null) {
    var DateObj = new Date();
    let x:Predicsion = {
        id : 0,
        golA: 0,
        golB: 0,
        fecha:"2022-11-28T22:40:29.356Z",
        partidoid: Number(id),
        pencaid: this.penca.id,
        userId: localStorage.getItem('email')
    }
    this.PartidoService.guardar(x);
    this.router.navigate(['/Prediccion']);
  }

  finalizar() {
    this.PencaService.finalizar(this.penca.id).subscribe({
      next: value => this.exito("La penca ha finalizado"),
      error: error => this.error("No se pudo finalizar la penca"+error.Exception)
    });
  }

  private initConfig(): void {
    this.payPalConfig = {
    currency: 'USD',
    clientId: 'sb',
    createOrderOnClient: (data) => <ICreateOrderRequest>{
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: this.penca.costo_entrada,
            breakdown: {
              item_total: {
                currency_code: 'USD',
                value: this.penca.costo_entrada
              }
            }
          },
        }
      ]
    },
    advanced: {
      commit: 'true'
    },
    style: {
      color: 'blue',
      label: 'paypal',
      layout: 'vertical'
    },
    onApprove: (data, actions) => {
      console.log('onApprove - transaction was approved, but not authorized', data, actions);
      actions.order.get().then((details: any) => {{
        console.log('onApprove - you can get full order details inside onApprove: ', details),this.Unirme();
      }});
    },
    onClientAuthorization: (data) => {
      console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
    },
    onCancel: (data, actions) => {
      console.log('OnCancel', data, actions);
    },
    onError: err => {
      console.log('OnError', err);
    },
    onClick: (data, actions) => {
      console.log('onClick', data, actions);
    },
  };
  }
  
  error(x: string): void {
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: x,
      showConfirmButton: false,
      timer: 1500
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

