function Letter(letter, guessed) {
    this.letter = letter,
    this.guessed = false,

    this.check = function (guess){
        if (guess == this.letter){
            this.guessed = true
            this.show()
        }
        else console.log('incorrect guess try again')
    },

    this.show = function () {
        if (guessed){
            return this.letter
        }
        return '_'
    }

} 

function test() {
    console.log('shit works')
}

module.exports = { Letter, test }