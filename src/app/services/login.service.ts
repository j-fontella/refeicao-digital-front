import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
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

  public recuperarSenha(body:any){
    let uri = this.apiUrl + "recuperar/"
    return this.httpClient.post(uri,body)
  }

  public alterarSenha(body:any){
    let uri = this.apiUrl + "alterar/"
    return this.httpClient.post(uri,body)
  }

  public getUnidades(prkUsuario: any, token: any) {
    const headers = new HttpHeaders({
      'token': `${token}`
    });

    let uri = this.apiUrl + `unidades/${prkUsuario}`;
    return this.httpClient.get(uri, { headers: headers });
  }

}
