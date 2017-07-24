import { Component, OnInit } from '@angular/core';

import {UF} from './types/uf';
import {UFService} from './services/uf.service'

import {Dados} from './types/samu';
import {SamuService} from './services/samu.service'
import {DadoNome} from './types/modelonovo';
import {ModeloNovoService} from './services/modelonovo.service'
import {UFs} from './services/mock-ufs';
import {VALORES} from './services/mock-samu_municipios_atendidos_por_estado';

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
        this.ufs = this.ufService.getAll();
        this.dados_da_samu = this.samuService.getAllMunicipiosAtendidosPorEstado();
        this.uf = this.ufService.GetUf(this.id);
        this.media = this.samuService.GetMedia(this.id);
        this.dados_anos = this.samuService.GetDados(this.uf);
        this.dados = this.modeloNovoService.mesclardados();
    }
}
