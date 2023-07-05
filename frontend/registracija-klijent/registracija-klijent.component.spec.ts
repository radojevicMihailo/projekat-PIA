import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistracijaKlijentComponent } from './registracija-klijent.component';

describe('RegistracijaKlijentComponent', () => {
  let component: RegistracijaKlijentComponent;
  let fixture: ComponentFixture<RegistracijaKlijentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistracijaKlijentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistracijaKlijentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
