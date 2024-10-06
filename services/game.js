document.addEventListener('DOMContentLoaded', initGame);

let selectedItem;

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

function removeTile(tile, tileType) {
  if (!tileType) {
    console.log('empty tile');
    return;
  }

  tile.addEventListener('click', () => {
    if (!tileType || !tile.classList.contains(tileType)) {
      alert('empty tile');
      return;
    }

    if (!selectedItem) {
      if (tileType === 'sky') {
        tile.classList.remove('sky');
        inventoryCount('sky');
      }
      return;
    }
    const validRemoval =
      (selectedItem === 'axe' && (tileType === 'wood' || tileType === 'leaves')) ||
      (selectedItem === 'pickaxe' && tileType === 'stone') ||
      (selectedItem === 'shovel' && (tileType === 'soil' || tileType === 'grass'));

    if (validRemoval) {
      tile.classList.remove(tileType);
      inventoryCount(tileType);
      tileType = '';
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

function inventoryCount(tileType) {
  if (tileType === '') {
    console.log('Cannot count an empty tile.');
    return;
  }
  const inventoryTile = document.getElementById(`${tileType}-count`);

  if (inventoryTile) {
    const currentCount = parseInt(inventoryTile.textContent);
    inventoryTile.textContent = currentCount + 1;
  } else {
    currentCount = 1;
  }
}
