const { expect } = require('chai');
const sinon = require('sinon');
const {connection} = require('../../../models/connection');
const model = require('../../../models/productModel')

const mockedProducts = [
  {id: 1, name: 'redbull', quantity: 10},
  {id: 2, name: 'cafe', quantity: 20},
  {id: 3, name: 'guarana', quantity: 30}
]

describe('pega todos os produtos do banco', () => {

  it('retorna os produtos num array', async () => {
    const array = await model.getAll();
    expect(array).to.be.an('array');
  })

  it('cada elemento do array possui id, name e quantity', async () => {
    const [array] = await model.getAll();
    expect(array).to.have.all.keys('id', 'name', 'quantity');
  })
})

describe('pega por id model', () => {

  it('o id tem produto correspondente', async () => {
    const produto = await model.getById(1);
    expect(produto).to.be.an('array');
  })

  it('cada elemento do array possui id, name e quantity', async () => {
    const [array] = await model.getAll();
    expect(array).to.have.all.keys('id', 'name', 'quantity');
  })

})  

describe('novo produto', () => {

  it('retorna um objeto', async () => {
    const response = await model.newProduct('x',2);
    expect(response).to.be.an('object');
  })

  it('retorna um objeto não vazio', async () => {
    const response = await model.newProduct('x',2);
    expect(response).to.not.be.empty;
  })

  })