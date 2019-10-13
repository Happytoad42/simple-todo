import React, { Component } from 'react';
import './SearchPanel.css';

class SearchPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      label: ''
    };

    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange = event => {
    const label = event.target.value;
    this.setState({ label }, () => this.props.onSearchChange(this.state.label));
  };

  render() {
    const searchText = 'Type to search';

    return (
      <input
        className='form-control search-input'
        value={this.state.label}
        placeholder={searchText}
        onChange={this.onSearchChange}
      />
    );
  }
}

export default SearchPanel;
