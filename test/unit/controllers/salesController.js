const { expect } = require('chai');
const sinon = require('sinon');
const {connection} = require('../../../models/connection');
const model = require('../../../controllers/saleController')

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