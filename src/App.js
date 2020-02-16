import './App.css';
import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Character from './Character';
import GearSelect from './GearSelect';
import {NoneItem} from './gear/gear.js';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            item: NoneItem,
            weapons: {main: NoneItem, off: NoneItem, ranged: NoneItem},
        };
    }

    updateGear = (item, weapons) => {
        this.setState({
            item: item, weapons: weapons,
        });
    }

    render() {
        return(
            <Tabs defaultActiveKey="character" id="top-level-tabs">
                <Tab eventKey="character" title="Character">
                    <Character item={this.state.item}
                        weapons={this.state.weapons} />
                </Tab>
                <Tab eventKey="gear" title="Gear">
                    <GearSelect updateGear={this.updateGear}/>
                </Tab>
                <Tab eventKey="simulator" title="Simulator">
                    <div>Simulator</div>
                </Tab>
            </Tabs>
        );
    }

}

export default App;
