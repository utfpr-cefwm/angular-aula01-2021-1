import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaSaldoComponent } from './consulta-saldo.component';

describe('ConsultaSaldoComponent', () => {
  let component: ConsultaSaldoComponent;
  let fixture: ComponentFixture<ConsultaSaldoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaSaldoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaSaldoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deveria apontar classe "zero" para valores "zeráveis"', () => {
    expect(component.classNamePorValor(0)).toBe('zero');
    expect(component.classNamePorValor(0.001)).toBe('zero');
    expect(component.classNamePorValor(0.0099999)).toBe('zero');
    expect(component.classNamePorValor(-0.001)).toBe('zero');
    expect(component.classNamePorValor(-0.0099999)).toBe('zero');
  });

  it('deveria apontar classe "negativo" para valores negativos', () => {
    expect(component.classNamePorValor(-1)).toBe('negativo');
    expect(component.classNamePorValor(-0.01)).toBe('negativo');
  });

  it('deveria apontar classe "positivo" para valores positivos', () => {
    expect(component.classNamePorValor(1)).toBe('positivo');
    expect(component.classNamePorValor(0.01)).toBe('positivo');
  });

});
