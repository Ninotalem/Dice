var firstDicee;
var secondDicee;

firstDicee = (Math.floor(Math.random() * 6) + 1);
secondDicee = (Math.floor(Math.random() * 6) + 1);

document.querySelector(".img1").setAttribute("src", "images/dice" + firstDicee + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + secondDicee + ".png");

if (firstDicee > secondDicee) {
  document.querySelector("h1").textContent = "🚩 Play 1 Wins!";
} else if (firstDicee < secondDicee) {
  document.querySelector("h1").textContent = "Play 2 Wins! 🚩";
} else {
  document.querySelector("h1").textContent = "Draw!";
}
