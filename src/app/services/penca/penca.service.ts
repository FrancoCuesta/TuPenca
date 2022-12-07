import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Penca } from '../../models/penca';
import { HttpClient } from '@angular/common/http';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class PencaService {
  constructor(private http: HttpClient) { }

  get(id: string|null): Observable<Penca> {
    let apiUrl = "https://localhost:7220/api/Penca/"+id;
    return this.http.get<Penca>(apiUrl);
  }

  agregar(penca: Penca): Observable<Penca> {
    let apiUrl = "https://localhost:7220/api/Penca";
    return this.http.post<Penca>(apiUrl, penca);
  }

  listarPublicas() : Observable<Penca[]>{
    let apiUrl = "https://localhost:7220/api/Penca/GetPencasPublica";
    return this.http.get<Penca[]>(apiUrl);
  }

  listarMisPenca() : Observable<Penca[]>{
    let apiUrl = "https://localhost:7220/api/Penca/GetMisPencas/"+localStorage.getItem("email");
    return this.http.get<Penca[]>(apiUrl);
  }

  setCampeonato(campeonatoId:string|null,pencaId:number|null): Observable<Penca> {
    let apiUrl = "https://localhost:7220/api/Penca/SetCampeonato?idC="+campeonatoId+"&idP="+pencaId;
    return this.http.put<Penca>(apiUrl, null);
  }

  unirme(pencaId:number|null): Observable<Penca> {
    let apiUrl = 'https://localhost:7220/api/Penca/SetUsuario?idU='+localStorage.getItem("email")+"&idP="+pencaId;
    return this.http.put<Penca>(apiUrl, null);
  }
  
  Salir(pencaId:number|null): Observable<Penca>{
    let apiUrl = 'https://localhost:7220/api/Penca/DeleteUsuario?idU='+localStorage.getItem("email")+'&idP='+pencaId;
    return this.http.put<Penca>(apiUrl, null);
  }

  estasUnido(pencaId:number|null): Observable<Penca>{
    let apiUrl = 'https://localhost:7220/api/Penca/EstasUnido?idU='+localStorage.getItem("email")+'&idP='+pencaId;
    return this.http.put<Penca>(apiUrl, null);
  }

  getUsuarios(pencaId:number|null): Observable<Usuario[]>{
    let apiUrl = 'https://localhost:7220/api/Penca/GetUsuarios?idP='+pencaId;
    return this.http.get<Usuario[]>(apiUrl);
  }

  finalizar(pencaId:number|null): Observable<Penca>{
    let apiUrl = 'https://localhost:7220/api/Penca/Finalizar?idP='+pencaId;
    return this.http.put<Penca>(apiUrl, null);
  }
}
