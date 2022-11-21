import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarpublicasComponent } from './listarpublicas.component';

describe('ListarpublicasComponent', () => {
  let component: ListarpublicasComponent;
  let fixture: ComponentFixture<ListarpublicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarpublicasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarpublicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
