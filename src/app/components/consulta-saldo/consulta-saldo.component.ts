import {
  Component,
  Input,
  OnInit,
} from '@angular/core';

import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-consulta-saldo',
  templateUrl: './consulta-saldo.component.html',
  styleUrls: ['./consulta-saldo.component.css'],
})
export class ConsultaSaldoComponent implements OnInit {

  @Input()
  public cliente!: Cliente;

  constructor(
  ) {
  }

  ngOnInit(): void {
  }

}
