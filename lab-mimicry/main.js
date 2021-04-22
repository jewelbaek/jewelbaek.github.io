document.getElementById('rainbutton').addEventListener('click', function () {
  document.querySelector('#rainpic').classList.add('show');
});

document.getElementById('cloudbutton').addEventListener('click', function () {
  document.querySelector('#cloud-circle').classList.add('show');
});

document.getElementById('snowbutton').addEventListener('click', function () {
  document.querySelectorAll('.snow').classList.add('show');
});

document.getElementById('snowbutton').addEventListener('click', function () {
  document.querySelectorAll('.snow').forEach((i) => i.classList.add('show'));
  document.querySelectorAll('.snoww').forEach((i) => i.classList.add('show'));
});
