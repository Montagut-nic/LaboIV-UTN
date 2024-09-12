import { Component, EventEmitter, Output } from '@angular/core';
import { Usuario } from '../../clases/usuario';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from "../error/error.component";
import { HomeComponent } from '../home/home.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HomeComponent, ErrorComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private router: Router){
    
  }
  validarLogin() {
    if(this.usuario.nombre=="user01" && this.usuario.password=="123"){
      this.router.navigate(['/home']);
    }
  }
  usuario: Usuario = new Usuario ("","");
}
