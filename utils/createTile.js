export const createTile = ({ value, rowIndex, colIndex }) => {
  const tile = document.createElement('div');

  tile.classList.add('tile');
  tile.setAttribute('data-value', value);
  tile.setAttribute('data-row', rowIndex);
  tile.setAttribute('data-col', colIndex);
  if (!value) {
    const input = document.createElement('input');
    input.setAttribute('aria-description', 'user input');

    tile.append(input);
  } else {
    tile.innerHTML = value;
  }

  return tile;
};
