// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {inputText: '', lettersCount: 0}

  onInputChange = event => {
    const {inputText} = this.state

    this.setState({inputText: event.target.value})

    this.setState({lettersCount: inputText.replace(' ', '').length})
  }

  render() {
    const {lettersCount} = this.state

    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="inputText" className="para">
            Enter the phrase
          </label>
          <input
            id="inputText"
            type="text"
            onChange={this.onInputChange}
            placeholder="Enter the phrase"
          />
          <p>No.of letters: {lettersCount}</p>
        </div>
        <img
          className="image"
          alt="letters calculator"
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
        />
      </div>
    )
  }
}

export default LettersCalculator
