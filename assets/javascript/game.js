
var words = ["variable", "object", "property", "mean", "jquery", "value", "html", "css"];

var genWord = "";
var wordLetters = [];
var wordChar = 0;
var correctLetters = [];
var wordView = [];
var guessedLetters = [];
var wins= 0;
var losses= 0;
var guesses= 10;

let docWords = document.getElementById('words');

// FUNCTIONS
    // ==============================================================================

    // Function to render questions.

function startUp() {
    genWord = words[Math.floor(Math.random() * words.length)]; 
    wordChar = genWord.split("");
    wordView = wordChar.length;

    // Game restart
    guesses = 10;
    guessedLetters = [];
    wordView = [];
    
    //update game stats
    for (var i=0;i<wordChar.length; ++i) {
        wordView.push("_");
        
    }

    // write to html

    document.getElementById("words").innerHTML = wordView.join(" ");
    document.getElementById("guessed").innerHTML = guessedLetters;
    document.getElementById("guess").innerHTML = guesses;
    document.getElementById("win").innerHTML = wins;
    document.getElementById("loss").innerHTML = losses;

    
};

startUp();
console.log(genWord);
document.addEventListener('keypress', (event) => {
    let keyCode = event.keyCode;
    let keyWord = String.fromCharCode(keyCode);
    if(genWord.indexOf(keyWord) > -1) {
        correctLetters.push(keyWord);
        guessedLetters.push(keyWord);
        wordView[genWord.indexOf(keyWord)] = keyWord;
        docWords.innerHTML = wordView.join(' ');
    }
     else {
        guessedLetters.push(keyWord);
    }
    if(wordView.join('') == genWord) {
        alert ("You WIN!");
    }
});