import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredicsionComponent } from './predicsion.component';

describe('PredicsionComponent', () => {
  let component: PredicsionComponent;
  let fixture: ComponentFixture<PredicsionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredicsionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PredicsionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
