const iq = require('inquirer')
var makeWord = require('./word.js')

let prompt = iq.createPromptModule();

const choices = ["JAINA", "REXXAR", "THRALL", "MALFURION", "UTHER", "ANDUIN", "VALEERA", "GULDAN", "GARROSH"];

function random () {
    return choices[Math.floor(Math.random()*choices.length)]
}

var roundWord = ''
var wordObject = null

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
    round()
    
}

function round() {
    prompt(makeGuess).then(res => {
        let guess = res.guess.toUpperCase()
        wordObject.items.forEach(element => {
            element.check(guess)
            
        });
        console.log(guess)
        wordObject.show()
        
    })
}

// makeWord.test()