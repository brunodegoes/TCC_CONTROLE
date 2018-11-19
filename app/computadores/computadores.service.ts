import { Injectable } from '@angular/core';

@Injectable()
export class ComputadoresService {

  getComputadores() {
    return [
      {id: 1, nome: 'Computador 01', situacao: 'Disponível'},
      {id: 2, nome: 'Computador 02', situacao: 'Disponível'},
      {id: 3, nome: 'Computador 03', situacao: 'Disponível'},
      {id: 4, nome: 'Computador 04', situacao: 'Disponível' },
      {id: 5, nome: 'Computador 05', situacao: 'Disponível' },
      {id: 6, nome: 'Computador 06', situacao: 'Disponível' },
      {id: 7, nome: 'Computador 07', situacao: 'Disponível' },
      {id: 8, nome: 'Computador 08', situacao: 'Disponível' },
      {id: 9, nome: 'Computador 09', situacao: 'Disponível' },
      {id: 10, nome: 'Computador 10', situacao: 'Disponível' }
    ];
  }

  getComputador(id: number) {
    // tslint:disable-next-line:prefer-const
    let computadores = this.getComputadores();
    for (let i = 0; i < computadores.length; i++) {
      // tslint:disable-next-line:prefer-const
      let computador = computadores[i];
      // tslint:disable-next-line:triple-equals
      if (computador.id == id) {
        return computador;
      }
    }
    return null;
  }

  constructor() { }

}
