export var numericDocs = {
  name: 'numeric',
  category: 'Utils',
  syntax: ['numeric(x)'],
  description: 'Convert a numeric input to a specific numeric type: number, BigNumber, bigint, or Fraction.',
  examples: ['numeric("4")', 'numeric("4", "number")', 'numeric("4", "bigint")', 'numeric("4", "BigNumber")', 'numeric("4", "Fraction")', 'numeric(4, "Fraction")', 'numeric(fraction(2, 5), "number")'],
  seealso: ['number', 'bigint', 'fraction', 'bignumber', 'string', 'format']
};