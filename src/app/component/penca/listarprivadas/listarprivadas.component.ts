import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Penca } from 'src/app/models/penca';
import { PencaService } from 'src/app/services/penca/penca.service';

@Component({
  selector: 'app-listarprivadas',
  templateUrl: './listarprivadas.component.html',
  styleUrls: ['./listarprivadas.component.scss']
})
export class ListarprivadasComponent {
  pencas: Penca[] = [];
  token = localStorage.getItem('token');
  constructor(private PencaService: PencaService,private router:Router) { }

  ngOnInit(): void {
    this.PencaService.listarMisPenca().subscribe({
      next: value => this.pencas = value,
      error: error => console.log(error)
  });}
  
  VerPenca(id:number){
    this.router.navigate(['/penca', id]);
  }
}
