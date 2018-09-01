import React, { Component } from 'react';

import MineSweeperScore from './MineSweeperScore';
import MineSweeperBoard from './MineSweeperBoard';
import store from '../../store';
import { changeBoard } from '../../actions';

const MINE = -1;
const OPEN = 0;

const ALL_AROUND_ME = [
  [0, 1], // right
  [0, -1], // left
  [1, 0], // top
  [-1, 0], // bottom
  [-1, -1], // bottom-left
  [-1, 1], // bottom-right
  [1, -1], // top-left
  [1, 1] // top-right
];

class MineSweeper extends Component {
  constructor(props) {
    super(props);

    this.openMineCell = this.openMineCell.bind(this);
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
        newBoard[i][j] = { type: OPEN, isClosed: true, row: i, col: j };
      }
    }

    this.generateMines(newBoard);
    this.props.changeBoard(newBoard);
  }

  isValidSpace(row, col) {
    return (
      row >= 0 && row < this.props.size && (col >= 0 && col < this.props.size)
    );
  }

  openMineCell(_row, _col) {
    const board = this.copyBoard();

    const openCell = (row, col) => {
      if (!this.isValidSpace(row, col)) {
        return;
      }

      const cell = board[row][col];

      if (cell.type === -1) {
        return;
      }

      cell.isClosed = false;

      if (cell.type > 0) {
        return;
      }

      var surrounding = this.getSurrounding(board, row, col);

      surrounding.forEach(item => {
        if (!item.isClosed) {
          return;
        }
        return openCell(item.row, item.col);
      });
    };

    openCell(_row, _col);
    this.props.changeBoard(board);
  }

  copyBoard() {
    return this.props.board.map(function(item) {
      return item.concat();
    });
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
        board[row][col].type = MINE;
        minesAdded++;

        const surrounding = this.getSurrounding(board, row, col);

        surrounding.forEach(item => item.type++);
      }
    }

    return board;
  }

  generateRandomNumber(size) {
    const min = 0;
    const max = Math.floor(size * size);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  getSurrounding(board, startRow, startCol) {
    return ALL_AROUND_ME.map(([row, col]) => {
      row = startRow + row;
      col = startCol + col;

      if (!this.isValidSpace(row, col)) {
        return null;
      }

      const boardRow = board[row];
      var cell = boardRow[col];

      if (cell === undefined || cell === -1) {
        return null;
      }

      return boardRow[col];
    }).filter(item => item !== null && item.type >= 0);
  }

  render() {
    return (
      <div>
        <h2>Mine Sweeper</h2>
        <MineSweeperScore />
        <MineSweeperBoard
          board={this.props.board}
          openMineCell={this.openMineCell}
        />
      </div>
    );
  }
}

export default MineSweeper;
