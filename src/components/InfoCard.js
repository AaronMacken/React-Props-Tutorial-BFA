import React, { Component } from 'react';
import './InfoCard.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class InfoCard extends Component {
    render() {
        return (
            <div className="cardWrapper">
                <FontAwesomeIcon icon={this.props.icon} className="icon" />
                <h3>{ this.props.title }</h3>
                <p>{ this.props.subText }</p>
            </div>
        )
    }
}
