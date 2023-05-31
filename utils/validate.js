/**
 * getValues()
 * @param {elemArr} DOM.elem[]
 * @return {valueArr} number | null []
 */
const getValues = (elemArr) => {
  const valueArr = [];
  elemArr.forEach((elem) => {
    valueArr.push(elem.getAttribute('data-value'));
  });

  return valueArr;
};

/**
 * validateInput()
 * @param {value} string
 * @param {row} number
 * @param {column} number
 * @return {boolean}
 */
export const validateInput = ({ value, row, column }) => {
  if (value === '' || value > 4 || value < 0 || isNaN(value)) return false;

  const rowTiles = document.querySelectorAll(`div[data-row="${row}"]`);
  const colTiles = document.querySelectorAll(`div[data-col="${column}"]`);

  const rowValues = getValues(rowTiles);
  const colValues = getValues(colTiles);

  const valueSet = new Set(rowValues.concat(colValues));

  return !valueSet.has(value);
};
