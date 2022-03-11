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
  before(()=>{
    const execute = [mockedSales];

    sinon.stub(connection, 'execute').resolves(execute);
  })
  after(async () => {
    connection.execute.restore();
  });

  it('retorna os produtos num array', async () => {
    const array = await model.getAll();
    expect(array).to.be.an('array');
  })

  it('cada elemento do array possui id, name e quantity', async () => {
    const [array] = await model.getAll();
    expect(array).to.have.all.keys('id', 'name', 'quantity');
  })
})

describe('pega por id', () => {

  it('o id tem produto correspondente', async () => {
    const produto = await model.getById(1);
    expect(result).to.be.an('array');
  })

  it('cada elemento do array possui id, name e quantity', async () => {
    const [array] = await model.getAll();
    expect(array).to.have.all.keys('id', 'name', 'quantity');
  })
})