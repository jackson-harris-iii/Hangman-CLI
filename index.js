const iq = require('inquirer')
var makeWord = require('./word.js')

let prompt = iq.createPromptModule();

const choices = ["JAINA", "REXXAR", "THRALL", "MALFURION", "UTHER", "ANDUIN", "VALEERA", "GULDAN", "GARROSH"];

function random () {
    console.log(choices[Math.floor(Math.random()*choices.length)])
}

random()

const welcome = [
    {
        type: 'list',
        message: 'Do you want to play a game?',
        choices: ['yes', 'no'],
        name: 'choice'
    }
]

prompt(welcome).then((res) => {
    if (res == 'yes'){
        console.log("Let's Begin...")
        start()
    }
    else {
        console.log("you're playing...")
        start()
    }
})