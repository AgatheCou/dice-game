function diceDisplay(n, classi){
    var im = ""
    var alti = ""
    if (n===1){
        im = "AgatheCou/dice-game/images/dice1.png"
        alti="dice 1"
    } else if (n===2){
        im = "AgatheCou/dice-game/images/dice2.png"
        alti="dice 2"
    } else if (n===3){
        im = "AgatheCou/dice-game/images/dice3.png"
        alti="dice 3"
    } else if (n===4){
        im = "AgatheCou/dice-game/images/dice4.png"
        alti="dice 4"
    } else if (n===5){
        im = "AgatheCou/dice-game/images/dice5.png"
        alti="dice 5"
    } else {
        im = "AgatheCou/dice-gameimages/dice6.png"
        alti="dice 6"
    }

    document.querySelector(classi).src = im;
    document.getElementsByClassName(classi).alt = alti;
}

function LaunchDice(){
    return [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1];
}

function play(){
    var res = LaunchDice();
    diceDisplay(res[0], ".dice1");
    diceDisplay(res[1], ".dice2");

    if (res[0] > res[1]){
        document.querySelector("h1").innerHTML = "First player wins !";
    } else if (res[0]<res[1]) {
        document.querySelector("h1").innerHTML = "Second player wins !";
    } else {
        document.querySelector("h1").innerHTML = "Equality, loosers";
    }
}
