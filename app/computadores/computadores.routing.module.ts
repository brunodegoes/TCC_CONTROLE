import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComputadoresComponent } from './computadores.component';
import { ComputadorDetalheComponent } from './computador-detalhe/computador-detalhe.component';
import { ComputadorNaoEncontradoComponent } from './computador-nao-encontrado/computador-nao-encontrado.component';
import { AuthGuard } from '../guards/auth.guard';

const ComputadoresRoutes: Routes = [
    { path: 'computadores', component: ComputadoresComponent, canActivate: [AuthGuard]},
    { path: 'computador/:id', component: ComputadorDetalheComponent, canActivate: [AuthGuard]},
    { path: 'naoEncontrado', component: ComputadorNaoEncontradoComponent, canActivate: [AuthGuard]}

];

@NgModule({
    imports: [RouterModule.forChild(ComputadoresRoutes)],
    exports: [RouterModule]

})
export class ComputadoresRoutingModule {}
