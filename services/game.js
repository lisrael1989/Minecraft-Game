document.addEventListener('DOMContentLoaded', initGame);

function initGame() {
  const grid = document.getElementById('game-container');
  const layout = createGameBoard();
  buildBoard(grid, layout);
}

function createGameBoard() {
  return [
    ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'leaves', 'leaves', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'leaves', 'leaves', 'leaves', 'leaves', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
    ['sky', 'leaves', 'leaves', 'leaves', 'leaves', 'leaves', 'leaves', 'sky', 'leaves', 'sky', 'sky', 'sky', 'leaves', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'leaves', 'leaves', 'leaves', 'leaves', 'sky', 'leaves', 'leaves', 'leaves', 'sky', 'leaves', 'leaves', 'leaves', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'wood', 'wood', 'sky', 'sky', 'sky', 'wood', 'sky', 'sky', 'sky', 'wood', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'wood', 'wood', 'sky', 'sky', 'sky', 'wood', 'sky', 'sky', 'sky', 'wood', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
    ['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass'],
    ['soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil'],
    ['soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil', 'soil'],
    ['stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone', 'stone'],
  ];
}

function buildBoard(grid, layout) {
  layout.forEach((row) => {
    row.forEach((tileType) => {
      const tile = createTile(tileType);
      grid.appendChild(tile);
    });
  });
}

function createTile(tileType) {
  const tile = document.createElement('div');
  tile.classList.add('tile');

  switch (tileType) {
    case 'grass':
      tile.classList.add('grass');
      break;
    case 'soil':
      tile.classList.add('soil');
      break;
    case 'leaves':
      tile.classList.add('leaves');
      break;
    case 'wood':
      tile.classList.add('wood');
      break;
    case 'stone':
      tile.classList.add('stone');
      break;
    default:
      tile.classList.add('sky');
      break;
  }
  removeTile(tile, tileType);
  return tile;
}

function removeTile(tile) {
  tile.addEventListener('click', (ev) => {
    console.log(tile);
    const tileType = Array.from(tile.classList).find((cls) => cls !== 'tile');
    if (tileType) {
      tile.classList.remove(tileType);
      tile.style.backgroundColor = ``;
    }
  });
}
