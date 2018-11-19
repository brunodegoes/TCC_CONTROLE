import { Component, OnInit } from '@angular/core';

import { ChavesService } from './chaves.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-chaves',
  templateUrl: './chaves.component.html',
  styleUrls: ['./chaves.component.css']
})
export class ChavesComponent implements OnInit {

  chaves: any[];
  pagina: number;
  inscricao: Subscription;


  constructor(
    private chavesService: ChavesService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.chaves = this.chavesService.getChaves();

    this.inscricao = this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.pagina = queryParams['pagina'];
      });

  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  paginaAnterior() {
    this.router.navigate(['/chaves'],
      {queryParams: {'pagina': --this.pagina}});
  }
  proximaPagina() {
    this.router.navigate(['/chaves'],
      {queryParams: {'pagina': ++this.pagina}});
  }
}


