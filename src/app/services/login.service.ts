import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl = "http://localhost:8081/login/";


  constructor(private httpClient : HttpClient, private router : Router) { }


  public cadastrarUsuario(body:any){
    let uri = this.apiUrl + "registrar/"
    return this.httpClient.post(uri,body)
  }

  public logarUsuario(body:any) {
    let uri = this.apiUrl + "on"
    return this.httpClient.post(uri, body).pipe(
      tap(
        (loginResponse) => (
          sessionStorage.setItem("ust" , JSON.stringify(loginResponse))
        )))
  }

  public getUsuarioLogado(){
    let userStatus = JSON.parse(<string>sessionStorage.getItem('ust'));
    if(!userStatus || !userStatus.token || !userStatus.prk){
      alert("Faça o login novamente")
      return this.router.navigate(['on'])
    }
    return userStatus
  }

}
