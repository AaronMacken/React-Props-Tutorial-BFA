import React, { Component } from 'react';
import './Jumbo.css';

export default class Jumbo extends Component {
    render() {

        console.log(this.props);

        return (
            <div className="jumbo">
                <h1 className="jumboTitle">
                    { this.props.title }
                </h1>
                <p>
                    { this.props.subHeading.number }
                </p>
            </div>
        )
    }
}
