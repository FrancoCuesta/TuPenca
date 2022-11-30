import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Partido } from 'src/app/models/partido';
import { Predicsion } from 'src/app/models/Predicsion';

@Injectable({
  providedIn: 'root'
})
export class PartidoService {
  Predicsion!: Predicsion
  constructor(private http: HttpClient) { }
  
  guardar(x: Predicsion){
    localStorage.setItem('Predicsion', JSON.stringify(x));
  }

  traer(): Predicsion{
    let x = localStorage.getItem('Predicsion');
    if(x!=null){
      this.Predicsion = JSON.parse(x);
    }
    return this.Predicsion;
  }

  agregar(x : Partido) : Observable<Partido[]>{ 
    let apiUrl = "https://localhost:7220/api/Partidos";
    return this.http.post<Partido[]>(apiUrl,{
      nombre: '',
      fecha: x.fecha,
      golA: 0,
      golB: 0,
      idEquipoA: x.idEquipoA,
      idEquipoB: x.idEquipoB,
      estado: false,
      resultado: 0
    });
  }
  listar() : Observable<Partido[]>{
    let apiUrl= "https://localhost:7220/api/Partidos";
    return this.http.get<Partido[]>(apiUrl);
  }
  get(id : number|null) : Observable<Partido>{
    let apiUrl= "https://localhost:7220/api/Partidos/"+id;
    return this.http.get<Partido>(apiUrl);
  }
}
