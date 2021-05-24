import React,{Component} from 'react'

class Todos extends Component {
    render(){
    console.log(this.props.todos)
  return this.props.todos.map((todo) =>(
      <h4>{todo.title}</h4>
  ));
    }
}

export default Todos; 
