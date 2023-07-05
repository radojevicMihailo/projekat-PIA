import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencijeComponent } from './agencije.component';

describe('AgencijeComponent', () => {
  let component: AgencijeComponent;
  let fixture: ComponentFixture<AgencijeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgencijeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencijeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
