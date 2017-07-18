import { Component, OnInit } from '@angular/core';

import {UF} from './types/uf';
import {UFService} from './services/uf.service'

import {Dados} from './types/samu';
import {SamuService} from './services/samu.service'

@Component({
  selector: 'app-root',
  templateUrl: './resumo.component.html',
  styleUrls: ['./app.component.css']
})
export class resumoComponent implements OnInit {
    id = 28;
    media: number;
    uf: UF;
    ufs : UF[];
    dados_da_samu : Dados[];
    dados_anos: Dados[];

    constructor(private ufService: UFService, private samuService: SamuService)
    { }

    ngOnInit(): void {
        this.ufs = this.ufService.getAll();
        this.uf = this.ufService.GetUf(this.id);
        this.media = this.samuService.GetMedia(this.id);
    }
}
