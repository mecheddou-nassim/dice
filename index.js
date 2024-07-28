var randomNumber1=Math.floor(Math.random()*6)+1;
/*var randomIamge=  "dice" + randomNumber1 +".png";

var randomSrcImage="images/"+randomIamge;*/
var documentImage=document.querySelector(".img1");
documentImage.setAttribute("src","images/"+"dice" + randomNumber1 +".png"); 

var randomNumber2=Math.floor(Math.random()*6)+1;
/*var randomImage2=  "dice" + randomNumber2 +".png";
var randomSrcImage2="images/"+randomImage2;*/
var docummentImage2=document.querySelector(".img2");
docummentImage2.setAttribute("src","images/"+"dice" + randomNumber2 +".png");
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Play 1 Wins!";

}else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
}else{
    document.querySelector("h1").innerHTML="Draw";
}