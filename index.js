var Word = require("./word");


var butts = new Word("butts");
butts.display();
butts.guess("t");
butts.display();
butts.guess("b");
butts.display();
butts.guess("s");
butts.display();
butts.guess("u");
butts.display();

var inquirer = require('inquirer');
inquirer.prompt([
    {
        name: "letter",
        message: "Guess a letter!",
        type: "input",
        validate: function(input)
    }
]).then(function(answers) {
    // Use user feedback for... whatever!!
});