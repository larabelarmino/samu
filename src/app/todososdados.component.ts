import { Component, OnInit } from '@angular/core';

import {UF} from './types/uf';
import {UFService} from './services/uf.service'
import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Dados} from './types/samu';
import {SamuService} from './services/samu.service'
import 'rxjs/add/operator/toPromise';
import {DadoNome} from './types/modelonovo';
import {ModeloNovoService} from './services/modelonovo.service'
//import {UFs} from './services/mock-ufs';
//import {VALORES} from './services/mock-samu_municipios_atendidos_por_estado';

@Component({
  selector: 'app-root',
  templateUrl: './todososdados.component.html',
  styleUrls: ['./app.component.css']
})
export class todososdadosComponent implements OnInit {
    id = 28;
    media: number;
    uf: UF;
    ufs : UF[];
    dados_da_samu : Dados[];
    dados_anos: Dados[];
    dados: DadoNome[];

    constructor(private ufService: UFService, private samuService: SamuService, private modeloNovoService: ModeloNovoService)
    { }

    ngOnInit(): void {
        this.modeloNovoService.mesclardados().then(dados => this.dados = dados);;
    }
}
