import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class GuessesLeft extends PureComponent {

/*  wrongGuessCount = (word, guesses) => {
let filteredArray = guesses.filter(function(letter) {
if (word.indexOf(letter) > -1) {
return letter
}
})
return filteredArray.length
}
*/
  render() {
    return (
          <h1 className="App-intro">Guesses Left</h1>
        // function that show how many guesses are left. Countdown from 6.
          // {this.wrongGuessCount('hello', 6)}

    );
  }
}




export default GuessesLeft
