import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UFService } from './services/uf.service';
import { SamuService } from './services/samu.service';
import { RouterModule }   from '@angular/router';
import { resumoComponent } from './resumo.component';
import { dadosdaufComponent } from './dadosdauf.component';
import { todososdadosComponent } from './todososdados.component';
import {ModeloNovoService} from './services/modelonovo.service'

@NgModule({
  declarations: [
    AppComponent,
    todososdadosComponent,
    dadosdaufComponent,
    resumoComponent
  ],
  imports: [
    BrowserModule,
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
