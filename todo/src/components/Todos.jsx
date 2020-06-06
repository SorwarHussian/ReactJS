import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends Component {

  todoComplete = ()=>{
    console.log('marked');
  }
  render() {
    const { todos } = this.props;

    return todos.map((todo) => (
      <div className="col-12 justify-content-center row" key={todo.id}>
        <TodoItem todo={todo} todoComplete={this.todoComplete} />
      </div>
    ));
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default Todos;
