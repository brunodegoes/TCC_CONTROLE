import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ComputadoresComponent } from './computadores.component';
import { ComputadorDetalheComponent } from './computador-detalhe/computador-detalhe.component';
import { ComputadorEmprestimoComponent } from './computador-emprestimo/computador-emprestimo.component';
import { ComputadorNaoEncontradoComponent } from './computador-nao-encontrado/computador-nao-encontrado.component';
import { ComputadoresService } from './computadores.service';
import { ComputadoresRoutingModule } from './computadores.routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        ComputadoresRoutingModule
    ],
    exports: [],
    declarations: [
        ComputadoresComponent,
        ComputadorDetalheComponent,
        ComputadorEmprestimoComponent,
        ComputadorNaoEncontradoComponent
    ],
    providers: [ComputadoresService],
})
export class ComputadoresModule  {}
