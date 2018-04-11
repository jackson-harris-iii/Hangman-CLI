var letter = require('./letter.js')

function Word(chosenWord) {
    this.items = []
    this.chosenWord = chosenWord 

    this.makeWord = function() {

        var currentWord = this.chosenWord
        var theWord = currentWord.split('')
        // console.log(currentWord)

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
            display.push(view)
        });
        return display.join(' ')
    }   

}

function test() {
    console.log('shit works')
}

module.exports = { Word, test }
var testWord = 'hello world'

// letter.test()
// var testWordC = new Word(testWord)
// testWordC.makeWord()
// testWordC.items.forEach(element => {
//     element.check('o')
// });
// testWordC.show() 