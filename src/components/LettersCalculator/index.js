// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  increaseCount = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="app-bg-container">
        <div className="calculator-image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
        <div className="calculator-container">
          <h1 className="heading">Calculate the letters you enter</h1>
          <div className="input-container">
            <label className="para" htmlFor="calculator">
              Enter the phrase
            </label>
            <input
              className="input-text"
              onChange={this.increaseCount}
              type="text"
              placeholder="Enter the phrase"
              id="calculator"
            />
          </div>
          <p className="count-letters">No.of letters: {count}</p>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
