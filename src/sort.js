/** Function to sort objects by key or value in ascending or descending order
 *
 * @param {Object} obj - object to sort
 * @param {string} [sortBy=key] - "key"|"value"
 * @param {string} [order=ascending] - "ascending"|"descending"
 */
export const sort = function (obj, sortBy = 'key', order = 'ascending') {
  let index = 1;

  const sortArray = Object.entries(obj);

  if (sortBy === 'key') {
    index = 0;
  } else if (sortBy === 'value') {
    index = 1;
  }

  if (order === 'ascending') {
    sortArray.sort(function (a, b) {
      return a[index] < b[index] ? -1 : a[index] > b[index] ? 1 : 0;
    });
  } else if (order === 'descending') {
    sortArray.sort(function (a, b) {
      return a[index] > b[index] ? -1 : a[index] < b[index] ? 1 : 0;
    });
  }

  return sortArray;
};
