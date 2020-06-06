import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  //Tachar el todo si esta completado
  _handleStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };

  render() {
    const { todo } = this.props;
    return (
      <div className="border border-primary m-1 p-2 col-7 row">
        <input
          type="checkbox"
          className="form-control col-1"
          onChange={this.props.todoComplete}
        />
        <h3 style={this._handleStyle()} className="col-5">
          {todo.title}
        </h3>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoItem;
