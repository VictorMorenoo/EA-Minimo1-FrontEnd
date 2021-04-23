import { ComponentFixture, TestBed } from '@angular/core/testing';

import { listaComponent } from './lista.component';

describe('listaComponent', () => {
  let component: listaComponent;
  let fixture: ComponentFixture<listaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ listaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(listaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
