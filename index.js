var randomNumber1 = (Math.floor(Math.random() * 6)) + 1; //1-6
var randomNumber2 = (Math.floor(Math.random() * 6)) + 1; //1-6

var randomImagesSource1 = "images/dice" + randomNumber1 + ".png"; //images/dice1.png - images/dice6.png
var randomImagesSource2 = "images/dice" + randomNumber2 + ".png"; //images/dice1.png - images/dice6.png

document.querySelectorAll("img")[0].setAttribute("src", randomImagesSource1);
document.querySelectorAll("img")[1].setAttribute("src", randomImagesSource2);

document.querySelector("h1").style.margin = "0px";

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
