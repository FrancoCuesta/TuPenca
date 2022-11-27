import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerCampeonatoComponent } from './ver-campeonato.component';

describe('VerCampeonatoComponent', () => {
  let component: VerCampeonatoComponent;
  let fixture: ComponentFixture<VerCampeonatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerCampeonatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerCampeonatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
