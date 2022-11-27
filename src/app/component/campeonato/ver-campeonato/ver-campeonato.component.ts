import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Campeonato } from 'src/app/models/campeonato';
import { Partido } from 'src/app/models/partido';
import { CampeonatoService } from 'src/app/services/campeonato/campeonato.service';
import { PartidoService } from 'src/app/services/partido/partido.service';

@Component({
  selector: 'app-ver-campeonato',
  templateUrl: './ver-campeonato.component.html',
  styleUrls: ['./ver-campeonato.component.scss']
})
export class VerCampeonatoComponent {

  constructor(private PartidoService: PartidoService ,private CampeonatoService:CampeonatoService ,private router:Router,private route: ActivatedRoute) { }
  
  campeonato!: Campeonato;
  token = localStorage.getItem('token');
  rol = localStorage.getItem('rol');
  partidos:Partido[] = [];
  p:Partido[] = [];
  
  ngOnInit(): void {
    this.PartidoService.listar().subscribe({
      next: value => this.p = value,
      error: error => console.log(error)
    })
    this.route.params.subscribe((params: Params) => {
      this.CampeonatoService.get(params['id']).subscribe({
        next: value => {this.campeonato = value,
        this.partidos = this.campeonato.partidos
      },
        error: error => console.log(error)
      });
    });
  }

  eliminarPartido(id:string|null){
    this.CampeonatoService.eliminarPartido(this.campeonato.id,id).subscribe({
      next: value => console.log(value),
      error: error => console.log(error)
    });
    location.reload();
  }

  
  agregarPartido(id:string|null){
    this.CampeonatoService.setPartido(this.campeonato.id,id).subscribe({
      next: value => console.log(value),
      error: error => console.log(error)
    });
    location.reload();
  }
  verPartido(id:string|null){
    this.router.navigate(['/partido',id]);
  }

}
