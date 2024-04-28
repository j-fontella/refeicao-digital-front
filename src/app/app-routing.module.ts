import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OnComponent} from "./views/login/on/on.component";
import {MenuComponent} from "./views/menu/menu.component";
import {RecuperacaoSenhaComponent} from './views/login/recuperacao-senha/recuperacao-senha.component';
import {AlteracaoSenhaComponent} from './views/login/alteracao-senha/alteracao-senha.component';
import {SelecionarUnidadeComponent} from "./views/login/selecionar-unidade/selecionar-unidade.component";

const routes: Routes = [
  {
    path : 'on',
    component : OnComponent
  },
  {
    path : "menu",
    component : MenuComponent,
  },
  {
    path : "recuperacao-senha",
    component : RecuperacaoSenhaComponent
  },
  {
    path : "alteracao-senha",
    component : AlteracaoSenhaComponent
  },
  {
    path : "selecionar-unidade",
    component : SelecionarUnidadeComponent
  },
  {
    path : "**", redirectTo : 'on'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
