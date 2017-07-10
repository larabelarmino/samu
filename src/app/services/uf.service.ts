import { Injectable } from '@angular/core';

import { UF } from '../types/uf';
import { UFs } from './mock-ufs';

@Injectable()
export class UFService {
  getAll(): UF[] {
    return UFs;
  }
GetUf(id: number): UF {
   let x : UF;
    for(let i of UFs){
        if (i.id == id){
           x = i;
           break
        }

    }
    return x;
}
}
