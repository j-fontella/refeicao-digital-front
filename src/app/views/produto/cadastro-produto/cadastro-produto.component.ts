import {Component} from '@angular/core';
import {UtilsService} from "../../../services/utils.service";
import {Router} from "@angular/router";
import {ProdutoService} from "../../../services/produto.service";

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrl: './cadastro-produto.component.scss'
})
export class CadastroProdutoComponent {
  categorias : any;
  categoria : any;

  constructor(
    private produtoService : ProdutoService,
    private utils : UtilsService,
    private router : Router
  ) {
  }

  ngOnInit(): void {
    let usuarioLogado = this.utils.getUsuarioLogado();
    this.produtoService.getCategorias(usuarioLogado.unidade.prk, usuarioLogado.token).subscribe(data => {
      this.categorias = data
    })
  }


  salvar() {

  }
}
