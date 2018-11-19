import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { ChavesService } from '../chaves.service';

@Component({
  selector: 'app-chave-detalhe',
  templateUrl: './chave-detalhe.component.html',
  styleUrls: ['./chave-detalhe.component.css']
})
export class ChaveDetalheComponent implements OnInit {

  id: number;
  inscricao: Subscription;
  chave: any;

  constructor(
    private route: ActivatedRoute,
    private chavesService: ChavesService,
    private router: Router,

  ) {
   // this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];

        this.chave = this.chavesService.getChave(this.id);

        if (this.chave == null) {
          this.router.navigate(['/naoEncontrada']);
        }
      }
    );
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
