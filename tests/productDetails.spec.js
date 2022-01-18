const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  // Teste se productDetails é uma função.
  it('Verifica se a função `productDetails` é uma função', () => {
    expect(typeof productDetails).toBe('function');
  });
  // Teste se o retorno da função é um array. https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
  it('Verifica se a função `productDetails` retorna um array', () => {
    expect(Array.isArray(productDetails('Alcool gel', 'Máscara'))).toBe(true);
  });
  // Teste se o array retornado pela função contém dois itens dentro.
  it('Verifica se a função `productDetails` retorna um array que contém dois itens dentro', () => {
    expect(productDetails('Alcool gel', 'Máscara').length).toBe(2);
  });
  // Teste se os dois itens dentro do array retornado pela função são objetos.
  it('Verifica se os dois itens dentro array retornado pela função `productDetails` são objetos', () => {
    expect(typeof productDetails('Alcool gel', 'Máscara')).toBe('object');
  });
  // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
  it('Verifica se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.', () => {
    expect(productDetails('Alcool gel', 'Máscara')[0]).not.toEqual(productDetails('Alcool gel', 'Máscara')[1]);
  });
  // Teste se os dois productIds terminam com 123.
  it('Verifica se o retorno dos dois productIds terminam com 123.', () => {
    expect(productDetails('Alcool gel', 'Máscara')[0].details.productId && productDetails('Alcool gel', 'Máscara')[1].details.productId).toMatch('123');
  });
});
