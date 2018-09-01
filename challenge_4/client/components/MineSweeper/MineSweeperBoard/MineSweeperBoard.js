import React, { Component } from 'react';

import MineSweeperRow from './MineSweeperRow';

const MineSweeperBoard = props => {
  return (
    <div className="mine-sweeper-board">
      {props.board.map((row, rowId) => (
        <MineSweeperRow
          key={rowId}
          rowId={rowId}
          row={row}
          openMineCell={props.openMineCell}
        />
      ))}
    </div>
  );
};

export default MineSweeperBoard;
