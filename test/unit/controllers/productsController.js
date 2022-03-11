const { expect } = require('chai');
const sinon = require('sinon');

const controllerProducts = require('../../../controllers/productController');
const serviceProducts = require('../../../services/productService');

describe('Verifica controller de produtos com a rota get', () => {
  const res = {};
  const req = {};
  const next = (e) => console.log(e);

  before(() => {
    const mockedProducts = [
        { id: 1, name: 'Martelo de Thor', quantity: 10 },
        { id: 2, name: 'Traje de encolhimento', quantity: 20 },
        { id: 3, name: 'Escudo do Capitão América', quantity: 30 },
    ];

    sinon.stub(serviceProducts, 'getAll').resolves(mockedProducts);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
  });

  after(()=>{
    serviceProducts.getAll.restore();
  })

  it('status ok ao pegar tudo', async() => {
    await controllerProducts.getAll(req, res, next);
    console.log('retorno', res.functionStub)
    expect(res.status.calledWith(200)).to.be.equal(true);
  });
}); 