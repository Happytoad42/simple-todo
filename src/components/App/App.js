import React, { Component } from 'react';

import AppTitle from '../AppTitle/AppTitle';
import SearchPanel from '../SearchPanel/SearchPanel';
import TodoList from '../TodoList/TodoList';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';
import AddItem from '../AddItem/AddItem';

import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoData: [
        this.creacteTodoItem('First task'),
        this.creacteTodoItem('Second task'),
        this.creacteTodoItem('Third task')
      ],
      searchVal: '',
      filterVal: 'all'
    };

    this.onItemDelete = this.onItemDelete.bind(this);
    this.onItemAdded = this.onItemAdded.bind(this);
    this.toggleProperty = this.toggleProperty.bind(this);
    this.onToggleDone = this.onToggleDone.bind(this);
    this.onToggleImportant = this.onToggleImportant.bind(this);
    this.search = this.search.bind(this);
    this.filterItems = this.filterItems.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onFilterChange = this.onFilterChange.bind(this);
  }

  maxId = 100;

  creacteTodoItem = label => {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    };
  };

  onItemDelete(id) {
    this.setState(state => ({
      todoData: [...state.todoData].filter(item => item.id !== id)
    }));
  }

  onItemAdded(text) {
    let newItem = this.creacteTodoItem(text);
    this.setState(state => ({
      todoData: [...state.todoData, newItem]
    }));
  }

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex(el => el.id === id);

    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  }

  onToggleDone(id) {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      };
    });
  }

  onToggleImportant(id) {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      };
    });
  }

  search(items, value) {
    if (value === '') {
      return items;
    }
    return items.filter(
      item => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1
    );
  }

  filterItems(items, filterVal) {
    switch (filterVal) {
      case 'all':
        return items;
      case 'active':
        return items.filter(item => !item.done);
      case 'done':
        return items.filter(item => item.done);
      default:
        return items;
    }
  }

  onSearchChange = text => {
    this.setState({
      searchVal: text
    });
  };

  onFilterChange = text => {
    this.setState({
      filterVal: text
    });
  };

  render() {
    const { todoData, searchVal, filterVal } = this.state;

    const visibleItems = this.search(todoData, searchVal);
    const filteredItems = this.filterItems(visibleItems, filterVal);

    const countDone = todoData.filter(el => el.done).length;
    const countNotDone = todoData.length - countDone;

    return (
      <div className='todo-app'>
        <AppTitle done={countDone} toDo={countNotDone} />
        <div className='top-panel d-flex'>
          <SearchPanel onSearchChange={this.onSearchChange} />
          <ItemStatusFilter
            filterVal={this.state.filterVal}
            onFilterChange={this.onFilterChange}
          />
        </div>
        <TodoList
          todos={filteredItems}
          onDelete={id => this.onItemDelete(id)}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
        />
        <AddItem onItemAdded={this.onItemAdded} />
      </div>
    );
  }
}
