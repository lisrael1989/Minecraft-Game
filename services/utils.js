export function getRandomColor() {
  const letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export function getRandomInt(min, max) {
  if (Math.ceil(min) > Math.floor(max)) {
    console.log('Next time try a bigger range');
    return NaN;
  } // add '+ 1'        HERE      to make it inclusive of max
  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min)) + Math.ceil(min));
}

export function startTimer() {
  if (gTimerInterval) clearInterval(gTimerInterval);

  gTimerInterval = setInterval(() => {
    const timeDiff = Date.now() - startTime;
    const time = getTime(timeDiff);

    document.querySelector('span.seconds').innerText = time[0];
    document.querySelector('span.milliseconds').innerText = time[1];
  }, 10);
}

export function getTime(timeDiff) {
  const seconds = Math.floor(timeDiff / 1000);
  const milliseconds = timeDiff % 1000;
  return [(seconds + '').padStart(2, '0'), (milliseconds + '').padStart(3, '0')];
}

export function openHowToPlay() {
  document.getElementById('how-to-play-btn').addEventListener('click', function () {
    window.open('https://www.minecraft.net/en-us/minecraft-tips-for-beginners', '_blank');
  });
}

export function playSound() {
  const sound = document.getElementById('button-sound');
  if (sound) {
    sound.currentTime = 0;
    sound.play();
  }
}

export function showModal(msg) {
  const modal = document.getElementById('modal');
  const overlay = document.getElementById('overlay');
  modal.querySelector('p').textContent = msg;
  overlay.style.display = 'block';
  setTimeout(() => {
    overlay.style.display = 'none';
  }, 5000);
}
document.getElementById('closeBtn').addEventListener('click', () => {
  document.getElementById('overlay').style.display = 'none';
});
