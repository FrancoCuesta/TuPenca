import { isFakeTouchstartFromScreenReader } from '@angular/cdk/a11y';
import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Campeonato } from 'src/app/models/campeonato';
import { Penca } from 'src/app/models/penca';
import { CampeonatoService } from 'src/app/services/campeonato/campeonato.service';
import { PencaService } from 'src/app/services/penca/penca.service';

@Component({
  selector: 'app-ver-penca',
  templateUrl: './ver-penca.component.html',
  styleUrls: ['./ver-penca.component.scss']
})
export class VerPencaComponent {
  rol = localStorage.getItem('rol');
  penca!: Penca;
  campeonato: Campeonato[] = [];
  unido!:boolean;
  constructor(private PencaService: PencaService, private CampeonatoService: CampeonatoService, private router: Router, private route: ActivatedRoute) { }

  VerCampeonato(id: string | null) {
    if (id != null) {
      this.router.navigate(['/Campeonato', id]);
    }
  }
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.PencaService.get(params['id']).subscribe({
        next: value =>{this.penca = value,
          this.PencaService.estasUnido(this.penca.id).subscribe({
            next: value => this.unido = true,
            error: error => this.unido = false
          });
        },
        error: error => console.log(error)
      });
      this.CampeonatoService.listar().subscribe({
        next: value => this.campeonato = value,
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

  Unirme(){
    this.PencaService.unirme(this.penca.id).subscribe({
      next: value => console.log(value),
      error: error => console.log(error)
    });
    location.reload();
  }

  Salir(){
    this.PencaService.Salir(this.penca.id).subscribe({
      next: value => console.log(value),
      error: error => console.log(error)
    });
    location.reload();
  }

}
