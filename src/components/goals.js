import React, { Component }from 'react'
import { connect } from 'react-redux'
import { handleDeleteGoal, handleAddGoal } from '../actions/goals'
import List from './list'

class Goals extends Component{
  addItem = (event) => {
    event.preventDefault()
    const name = this.input.value
    this.props.dispatch(
      handleAddGoal(name, () => this.input.value = ''))
  }

  removeItem = (goal) => {
    this.props.dispatch(handleDeleteGoal(goal))
  }

  render(){
    return(
      <div>
        <h1>Goals List</h1>
        <input type='text'
          placeholder='Add Goal'
          ref={(input) => this.input = input}/>
        <button onClick={this.addItem}>Add Goal</button>
        <List
          items={this.props.goals}
          remove={this.removeItem}/>
      </div>
    )
  }
}

export default connect((state) => ({
  goals: state.goals
}))(Goals)
