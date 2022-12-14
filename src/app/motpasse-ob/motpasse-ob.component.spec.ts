import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotpasseObComponent } from './motpasse-ob.component';

describe('MotpasseObComponent', () => {
  let component: MotpasseObComponent;
  let fixture: ComponentFixture<MotpasseObComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotpasseObComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotpasseObComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
