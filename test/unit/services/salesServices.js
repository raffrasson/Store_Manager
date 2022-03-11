const { expect } = require('chai');
const sinon = require('sinon');

const model = require('../../../models/saleModel')
const service = require('../../../services/saleService')

const mockedSales = [
  {id: 1, date: '2022-01-11 06:19:32', saleId: 1, productId: 1, quantity:10},
  {id: 1, date: '2022-02-11 06:19:32', saleId: 2, productId: 2, quantity:20},
  {id: 1, date: '2022-03-11 06:19:32', saleId: 3, productId: 3, quantity:30},
]


describe('pega todos os produtos do banco', () => {
  before(() => {
    sinon.stub(model, 'getById').resolves(mockedSales)
    sinon.stub(model, 'getAll').resolves(mockedSales)
  })

  after(()=> {
    model.getById.restore()
    model.getAll.restore()
  })

  it('retorna os produtos num array', async () => {
    const array = await service.getAll();
    expect(array).to.be.an('array');
    expect(array).to.be.deep.equal(mockedSales);
  })

  it('cada elemento do array possui id, name e quantity', async () => {
    const array = await service.getAll();
    expect(array).to.be.an('array');
  })
})

describe('pega por id service', () => {
  before(() => {
    sinon.stub(model, 'getById').resolves(mockedSales)
    sinon.stub(model, 'getAll').resolves(mockedSales)
  })

  after(()=> {
    model.getById.restore()
    model.getAll.restore()
  })
  it('o id tem produto correspondente', async () => {
    const produto = await service.getById(1);
    expect(produto).to.be.an('array');
  })

  it('cada elemento do array possui id, name e quantity', async () => {
    const [array] = await service.getAll();
    expect(array).to.have.all.keys('id', 'productId', 'date', 'quantity', 'saleId');
  })
})