import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Sesion } from '../user/interfaces/sesion';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor(private _snackBar: MatSnackBar) { }

  showAlert(message:string, type:string){
    this._snackBar.open(message,type,{
      horizontalPosition: "end",
      verticalPosition: "top",
      duration: 3000
    })
  }



  saveSession(session: Sesion){
    localStorage.setItem("userSession",JSON.stringify(session));
  }

  getSession(){
    const sessionString = localStorage.getItem("userSession");
    const userToken = JSON.parse(sessionString!);

    return userToken;
  }


  removeSession(){
    localStorage.removeItem("userSession");
  }


}
