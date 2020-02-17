import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import Autoshot from './spells/autoshot.js';

class HunterSim extends Component {

    runSim = () => {
        let autoshot = new Autoshot(this.props.character.weapons.ranged);
        for (let i = 0; i < 1000; i++) {
            autoshot.cast();
            autoshot.tick(this.props.character);
        }
    }

    render() {
        return (
            <div key="simulator">
            <Button key="start" variant="primary" onClick={this.runSim} >
                Start
            </Button>
            </div>
        );
    }
}

export default HunterSim;
