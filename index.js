var Word = require("./word");

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var used = [];

// var butts = new Word("butts");
// butts.display();
// butts.guess("t");
// butts.display();
// butts.guess("b");
// butts.display();
// butts.guess("s");
// butts.display();
// butts.guess("u");
// butts.display();

function game() {
    console.log();

    var answer = new Word("butts");
    answer.display();

    var inquirer = require('inquirer');
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
        answer.check(guess);
        answer.display();
        // console.log(answers.letter);
        // console.log(typeof answers.letter);
        // console.log(answers.letter.length);

        
    });
}

game();