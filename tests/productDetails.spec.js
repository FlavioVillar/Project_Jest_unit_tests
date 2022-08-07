const productDetails = require('../src/productDetails');

describe('Verifica a função `productDetails`', () => {
  it('Verifica se a função `productDetails` é uma função', () => {
    expect(typeof productDetails).toBe('function');
  });
  
  it('Verifica se a função `productDetails` retorna um array', () => {
    expect(Array.isArray(productDetails('Alcool gel', 'Máscara'))).toBe(true);
  });
  
  it('Verifica se a função `productDetails` retorna um array que contém dois itens dentro', () => {
    expect(productDetails('Alcool gel', 'Máscara').length).toBe(2);
  });
  
  it('Verifica se os dois itens dentro array retornado pela função `productDetails` são objetos', () => {
    expect(typeof productDetails('Alcool gel', 'Máscara')).toBe('object');
  });
  
  it('Verifica se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.', () => {
    expect(productDetails('Alcool gel', 'Máscara')[0]).not.toEqual(productDetails('Alcool gel', 'Máscara')[1]);
  });
  
  it('Verifica se o retorno dos dois productIds terminam com 123.', () => {
    expect(productDetails('Alcool gel', 'Máscara')[0].details.productId && productDetails('Alcool gel', 'Máscara')[1].details.productId).toMatch('123');
  });
});
