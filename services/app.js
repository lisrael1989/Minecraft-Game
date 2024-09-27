import { openHowToPlay, playSound } from './utils.js';

window.onload = () => {
  openHowToPlay();
  startGame();
  document.getElementById('start-game-btn').addEventListener('click', playSound);
  document.getElementById('how-to-play-btn').addEventListener('click', playSound);
};

function startGame() {
  document.getElementById('start-game-btn').addEventListener('click', () => {
    window.location.href = 'game.html';
  });
}
