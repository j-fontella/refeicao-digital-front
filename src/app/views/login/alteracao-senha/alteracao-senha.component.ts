import { Component, OnInit } from '@angular/core';
import {UtilsService} from "../../../services/utils.service";
import {LoginService} from "../../../services/login.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-alteracao-senha',
  templateUrl: './alteracao-senha.component.html',
  styleUrl: './alteracao-senha.component.scss'
})
export class AlteracaoSenhaComponent {

  constructor(
    private loginService: LoginService,
    private utils : UtilsService,
    private router : Router
  ) {
  }


  ngOnInit(): void {
    
  }

  alterarSenha () : void {
    // @ts-ignore
    let body = this.utils.getJsonRequisicao([]);
    let requisicao = this.loginService.alterarSenha(body)
    this.utils.processarRequisicao(requisicao, "Senha alterada com sucesso", "Erro ao alterar senha.", "on");
  }

  voltar () : void {
      this.router.navigate(['recuperacao-senha'])
  }

}
