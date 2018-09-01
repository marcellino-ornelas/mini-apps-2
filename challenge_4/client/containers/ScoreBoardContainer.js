import React from 'react';
import { connect } from 'react-redux';
import ScoreBoard from './../components/ScoreBoard';
// import handleSearchChange from '../actions/search.js';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  // propname: param => dispatch(action(param))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScoreBoard);
