var randomnumber1=Math.random();
randomnumber1=Math.floor((randomnumber1*6)+1);
var diceimage="dice" +randomnumber1+".png";
var imagesrc="images/"+diceimage;
document.querySelectorAll("img")[0].setAttribute("src",imagesrc);

var randomnumber2=Math.random();
randomnumber2=Math.floor((randomnumber2*6)+1);
var diceimage1="dice" +randomnumber2+".png";
var imagesrc1="images/"+diceimage1;
document.querySelectorAll("img")[1].setAttribute("src",imagesrc1);

if(randomnumber1>randomnumber2)
{
  document.querySelector("h1").innerHTML="player 1 wins";
}
else  if(randomnumber1<randomnumber2){
    document.querySelector("h1").innerHTML="player 2 wins";
}
else {
    document.querySelector("h1").innerHTML="its a draw";
}
