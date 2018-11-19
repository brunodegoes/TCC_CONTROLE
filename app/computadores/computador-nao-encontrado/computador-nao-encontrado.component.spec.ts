import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputadorNaoEncontradoComponent } from './computador-nao-encontrado.component';

describe('ComputadorNaoEncontradoComponent', () => {
  let component: ComputadorNaoEncontradoComponent;
  let fixture: ComponentFixture<ComputadorNaoEncontradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputadorNaoEncontradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputadorNaoEncontradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
