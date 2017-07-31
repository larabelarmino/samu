import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { UF } from '../types/uf';
//import { UFs } from './mock-ufs';

@Injectable()
export class UFService {
//  getAll(): Promise<UF[]> {
  //  return Promise.resolve(UFs);
//  }
constructor(private http: Http) { }
GetUf(id: number): Promise<UF> {
  return this.http.get('/api/ufs')
  .toPromise()
    .then((response) => {
      let ufs = response.json().data as UF[];
      return ufs.find(uf => uf.id == id);
    });
}
}
