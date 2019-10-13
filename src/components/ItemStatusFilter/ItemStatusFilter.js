import React from 'react';
import './ItemStatusFilter.css';

export default class ItemStatusFilter extends React.Component {
  buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' }
  ];
  render() {
    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = this.props.filterVal === name;
      const clazz = isActive ? 'btn-info' : 'btn-outline-secondary';
      return (
        <button
          type='button'
          className={`btn ${clazz}`}
          onClick={() => this.props.onFilterChange(name)}
        >
          {label}
        </button>
      );
    });

    return <div className='btn-group'>{buttons}</div>;
  }
}
