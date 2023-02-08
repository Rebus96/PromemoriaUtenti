import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaUtentiComponent } from './crea-utenti.component';

describe('CreaUtentiComponent', () => {
  let component: CreaUtentiComponent;
  let fixture: ComponentFixture<CreaUtentiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreaUtentiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreaUtentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
