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

    );
  }
}

export default App;
