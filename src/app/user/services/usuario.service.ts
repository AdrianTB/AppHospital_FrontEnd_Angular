import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroments } from 'src/enviroments/enviroment.prod';
import { Login } from '../interfaces/login';
import { Observable } from 'rxjs';
import { Sesion } from '../interfaces/sesion';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  baseUrl: string = enviroments.apiUrl + "usuario/";

  constructor(private http:HttpClient) { }

  SignInService(request: Login):Observable<Sesion> {
    return this.http.post<Sesion>(`${this.baseUrl}login`, request)
  }


}
