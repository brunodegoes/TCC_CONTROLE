import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputadorDetalheComponent } from './computador-detalhe.component';

describe('ComputadorDetalheComponent', () => {
  let component: ComputadorDetalheComponent;
  let fixture: ComponentFixture<ComputadorDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputadorDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputadorDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
