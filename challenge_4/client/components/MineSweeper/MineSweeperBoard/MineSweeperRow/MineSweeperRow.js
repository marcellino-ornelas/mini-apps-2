import React, { Component } from 'react';
import MineSweeperCol from './MineSweeperCol';

const MineSweeperRow = props => {
  return (
    <div className="mine-sweeper-row">
      {props.row.map((cell, cellIndex) => (
        <MineSweeperCol
          cell={cell}
          key={cellIndex}
          colId={cellIndex}
          rowId={props.rowId}
          openMineCell={props.openMineCell}
        />
      ))}
    </div>
  );
};

export default MineSweeperRow;
