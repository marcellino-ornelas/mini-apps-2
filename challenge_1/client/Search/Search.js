import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      q: '',
      searchActive: false
    };

    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {}

  handleSearchInput(e) {
    this.props.search(e.target.value);
    this.setState({
      q: e.target.value
    });
  }

  handleSearch(e) {
    e.preventDefault();
    this.props.search(this.state.q);
    this.setState({ q: '' });
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <form onSubmit={this.handleSearch}>
            <div className="input-field">
              <input
                id="search"
                type="search"
                required
                value={this.state.q}
                onChange={this.handleSearchInput}
              />
              <label className="label-icon" htmlFor="search">
                <i className="material-icons fa fa-search" />
              </label>
              <i className="material-icons fa fa-close" />
            </div>
          </form>
        </div>
      </nav>
    );
  }
}

export default Search;
