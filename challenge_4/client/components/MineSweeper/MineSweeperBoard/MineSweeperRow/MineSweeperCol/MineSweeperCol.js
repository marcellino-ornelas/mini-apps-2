import React, { Component } from 'react';
import classnames from 'classnames';

const MineSweeperCol = props => {
  console.log('rendering COl');
  const classes = classnames('mine-sweeper-cell', {
    'is-empty': props.cell.type === 0,
    'is-open': !props.cell.isClosed
  });

  var display = props.cell.type === -1 ? 'M' : props.cell.type;

  return (
    <div
      className={classes}
      onClick={() => props.openMineCell(props.rowId, props.colId)}
    >
      <span>{display}</span>
    </div>
  );
};

export default MineSweeperCol;
