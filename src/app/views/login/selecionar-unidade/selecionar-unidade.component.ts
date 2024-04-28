import { Component } from '@angular/core';
import {LoginService} from "../../../services/login.service";
import {UtilsService} from "../../../services/utils.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-selecionar-unidade',
  templateUrl: './selecionar-unidade.component.html',
  styleUrl: './selecionar-unidade.component.scss'
})
export class SelecionarUnidadeComponent {
  unidades: any;
  unidade: any;

  constructor(
    private loginService: LoginService,
    private utils : UtilsService,
    private router : Router
  ) {
  }

  ngOnInit(): void {
    let usuarioLogado = this.utils.getUsuarioLogado();
    this.loginService.getUnidades(usuarioLogado.prk, usuarioLogado.token).subscribe(data => {
        this.unidades = data
      console.log(this.unidades)
    })
  }

  selecionarUnidade() {
    if(!this.unidade || !this.unidade.prk){
      alert("Selecione uma unidade");
      return;
    }
    let ust = this.utils.getUsuarioLogado();
    ust.unidade = this.unidade;
    sessionStorage.setItem("ust" , JSON.stringify(ust))
    this.router.navigate(['menu'])
  }
}
