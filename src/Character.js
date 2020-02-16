import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import * as gear from './gear/gear.js';

const clazz = {
    DRUID: 'Druid',
    HUNTER: 'Hunter',
    MAGE: 'Mage',
    PALADIN: 'Paladin',
    PRIEST: 'Priest',
    ROGUE: 'Rogue',
    SHAMAN: 'Shaman',
    WARLOCK: 'Warlock',
    WARRIOR: 'Warrior',
}

const race = {
    DWARF: 'Dwarf',
    GNOME: 'Gnome',
    HUMAN: 'Human',
    NIGHTELF: 'Night Elf',
    ORC: 'Orc',
    TAUREN: 'Tauren',
    TROLL: 'Troll',
    UNDEAD: 'Undead',
}

const class_to_race = new Map([
    [clazz.DRUID, [race.NIGHTELF, race.TAUREN]],
    [clazz.HUNTER, [race.DWARF, race.NIGHTELF, race.ORC,
        race.TAUREN, race.TROLL]],
    [clazz.MAGE, [race.GNOME, race.HUMAN, race.TROLL, race.UNDEAD]],
    [clazz.PALADIN, [race.DWARF, race.HUMAN]],
    [clazz.PRIEST, [race.DWARF, race.HUMAN, race.NIGHTELF,
        race.TROLL, race.UNDEAD]],
    [clazz.ROGUE, [race.DWARF, race.GNOME, race.HUMAN, race.NIGHTELF,
        race.ORC, race.TROLL, race.UNDEAD]],
    [clazz.SHAMAN, [race.ORC, race.TAUREN, race.TROLL]],
    [clazz.WARLOCK, [race.GNOME, race.HUMAN, race.ORC, race.UNDEAD]],
    [clazz.WARRIOR, [race.DWARF, race.GNOME, race.HUMAN, race.NIGHTELF,
        race.ORC, race.TAUREN, race.TROLL, race.UNDEAD]],
]);

const base_health = new Map([
    [clazz.DRUID, 1483],
    [clazz.HUNTER, 1467],
    [clazz.MAGE, 1360],
    [clazz.PALADIN, 1381],
    [clazz.PRIEST, 1387],
    [clazz.ROGUE, 1523],
    [clazz.SHAMAN, 1280],
    [clazz.WARLOCK, 1414],
    [clazz.WARRIOR, 1689],
]);

const base_mana = new Map([
    [clazz.DRUID, 1244],
    [clazz.HUNTER, 1720],
    [clazz.MAGE, 1273],
    [clazz.PALADIN, 1512],
    [clazz.PRIEST, 1436],
    [clazz.SHAMAN, 1520],
    [clazz.WARLOCK, 1373],
]);

const base_stats = new Map([
    [clazz.DRUID, new Map([
        [race.NIGHTELF, new gear.BaseStats(62,65,100,69,110)],
        [race.TAUREN, new gear.BaseStats(70,55,95,72,112)],
    ])],
    [clazz.HUNTER, new Map([
        [race.DWARF, new gear.BaseStats(57,121,64,93,69)],
        [race.NIGHTELF, new gear.BaseStats(52,130,65,89,70)],
        [race.ORC, new gear.BaseStats(58,122,62,92,73)],
        [race.TAUREN, new gear.BaseStats(60,120,60,92,72)],
        [race.TROLL, new gear.BaseStats(56,127,61,91,71)],
    ])],
    [clazz.MAGE, new Map([
        [race.GNOME, new gear.BaseStats(25,38,133,44,120)],
        [race.HUMAN, new gear.BaseStats(30,35,125,45,126)],
        [race.TROLL, new gear.BaseStats(31,37,121,26,121)],
        [race.UNDEAD, new gear.BaseStats(29,33,123,46,125)],
    ])],
    [clazz.PALADIN, new Map([
        [race.DWARF, new gear.BaseStats(107,61,69,103,74)],
        [race.HUMAN, new gear.BaseStats(105,65,70,100,78)],
    ])],
    [clazz.PRIEST, new Map([
        [race.DWARF, new gear.BaseStats(37,36,119,53,124)],
        [race.HUMAN, new gear.BaseStats(35,40,120,50,131)],
        [race.NIGHTELF, new gear.BaseStats(32,45,120,49,125)],
        [race.TROLL, new gear.BaseStats(36,42,116,51,126)],
        [race.UNDEAD, new gear.BaseStats(34,38,118,51,130)],
    ])],
    [clazz.ROGUE, new Map([
        [race.DWARF, new gear.BaseStats(82,126,34,78,49)],
        [race.GNOME, new gear.BaseStats(75,133,40,74,50)],
        [race.HUMAN, new gear.BaseStats(80,130,35,75,52)],
        [race.NIGHTELF, new gear.BaseStats(77,135,35,74,50)],
        [race.ORC, new gear.BaseStats(83,127,32,77,53)],
        [race.TROLL, new gear.BaseStats(81,132,31,76,51)],
        [race.UNDEAD, new gear.BaseStats(79,128,33,76,55)],
    ])],
    [clazz.SHAMAN, new Map([
        [race.ORC, new gear.BaseStats(88,52,87,97,103)],
        [race.TAUREN, new gear.BaseStats(90,50,85,97,102)],
        [race.TROLL, new gear.BaseStats(86,57,86,96,101)],
    ])],
    [clazz.WARLOCK, new Map([
        [race.GNOME, new gear.BaseStats(40,53,119,64,115)],
        [race.HUMAN, new gear.BaseStats(45,50,110,65,120)],
        [race.ORC, new gear.BaseStats(48,47,107,66,118)],
        [race.UNDEAD, new gear.BaseStats(44,48,108,66,120)],
    ])],
    [clazz.WARRIOR, new Map([
        [race.DWARF, new gear.BaseStats(122,76,29,113,44)],
        [race.GNOME, new gear.BaseStats(115,83,35,109,45)],
        [race.HUMAN, new gear.BaseStats(120,80,30,110,47)],
        [race.NIGHTELF, new gear.BaseStats(117,85,30,109,45)],
        [race.ORC, new gear.BaseStats(123,77,27,112,48)],
        [race.TAUREN, new gear.BaseStats(125,75,25,112,47)],
        [race.TROLL, new gear.BaseStats(121,82,26,111,46)],
        [race.UNDEAD, new gear.BaseStats(119,78,28,111,50)],
    ])],
]);

class Character extends Component {

    constructor(props) {
        super(props);

        this.state = {
            clazz: "HUNTER",
            race: "Night Elf",
            health: 0,
            mana: 0,
            stats: gear.NoneItem,
        };
    }

    onClassSelect = (key, e) =>  {
        console.log(key);
        this.setState({clazz: key,
        race: class_to_race.get(clazz[key])[0]});
    }
    onRaceSelect = (key, e) =>  { this.setState({race: key}); }

    render() {
        // get the classes
        let classes = [];
        for (const property in clazz) {
            classes.push(
                <Dropdown.Item
                    key={property}
                    eventKey={property}
                    onSelect={this.onClassSelect}>
                    {clazz[property]}
                </Dropdown.Item>
            );
        }
        // get the races
        let races = [];
        let mapped_races = class_to_race.get(clazz[this.state.clazz]);
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
        // get the base stats for that combination
        let base = base_stats.get(clazz[this.state.clazz]).get(this.state.race);
        return(
            <div className="Character">
            <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-class">
                    Class
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {classes}
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-race">
                    Race
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {races}
                </Dropdown.Menu>
            </Dropdown>
            <div>{this.state.clazz}</div>
            <div>{this.state.race}</div>
            <div>Str: {base.strength}</div>
            <div>Agi: {base.agility}</div>
            <div>Int: {base.intellect}</div>
            <div>Sta: {base.stamina}</div>
            <div>Spirit: {base.spirit}</div>
            </div>
        );
    }
}

export default Character;
