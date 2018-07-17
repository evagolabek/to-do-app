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

//passing new value to the state
  handleRemoveTodo(index) {
    this.setState({
      todos: this.state.todos.filter(function(e, i) {
        return i  !== index;
      })

    })
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
        <button className="btn btn-danger btn-sm" onClick={this.handleRemoveTodo.bind(this, index)}><span className="glyphicon glyphicon-trash"></span>Delete</button>
      </li>
    )}
  </ul>
</div>
    );
  }
}

class TodoInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoTitle: '',
      todoResponsible: '',
      todoDescription: '',
      todoPriority: 'Lowest'
    }
  }

    render() {
      return (
        <div>
         <h4>Add New Todo</h4>
         <form className="form-horizontal" onSubmit={this.handleSubmit}
         <div className="form-group">
           <label htmlFor="inputTodoTitle" className="col-sm-2 control-label"></label>
           <div className="col-sm-10">
           <input name="todoTitle"
                  type="text"
                  className="form-control"
                  id="inputTodoTitle"
                  value={this.state.todoTitle}
                  onChange={this.handleInputChange}
                  placeholde="Title"></input>
           </div>
         </form>
        </div>
      );
    }

  }


export default App;
