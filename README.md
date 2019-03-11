# Node-Word-Guess

## Overview

Uses constructor functions to make a command line version of Hangman.

## Requirements

The user will need to install the following NPM Modules as per the dependencies found in the included package.JSON:

* Inquirer
* CLI-Color

## Structure

There are separate files that contain the constructors for letters, which are objects, and words, which are collections of letter objects as well as its own methods. Each letter is assigned a character value on construction, with a value that states if it has been guessed yet or not and a method that checks if an individual guess is correct for that individual letter. It also has a display method that displays the correct letter or a blank (if not yet guessed).

Words, when constructed, employ the letter constructor to populate itself with the designated characters. It also contains methods to activate the check and display methods of all its component letter objects.

letter.js is only referenced by word.js, which itself is referenced only by index.js, which contains the overall game logic.

There is also a files, words.txt, that contains approximately 1500 of the most commonly used nouns in English. New words are pulled from this list.

## User Input

After running the application, the user is presented with a string of blanks that represent the mystery word and is commanded to enter a letter. It will only proceed if the user supplies an upper or lower case character. Non-letter or multi-character strings are not accepted. Neither are guesses that have been tried earlier in that word. This list of used letters is reset for each new word.

When the user submits a letter that is in the word, a "CORRECT!!!" message is displayed, and the word is displayed with the correctly guessed letters replacing blanks.

If the submission is not correct, the user is presented with a message stating "INCORRECT!!!" along with the number of potential misses that remain.

When the user has supplied correct guesses for all the letters in the word, a victory message is logged to the console and a new word is selected. The used letter list and miss quota is reset.

If the user reaches the maximum number of misses in the word, the game is over, and the number of correctly guessed words is displayed.
