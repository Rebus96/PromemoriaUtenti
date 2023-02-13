import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettagliutenteComponent } from './dettagliutente.component';

describe('DettagliutenteComponent', () => {
  let component: DettagliutenteComponent;
  let fixture: ComponentFixture<DettagliutenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DettagliutenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DettagliutenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
