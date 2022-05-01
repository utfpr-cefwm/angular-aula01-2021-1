import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'web';

  /**
   * Retorna `'Bom dia'` se antes do meio-dia.
   *
   * Caso contrário, retorna `'Boa tarde'`.
   */
  public geraCumprimento(): string {
    const dataEHoraAtual = new Date();
    if (dataEHoraAtual.getHours() < 12) {
      return 'Bom dia';
    } else {
      return 'Boa tarde';
    }
  }

}
