const iq = require('inquirer')
var makeWord = require('./word.js')

let prompt = iq.createPromptModule();

const choices = ["JAINA", "REXXAR", "THRALL", "MALFURION", "UTHER", "ANDUIN", "VALEERA", "GULDAN", "GARROSH"];

function random () {
    return choices[Math.floor(Math.random()*choices.length)]
}

var roundWord = ''
var wordObject = null
var guessesRem = null

const welcome = [
    {
        type: 'list',
        message: 'Do you want to play a game?',
        choices: ['yes', 'no'],
        name: 'choice'
    }
]

const makeGuess = [
    {
        type: 'input',
        message: 'guess a letter.',
        name: 'guess'
    }
]

const again = [
    {
        type: 'list',
        message: 'would you like to play again?',
        choices: ['yes', 'no'],
        name: 'choice'
    }
]

prompt(welcome).then(res => {
    
    if (res.choice == 'yes'){
        console.log("Let's Begin...")
        start()
    }
    else {
        console.log("you're playing...")
        start()
    }
})

function start() {
    roundWord = random()
    wordObject = new makeWord.Word(roundWord)
    wordObject.makeWord()
    wordObject.show()
    guessesRem = roundWord.length + 3
    round()
    
}

function round() {
    let progress = wordObject.show()
    let compare = progress.replace(/\s/g, '')
    guessesRem--

    if (compare == roundWord){
        console.log()
        console.log('hmm... well played.')
        console.log()
        playAgain()
    }
    else if(guessesRem > 0){
        
        prompt(makeGuess).then(res => {
            
            let guess = res.guess.toUpperCase()
            wordObject.items.forEach(element => {
                element.check(guess)   
            });

            console.log('Guesses Remaining: ' + guessesRem)
            console.log(wordObject.show())
            console.log()
            round()
            
        })
    }
    else {
        console.log()
        console.log("better luck next time")
        console.log()
        playAgain()
    }    
}

function playAgain() {
    prompt(again).then(res => {
        if (res.choice == 'yes') {
            start()
        }
        else {
            console.log("bye")
        }
    })
}

// makeWord.test()