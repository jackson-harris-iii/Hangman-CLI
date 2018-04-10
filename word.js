var letter = require('./letter.js')

function Word(chosenWord) {
    this.items = []
    this.chosenWord = chosenWord 

    this.makeWord = function() {

        var currentWord = this.chosenWord
        var theWord = currentWord.split('')
        console.log(currentWord)

        theWord.forEach(element => {
            let currentLetter = new letter.Letter(element)
            this.items.push(currentLetter)
        });
        // console.log(this.items)
        // console.log(this.chosenWord)
    }

    this.show = function () {
        
        let display = []

        this.items.forEach(element => {
            let view = element.show()
            console.log(view)
            // display.push(view)
        });
        console.log(display.join(''))
    }   

}

var testWord = 'hello world'

letter.test()
var testWord = new Word(testWord)
testWord.makeWord()
testWord.show() 