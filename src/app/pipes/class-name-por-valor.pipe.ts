import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'classNamePorValor',
})
export class ClassNamePorValorPipe implements PipeTransform {

  /**
   * Calcula a classe CSS que indica se o saldo é positivo ou
   * negativo.
   *
   * @param saldo Saldo para o qual a classe CSS será computada.
   */
  public transform(saldo: number): (
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
