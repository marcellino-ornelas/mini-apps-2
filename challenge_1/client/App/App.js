import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';

import Search from '../Search/';
import Events from '../Events/';

const TOTAL_PAGE_DISPLAY = 10;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: null,
      totalEvents: 0,
      currentPage: 0,
      q: ''
    };

    this.handlePageClick = this.handlePageClick.bind(this);
    this.search = this.search.bind(this);
  }

  handlePageClick({ selected: currentPage }) {
    this.getEventsByPage(this.state.q, currentPage + 1, res => {
      this.setState({
        currentPage,
        events: res.data,
        totalEvents: +res.headers['x-total-count'] / TOTAL_PAGE_DISPLAY
      });
    });
  }

  search(q) {
    this.getEventsByPage(q, 0, res => {
      this.setState({
        events: res.data,
        currentPage: 0
      });
    });
  }

  getEventsByPage(q, page, cb) {
    axios('/events', {
      params: {
        q: q,
        _page: page,
        _limit: TOTAL_PAGE_DISPLAY
      }
    })
      .then(cb)
      .catch(function(err) {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="">
        <Search search={this.search} />
        <Events events={this.state.events} />
        <div className="bottom-nav">
          <ReactPaginate
            nextLabel={<i className="fa fa-chevron-right" />}
            previousLabel={<i className="fa fa-chevron-left" />}
            pageCount={this.state.totalEvents}
            marginPagesDisplayed={2}
            pageRangeDisplayed={TOTAL_PAGE_DISPLAY}
            onPageChange={this.handlePageClick}
            initialPage={this.state.currentPage}
            containerClassName="pagination"
            pageClassName="pagination-page waves-effect"
            activeClassName="active"
          />
        </div>
      </div>
    );
  }
}

export default App;
