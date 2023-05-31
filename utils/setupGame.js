import { createTile } from './createTile';

export const setupGame = () => {
  const sudukoBoardEl = document.querySelector('.sudoku-board');

  //intial values
  const game = [
    [3, null, 4, null],
    [null, 1, null, 2],
    [null, 4, null, 3],
    [2, null, 1, null],
  ];

  game.map((row, rowIndex) => {
    row.map((value, colIndex) => {
      const tile = createTile({ value, rowIndex, colIndex });
      sudukoBoardEl.append(tile);
    });
  });
};
