import './style.scss';
import { setupGame } from './utils/setupGame';
import { updateGame } from './utils/updateGame';
import { resetGame } from './utils/resetGame';

//SETUP
document.querySelector('#app').innerHTML = `
  <h1>Sudoku</h1>
  <div class="sudoku-board"></div>
  <div class="controls">
    <button data-type="reset" aria-description="reset board">Reset</button>
  </div
`;

setupGame();

// GET DOM ELEMS
const resetBtn = document.querySelector('button[data-type="reset"]');
const tiles = document.querySelectorAll('.tile');

// EVENT LISTENERS
resetBtn.addEventListener('click', resetGame);

tiles.forEach((tile) => {
  tile.addEventListener('keyup', (e) => updateGame(e));
});
