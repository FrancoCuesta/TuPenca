import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPencaComponent } from './menu-penca.component';

describe('MenuPencaComponent', () => {
  let component: MenuPencaComponent;
  let fixture: ComponentFixture<MenuPencaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuPencaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuPencaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
