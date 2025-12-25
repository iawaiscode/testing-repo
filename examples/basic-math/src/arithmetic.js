export const add = (a, b) => {
  a = typeof a === 'string' ? Number(a) : a;
  b = typeof b === 'string' ? Number(b) : b;

  if (isNaN(a) || isNaN(b)) throw new Error('Both arguments must be numbers');

  return a + b;
};

export const subtract = (a, b) => {
  a = typeof a === 'string' ? Number(a) : a;
  b = typeof b === 'string' ? Number(b) : b;

  if (isNaN(a) || isNaN(b)) throw new Error('Both arguments must be numbers');

  return a - b;
};

export const multiply = (a, b) => {
  a = typeof a === 'string' ? Number(a) : a;
  b = typeof b === 'string' ? Number(b) : b;

  if (isNaN(a) || isNaN(b)) throw new Error('Both arguments must be numbers');

  return a * b;
};

export const divide = (a, b) => {
  a = typeof a === 'string' ? Number(a) : a;
  b = typeof b === 'string' ? Number(b) : b;

  if (isNaN(a) || isNaN(b)) throw new Error('Both arguments must be numbers');

  if (b === 0) throw new Error('Cannot divide by zero');

  return a / b;
};
