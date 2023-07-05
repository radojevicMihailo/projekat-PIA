import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KomentariKlijentComponent } from './komentari-klijent.component';

describe('KomentariKlijentComponent', () => {
  let component: KomentariKlijentComponent;
  let fixture: ComponentFixture<KomentariKlijentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KomentariKlijentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KomentariKlijentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
