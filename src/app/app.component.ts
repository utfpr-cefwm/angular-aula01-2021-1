import { Component } from '@angular/core';

import { Cliente } from './models/cliente';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  public clienteSelecionado: Cliente = new Cliente(
    new Date(),
    'Maria das Couves',
    800.00,
  );

}
