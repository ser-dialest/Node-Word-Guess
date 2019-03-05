var Letter = require("./letter");
var clc = require("cli-color");

function Word(word) {
    this.word = [];
    this.misses = 10;
    for (var i = 0; i < word.length; i++) {
        this.word.push(new Letter(word[i]));
    }
    this.display = function() {
        for (var i = 0; i < this.word.length; i++) {
            this.word[i].display();
        }
        console.log();
        console.log();
    }
    this.check = function(guess) {
        var correct = false;
        for (var i = 0; i < this.word.length; i++) {
            if (this.word[i].check(guess)) {
                correct = true;
            };
        }
        if (correct) {
            console.log(clc.green("CORRECT!!!"));
            console.log();
        }
        else {
            console.log(clc.red("INCORRECT!!!"));
            console.log();
            this.misses--;
            console.log(this.misses + " guesses remaining!!!");
        }
    }
};

module.exports = Word;