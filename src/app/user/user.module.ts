import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { UsuarioService } from './services/usuario.service';
import { LoginComponent } from './components/login/login.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule
  ],
  exports: [
    LoginComponent
  ],
  providers: [
    UsuarioService
  ]
})
export class UserModule { }
