export var maxDocs = {
  name: 'max',
  category: 'Statistics',
  syntax: ['max(a, b, c, ...)', 'max(A)', 'max(A, dimension)'],
  description: 'Compute the maximum value of a list of values. If any NaN values are found, the function yields the last NaN in the input.',
  examples: ['max(2, 3, 4, 1)', 'max([2, 3, 4, 1])', 'max([2, 5; 4, 3])', 'max([2, 5; 4, 3], 1)', 'max([2, 5; 4, 3], 2)', 'max(2.7, 7.1, -4.5, 2.0, 4.1)', 'min(2.7, 7.1, -4.5, 2.0, 4.1)'],
  seealso: ['mean', 'median', 'min', 'prod', 'std', 'sum', 'variance']
};