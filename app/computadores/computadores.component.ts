import { Component, OnInit } from '@angular/core';

import { ComputadoresService } from './computadores.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-computadores',
  templateUrl: './computadores.component.html',
  styleUrls: ['./computadores.component.css']
})
export class ComputadoresComponent implements OnInit {

  computadores: any[];
  pagina: number;
  inscricao: Subscription;


  constructor(
    private computadoresService: ComputadoresService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.computadores = this.computadoresService.getComputadores();

    this.inscricao = this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.pagina = queryParams['pagina'];
      }
    );
  }

// tslint:disable-next-line:use-life-cycle-interface
ngOnDestroy() {
  this.inscricao.unsubscribe();
}

paginaAnterior() {
  this.router.navigate(['/computadores'],
    {queryParams: {'pagina': --this.pagina}});
}
proximaPagina() {
  this.router.navigate(['/computadores'],
    {queryParams: {'pagina': ++this.pagina}});
}

}
