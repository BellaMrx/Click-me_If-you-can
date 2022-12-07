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


// create/animate comments
var textToAnimate = ["Welcome to my website", 
                    "Come on, try it", 
                    "It is not that hard", 
                    "Really?", 
                    "You are making a fool of yourself", 
                    "Try again, you will be fine", 
                    "Now it is official embarrassing",  
                    "Okay, try it now, trust me"];

var startReverseAnimationAfter = 100; //500ms


function reverseAnimation(comments){
  var i = textToAnimate[comments].length -1, delay = 0;
  for (; i >= 0; i--, delay++) {
    let string = textToAnimate[comments].substr(0, i);
    setTimeout('document.getElementById("commentsAI").innerHTML = \'' + string + '\';', 100 * delay);
  }

   setTimeout(function(){ animateText(comments + 1)}, 100 * delay + startReverseAnimationAfter);

}


function animateText(comments){
  var i = 0;  // count
  if (i === textToAnimate.length) {
    clearInterval(interval);
  }
  for (; i < textToAnimate[comments].length; i++) {
    let string = textToAnimate[comments][i]
    setTimeout('document.getElementById("commentsAI").innerHTML += \'' + string + '\';', 100 * i);
  }

  setTimeout(function(){ reverseAnimation(comments)}, 100 * i + startReverseAnimationAfter);
}

animateText(0);


// countdown "TRUST ME"
    // The data/time we want to countdown to
    var countDownDate = new Date("Jul 25, 2021 16:37:52").getTime();

    // Run myfunc every second
    var myfunc = setInterval(function() {

    var now = new Date().getTime();
    var timeleft = countDownDate - now;
        
    // Calculating the days, hours, minutes and seconds left
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
        
    // Result is output to the specific element
    document.getElementById("days").innerHTML = days + "d "
    document.getElementById("hours").innerHTML = hours + "h " 
    document.getElementById("mins").innerHTML = minutes + "m " 
    document.getElementById("secs").innerHTML = seconds + "s " 
        
    // Display the message when countdown is over
    if (timeleft < 0) {
        clearInterval(myfunc);
        document.getElementById("days").innerHTML = ""
        document.getElementById("hours").innerHTML = "" 
        document.getElementById("mins").innerHTML = ""
        document.getElementById("secs").innerHTML = ""
        document.getElementById("end").innerHTML = "TRUST ME!";
    }
    }, 5000);


    const button = document.querySelector(".container-button button");

    window.addEventListener("mousemove", (e) => {
      button.addEventListener("mouseenter", () => {
        
          if (e.movementX > 0) {
            if (e.pageX < window.innerWidth / 2) {
              button.style.transform = `translateX(${e.pageX / 3}px)`;
              button.style.transform = `translateY(${e.pageY / 3}px)`;      // Y-axes
            } else {
              button.style.transform = `translateX(-${e.pageX / 3}px)`;
              button.style.transform = `translateY(-${e.pageY / 3}px)`;     // Y-axes
            }
          } else {
            if (e.pageX < window.innerWidth / 2) {
              button.style.transform = `translateX(${e.pageX / 3}px)`;
            } else {
              button.style.transform = `translateX(-${e.pageX / 3}px)`;
            }
           
        }  
      }  );      // dazwischen
    });











