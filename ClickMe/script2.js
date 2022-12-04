

function clickButton() {
    // winner message 1
    var winText1 = document.querySelector(".text1");
    winText1.innerHTML = "Okay, you can!";

    // winner message 2
    var winText2 = document.querySelector(".text2");
    winText2.innerHTML = "Congratulations, you have won the realization that you like to waste your time with bullshit.";
    winText2.style.overflowWrap="inherit;";

    // lets display cup
    var img = document.querySelector(".cup");
    img.src = "CupYouwon.PNG";
	img.style.width = "125px";
	img.style.height = "200px";

    // remove button
    var btn = document.querySelector(".container-button");
    btn.style.display = 'none';
}





