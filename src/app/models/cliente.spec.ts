import { Cliente } from './cliente';

describe('Cliente', () => {

  let cliente: Cliente;
  beforeEach(() => {
    cliente = new Cliente(
      new Date(),
      'João Fonseca',
      200.00,
    );
  });

  it('should create an instance', () => {
    expect(cliente).toBeTruthy();
  });

});
