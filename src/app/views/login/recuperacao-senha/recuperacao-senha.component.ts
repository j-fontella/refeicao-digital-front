import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UtilsService } from 'src/app/services/utils.service';


@Component({
  selector: 'app-recuperacao-senha',
  templateUrl: './recuperacao-senha.component.html',
  styleUrl: './recuperacao-senha.component.scss'
})
export class RecuperacaoSenhaComponent {

  constructor(private loginService : LoginService, private router : Router, private utils : UtilsService) { }


  login () : void {
    this.router.navigate(['on'])
  }

  recuperarSenha () : void {
    // @ts-ignore
    let body = this.utils.getJsonRequisicao([]);
    let requisicao = this.loginService.recuperarSenha(body)
    this.utils.processarRequisicao(requisicao, "Instruções de alteração de senhas enviadas para o email", "Erro ao solicitar nova senha.", "alteracao-senha");
  }


}
