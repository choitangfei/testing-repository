const { expect } = require('chai');
const max = require('../lib/max')

describe('最大值測試', () => {
  it('正確傳回數組的最大值', () => {
    let maximum = max([1, 10, 100, 1000]);
    expect(maximum).to.equal(1000);
  });
  it('傳回undefined如果空數組', () => {
    const maximum = max([]);
    expect(maximum).to.be.undefined;
  })
});
