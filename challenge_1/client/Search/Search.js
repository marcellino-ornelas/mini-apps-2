import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      q: ''
    };

    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {}

  handleSearchInput(e) {
    this.setState({
      q: e.target.value
    });
  }

  handleSearch() {
    this.props.search(this.state.q);
    this.setState({ q: '' });
  }

  render() {
    return (
      <div>
        {/*<input
          type="text"
          value={this.state.q}
          onChange={this.handleSearchInput}
        />
        <button className="" onClick={this.handleSearch}>
          search
        </button>*/}
        <div className="row">
          <form className="col s12">
            <div className="input-field col s6">
              <i
                className="material-icons prefix fa fa-search"
                onClick={this.handleSearch}
              />
              <input
                id="icon_prefix"
                type="text"
                value={this.state.q}
                onChange={this.handleSearchInput}
              />
              <label htmlFor="icon_prefix">Search</label>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Search;
