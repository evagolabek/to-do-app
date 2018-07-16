import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//data model - an array with sample data(items) and different properties

var todos = [
  {
    todoTitle: 'my first task',
    todoResponsible: 'Eva',
    todoDescription: 'My first task to complete',
    todoPriority: 'high'
  },
  {
    todoTitle: 'my second task',
    todoResponsible: 'Flo',
    todoDescription: 'My second task to complete',
    todoPriority: 'medium'
  },
  {
    todoTitle: 'my third task',
    todoResponsible: 'Eva',
    todoDescription: 'My third task to complete',
    todoPriority: 'low'
  }
]

class App extends Component {

//making the sample data(todos array) available in the internal component state by initializing the state in the constructor
//props paramenter is passed to the parent constructor (super) next you access state object

  constructor(props) {
    super(props);

    this.state = {
      todos
    };
  }

//jsx you can access state properties and then by wrapping them in {},
//so include them in your template code directly and when it gets rendered
//those expressions are evaluated and put in the resulting HTMLcode

  render() {
    return (
<div className="container">
  <h4>Todo Count: <span className="badge">{this.state.todos.length}</span></h4>
  <ul className="list-group">
    {this.state.todos.map((todo, index) =>
      <li className="list-group-item" key={index}>
        <h4 className="list-group-item-heading">{todo.todoTitle}<small><span className="label label-info">{todo.todoPriority}</span></small></h4>
        <p><span className="glyphicon glyphicon-user"></span> {todo.todoResponsible}</p>
        <p>{todo.todoDescription}</p>
        <button className="btn btn-danger btn-sm"><span className="glyphicon glyphicon-trash"></span>Delete</button>
      </li>
    )}
  </ul>
</div>
    );
  }
}

export default App;
