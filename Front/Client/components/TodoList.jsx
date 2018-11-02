import React from "react";
import TodoListItem from "./TodoListItem.jsx";

export default function TodoList(props) {
  "use strict";

  function renderTodoItem(todo){
    return <TodoListItem todo={todo} key={todo.id}></TodoListItem>
  }

  return <div className="todo-list">
      <ul>
        { props.todos.map(renderTodoItem) }
      </ul>
    </div>;
}