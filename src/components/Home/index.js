import {Component} from 'react'
import Header from '../Header'

class Home extends Component {
  state = {leftoperand: '', rightoperand: '', operator: '', result: ''}

  onLeftOperand = event => {
    this.setState({
      leftoperand: event.target.value,
    })
  }

  onRightOperand = event => {
    this.setState({
      rightoperand: event.target.value,
    })
  }

  onOperator = event => {
    this.setState({
      operator: event.target.value,
    })
  }

  Oncalculation = () => {
    const {leftoperand, operator, rightoperand, result} = this.state

    if (operator === '+') {
      this.setState({
        result: parseInt(leftoperand) + parseInt(rightoperand),
      })
    }
    if (operator === '-') {
      this.setState({
        result: parseInt(leftoperand) - parseInt(rightoperand),
      })
    }
    if (operator === '*') {
      this.setState({
        result: parseInt(leftoperand) * parseInt(rightoperand),
      })
    }
    if (operator === '%') {
      this.setState({
        result: Math.round(parseInt(leftoperand) % parseInt(rightoperand)),
      })
    }
    return result
  }

  render() {
    const {leftoperand, rightoperand, operator, result} = this.state
    return (
      <div>
        <Header />
        <form>
          <h1> Task Executor </h1>
          <label htmlFor="left" type="integer">
            {' '}
            Left Operand{' '}
          </label>
          <input
            id="left"
            type="integer"
            onChange={this.onLeftOperand}
            value={leftoperand}
          />
          <label htmlFor="operator" type="integer">
            {' '}
            Operator
          </label>
          <input
            id="operator"
            type="integer"
            onChange={this.onOperator}
            value={operator}
          />
          <label htmlFor="right" type="integer">
            Right Operand{' '}
          </label>{' '}
          <input
            id="right"
            type="integer"
            onChange={this.onRightOperand}
            value={rightoperand}
          />
          <button type="button" onClick={this.Oncalculation}>
            {' '}
            Submit{' '}
          </button>
          <p> RESULT: {result} </p>
        </form>
      </div>
    )
  }
}
export default Home
