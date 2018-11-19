import { NgModule } from '@angular/core';
import { RouterModule, CanActivate } from '@angular/router';
import { UsuariosComponent } from './usuarios.component';
import { UsuarioDetalheComponent } from './usuario-detalhe/usuario-detalhe.component';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { AuthGuard } from '../guards/auth.guard';


const usuariosRoutes = [
    { path: 'usuarios', component: UsuariosComponent, canActivate: [AuthGuard]},
    { path: 'usuario/novo', component: UsuarioFormComponent, canActivate: [AuthGuard]},
    { path: 'usuario/:id', component: UsuarioDetalheComponent, canActivate: [AuthGuard]},
    { path: 'usuario/:id/editar', component: UsuarioFormComponent, canActivate: [AuthGuard]}
];

@NgModule({
    imports: [RouterModule.forChild(usuariosRoutes)],
    exports: [RouterModule],
})
export class UsuariosRoutingModule { }
