var Letter = require("./letter");

function Word(word) {
    this.word = [];
    for (var i = 0; i < word.length; i++) {
        this.word.push(new Letter(word[i]));
    }
    this.display = function() {
        for (var i = 0; i < this.word.length; i++) {
            this.word[i].display();
        }
        process.stdout.write("\n");
    }
    this.guess = function(guess) {
        for (var i = 0; i < this.word.length; i++) {
            this.word[i].check(guess);
        }
    }
};

module.exports = Word;