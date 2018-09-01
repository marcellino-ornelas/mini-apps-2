import React, { Component } from 'react';

import MineSweeper from '../../containers/MineSweeperContainer';
import ScoreBoard from '../../containers/ScoreBoardContainer';

import store from '../../store';
import { changeBoard } from '../../actions';

class App extends Component {
  // componentDidMount() {
  //   store.dispatch(changeBoard());
  // }

  render() {
    return (
      <div>
        <MineSweeper />
        <ScoreBoard />
      </div>
    );
  }
}

export default App;
