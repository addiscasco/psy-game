var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var guess = "";
var guessedLetters = [];

var winsCount = 0;
var lossesCount = 0;
var guessesLeft = 9;

var computerLetter = letters[Math.floor(Math.random() * letters.length)];

document.onkeyup = function (event) {

    var guess = String.fromCharCode(event.keyCode).toLowerCase();

    console.log("CC " + computerLetter);

    guessedLetters.push(guess);

    document.getElementById("gletters").innerHTML = " " + guessedLetters.join(' , ');
    if (guess == computerLetter) {
        winsCount++;
        document.getElementById("ganar").innerHTML = winsCount;
        guessesLeft = 9;
     
        alert("You're a Winner!");
      
        computerLetter = letters[Math.floor(Math.random() * letters.length)];
        console.log(computerLetter + "CC");

    }else if (guessesLeft == 0) {
        lossesCount++;
        document.getElementById("perder").innerHTML = lossesCount;
        guessesLeft = 9;

        alert("Try again!");
        
        computerLetter = letters[Math.floor(Math.random() * letters.length)];
        console.log("CC: " + computerLetter);
        
    } else if (guess !== computerLetter) {
        guessesLeft--;
        document.getElementById("gleft").innerHTML = guessesLeft;
    }
}