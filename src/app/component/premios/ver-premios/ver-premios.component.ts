import { Component } from '@angular/core';
import { Premio } from 'src/app/models/Premio';
import { PremioService } from 'src/app/services/premio/premio.service';

@Component({
  selector: 'app-ver-premios',
  templateUrl: './ver-premios.component.html',
  styleUrls: ['./ver-premios.component.scss']
})
export class VerPremiosComponent {
  Premio :Premio[] = [];

  constructor(private PremioService :PremioService) { }

  ngOnInit(): void {
    this.PremioService.getPremios().subscribe({
      next: value => this.Premio = value,
      error: error => console.log(error)
    });
  }
  
  Cobrar(id : number|null){

  }
}
