import { openHowToPlay, playSound } from './utils.js';

window.onload = () => {
  openHowToPlay();

  document.getElementById('start-game-btn').addEventListener('click', playSound);
  document.getElementById('how-to-play-btn').addEventListener('click', playSound);
};
