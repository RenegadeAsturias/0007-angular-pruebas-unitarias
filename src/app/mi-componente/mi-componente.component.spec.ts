import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiComponenteComponent } from './mi-componente.component';

describe('Probando Mi Componente', () => {
  let component: MiComponenteComponent;
  let fixture: ComponentFixture<MiComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiComponenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Verificar si puede activar un usuario:
  it('Debe activar el usuario', () => {
    // Cualquier cosa que se encuentre dentro de nuestro componente
    // se encuentra dentro de la prueba unitaria
    // como una instancia de component. 
    // Entonces, para activar el usuario:
    component.activarUsuario();
    // Y ahora comprobamos si usuario está activo:
    expect(component.usuario).toBeTruthy();
  });
  
  it('debe mostrar el mensaje si el usuario es válido', ()=>{
    component.activarUsuario();
    expect(component.verificarUsuario()).toContain("usuario activo");
  });

});
