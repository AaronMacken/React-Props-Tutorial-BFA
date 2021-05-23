import React, { Component } from 'react';

import Home from './pages/Home';

import { faBomb, faAward, faAdjust } from '@fortawesome/free-solid-svg-icons'

const CARD_DATA = [
  {
    title: 'Lorem',
    subText: 'card one',
    icon: faBomb
  },
  {
    title: 'Ipsum',
    subText: 'card two',
    icon: faAward
  },
  {
    title: 'Dolor',
    subText: 'card three',
    icon: faAdjust
  }
];

export default class App extends Component {
  render() {
    return (
      <div>
        <Home cardData={CARD_DATA} />
      </div>
    )
  }
}
