import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtentelistComponent } from './utentelist.component';

describe('UtentelistComponent', () => {
  let component: UtentelistComponent;
  let fixture: ComponentFixture<UtentelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtentelistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtentelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
