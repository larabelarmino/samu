import { Injectable } from '@angular/core';

import { Dados } from '../types/samu';
import { VALORES } from './mock-samu_municipios_atendidos_por_estado';
import { UF } from '../types/uf';
import { UFs } from './mock-ufs';
import { UFService } from './uf.service';
import { DadoNome} from '../types/modelonovo'

@Injectable()
export class ModeloNovoService {

constructor(private ufService: UFService) { }

  mesclardados(): Promise<DadoNome[]>{
    let dados_finais: DadoNome[] = [];
    let i: number;
    i = 0;
    let todos : Dados[] = VALORES.sort((uf1, uf2) => {
      if (uf1.uf_id > uf2.uf_id) return 1;
      if (uf1.uf_id < uf2.uf_id) return -1;
      return 0;
    });
    todos.forEach((item) => {
      this.ufService.GetUf(item.uf_id).then((uf)=>{
        dados_finais.push(dado_novo(item.ano, item.valor, uf));
    });
    });
    return Promise.resolve(dados_finais);
  }
}
function dado_novo (ano:number, valor:number, uf:UF) {

  let dado : DadoNome = new DadoNome();
  dado.ano = ano;
  dado.valor = valor;
  dado.uf = uf;
  return dado;
}
