import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaveEmprestimoComponent } from './chave-emprestimo.component';

describe('ChaveEmprestimoComponent', () => {
  let component: ChaveEmprestimoComponent;
  let fixture: ComponentFixture<ChaveEmprestimoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChaveEmprestimoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaveEmprestimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
