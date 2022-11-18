import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { GesUsuarioComponent } from './Componentes/ges-usuario/ges-usuario.component';
import { LoginComponent } from './component/login/login.component';
import { InicioComponent } from './component/inicio/inicio/inicio.component';
import { InicioadminComponent } from './component/inicio/inicioadmin/inicioadmin.component';
import { IniciouserComponent } from './component/inicio/iniciouser/iniciouser.component';
import { EquipoComponent } from './component/equipo/equipo.component';
import { PartidoComponent } from './component/partido/partido.component';
import { CampeonatoComponent } from './component/campeonato/campeonato.component';
import { PencapublicaComponent } from './component/penca/pencapublica/pencapublica.component';
import { PencaprivadaComponent } from './component/penca/pencaprivada/pencaprivada.component';
import { RegusuarioComponent } from './component/regusuario/regusuario.component';

const routes: Routes = [
  //{ path: 'usuario', component: GesUsuarioComponent },
  {path: 'login', component: LoginComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'inicioadmin', component: InicioadminComponent},
  {path: 'iniciouser', component: IniciouserComponent},
  {path: 'equipo', component: EquipoComponent},
  {path: 'partido', component: PartidoComponent},
  {path: 'campeonato', component: CampeonatoComponent},
  {path: 'pencapublica', component: PencapublicaComponent},
  {path: 'pencaprivada', component: PencaprivadaComponent},
  {path: 'registrarusuario', component: RegusuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
