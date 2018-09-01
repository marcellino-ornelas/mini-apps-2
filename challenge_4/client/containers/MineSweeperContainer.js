import React from 'react';
import { connect } from 'react-redux';
import MineSweeper from '../components/MineSweeper';
import { changeBoard } from '../actions';

const mapStateToProps = state => ({
  board: state.board,
  size: state.size,
  mines: state.mines
});

const mapDispatchToProps = dispatch => ({
  changeBoard: board => dispatch(changeBoard(board))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MineSweeper);
