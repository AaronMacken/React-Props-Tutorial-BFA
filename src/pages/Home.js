import React, { Component } from 'react';
import './Home.css';

import Jumbo from '../components/Jumbo';
import InfoCard from '../components/InfoCard';

const EXAMPLE_PROP = { number: 123 }

export default class Home extends Component {
    renderInfoCards = () => {
        return this.props.cardData.map((data, index)=> (
            <InfoCard title={data.title} subText={data.subText} icon={data.icon} key={index} />
        ))
    }

    render() {
        const infoCards = this.renderInfoCards();

        return (
            <div>
                <Jumbo title="I am a title!" subHeading={EXAMPLE_PROP} />
                <h2>Lorem ipsum dolor sit amet.</h2>
                <div className="infoCardsContainer">
                    { infoCards }
                </div>
            </div>
        )
    }
}
