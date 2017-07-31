import { Injectable } from '@angular/core';

import { UF } from '../types/uf';
import { UFs } from './mock-ufs';

@Injectable()
export class UFService {
  getAll(): Promise<UF[]> {
    return Promise.resolve(UFs);
  }
GetUf(id: number): Promise<UF> {
   let x : UF;
    for(let i of UFs){
        if (i.id == id){
           x = i;
           break
        }

    }
    return Promise.resolve(x);
}
}
