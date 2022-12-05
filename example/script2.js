let winText1 = document.querySelector(".willWin");
let winText2 = document.querySelector(".text2");
let textAI = document.querySelector(".text3");
let img = document.querySelector(".cup");
let btn = document.querySelector(".container-button");

function clickButton() {
    // winner message 1
    winText1.innerHTML = "You can!";

    // winner message 2
    winText2.innerHTML = "Congratulations, you have won the realization that you like to waste your time with nonsense.";
    winText2.style.overflowWrap="inherit";

    // lets display cup
    img.src = "trophy2.png";
	img.style.width = "125px";
	img.style.height = "125px";
    img.style.marginTop = "5%"

    // remove button
    btn.style.display = 'none';

    // remove commentsAI 
    textAI.style.display = "none"; 
}



var textToAnimate = ["Welcome to my website", 
"Come on, try it", "It is not that hard", 
"Really?", 
"You are making a fool of yourself", 
"Try again, you will be fine", 
"Now it is official embarrassing", 
"Okay, try it now, trust me"];
var startAnimationAfter = 500; //ms

function reverseAnimation(comments){
  var i = textToAnimate[comments].length -1, delay = 0;
  for (; i >= 0 ; i--, delay++) {
    let string = textToAnimate[comments].substr(0, i);
    setTimeout('document.getElementById("commentsAI").innerHTML = \'' + string + '\';', 100 * delay);
  }
  
   setTimeout(function(){ animateText(comments + 1)}, 100 * delay + startAnimationAfter);
}
function animateText(comments){
  var i =0;
  if(comments ==  textToAnimate.length){
    comments = 0;
  }
  for (; i < textToAnimate[comments].length; i++) {
    let string = textToAnimate[comments][i]
    setTimeout('document.getElementById("commentsAI").innerHTML += \'' + string + '\';', 100 * i);
  }
 
 setTimeout(function(){ reverseAnimation(comments)}, 100 * i + startAnimationAfter);
}

animateText(0)





