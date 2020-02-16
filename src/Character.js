import React, { Component } from 'react';
import { ButtonToolbar, Dropdown, DropdownButton, Table } from 'react-bootstrap';
import * as gear from './gear/gear.js';
import * as data from './data.js';

class Character extends Component {

    constructor(props) {
        super(props);

        this.state = {
            clazz: "Hunter",
            race: "Night Elf",
        };

        this.health = 0;
        this.mana = 0;
        this.stats = JSON.parse(JSON.stringify(gear.NoneItem));
        this.calculateStats();
    }

    calculateStats = () => {
        // stats are the base stats + the item stats we have
        let base = data.base_stats.get(this.state.clazz).get(this.state.race);
        // total base stats
        let strength = base.strength + this.props.item.base.strength;
        let agility = base.agility + this.props.item.base.agility;
        let intellect = base.intellect + this.props.item.base.intellect;
        let stamina = base.stamina + this.props.item.base.stamina;
        let spirit = base.spirit + this.props.item.base.spirit;

        // calculate health totals
        let base_hp = data.base_health.get(this.state.clazz);
        let hp = base_hp + stamina*10;

        // calculate mana totals
        let mp = 0;
        if (this.state.clazz === data.clazz.ROGUE) {
            mp = 100;
        } else if (this.state.clazz === data.clazz.WARRIOR) {
            mp = 0;
            return (<div>RAGE 0</div>);
        } else {
            let base_mp = data.base_mana.get(this.state.clazz);
            mp = base_mp + intellect*15;
        }

        // assign the final values
        this.stats.base.strength = strength;
        this.stats.base.agility = agility;
        this.stats.base.intellect = intellect;
        this.stats.base.stamina = stamina;
        this.stats.base.spirit = spirit;
        this.health = hp;
        this.mana = mp;
    }

    onClassSelect = (key, e) =>  {
        this.setState({clazz: data.clazz[key],
            race: data.class_to_race.get(data.clazz[key])[0]});
        this.calculateStats();
    }
    onRaceSelect = (key, e) =>  {
        this.setState({race: key});
        this.calculateStats();
    }

    render() {
        // get the classes
        let classes = [];
        for (const property in data.clazz) {
            classes.push(
                <Dropdown.Item
                    key={property}
                    eventKey={property}
                    onSelect={this.onClassSelect}>
                    {data.clazz[property]}
                </Dropdown.Item>
            );
        }
        // get the races
        let races = [];
        let mapped_races = data.class_to_race.get(this.state.clazz);
        for (let i = 0; i < mapped_races.length; i++) {
            races.push(
                <Dropdown.Item
                    key={i}
                    eventKey={mapped_races[i]}
                    onSelect={this.onRaceSelect}>
                    {mapped_races[i]}
                </Dropdown.Item>
            );
        }
        let mp_label = "MP";
        if (this.state.clazz === data.clazz.ROGUE) {
            mp_label = "ENERGY";
        } else if (this.state.clazz === data.clazz.WARRIOR) {
            mp_label = "RAGE";
        }
        this.calculateStats();
        return(
            <div className="Character">
            <ButtonToolbar>
            <DropdownButton title="Class" variant="primary" key="class">
                {classes}
            </DropdownButton>
            <DropdownButton title="Race" variant="primary" key="race">
                {races}
            </DropdownButton>
            </ButtonToolbar>
            <Table striped bordered hover>
            <tbody>
                <tr>
                    <th>Overview</th>
                    <td>{this.state.race}</td>
                    <td>{this.state.clazz}</td>
                    <td>HP {this.health}</td>
                    <td>{mp_label} {this.mana}</td>
                </tr>
                <tr>
                    <th rowSpan="2">Base</th>
                    <th>Strength</th>
                    <th>Agility</th>
                    <th>Intellect</th>
                    <th>Stamina</th>
                    <th>Spirit</th>
                </tr>
                <tr>
                    <td>{this.stats.base.strength}</td>
                    <td>{this.stats.base.agility}</td>
                    <td>{this.stats.base.intellect}</td>
                    <td>{this.stats.base.stamina}</td>
                    <td>{this.stats.base.spirit}</td>
                </tr>
            </tbody>
            </Table>
            </div>
        );
    }
}

export default Character;
