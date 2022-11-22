import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-regusuario',
  templateUrl: './regusuario.component.html',
  styleUrls: ['./regusuario.component.scss']
})
export class RegusuarioComponent {

  formRegusuario = new FormGroup({
    nombre: new FormControl('',Validators.required),
    apellido: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  });

  
  constructor(private router:Router ) { }

  regusuario() {
      let x: Usuario={
        nombre: this.formRegusuario.controls["nombre"].value,
        apellido: this.formRegusuario.controls["apellido"].value,
        email: this.formRegusuario.controls["email"].value,
        password: this.formRegusuario.controls["password"].value,
      }
    }
}
