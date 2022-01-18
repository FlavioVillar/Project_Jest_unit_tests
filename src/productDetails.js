/*
  Dadas duas strings que representam nomes de produtos,
  retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

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

const productDetails = (firstProduct, secondProduct) => [
  {
    name: firstProduct,
    details: {
      productId: `${firstProduct}123`,
    },
  },
  {
    name: secondProduct,
    details: {
      productId: `${secondProduct}123`,
    },
  },
];

// console.table(productDetails('Alcool gel', 'Máscara').length);
// console.table(typeof productDetails('Alcool gel', 'Máscara'));
// console.log(productDetails('Alcool gel', 'Alcool gel')[0]);
// console.log(productDetails('Alcool gel', 'Alcool gel')[1]);
// // console.log(productDetails('Alcool gel', 'Máscara')[0].details.productId);
// console.log(productDetails('Alcool gel', 'Máscara')[1].details.productId);

module.exports = productDetails;
