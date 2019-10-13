import React, { Component } from 'react';
import './TodoListItem.css';

export default class TodoListItem extends Component {
  render() {
    const {
      label,
      onDelete,
      onToggleImportant,
      onToggleDone,
      done,
      important
    } = this.props;
    let classNames = 'todo-list-item d-flex';
    if (done) {
      classNames += ' done';
    }

    if (important) {
      classNames += ' important';
    }

    return (
      <span className={classNames}>
        <span onClick={onToggleDone} className='todo-list-item-label'>
          {label}
        </span>
        <button
          type='button'
          onClick={onDelete}
          className='btn btn-outline-danger btn-sm'
        >
          <i className='fa fa-trash-o' />
        </button>
        <button
          type='button'
          onClick={onToggleImportant}
          className='btn btn-outline-success btn-sm'
        >
          <i className='fa fa-exclamation' />
        </button>
      </span>
    );
  }
}
