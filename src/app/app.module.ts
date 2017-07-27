import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UFService } from './services/uf.service';
import { SamuService } from './services/samu.service';
import { RouterModule }   from '@angular/router';
import { resumoComponent } from './resumo.component';
import { dadosdaufComponent } from './dadosdauf.component';
import { todososdadosComponent } from './todososdados.component';
import {ModeloNovoService} from './services/modelonovo.service';
import { HttpModule }    from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    todososdadosComponent,
    dadosdaufComponent,
    resumoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    RouterModule.forRoot([

  {
    path: 'resumo',
    component: resumoComponent
  },
  {
    path: 'dadosdauf',
    component: dadosdaufComponent
  },
  {
    path: 'todososdados',
    component: todososdadosComponent
  }

])
  ],
  providers: [UFService, SamuService, ModeloNovoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
