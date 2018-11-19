import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { UsuariosComponent } from './usuarios.component';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuarioDetalheComponent } from './usuario-detalhe/usuario-detalhe.component';
import { UsuariosRoutingModule } from './usuarios.routing.module';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        RouterModule,
        UsuariosRoutingModule,
    ],
    exports: [],
    declarations: [
      UsuariosComponent,
      UsuarioFormComponent,
      UsuarioDetalheComponent
    ],

    providers: [],
})

export class UsuariosModule { }
