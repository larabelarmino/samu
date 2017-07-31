
import { Component, OnInit } from '@angular/core';

import {UF} from './types/uf';
import {UFService} from './services/uf.service'

import {Dados} from './types/samu';
import {SamuService} from './services/samu.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
    id = 28;
    uf: UF;

    constructor(private ufService: UFService, private samuService: SamuService)
    { }

    ngOnInit(): void {
      this.ufService.GetUf(this.id).then(uf => this.uf = uf);
    }
}
