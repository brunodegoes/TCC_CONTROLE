import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaveNaoEncontradaComponent } from './chave-nao-encontrada.component';

describe('ChaveNaoEncontradaComponent', () => {
  let component: ChaveNaoEncontradaComponent;
  let fixture: ComponentFixture<ChaveNaoEncontradaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChaveNaoEncontradaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaveNaoEncontradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
