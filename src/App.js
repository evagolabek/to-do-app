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

  constructor(props) {
    super(props);

    this.state = {
      todos
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
