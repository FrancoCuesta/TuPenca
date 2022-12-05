import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-regusuario',
  templateUrl: './regusuario.component.html',
  styleUrls: ['./regusuario.component.scss']
})
export class RegusuarioComponent {
  formregusuario = new FormGroup({
    nombre: new FormControl('',Validators.required),
    apellido: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  });

  
  constructor(private router:Router ,private api:LoginService ) { }

  regusuario() {
      let x: Usuario={
        nombre: this.formregusuario.controls["nombre"].value,
        apellido: this.formregusuario.controls["apellido"].value,
        email: this.formregusuario.controls["email"].value,
        password: this.formregusuario.controls["password"].value,
      }
      this.api.register(x).subscribe(data => {
        console.log(data);
        this.router.navigate(['/login']);
      });
    }
}
