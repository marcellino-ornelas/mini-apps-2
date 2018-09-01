import React, { Component } from 'react';

import MineSweeperScore from './MineSweeperScore';
import MineSweeperBoard from './MineSweeperBoard';
import store from '../../store';
import { changeBoard } from '../../actions';

const MINE = 1;
const OPEN = 0;

class MineSweeper extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.makeBoard();
  }

  makeBoard() {
    const { size } = this.props;
    const newBoard = new Array(size);
    for (let i = 0; i < size; i++) {
      newBoard[i] = new Array(size);
      for (let j = 0; j < size; j++) {
        newBoard[i][j] = OPEN;
      }
    }

    this.generateMines(newBoard);
    console.log('board', newBoard);
    this.props.changeBoard(newBoard);
  }

  generateMines(board) {
    const { size, mines } = this.props;
    const seen = {};
    let minesAdded = 0;

    while (minesAdded < mines) {
      const boardLinearPos = this.generateRandomNumber(size);

      if (seen[boardLinearPos]) {
        continue;
      } else {
        const row = Math.floor(boardLinearPos / 10);
        const col = boardLinearPos % 10;
        console.log(boardLinearPos, row, col);
        board[row][col] = MINE;
        minesAdded++;
      }
    }

    return board;
  }

  generateRandomNumber(size) {
    const min = 0;
    const max = Math.floor(size * size);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  render() {
    console.log(this.props.board);
    return (
      <div>
        <h2>Mine Sweeper</h2>
        <MineSweeperScore />
        <MineSweeperBoard board={this.props.board} />
      </div>
    );
  }
}

export default MineSweeper;
