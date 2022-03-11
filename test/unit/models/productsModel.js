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
  before(()=>{
    const execute = [mockedProducts];

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