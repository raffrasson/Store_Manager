const { expect } = require('chai');
const sinon = require('sinon');

const saleController = require('../../../controllers/saleController');
const saleService = require('../../../services/saleService');

describe('Verifica controller de produtos com a rota get', () => {
  const res = {};
  const req = {};
  const next = (e) => console.log(e);

  before(() => {
    const mockedSales = [
      {
        sale_id: 1,
        date: '2021-09-09T04:54:29.000Z',
        product_id: 1,
        quantity: 2,
      },
      {
        sale_id: 1,
        date: '2021-09-09T04:54:54.000Z',
        product_id: 2,
        quantity: 2,
      },
    ];
    
    sinon.stub(saleService, 'getAll').resolves(mockedSales);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
  });

  after(()=>{
    saleService.getAll.restore();
  })

  it('status ok ao pegar tudo', async() => {
    await saleController.getAll(req, res, next);
    console.log('retorno', res.functionStub)
    expect(res.status.calledWith(200)).to.be.equal(true);
  });
}); 