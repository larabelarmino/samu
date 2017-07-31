import { Component, OnInit } from '@angular/core';

import {UF} from './types/uf';
import {UFService} from './services/uf.service'

import {Dados} from './types/samu';
import {SamuService} from './services/samu.service'

@Component({
  selector: 'resumo',
  templateUrl: './resumo.component.html',
  styleUrls: ['./app.component.css']
})
export class resumoComponent implements OnInit {
    uf: UF;
    media: number;
    dados_da_samu : Dados[];
    dados_anos: Dados[];
    id = 28;
    samu: Dados[] = [];

    constructor(private ufService: UFService, private samuService: SamuService)
    { }

    ngOnInit(): void {
      this.ufService.GetUf(this.id).then((uf) => {
        this.uf = uf;
        this.samuService.GetDados(this.uf).then((samu) => {
          this.samu = samu;
          this.samuService.getMediaMunicipios(samu).then(media => this.media = media);
        });
      });
}}
