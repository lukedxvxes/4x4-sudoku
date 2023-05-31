import { setupGame } from './setupGame';
import { updateGame } from './updateGame';

export const resetGame = () => {
  document.querySelectorAll('.tile').forEach((tile) => {
    tile.remove();
  });

  setupGame();

  document.querySelectorAll('.tile').forEach((tile) => {
    tile.addEventListener('keyup', (e) => updateGame(e));
  });
};
