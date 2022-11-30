import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipo } from '../../models/equipo';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  constructor(private http: HttpClient) { }

  agregar(x : Equipo) : Observable<Equipo[]>{
    let apiUrl = "https://localhost:7220/api/Equipos";
    return this.http.post<Equipo[]>(apiUrl,x);
  }

  listar() : Observable<Equipo[]>{
    let apiUrl = "https://localhost:7220/api/Equipos";
    return this.http.get<Equipo[]>(apiUrl);
  }

  get(id : number|null) : Observable<Equipo>{
    let apiUrl = "https://localhost:7220/api/Equipos/"+id;
    return this.http.get<Equipo>(apiUrl);
  }

}
