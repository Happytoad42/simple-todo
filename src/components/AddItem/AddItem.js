import React, { Component } from 'react';
import './AddItem.css';

export default class AddItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      label: ''
    };

    this.onLabelChange = this.onLabelChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onLabelChange(event) {
    this.setState({
      label: event.target.value
    });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.onItemAdded(this.state.label);
    this.setState({
      label: ''
    });
  }

  render() {
    const { label } = this.state;

    return (
      <form className='add-item d-flex' onSubmit={this.onFormSubmit}>
        <input
          className='form-control'
          type='text'
          placeholde='Task name'
          value={label}
          onChange={this.onLabelChange}
        />
        <button className='btn btn-outline-secondary'>Add task</button>
      </form>
    );
  }
}
