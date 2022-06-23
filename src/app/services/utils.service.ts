import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private httpClient : HttpClient, private router : Router) { }

  public isObject(obj : any) : boolean{
    return typeof obj === 'object' && obj !== null
  }

  public formataNumeroDuasCasasComMoeda(numero:any){
    if(isNaN(numero) || !numero){
      return "R$0,00"
    }
    numero = parseFloat(numero);
    return "R$"+(numero.toFixed(2)).replace(".", ",")
  }

  public formataNumeroDuasCasasSemMoeda(numero:any){
    return (numero.toFixed(2)).replace(".", ",")
  }

  public getEnderecoPorCep(cep:string){
    let endpoint = `https://viacep.com.br/ws/${cep}/json/`
    return this.httpClient.get(endpoint)
  }

  public formataDadosEndereco(){
    let cep = document.querySelector("#cep") as HTMLInputElement;
    let logradouro = document.querySelector("#logradouro") as HTMLInputElement;
    let bairro = document.querySelector("#bairro") as HTMLInputElement;
    let cidade = document.querySelector("#cidade") as HTMLInputElement;
    let uf = document.querySelector("#uf") as HTMLInputElement;
    if(cep && cep.value){
      this.getEnderecoPorCep(cep.value).subscribe(data => {
        let endereco : any = data
        if(endereco.erro){
          alert("CEP inválido");
          return;
        }
        bairro.value = endereco.bairro
        cidade.value = endereco.localidade
        uf.value = endereco.uf
        logradouro.value = endereco.logradouro
      },error => {
        console.log(error)
      })
    }

  }

  public processarRequisicao(requisicao : Observable<any>, msgSucesso : string | null, labelErro : string, nav : string | null){
    requisicao.subscribe(() => {
      if(msgSucesso){
        alert(msgSucesso);
      }
      if(nav){
        this.router.navigate([nav])
      }
    },error => {
      this.exibirMensagemErro(error, labelErro)
    })
  }

  public processarRequisicaoPreenchimento(requisicao : Observable<any>, msgErro : string){
    requisicao.subscribe(retorno => {
      this.preencherCamposJson(retorno)
    },() => {
      alert(msgErro)
    })
  }

  public exibirMensagemErro(erro : any, label : string){
    // @ts-ignore
    document.querySelector("#msgErro").innerHTML = this.getErrorMsg(erro, label);
  }

  public preencherCamposJson(json : any){
    let campoPreenchido : any;
    for(let campo in json){
      let valor = json[campo]
      if(!this.isObject(valor)){
        campoPreenchido = document.getElementById(campo)
        if(campoPreenchido){
          campoPreenchido.value = valor
        }
      }else{
        this.preencherCamposJson(valor)
      }
    }
  }


  private inserirCamposJson(inputs : any, objetos : [string], json : any){
    let especial = false;
    for (let i = 0; i < inputs.length; ++i) {
      especial = false;
      let input = inputs[i];
      let element = document.getElementById(`${input.id}`);
      // @ts-ignore
      if(element.parentElement.style.display == "none" || element.style.display == "none" ){
        continue
      }
      if(!input.value){
        json[input.id] = null;
        continue;
      }
      if(objetos){
        objetos.forEach(objeto => {
          if(input.className.includes(objeto)){
            especial = true;
            // @ts-ignore
            if(!json[objeto]){
              // @ts-ignore
              json[objeto] = {}
            }
            // @ts-ignore
            json[objeto][input.id] = input.value
          }
        })
      }

      if(especial)
        continue;

      json[input.id] = input.value
    }
  }

  public getJsonRequisicao(objetos: [string]){
    let inputs = document.getElementsByTagName('input') as unknown as HTMLInputElement[];
    let selects = document.getElementsByTagName('select') as unknown as HTMLSelectElement[];
    let json = {}
    this.inserirCamposJson(inputs, objetos, json)
    this.inserirCamposJson(selects, objetos, json)
    return json;
  }

  public getErrorMsg(json:any, label : String) : String {
    let msg : String = label ? label : "Contate o suporte";
    if(!this.isObject(json.error)){
      return json.error ? json.error : msg;
    }
    let errors = json.error.erros;
    if(Array.isArray(errors)){
      msg = "";
      errors.forEach((error : any) => {
        msg += error + "<BR>"
      })
    }


    return msg;
  }

}
