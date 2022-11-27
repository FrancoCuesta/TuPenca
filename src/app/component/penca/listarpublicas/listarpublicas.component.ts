import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Penca } from 'src/app/models/penca';
import { PencaService } from 'src/app/services/penca/penca.service';

@Component({
  selector: 'app-listarpublicas',
  templateUrl: './listarpublicas.component.html',
  styleUrls: ['./listarpublicas.component.scss']
})
export class ListarpublicasComponent implements OnInit {
  rol= localStorage.getItem('rol');
  pencas: Penca[] = [];
  token = localStorage.getItem('token');
  constructor(private PencaService: PencaService,private router:Router) { }

  ngOnInit(): void {
    this.PencaService.listarPublicas().subscribe({
      next: value => this.pencas = value,
      error: error => console.log(error)
  });}
  
  VerPenca(id:number){
    this.router.navigate(['/Penca', id]);
  }
}
