import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ChavesComponent } from './chaves.component';
import { ChaveDetalheComponent } from './chave-detalhe/chave-detalhe.component';
import { ChaveEmprestimoComponent } from './chave-emprestimo/chave-emprestimo.component';
import { ChaveNaoEncontradaComponent } from './chave-nao-encontrada/chave-nao-encontrada.component';
import { ChavesService } from './chaves.service';
import { ChavesRoutingModule } from './chaves.routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        ChavesRoutingModule,
    ],
    exports: [],
    declarations: [
        ChavesComponent,
        ChaveDetalheComponent,
        ChaveEmprestimoComponent,
        ChaveNaoEncontradaComponent
    ],
    providers: [ChavesService],
})
export class ChavesModule { }

