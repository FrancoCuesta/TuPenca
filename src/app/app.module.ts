import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { LoginComponent } from './component/login/login.component';
import { InicioComponent } from './component/inicio/inicio/inicio.component';
import { InicioadminComponent } from './component/inicio/inicioadmin/inicioadmin.component';
import { IniciouserComponent } from './component/inicio/iniciouser/iniciouser.component';
import { EquipoComponent } from './component/equipo/equipo.component';
import { PartidoComponent } from './component/partido/partido.component';
import { CampeonatoComponent } from './component/campeonato/campeonato.component';
import { PencapublicaComponent } from './component/penca/pencapublica/pencapublica.component';
import { PencaprivadaComponent } from './component/penca/pencaprivada/pencaprivada.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './component/nav/nav.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListarpublicasComponent } from './component/penca/listarpublicas/listarpublicas.component';
import { ListarprivadasComponent } from './component/penca/listarprivadas/listarprivadas.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    InicioadminComponent,
    IniciouserComponent,
    EquipoComponent,
    PartidoComponent,
    CampeonatoComponent,
    PencapublicaComponent,
    PencaprivadaComponent,
    NavComponent,
    ListarpublicasComponent,
    ListarprivadasComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
