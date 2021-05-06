window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.remove('fade-out');
});

function answer() {
console.log("is this working");

  idArray = new Array()
  idArray [1] = "MAYBE..."
  idArray [2] = "TRY AGAIN..."
  idArray [3] = "ASK AGAIN LATER..."
  idArray [4] = "TODAY'S YOUR LUCKY DAY!"
  idArray [5] = "MOST DEFINITELY!"
  idArray [6] = "MY SOURCES SAY YES!"
  idArray [7] = "UNLUCKY!"
  idArray [8] = "SADLY NO..."
  idArray [9] = "BETTER LUCK NEXT TIME..."

  randomParagraph = Math.floor(Math.random()*9);

  document.getElementById("result").innerHTML = idArray[randomParagraph + 1];
}

function triangleShow() {
  var x = document.getElementById("triangle");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function hide() {
    document.querySelector('.searchbar').style.display = 'none';
}

function goBackShow() {
  var x = document.getElementById("goback");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
