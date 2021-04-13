let largediv = document.querySelector('.largediv');
let closeInfoButton = document.querySelector('.close-img');

function show() {
  largediv.classList.add('show');
}

function close() {
  largediv.classList.remove('show');
}

closeInfoButton.addEventListener('click', close);
