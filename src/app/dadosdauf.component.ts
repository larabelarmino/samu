import { Component, OnInit } from '@angular/core';

import {UF} from './types/uf';
import {UFService} from './services/uf.service'

import {Dados} from './types/samu';
import {SamuService} from './services/samu.service'

@Component({
  selector: 'app-root',
  templateUrl: './dadosdauf.component.html',
  styleUrls: ['./app.component.css']
})
export class dadosdaufComponent implements OnInit {
    id = 28;
    uf: UF;
    dados_anos: Dados[];

    constructor(private ufService: UFService, private samuService: SamuService)
    { }

    ngOnInit(): void {
        this.ufService.GetUf(this.id).then((uf)=> {
          this.uf = uf;
          this.samuService.GetDados(this.uf).then(dados_anos => this.dados_anos = dados_anos);
        });
      }
}
