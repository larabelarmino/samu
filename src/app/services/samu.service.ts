import { Injectable } from '@angular/core';

import { Dados } from '../types/samu';
import { VALORES } from './mock-samu_municipios_atendidos_por_estado';

@Injectable()
export class SamuService {

  getAllMunicipiosAtendidosPorEstado(): Dados[] {
    return VALORES;
  }
  GetMedia(id: number): number {
     let x : number;
     let anos: number = 0;
      for(let i of VALORES){
          if (i.uf_id == id){
             x+= i.valor;
             anos++;
          }

      }
      return x/anos;
  }
  GetDados(id: number): Dados[] {
     let dados: Dados[] = [];
     let x: number = 0;
      for(let i of VALORES){
          if (i.uf_id == id){
             dados[x] = i;
             x++;
          }

      }
      return dados;
  }
}
