var wins = 0;
var losses = 0; 
var guesses = 10;
var guessedArray = [];
var letters = ['q','w','e','r','t','y','u','i','o','p','a','s',
        'd','f','g','h','j','k','l','z','x','c','v','b','n','m'];
        
var compGuess = letters[Math.floor(Math.random() * letters.length)];
        console.log(compGuess);

function guessGame(){
        compGuess = letters[Math.floor(Math.random() * letters.length)];
        console.log(compGuess);
}        

document.onkeyup = function(event) {
        var guess = event.key;

if(!/[a-z]/.test(guess)) {
              alert("Letters of the alphabet only!");
      }
        
//if(guessedArray.indexOf(guess) === -1){
//        guessedArray.push(guess);
//}                    
if(guess === compGuess){
        document.getElementById('wins').innerHTML = 'wins';
        wins++;
        guesses = 10;
        guessedArray = [];
}

guessGame();
if (guess !== compGuess){
        guesses--;
}

if(guesses === 0){       
        losses++;
        guesses = 10;
        guessedArray = [];
}   

if (guessedArray.indexOf(guess) >= 0){
}else{
        guessedArray.push(guess);
        document.getElementById('guess').innerHTML ="Letters Guessed: " + guessedArray;
        console.log(guessedArray);
}
document.getElementById('wins').innerHTML ="Games won: " + wins;
document.getElementById('losses').innerHTML ="Games lost: " + losses;
document.getElementById('guesses').innerHTML ="Guesses remaining:" + guesses;
}