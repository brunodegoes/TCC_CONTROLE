import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { ComputadoresService } from '../computadores.service';

@Component({
  selector: 'app-computador-detalhe',
  templateUrl: './computador-detalhe.component.html',
  styleUrls: ['./computador-detalhe.component.css']
})
export class ComputadorDetalheComponent implements OnInit {

  id: number;
  inscricao: Subscription;
  computador: any;

  constructor(
    private route: ActivatedRoute,
    private computadoresService: ComputadoresService,
    private router: Router,

  ) {
   // this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];

        this.computador = this.computadoresService.getComputador(this.id);

        if (this.computador == null) {
          this.router.navigate(['/naoEncontrado']);
        }
      }
    );
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
