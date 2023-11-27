import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { SharedServiceService } from 'src/app/shared/shared-service.service';
import { Login } from '../../interfaces/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formLogin: FormGroup;
  hidePassword: boolean = true;
  showLoading: boolean = false;

  /**
   *
   */
  constructor(private fb: FormBuilder,
              private router: Router,
              private userService: UsuarioService,
              private sharedService: SharedServiceService) {
    
    this.formLogin = this.fb.group({
      username: ["", Validators.required],
      password:  ["", Validators.required],
    })
  }



  signIn(){
    
    this.showLoading = true;
    const request: Login = {
      username: this.formLogin.value.username,
      password: this.formLogin.value.password
    }

    this.userService.SignInService(request).subscribe({
      next: (response) => {
        this.sharedService.saveSession(response);
        this.router.navigate(['layout']); // Corregir el nombre de la ruta
        this.sharedService.showAlert('Te Logeaste mi rey Hermoso', '!EXITOSO!');
      },
      complete: () => {
        this.showLoading = false;
      },
      error: (ex) => {
        this.sharedService.showAlert(ex.error, '!Error!');
        this.showLoading = false;
      }
    });
  }


}
