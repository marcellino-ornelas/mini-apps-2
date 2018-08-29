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
      events: [],
      totalEvents: 0,
      currentPage: 0,
      q: ''
    };

    this.handlePageClick = this.handlePageClick.bind(this);
  }

  // componentDidMount() {
  //   this.getEventsByPage(this.state.currentPage, res => {
  //     console.log();
  //     this.setState({
  //       totalEvents: +res.headers['x-total-count']
  //     });
  //   });
  // }

  handlePageClick({ selected: currentPage }) {
    console.log(currentPage);
    this.getEventsByPage(this.state.q, currentPage + 1, res => {
      this.setState({
        currentPage,
        events: res.data,
        totalEvents: +res.headers['x-total-count'] / TOTAL_PAGE_DISPLAY
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
      <div>
        <Search />
        <Events events={this.state.events} />
        <ReactPaginate
          pageCount={this.state.totalEvents}
          pageRangeDisplayed={TOTAL_PAGE_DISPLAY}
          marginPagesDisplayed={10}
          onPageChange={this.handlePageClick}
          initialPage={this.state.currentPage}
          containerClassName="pagination"
          pageClassName="pagination-page"
        />
      </div>
    );
  }
}

export default App;
