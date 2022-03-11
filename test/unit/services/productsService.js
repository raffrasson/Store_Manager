const { expect } = require('chai');
const sinon = require('sinon');

const model = require('../../../models/productModel')
const service = require('../../../services/productService')

const mockedProducts = [
  { id: 1, name: 'Martelo de Thor', quantity: 10 },
  { id: 2, name: 'Traje de encolhimento', quantity: 20 },
  { id: 3, name: 'Escudo do Capitão América', quantity: 30 },
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

  it('array.length > 0', async () => {
    const products = await model.getAll();

    expect(products).to.not.be.empty;
  });


  it('cada elemento do array possui id, name e quantity', async () => {
    const [array] = await service.getAll();
    expect(array).to.have.all.keys('id', 'name', 'quantity');
  })
})

describe('pega por id', () => {

  before(() => {
    sinon.stub(model, 'getById').resolves(mockedProducts)
    sinon.stub(model, 'getAll').resolves(mockedProducts)
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
    const array = await service.getAll();
    expect(array).to.be.an('array');
  })

  it('objeto não é vazio', async () => {
    const [product] = await model.getById(1);

    expect(product).to.not.be.empty;
  });
})