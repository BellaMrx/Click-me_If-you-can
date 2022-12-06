# Click-me_If-you-can
 HTML, CSS, JS



<p>"Welcome to my website"</p>
<p>"Come on, try it"</p>
<p>"It's not that hard"</p>
<p>"Really?"</p>
<p>"You're making a fool of yourself."</p>
<p>"Try again, you'll be fine"</p>
<p>"Now it is official embarrassing"</p>
<p>"Okay, try it now, trust me"</p>



<p>"Wilkommen auf meiner Webseite"</p>
<p>"Komm schon, versuch es"</p>
<p>"So schwer ist es nicht"</p>
<p>"Wirklich?"</p>
<p>"Du machst dich lächerlich"</p>
<p>"Versuchen es noch einmal, aufgeben ist keine Lösung"</p>
<p>"Jetzt ist es offiziell peinlich"</p>
<p>"Okay versuch es jetzt, vertrau mir"</p>




function animateText(comments){
  var i = 0;
  if(comments ==  textToAnimate.length){
    comments = 0;   // 7
  }
  for (; i < textToAnimate[comments].length; i++) {
    let string = textToAnimate[comments][i]
    setTimeout('document.getElementById("commentsAI").innerHTML += \'' + string + '\';', 100 * i);
  }
 
  return(comments);

 setTimeout(function(){ reverseAnimation(comments)}, 100 * i + startReverseAnimationAfter);

}

animateText(0);


                    "Come on, try it", 
                    "It is not that hard", 
                    "Really?", 
                    "You are making a fool of yourself", 
                    "Try again, you will be fine", 
                    "Now it is official embarrassing", 