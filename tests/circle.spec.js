const circle = require('../src/circle');

describe('Verifica a função `circle`', () => {
  it('Verifica se ao receber um raio, e o parâmetro passado não seja um número. a função `circle` retorna undefined', () => {
    expect(circle('a')).toBe(undefined);
  });

  it('Verifica se ao receber um raio, a função `circle` retorna um objeto', () => {
    expect(typeof circle(2)).toBe('object');
  });

  it('Verifica se ao receber um raio, a função `circle` retorna um objeto com 3 propriedades', () => {
    expect(Object.keys(circle(2)).length).toBe(3);
  });

  it('Verifica se ao não receber nenhum parâmetro, a função `circle` retorna undefined', () => {
    expect(circle()).toBe(undefined);
  });

  it('Verifica se ao receber um raio, a função `circle` retorna uma key com value igual a circunferência correta para um círculo de raio 2', () => {
     expect(circle(2).circumference).toBeCloseTo(12.56);
  });

  it('Verifica se ao receber um raio, a função `circle` retorna uma key com value igual a área correta para um círculo de raio 3', () => {
        expect(circle(3).area).toBeCloseTo(28.259999999999998);
  });

  it('Verifica se ao receber um raio, a função `circle` retorna num objeto, os dados corretos de um círculo de raio 3.', () => {
       expect(circle(3)).toEqual({radius: 3, area: 28.259999999999998,circumference: 18.84});
  });
});
