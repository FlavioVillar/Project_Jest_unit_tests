const getCharacter = require('../src/getCharacter');

describe('Verifica a função `getCharacter`', () => {
  it('Verifica se a função `getCharacter` retorna o objeto do personagem corretamente.', () => {});
  
  it('Verifica se a função `getCharacter` retorna undefined , quando não recebe nenhum parâmetro', () => {
    expect(getCharacter()).toBeUndefined();
  });
  
  it('Verifica se a função `getCharacter` retorna o objeto correto para o parâmetro "araya"', () => {
    expect(getCharacter('Arya')).toEqual({name: 'Arya Stark', class: 'Rogue', phrases: ['Not today', 'A girl has no name.']});
  });
  
  it('Verifica se a função `getCharacter` retorna o objeto correto para o parâmetro "Brienne"', () => {
    expect(getCharacter('Brienne')).toEqual({name: 'Brienne Tarth', class: 'Knight', phrases: ['Im No Lady, Your Grace.', 'I, Brienne Of Tarth, Sentence You To Die.',]});
  });
  
  it('Verifica se a função `getCharacter` retorna o objeto correto para o parâmetro "Melissandre"', () => {
    expect(getCharacter('Melissandre')).toEqual({name: 'Melissandre', class: 'Necromancer', phrases: ['Death By Fire Is The Purest Death.', 'For The Night Is Dark And Full Of Terrors.',]});
  });
  
  it('Verifica se os parâmetros da função `getCharacter` não são Case Sensitive', () => {
    expect(getCharacter('arya')).not.toBeUndefined();
    expect(getCharacter('brienne')).not.toBeUndefined();
    expect(getCharacter('melissandre')).not.toBeUndefined();
  });
  
  it('Verifica se ao passar um nome que não está na tabela, a função `getCharacter` retorna undefined', () => {
    expect(getCharacter('Flavio')).toBeUndefined();
  });
});
