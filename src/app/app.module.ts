import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { OnComponent } from './views/login/on/on.component';
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {HttpClientModule} from "@angular/common/http";
import { MenuComponent } from './views/menu/menu.component';
import { RecuperacaoSenhaComponent } from './views/login/recuperacao-senha/recuperacao-senha.component';
import { AlteracaoSenhaComponent } from './views/login/alteracao-senha/alteracao-senha.component';
import {SelecionarUnidadeComponent} from "./views/login/selecionar-unidade/selecionar-unidade.component";
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import {CadastroProdutoComponent} from "./views/produto/cadastro-produto/cadastro-produto.component";


@NgModule({
  declarations: [
    AppComponent,
    OnComponent,
    MenuComponent,
    RecuperacaoSenhaComponent,
    AlteracaoSenhaComponent,
    SelecionarUnidadeComponent,
    CadastroProdutoComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        CardModule,
        ButtonModule,
        InputTextModule,
        HttpClientModule,
        DropdownModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
