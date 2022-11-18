import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegusuarioComponent } from './regusuario.component';

describe('RegusuarioComponent', () => {
  let component: RegusuarioComponent;
  let fixture: ComponentFixture<RegusuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegusuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
