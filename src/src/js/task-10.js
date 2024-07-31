function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const box = document.querySelector('#boxes');
  box.innerHTML = '';

  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    const size = 30 + i * 10;
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    box.appendChild(div);
  }
}

function destroyBoxes() {
  const box = document.querySelector('#boxes');
  box.innerHTML = '';
}

  const input = document.querySelector('input');
  const createBtn = document.querySelector('button[data-create]');
  const destroyBtn = document.querySelector('button[data-destroy]');
  
  createBtn.addEventListener('click', () => {
    const amount = Number(input.value);
    if (amount >= 1 && amount <= 1000) {
      createBoxes(amount);
    } else {
      alert('Please enter a number between 1 and 100.');
    }
  });
destroyBtn.addEventListener('click', destroyBoxes);