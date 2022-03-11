const { expect } = require('chai');
const sinon = require('sinon');
const {connection} = require('../../../models/connection');
const model = require('../../../models/saleModel')

const mockedSales = [
  {id: 1, date: '2022-01-11 06:19:32', saleId: 1, productId: 1, quantity:10},
  {id: 1, date: '2022-02-11 06:19:32', saleId: 2, productId: 2, quantity:20},
  {id: 1, date: '2022-03-11 06:19:32', saleId: 3, productId: 3, quantity:30},
]

describe('pega todos os produtos do banco', () => {

  it('retorna os produtos num array', async () => {
    const array = await model.getAll();
    expect(array).to.be.an('array');
  })

  it('cada elemento do array possui productId, date, quantity, saleId', async () => {
    const [array] = await model.getAll();
    expect(array).to.have.all.keys('productId', 'date', 'quantity', 'saleId');
  })
})

describe('pega por id', () => {

  it('o id tem produto correspondente', async () => {
    const produto = await model.getById(1);
    expect(produto).to.be.an('array');
  })

  it('cada elemento do array possui productid, date, quantity, saleId', async () => {
    const [array] = await model.getAll();
    expect(array).to.have.all.keys('productId', 'date', 'quantity', 'saleId');
  })
})
describe('nova venda ', () => {

  it('retorna um objeto não vazio', async () => {
    const response = await model.newSale(1,2,2);
    expect(response).to.not.be.empty;
  })


  it('cada elemento do array possui productid, date, quantity, saleId', async () => {
    const [array] = await model.getAll();
    expect(array).to.have.all.keys('productId', 'date', 'quantity', 'saleId');
  })
})