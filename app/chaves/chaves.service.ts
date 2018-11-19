import { Injectable } from '@angular/core';

@Injectable()
export class ChavesService {

  getChaves() {
    return [
      { id: 1, nome: 'Chave 01', situacao: 'Disponível' },
      { id: 2, nome: 'Chave 02', situacao: 'Disponível' },
      { id: 3, nome: 'Chave 03', situacao: 'Disponível' },
      { id: 4, nome: 'Chave 04', situacao: 'Disponível' },
      { id: 5, nome: 'Chave 05', situacao: 'Disponível' },
      { id: 6, nome: 'Chave 06', situacao: 'Disponível' },
      { id: 7, nome: 'Chave 07', situacao: 'Disponível' },
      { id: 8, nome: 'Chave 08', situacao: 'Disponível' },
      { id: 9, nome: 'Chave 09', situacao: 'Disponível' },
      { id: 10, nome: 'Chave 10', situacao: 'Disponível' }
    ];
  }

  getChave(id: number) {
    // tslint:disable-next-line:prefer-const
    let chaves = this.getChaves();
    for (let i = 0; i < chaves.length; i++) {
      // tslint:disable-next-line:prefer-const
      let chave = chaves[i];
      // tslint:disable-next-line:triple-equals
      if (chave.id == id) {
        return chave;
      }
    }
    return null;
  }

  constructor() { }

}
