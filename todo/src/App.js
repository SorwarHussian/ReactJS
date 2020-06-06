import React, { Component } from 'react'
import Header from './components/Header'
import Todos from './components/Todos'

class App extends Component {


  state = {
    todos: [
      {
        id: 1,
        title: "Viajar",
        completed: false,
      },
      {
        id: 2,
        title: "Trabjar",
        completed: true,
      },
    ],
  };


  render() {
    return (
      <div className='container-fluid'>
        <div className='row justify-content-center'>
          <Header />
          <Todos todos={this.state.todos} />
        </div>
      </div>

    )
  }
}


export default App
