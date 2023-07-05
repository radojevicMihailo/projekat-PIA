import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlijentAdminComponent } from './klijent-admin.component';

describe('KlijentAdminComponent', () => {
  let component: KlijentAdminComponent;
  let fixture: ComponentFixture<KlijentAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KlijentAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KlijentAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
