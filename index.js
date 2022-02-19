//for first image
var randomNumber1 = Math.floor(Math.random()*6)+1; //select random no between 1-6
var randomDiceImage1 = "dice"+randomNumber1+".png"; //selected no wala image
var firstImage= document.querySelectorAll("img")[0]; //select pehla image
firstImage.setAttribute("src",randomDiceImage1); //replace with random no wala image

//for second image
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImage2 = "dice"+randomNumber2+".png";
var secondImage= document.querySelectorAll("img")[1];
secondImage.setAttribute("src",randomDiceImage2);

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 1 wins!";
}
else if(randomNumber1<randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 2 wins!";
}
else
{
    document.querySelector("h1").innerHTML="Its a Draw!";
}