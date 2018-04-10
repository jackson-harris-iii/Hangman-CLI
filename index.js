const iq = require('inquirer')
var makeWord = require('./word.js')

let prompt = iq.createPromptModule();

const choices = ["JAINA", "REXXAR", "THRALL", "MALFURION", "UTHER", "ANDUIN", "VALEERA", "GULDAN", "GARROSH"];

function random () {
    console.log(choices[Math.floor(Math.random()*choices.length)])
}

random()