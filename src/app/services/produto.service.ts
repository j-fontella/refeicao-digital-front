import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  apiUrl = "http://localhost:8081/produto/";


  constructor(private httpClient : HttpClient, private router : Router) { }

  getCategorias(frkUnidade : any, token : any) {
    const headers = new HttpHeaders({
      'token': `${token}`
    });

    let uri = this.apiUrl + `categorias/${frkUnidade}`;
    return this.httpClient.get(uri, { headers: headers });
  }

}
