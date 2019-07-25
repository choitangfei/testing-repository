const { expect } = require('chai');
const min = require('../lib/min')

describe('最小值測試', () => {
  it('正確傳回數組的最小值', () => {
    let minimum = min([1, 10, 100, 1000]);
    expect(minimum).to.equal(1);
  });
  it('傳回undefined如果空數組', () => {
    const minimum = min([]);
    expect(minimum).to.be.undefined;
  })
});
