import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';
import './TodoList.css';

const TodoList = ({ todos, onDelete, onToggleImportant, onToggleDone }) => {
  const elements = todos.map(item => {
    const { id } = item;
    return (
      <li key={id} className='list-group-item'>
        <TodoListItem
          {...item}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
          onDelete={() => onDelete(id)}
        />
      </li>
    );
  });

  return <ul className='list-group todo-list'>{elements}</ul>;
};

export default TodoList;
