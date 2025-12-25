import { describe, expect, it } from 'vitest';
import { add, divide, multiply, subtract } from './arithmetic';

describe('add', () => {
  it('should add two positive numbers', () => {
    expect(add(1, 2)).toBe(3);
  });

  it('should parse strings into numbers', () => {
    expect(add('1', '2')).toBe(3);
  });

  it('should throw error if either argument is not a number', () => {
    expect(() => add('a', '2')).toThrow();
  });

  it('should add two negative numbers', () => {
    expect(add(-1, -2)).toBe(-3);
  });
});

describe('subtract', () => {
  it('should subtract two positive numbers', () => {
    expect(subtract(1, 2)).toBe(-1);
  });

  it('should parse strings into numbers', () => {
    expect(subtract('1', '2')).toBe(-1);
  });

  it('should throw error if either argument is not a number', () => {
    expect(() => subtract('a', 2)).toThrow();
  });
});

describe('multiply', () => {
  it('should multiply two positive numbers', () => {
    expect(multiply(1, 2)).toBe(2);
  });

  it('should parse strings into numbers', () => {
    expect(multiply('1', '2')).toBe(2);
  });

  it('should throw error if either argument is not a number', () => {
    expect(() => multiply('a', 2)).toThrow();
  });
});

describe('divide', () => {
  it('should divide two positive numbers', () => {
    expect(divide(1, 2)).toBe(0.5);
  });

  it('should parse strings into numbers', () => {
    expect(divide('1', '2')).toBe(0.5);
  });

  it('should throw error if either argument is not a number', () => {
    expect(() => divide('a', '2')).toThrow();
  });

  it('should throw error if second argument is zero', () => {
    expect(() => divide(1, 0)).toThrow();
  });
});
