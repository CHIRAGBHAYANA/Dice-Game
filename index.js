var randomvariable1=Math.floor(Math.random()*6)+1; //1-6

var randomDiceimage="dice" + randomvariable1 +".png";// dice1.png

var randomImageSource="images/"+randomDiceimage; //images/dice1.png -dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);



var randomvariable2=Math.floor(Math.random()*6)+1; //1-6

var randomDiceimage2="dice"+randomvariable2+".png";// dice1.png- dice6.png

var randomImageSource2="images/"+randomDiceimage2; // dice1.png- dice6.png

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImageSource2);

if(randomvariable1>randomvariable2){
  document.querySelector("h1").innerHTML="PLAYER 1 WINS";
}else if(randomvariable1<randomvariable2){
  document.querySelector("h1").innerHTML="PLAYER 2 WINS";
}
else{
  document.querySelector("h1").innerHTML="Draw";
}
