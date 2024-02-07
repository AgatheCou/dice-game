function diceDisplay(n, classi){
    var im = ""
    var alti = ""
    if (n===1){
        im = "./images/dice1.png"
        alti="dice 1"
    } else if (n===2){
        im = "./images/dice2.png"
        alti="dice 2"
    } else if (n===3){
        im = "./images/dice3.png"
        alti="dice 3"
    } else if (n===4){
        im = "./images/dice4.png"
        alti="dice 4"
    } else if (n===5){
        im = "./images/dice5.png"
        alti="dice 5"
    } else {
        im = "./images/dice6.png"
        alti="dice 6"
    }
    document.getElementsByClassName(classi).src = im;
    document.getElementsByClassName(classi).alt = alti;
    return [im, alti]
}

function LaunchDice(){
    return [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1];
}

function play(){
    var res = LaunchDice();
    diceDisplay(res[0], "dice1");
    diceDisplay(res[1], "dice2");
}
