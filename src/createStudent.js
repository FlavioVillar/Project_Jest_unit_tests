/*
  Dada uma função chamada createStudent que recebe como parâmetro um nome,
  retorne um objeto que contenha duas chaves:
  (1) name, contendo o nome passado como parâmetro;
  (2) feedback, contendo uma função que retorna a frase 'Eita pessoa boa!' ao ser chamada.
  
  Faça a função da chave feedback com arrow functions!
  
  Parâmetros:
  - Uma string;
  Comportamento:
  const estudante = createStudent('Leandrão, o Lobo Solitário')
  
  estudante.name // Retorna: 'Leandrão, o Lobo Solitário'
  estudante.feedback() // Retorna: 'Eita pessoa boa!'
  */

const createStudent = (studentName) => ({
  // cria formato 'key: value' do objeto.
  // (1) name, contendo o nome passado como parâmetro.
  name: studentName,
  // cria função no formato objeto. https://www.dofactory.com/javascript/function-objects
  // (2) feedback, contendo uma função que retorna a frase 'Eita pessoa boa!' ao ser chamada.
  feedback: () => 'Eita pessoa boa!',
});

module.exports = createStudent;
