import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaveDetalheComponent } from './chave-detalhe.component';

describe('ChaveDetalheComponent', () => {
  let component: ChaveDetalheComponent;
  let fixture: ComponentFixture<ChaveDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChaveDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaveDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
