var Word = require("./word");
var inquirer = require('inquirer');
var fs = require("fs");


var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;

// List of possible words
var words;
fs.readFile("words.txt", "utf8", function(error, data) {
    if (error) {
        return console.log(error);
    }
    var string = data.replace(/\r/g, "");
    words = string.split("\n"); 
    game();
});

function game() {
    console.log();

    var answer = new Word(words[Math.floor(Math.random() * words.length)]);
    answer.display();

    // reset which letters have been used
    var used = [];

    function turn() {
        inquirer.prompt([
            {
                name: "letter",
                message: "Guess a letter!",
                type: "input",
                validate: function validateGuess(letter){
                    return (alphabet.indexOf(letter.toLowerCase()) != -1 && used.indexOf(letter.toLowerCase()) === -1);
                }
            }
        ]).then(function(answers) {
            var guess = answers.letter.toLowerCase();
            used.push(guess);
            console.log();
            if (answer.check(guess)) {
                answer.display();
                console.log("You got it right! Next word!");
                wins++;
                game();
            }
            else {
                if (answer.misses > 0) {
                    answer.display();
                    turn();
                }
                else {
                    console.log("Game over. You got " + wins + " correct this time.");
                    console.log("Thanks for playing!!");
                }
            };
        });
    }
    turn();
}
