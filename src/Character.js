import React, { Component } from 'react';
import { ButtonToolbar, Dropdown,
    DropdownButton, Jumbotron, Table } from 'react-bootstrap';
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
        this.skills = JSON.parse(JSON.stringify(gear.WeaponSkillZero));
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

        // calculate attack stats
        let hit = this.props.item.attack.hit;
        let crit = this.props.item.attack.crit +
            agility/data.agi_per_crit.get(this.state.clazz);
        if (crit > 100) { crit = 100; }
        let map = this.props.item.attack.map +
            agility*data.map_per_agi.get(this.state.clazz);
        let rap = this.props.item.attack.rap +
            agility*data.rap_per_agi.get(this.state.clazz);

        // calculate caster stats
        let spellpower = this.props.item.caster.spellpower;
        let healing = this.props.item.caster.healing;
        let spellcrit = this.props.item.caster.spellcrit;
        let int_div = data.int_per_spellcrit.get(this.state.clazz);
        if (int_div > 0) {
            spellcrit += intellect/int_div;
        }
        let mp5 = this.props.item.caster.mp5;
        let spellpen = this.props.item.caster.spellpen;

        // calculate resistances
        let fire = this.props.item.resistance.fire;
        let frost = this.props.item.resistance.frost;
        let arcane = this.props.item.resistance.arcane;
        let nature = this.props.item.resistance.nature;
        let shadow = this.props.item.resistance.shadow;

        // calculate defense stats
        let armor = this.props.item.defense.armor + agility*data.armor_per_agi;
        let defense = data.base_skill + this.props.item.defense.defense;
        let block = this.props.item.defense.block +
            (defense-data.base_skill)*data.defense_multiplier;
        let str_div = data.str_per_block.get(this.state.clazz);
        if (str_div > 0) {
            block += strength/str_div;
        }
        let dodge = this.props.item.defense.dodge +
            (defense-data.base_skill)*data.defense_multiplier +
            agility/data.agi_per_dodge.get(this.state.clazz);
        let parry = this.props.item.defense.parry +
            (defense-data.base_skill)*data.defense_multiplier;

        // calculate health totals
        let base_hp = data.base_health.get(this.state.clazz);
        let hp = base_hp + stamina*data.hp_per_sta;

        // calculate mana totals
        let mp = 0;
        if (this.state.clazz === data.clazz.ROGUE) {
            mp = 100;
        } else if (this.state.clazz === data.clazz.WARRIOR) {
            mp = 0;
        } else {
            let base_mp = data.base_mana.get(this.state.clazz);
            mp = base_mp + intellect*data.mp_per_int;
        }

        // calculate racial abilities on top of this
        switch (this.state.race) {
            case data.race.DWARF:
                frost += 10;
                this.skills.gun += 5;
                break;
            case data.race.GNOME:
                arcane += 10;
                intellect *= 1.05;
                break;
            case data.race.HUMAN:
                this.skills.h1mace += 5;
                this.skills.h2mace += 5;
                this.skills.h1sword += 5;
                this.skills.h2sword += 5;
                spirit *= 1.05;
                break;
            case data.race.NIGHTELF:
                nature += 10;
                dodge += 1;
                break;
            case data.race.ORC:
                this.skills.h1axe += 5;
                this.skills.h2axe += 5;
                break;
            case data.race.TAUREN:
                hp *= 1.05;
                nature += 10;
                break;
            case data.race.TROLL:
                this.skills.bow += 5;
                this.skills.thrown += 5;
                break;
            case data.race.UNDEAD:
                shadow += 10;
                break;
            default: break;
        }

        // adjust hit and crit rates based on weapon skill

        // assign the final values
        this.stats.base.strength = strength;
        this.stats.base.agility = agility;
        this.stats.base.intellect = intellect;
        this.stats.base.stamina = stamina;
        this.stats.base.spirit = spirit;
        this.stats.attack.hit = hit;
        this.stats.attack.crit = crit;
        this.stats.attack.map = map;
        this.stats.attack.rap = rap;
        this.stats.caster.spellpower = spellpower;
        this.stats.caster.healing = healing;
        this.stats.caster.spellcrit = spellcrit;
        this.stats.caster.mp5 = mp5;
        this.stats.caster.spellpen = spellpen;
        this.stats.resistance.fire = fire;
        this.stats.resistance.frost = frost;
        this.stats.resistance.arcane = arcane;
        this.stats.resistance.nature = nature;
        this.stats.resistance.shadow = shadow;
        this.stats.defense.armor = armor;
        this.stats.defense.defense = defense;
        this.stats.defense.block = block;
        this.stats.defense.dodge = dodge;
        this.stats.defense.parry = parry;
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
            <Jumbotron>
                <h1>{this.state.race} {this.state.clazz}</h1>
                <h3>HP {this.health} {mp_label} {this.mana}</h3>
            </Jumbotron>
            <Table striped bordered hover>
            <tbody>
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
                <tr>
                    <th rowSpan="2">Attack</th>
                    <th>Hit %</th>
                    <th>Crit %</th>
                    <th>Melee AP</th>
                    <th>Ranged AP</th>
                </tr>
                <tr>
                    <td>{this.stats.attack.hit}</td>
                    <td>{this.stats.attack.crit}</td>
                    <td>{this.stats.attack.map}</td>
                    <td>{this.stats.attack.rap}</td>
                </tr>
                <tr>
                    <th rowSpan="2">Caster</th>
                    <th>Spell Power</th>
                    <th>Healing</th>
                    <th>Spell Crit %</th>
                    <th>MP5</th>
                    <th>Spell Penetration</th>
                </tr>
                <tr>
                    <td>{this.stats.caster.spellpower}</td>
                    <td>{this.stats.caster.healing}</td>
                    <td>{this.stats.caster.spellcrit}</td>
                    <td>{this.stats.caster.mp5}</td>
                    <td>{this.stats.caster.spellpen}</td>
                </tr>
                <tr>
                    <th rowSpan="2">Resistances</th>
                    <th>Fire</th>
                    <th>Frost</th>
                    <th>Arcane</th>
                    <th>Nature</th>
                    <th>Shadow</th>
                </tr>
                <tr>
                    <td>{this.stats.resistance.fire}</td>
                    <td>{this.stats.resistance.frost}</td>
                    <td>{this.stats.resistance.arcane}</td>
                    <td>{this.stats.resistance.nature}</td>
                    <td>{this.stats.resistance.shadow}</td>
                </tr>
                <tr>
                    <th rowSpan="2">Defense</th>
                    <th>Armor</th>
                    <th>Defense</th>
                    <th>Block</th>
                    <th>Dodge</th>
                    <th>Parry</th>
                </tr>
                <tr>
                    <td>{this.stats.defense.armor}</td>
                    <td>{this.stats.defense.defense}</td>
                    <td>{this.stats.defense.block}</td>
                    <td>{this.stats.defense.dodge}</td>
                    <td>{this.stats.defense.parry}</td>
                </tr>
            </tbody>
            </Table>
            <Table striped bordered hover>
            <tbody>
                <tr>
                    <th rowSpan="4">Weapon</th>
                    <th>Slot</th>
                    <th>Type</th>
                    <th>Damage Min</th>
                    <th>Damage Max</th>
                    <th>Speed</th>
                </tr>
                <tr>
                    <td>Main Hand</td>
                    <td>{this.props.weapons.main.weapon.type}</td>
                    <td>{this.props.weapons.main.weapon.dmgmin}</td>
                    <td>{this.props.weapons.main.weapon.dmgmax}</td>
                    <td>{this.props.weapons.main.weapon.speed}</td>
                </tr>
                <tr>
                    <td>Off Hand</td>
                    <td>{this.props.weapons.off.weapon.type}</td>
                    <td>{this.props.weapons.off.weapon.dmgmin}</td>
                    <td>{this.props.weapons.off.weapon.dmgmax}</td>
                    <td>{this.props.weapons.off.weapon.speed}</td>
                </tr>
                <tr>
                    <td>Ranged</td>
                    <td>{this.props.weapons.ranged.weapon.type}</td>
                    <td>{this.props.weapons.ranged.weapon.dmgmin}</td>
                    <td>{this.props.weapons.ranged.weapon.dmgmax}</td>
                    <td>{this.props.weapons.ranged.weapon.speed}</td>
               </tr>
            </tbody>
            </Table>
            </div>
        );
    }
}

export default Character;
