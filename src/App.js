import './App.css';
import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import GearSelect from './GearSelect';

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Tabs defaultActiveKey="character" id="top-level-tabs">
                <Tab eventKey="character" title="Character">
                    <div>Character info here</div>
                </Tab>
                <Tab eventKey="gear" title="Gear">
                    <GearSelect />
                </Tab>
                <Tab eventKey="simulator" title="Simulator">
                    <div>Simulator</div>
                </Tab>
            </Tabs>
        );
    }

}

export default App;
