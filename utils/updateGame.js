import { validateInput } from './validate';

export const updateGame = (e) => {
  const value = e.target.value;
  const tile = e.target.parentElement;
  const row = tile.getAttribute('data-row');
  const column = tile.getAttribute('data-col');

  const isValid = validateInput({ value, row, column });

  if (isValid) {
    tile.setAttribute('data-value', value);
    tile.innerHTML = value;
  }
};
