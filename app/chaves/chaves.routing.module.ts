import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChavesComponent } from './chaves.component';
import { ChaveNaoEncontradaComponent } from './chave-nao-encontrada/chave-nao-encontrada.component';
import { ChaveDetalheComponent } from './chave-detalhe/chave-detalhe.component';
import { AuthGuard } from './../guards/auth.guard';
import { ChaveEmprestimoComponent } from './chave-emprestimo/chave-emprestimo.component';



const ChavesRoutes: Routes = [
    { path: 'chaves', component: ChavesComponent, canActivate: [AuthGuard]},
    { path: 'chaveEmp', component: ChaveEmprestimoComponent, canActivate: [AuthGuard]},
    { path: 'chave/:id', component: ChaveDetalheComponent, canActivate: [AuthGuard]},
    { path: 'naoEncontrada', component: ChaveNaoEncontradaComponent, canActivate: [AuthGuard]}
];


@NgModule({
    imports: [RouterModule.forChild(ChavesRoutes)],
    exports: [RouterModule]
})
export class ChavesRoutingModule {}
