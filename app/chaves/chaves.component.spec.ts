import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChavesComponent } from './chaves.component';

describe('ChavesComponent', () => {
  let component: ChavesComponent;
  let fixture: ComponentFixture<ChavesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChavesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
