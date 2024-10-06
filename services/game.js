document.addEventListener('DOMContentLoaded', initGame);

const axe = document.getElementById('axe-btn').addEventListener('click', () => {
  selectedItem = 'axe';
  setActiveTool('axe-btn', 'axe');
  console.log('🚀 ~ selectedItem:', selectedItem);
});

const pickaxe = document.getElementById('pickaxe-btn').addEventListener('click', () => {
  selectedItem = 'pickaxe';
  setActiveTool('pickaxe-btn', 'pickaxe');
  console.log('🚀 ~ selectedItem:', selectedItem);
});

const shovel = document.getElementById('shovel-btn').addEventListener('click', () => {
  selectedItem = 'shovel';
  setActiveTool('shovel-btn', 'shovel');
  console.log('🚀 ~ selectedItem:', selectedItem);
});

let selectedItem;

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
  removeTile(tile);
  return tile;
}

function removeTile(tile) {
  tile.addEventListener('click', (ev) => {
    const tileType = Array.from(tile.classList).find((cls) => cls !== 'tile');
    if (!selectedItem) {
      tile.classList.remove('sky');
    } else if (tileType && selectedItem === 'axe') {
      tile.classList.remove('wood') || tile.classList.remove('leaves');
    } else if (tileType && selectedItem === 'pickaxe') {
      tile.classList.remove('stone');
    } else if (tileType && selectedItem === 'shovel') {
      tile.classList.remove('soil') || tile.classList.remove('grass');
    }
  });
}

function setActiveTool(btnId, tool) {
  const button = document.getElementById(btnId);

  if (button.classList.contains('active')) {
    button.classList.remove('active');
    selectedItem = '';
    console.log('remove selected tool');
  } else {
    const buttons = document.querySelectorAll('.tool-btn');
    buttons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
    selectedItem = tool;
    console.log('add selected tool');
  }
}
