import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencijaAdminComponent } from './agencija-admin.component';

describe('AgencijaAdminComponent', () => {
  let component: AgencijaAdminComponent;
  let fixture: ComponentFixture<AgencijaAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgencijaAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencijaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
