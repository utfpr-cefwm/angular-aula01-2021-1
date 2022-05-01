import { Component, OnInit } from '@angular/core';

import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-consulta-saldo',
  templateUrl: './consulta-saldo.component.html',
  styleUrls: ['./consulta-saldo.component.css'],
})
export class ConsultaSaldoComponent implements OnInit {

  public cliente: Cliente = new Cliente(
    new Date(),
    'Maria das Couves',
    800.00,
  );

  constructor(
  ) {
  }

  ngOnInit(): void {
  }

  /**
   * Calcula a classe CSS que indica se o saldo é positivo ou
   * negativo.
   *
   * @param saldo Saldo para o qual a classe CSS será computada.
   */
  public classNamePorValor(saldo: number): (
    'negativo' | 'positivo' | 'zero'
  ) {
    if (Math.abs(saldo) < 0.01) {
      return 'zero';
    } else if (saldo > 0) {
      return 'positivo';
    } else {
      return 'negativo';
    }
  }

}
