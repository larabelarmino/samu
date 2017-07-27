import { Injectable } from '@angular/core';

import { Dados } from '../types/samu';
import { UF } from '../types/uf';
import { VALORES } from './mock-samu_municipios_atendidos_por_estado';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class SamuService {
  private samuUrl = 'angular-in-memory-web-api';

  constructor(private http: Http) { }

  getAllMunicipiosAtendidosPorEstado(): Promise<Dados[]> {
    return this.http.get(this.samuUrl)
     .toPromise().then(response => response.json().data as Dados[])
    .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}
  GetMedia(id: number): number {
     let x : number = 0;
     let anos: number = 0;
      for(let i of VALORES){
          if (i.uf_id == id){
             x += i.valor;
             anos++;
          }

      }
      return x/anos;
  }
  GetDados(uf: UF): Dados[] {
     let dados: Dados[] = [];
     let x: number = 0;
      for(let i of VALORES){
          if (i.uf_id == uf.id){
             dados[x] = i;
             x++;
          }

      }
      return dados;
  }
}
