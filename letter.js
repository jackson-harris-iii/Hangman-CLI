function Letter(letter) {
    this.letter = letter
    this.guessed = false

    this.check = function (guess){

        if (guess == this.letter){
            this.guessed = true
            // console.log(this.letter)
            // this.show()
        }
    },

    this.show = function () {
        if (this.guessed){
            return this.letter
        }
        return '_'
    }

} 

function test() {
    console.log('shit works')
}

module.exports = { Letter, test }