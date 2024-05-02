import { Component, OnInit } from '@angular/core';
import {UtilsService} from "../../services/utils.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public nomeUnidade : string = "Comércio Digital";

  constructor(private utils : UtilsService) { }

  ngOnInit(): void {
    let usuarioLogado = this.utils.getUsuarioLogado();
    this.nomeUnidade = usuarioLogado.unidade.nome;
  }

}
