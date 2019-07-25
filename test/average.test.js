const { expect } = require('chai');
const average = require('../lib/average')

describe('平均值測試', () => {
  it('正確傳回數組的平均值', () => {
    let avg = average([1, 2, 3, 4]);
    expect(avg).to.equal(2.5);
  });
  it('如果空數組則傳回NaN', () => {
    let avg = average([]);
    expect(isNaN(avg)).to.be.true;
  })
});