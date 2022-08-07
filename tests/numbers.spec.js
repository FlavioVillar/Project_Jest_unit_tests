const numbers = require('../src/numbers');

describe('Verifica a função `numbers`', () => {
  it('Verifica se a função `numbers`retorna `true` quando o array contém apenas números', () => {
    expect(numbers([1, 2, 3, 4, 5])).toBe(true);
  });

  it('Verifica se a função `numbers`retorna `false` quando o array contém valores não numéricos', () => {
    expect(numbers([1, 2, '3', 4, 5])).toBe(false);
  });

  it('Verifica se a função `numbers`retorna `false` quando o array contém string', () => {
    expect(numbers([1, 'a', 3])).toBe(false);
  });

  it('Verifica se a função `numbers`retorna `false` quando o array recebe valor vazio', () => {
    expect(numbers([' '])).toBe(false);
  });
});
