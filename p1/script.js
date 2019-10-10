let app = new Vue({
    el: '#app',
    data: {
        playerName: null,
        computerGuess: Math.floor(Math.random() * (+11 - +1)) + +1,
        guess: null,
        guesses: [],
        counter: 3,
        feedback: '',
        correct: false,
        textHide: true,
        buttonHide: true,
        gameOver: false,
    },
    methods: {
        submitGuess() {
            this.guesses.push(this.guess);
            this.counter--;
            this.correct = false;
            this.buttonHide = true;

            if (this.counter == 0 && this.guess != this.computerGuess) {
                this.feedback = 'GAME OVER. The answer was ' + this.computerGuess + '.';
                this.textHide = false;
                this.buttonHide = false;
                this.gameOver = true;
            }
            else if (this.guess < 1 || this.guess > 10) {
                this.feedback = 'Be sure to guess a whole number between 1 and 10.';
            }

            else if (this.guess < this.computerGuess) {
                this.feedback = 'That was close. Try higher!';
            }

            else if (this.guess > this.computerGuess) {
                this.feedback = 'It\'s like that number...but not that one. Try lower!';

            }
            else {
                this.feedback = 'That was right! You are the bee\'s knees, the number picker extraordinare!';
                this.correct = true;
                this.textHide = false;
                this.buttonHide = false;
                this.gameOver = true;
            }
        },
        playAgain() {
            this.counter = 3;
            this.guesses = [];
            this.feedback = '';
            this.gameOver = false;
            this.textHide = true;
            this.buttonHide = true;
            this.computerGuess = Math.floor(Math.random() * (+11 - +1)) + +1;
        }
    }
});

