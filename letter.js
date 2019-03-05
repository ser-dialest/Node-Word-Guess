function Letter(letter) {
    this.letter = letter;
    this.guessed = false;
    this.display = function() {
        if (this.guessed) {
            process.stdout.write(letter + " ");
        }
        else {
            process.stdout.write("_ ");
        }
    }
    this.check = function(guess) {
        if(guess === this.letter) {
            this.guessed = true;
        }
    }
}

module.exports = Letter;