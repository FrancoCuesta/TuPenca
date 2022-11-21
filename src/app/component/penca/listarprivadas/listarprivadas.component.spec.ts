import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarprivadasComponent } from './listarprivadas.component';

describe('ListarprivadasComponent', () => {
  let component: ListarprivadasComponent;
  let fixture: ComponentFixture<ListarprivadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarprivadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarprivadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
