const { expect } = require('chai');
const sinon = require('sinon');

const model = require('../../../models/productModel')
const service = require('../../../services/productService')

const mockedProducts = [
  {id: 1, name: 'redbull', quantity: 10},
  {id: 2, name: 'cafe', quantity: 20},
  {id: 3, name: 'guarana', quantity: 30}
]

describe('pega todos os produtos do banco', () => {
  before(() => {
    sinon.stub(model, 'getById').resolves(mockedProducts)
    sinon.stub(model, 'getAll').resolves(mockedProducts)
  })

  after(()=> {
    model.getById.restore()
    model.getAll.restore()
  })

  it('retorna os produtos num array', async () => {
    const array = await service.getAll();
    expect(array).to.be.an('array');
    expect(array).to.be.deep.equal(mockedProducts);
  })

  it('cada elemento do array possui id, name e quantity', async () => {
    const [array] = await service.getAll();
    expect(array).to.have.all.keys('id', 'name', 'quantity');
  })
})

describe('pega por id', () => {

  it('o id tem produto correspondente', async () => {
    const produto = await service.getById(1);
    expect(result).to.be.an('array');
    expect(produto).to.be.deep.equal(mockedProducts[1]);
  })

  it('cada elemento do array possui id, name e quantity', async () => {
    const array = await service.getAll();
    expect(array[1]).to.have.all.keys('id', 'name', 'quantity');
  })
})