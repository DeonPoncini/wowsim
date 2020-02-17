import './App.css';
import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Character from './Character';
import GearSelect from './GearSelect';
import HunterSim from './HunterSim';
import {NoneItem} from './gear/gear.js';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            character: {clazz: "", race: "", health: 0, mana: 0,
                stats: NoneItem, weapons: {main: NoneItem,
                    off: NoneItem, ranged: NoneItem}},
        };
    }

    updateGear = (item, weapons) => {
        let character = {
            clazz: this.state.character.clazz,
            race: this.state.character.race,
            health: this.state.character.health,
            mana: this.state.character.mana,
            stats: item,
            weapons: weapons,
        };
        this.setState({
            character: character,
        });
    }

    updateCharacter = (character) => {
        if (character === this.state.character) {
            return;
        }
        this.setState({
            character: character,
        });
    }

    render() {
        return(
            <Tabs defaultActiveKey="character" id="top-level-tabs">
                <Tab eventKey="character" title="Character">
                    <Character item={this.state.character.stats}
                        weapons={this.state.character.weapons}
                        updateCharacter={this.updateCharacter}/>
                </Tab>
                <Tab eventKey="gear" title="Gear">
                    <GearSelect updateGear={this.updateGear}/>
                </Tab>
                <Tab eventKey="simulator" title="Simulator">
                    <HunterSim character={this.state.character}/>
                </Tab>
            </Tabs>
        );
    }
}

export default App;
