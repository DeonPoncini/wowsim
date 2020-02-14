import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import './App.css';
import {Belts, Boots} from './gear.js';
import Picker from './Picker';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            belt: 0,
            boots: 0,
        };
    }

    setBeltIndex = (i) => {
        this.setState({belt: i});
    }

    render() {
        return(
            <div className="App">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th rowspan="2">Slot</th>
                            <th rowspan="2">Item</th>
                            <th colspan="5">Base Stats</th>
                            <th colspan="4">Attack Stats</th>
                            <th colspan="5">Caster Stats</th>
                            <th colspan="5">Resistances</th>
                            <th colspan="5">Defense Stats</th>
                            <th colspan="3">Weapon Stats</th>
                        </tr>
                        <tr>
                            <th>Strength</th>
                            <th>Agility</th>
                            <th>Intellect</th>
                            <th>Stamina</th>
                            <th>Spirit</th>
                            <th>Hit %</th>
                            <th>Crit %</th>
                            <th>Melee AP</th>
                            <th>Ranged AP</th>
                            <th>Spell Power</th>
                            <th>Healing</th>
                            <th>Spell Crit</th>
                            <th>MP5</th>
                            <th>Spell Pen</th>
                            <th>Fire</th>
                            <th>Frost</th>
                            <th>Arcane</th>
                            <th>Nature</th>
                            <th>Shadow</th>
                            <th>Armor</th>
                            <th>Defense</th>
                            <th>Block</th>
                            <th>Dodge</th>
                            <th>Parry</th>
                            <th>Min Damage</th>
                            <th>Max Damage</th>
                            <th>Speed</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><Picker slot="Belt" gear={Belts}
                                callback={this.setBeltIndex}/></td>
                            <td>{Belts[this.state.belt].name}</td>
                            <td>0</td>
                            <td>1</td>
                            <td>0</td>
                            <td>11</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }

}

export default App;
