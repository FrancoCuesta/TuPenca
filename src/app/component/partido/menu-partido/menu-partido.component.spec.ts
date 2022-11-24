import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPartidoComponent } from './menu-partido.component';

describe('MenuPartidoComponent', () => {
  let component: MenuPartidoComponent;
  let fixture: ComponentFixture<MenuPartidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuPartidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuPartidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
