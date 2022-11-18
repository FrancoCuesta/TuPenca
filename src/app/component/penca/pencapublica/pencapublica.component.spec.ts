import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PencapublicaComponent } from './pencapublica.component';

describe('PencapublicaComponent', () => {
  let component: PencapublicaComponent;
  let fixture: ComponentFixture<PencapublicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PencapublicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PencapublicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
