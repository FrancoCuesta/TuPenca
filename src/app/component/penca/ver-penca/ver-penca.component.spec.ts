import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPencaComponent } from './ver-penca.component';

describe('VerPencaComponent', () => {
  let component: VerPencaComponent;
  let fixture: ComponentFixture<VerPencaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerPencaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerPencaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
