import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputadorEmprestimoComponent } from './computador-emprestimo.component';

describe('ComputadorEmprestimoComponent', () => {
  let component: ComputadorEmprestimoComponent;
  let fixture: ComponentFixture<ComputadorEmprestimoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputadorEmprestimoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputadorEmprestimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
