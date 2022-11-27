import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Campeonato } from 'src/app/models/campeonato';
import { CampeonatoService } from 'src/app/services/campeonato/campeonato.service';

@Component({
  selector: 'app-listar-campeonato',
  templateUrl: './listar-campeonato.component.html',
  styleUrls: ['./listar-campeonato.component.scss']
})
export class ListarCampeonatoComponent {
  campeonatos: Campeonato[] = [];
  token = localStorage.getItem('token');
  rol = localStorage.getItem('rol');
  constructor(private CampeonatoService: CampeonatoService ,private router:Router) { }

  ngOnInit(): void {
    this.CampeonatoService.listar().subscribe({
      next: value => this.campeonatos = value,
      error: error => console.log(error)
  });}
  
  VerCampeonato(id:string|null){
    if (id != null) {
      this.router.navigate(['/Campeonato', id]);
  }
}

}
