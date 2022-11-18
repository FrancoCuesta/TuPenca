import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PencaprivadaComponent } from './pencaprivada.component';

describe('PencaprivadaComponent', () => {
  let component: PencaprivadaComponent;
  let fixture: ComponentFixture<PencaprivadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PencaprivadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PencaprivadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
