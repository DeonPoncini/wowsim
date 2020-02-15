import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import './App.css';
import {Helms, HelmEnchants} from './gear/helms.js';
import {Belts} from './gear/belts.js';
import {Boots} from './gear/boots.js';
import Picker from './Picker';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            helm: 0,
            helmenchant: 0,
            belt: 0,
            boots: 0,
        };
    }

    setHelmIndex = (i) => { this.setState({helm: i}); }
    setHelmEnchantIndex = (i) => { this.setState({helmenchant: i}); }
    setBeltIndex = (i) => { this.setState({belt: i}); }
    setBootIndex = (i) => { this.setState({boots: i}); }

    gearRow = (slot, gear, picker, i) => {
        return(
            <tr>
                <td><Picker slot={slot} gear={gear} callback={picker}/></td>
                <td>{gear[i].name}</td>
                <td>{gear[i].base.strength}</td>
                <td>{gear[i].base.agility}</td>
                <td>{gear[i].base.intellect}</td>
                <td>{gear[i].base.stamina}</td>
                <td>{gear[i].base.spirit}</td>
                <td>{gear[i].attack.hit}</td>
                <td>{gear[i].attack.crit}</td>
                <td>{gear[i].attack.map}</td>
                <td>{gear[i].attack.rap}</td>
                <td>{gear[i].caster.spellpower}</td>
                <td>{gear[i].caster.healing}</td>
                <td>{gear[i].caster.spellcrit}</td>
                <td>{gear[i].caster.mp5}</td>
                <td>{gear[i].caster.spellpen}</td>
                <td>{gear[i].resistance.fire}</td>
                <td>{gear[i].resistance.frost}</td>
                <td>{gear[i].resistance.arcane}</td>
                <td>{gear[i].resistance.nature}</td>
                <td>{gear[i].resistance.shadow}</td>
                <td>{gear[i].defense.armor}</td>
                <td>{gear[i].defense.defense}</td>
                <td>{gear[i].defense.block}</td>
                <td>{gear[i].defense.dodge}</td>
                <td>{gear[i].defense.parry}</td>
                <td>{gear[i].weapon.dmgmin}</td>
                <td>{gear[i].weapon.dmgmax}</td>
                <td>{gear[i].weapon.speed}</td>
            </tr>
        );
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
                       {this.gearRow("Helm", Helms, this.setHelmIndex,
                           this.state.helm)}
                       {this.gearRow("Enchant", HelmEnchants,
                           this.setHelmEnchantIndex, this.state.helmenchant)}
                       {this.gearRow("Belt", Belts, this.setBeltIndex,
                           this.state.belt)}
                       {this.gearRow("Boots", Boots, this.setBootIndex,
                           this.state.boots)}
                    </tbody>
                </Table>
            </div>
        );
    }

}

export default App;
