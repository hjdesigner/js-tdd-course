import { expect } from 'chai';
import { sum, sub, div, mult } from '../src/main';

describe('Calc', () => {

  // smoke tests
  describe('Smoke tests', () => {

    it('should exist the method `sum`', () => {
      expect(sum).to.exist;
      expect(sum).to.be.a('function');
    });
    it('should exist the method `sub`', () => {
      expect(sub).to.exist;
      expect(sub).to.be.a('function');
    });
    it('should exist the method `mult`', () => {
      expect(mult).to.exist;
      expect(mult).to.be.a('function');
    });
    it('should exist the method `div`', () => {
      expect(div).to.exist;
      expect(div).to.be.a('function');
    });

  });

  describe('Sum', () => {
    it('Should return 4 when `sum(2,2)`', () => {
      expect(sum(2,2)).to.be.equal(4);
    });
  });
  
  describe('Sub', () => {
    
    it('Should return 4 when `sub(6,2)`', () => {
      expect(sub(6, 2)).to.be.equal(4);
    });
    it('Should return -4 when `sub(6,10)`', () => {
      expect(sub(6, 10)).to.be.equal(-4);
    });

  });

  describe('Mult', () => {
    
    it('Should return 4 when `mult(2,2)`', () => {
      expect(mult(2, 2)).to.be.equal(4);
    });

  });
  describe('Div', () => {
    
    it('Should return 2 when `div(4,2)`', () => {
      expect(div(4, 2)).to.be.equal(2);
    });

    it('should return `não é possivel divisão por zero` when divide by 0', () => {
      expect(div(4, 0)).to.be.equal('não é possivel divisão por zero');
    });

  });
});