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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ListarpublicasComponent } from './component/penca/listarpublicas/listarpublicas.component';
import { ListarprivadasComponent } from './component/penca/listarprivadas/listarprivadas.component';
import { SpinnerComponent } from './component/spinner/spinner/spinner.component';
import { JwtInterceptor } from './interceptors/httpInterceptor';
import { Spinerinterceptor } from './interceptors/spinerinterceptor';
import { ListarPartidoComponent } from './component/partido/listar-partido/listar-partido.component';
import { ListarCampeonatoComponent } from './component/campeonato/listar-campeonato/listar-campeonato.component';
import { ListarEquiposComponent } from './component/equipo/listar-equipos/listar-equipos.component';
import { MenuPartidoComponent } from './component/partido/menu-partido/menu-partido.component';
import { MenuEquiposComponent } from './component/equipo/menu-equipos/menu-equipos.component';
import { MenuPencaComponent } from './component/penca/menu-penca/menu-penca.component';
import { VerCampeonatoComponent } from './component/campeonato/ver-campeonato/ver-campeonato.component';
import { VerPencaComponent } from './component/penca/ver-penca/ver-penca.component';
import { VerPremiosComponent } from './component/premios/ver-premios/ver-premios.component';
import { PredicsionComponent } from './component/predicsion/predicsion.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { RegusuarioComponent } from './component/regusuario/regusuario.component';
import { FooterComponent } from './component/footer/footer.component';


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
    SpinnerComponent,
    ListarPartidoComponent,
    ListarCampeonatoComponent,
    ListarEquiposComponent,
    MenuPartidoComponent,
    MenuEquiposComponent,
    MenuPencaComponent,
    VerCampeonatoComponent,
    VerPencaComponent,
    VerPremiosComponent,
    PredicsionComponent,
    RegusuarioComponent,
    FooterComponent,
    
  ],
  imports: [
    NgxPayPalModule,
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
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: Spinerinterceptor ,multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
