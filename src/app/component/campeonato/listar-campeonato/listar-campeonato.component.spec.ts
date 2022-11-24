import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCampeonatoComponent } from './listar-campeonato.component';

describe('ListarCampeonatoComponent', () => {
  let component: ListarCampeonatoComponent;
  let fixture: ComponentFixture<ListarCampeonatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarCampeonatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarCampeonatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
