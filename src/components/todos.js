import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddTodo, handleDeleteTodo, handleToggleTodo } from '../actions/todos'
import List from './list'

class Todos extends Component{

  toggleItem = (id) => {
    this.props.dispatch(handleToggleTodo(id))
  }

  addItem = (event) => {
    event.preventDefault()
    const name = this.input.value
    this.props.dispatch(
      handleAddTodo(name, () => this.input.value = ''))
  }

  removeItem = (todo) => {
    this.props.dispatch(handleDeleteTodo(todo))
  }

  render(){
    return(
      <div>
        <h1> Todo List</h1>
        <input type='text'
          placeholder='Add Todo'
          ref = {(input) => this.input = input}
        />
        <button onClick={this.addItem}>Add Todo</button>
        <List
          items={this.props.todos}
          remove={this.removeItem}
          toggle={this.toggleItem}/>
      </div>
    )
  }
}

export default connect((state) => ({
  todos: state.todos
}))(Todos)
