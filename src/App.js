import React, { Component } from 'react'
import Header from './layout/Header'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

import './App.css';
class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with the Mrs',
        completed: false
      },
      {
        id: 3,
        title: 'Brunch meeting with the Boss',
        completed: false
      }
    ]
  }


  //toggle complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }

  //delete a todo

  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })

  }

  render() {
    // console.log(this.state.todos)
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo />
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
        </div>
      </div>
    );
  }
}

export default App;
