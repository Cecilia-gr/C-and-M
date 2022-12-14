import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulairConnexionComponent } from './formulair-connexion.component';

describe('FormulairConnexionComponent', () => {
  let component: FormulairConnexionComponent;
  let fixture: ComponentFixture<FormulairConnexionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulairConnexionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulairConnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
