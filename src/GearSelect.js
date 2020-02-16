import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import {Head, HeadEnchants} from './gear/head.js';
import {Neck} from './gear/neck.js';
import {Shoulders, ShoulderEnchants} from './gear/shoulders.js';
import {Back, BackEnchants} from './gear/back.js';
import {Chest, ChestEnchants} from './gear/chest.js';
import {Wrists, WristEnchants} from './gear/wrists.js';
import {Weapons, WeaponEnchants} from './gear/weapons.js';
import {Ranged, RangedEnchants} from './gear/ranged.js';
import {Hands, HandEnchants} from './gear/hands.js';
import {Waist} from './gear/waist.js';
import {Legs, LegEnchants} from './gear/legs.js';
import {Feet, FeetEnchants} from './gear/feet.js';
import {Fingers} from './gear/finger.js';
import {Trinkets} from './gear/trinkets.js';
import Picker from './Picker';

class GearSelect extends Component {

    constructor(props) {
        super(props);

        this.state = {
            head: 0,
            headenchant: 0,
            neck: 0,
            shoulders: 0,
            shoulderenchant: 0,
            back: 0,
            backenchant: 0,
            chest: 0,
            chestenchant: 0,
            wrists: 0,
            wristenchant: 0,
            mainhand: 0,
            mainhandenchant: 0,
            offhand: 0,
            offhandenchant: 0,
            ranged: 0,
            rangedenchant: 0,
            hands: 0,
            handenchant: 0,
            waist: 0,
            legs: 0,
            legenchant: 0,
            feet: 0,
            feetenchant: 0,
            finger1: 0,
            finger2: 0,
            trinket1: 0,
            trinket2: 0,
        };
    }

    setHeadIndex = (i) => { this.setState({head: i}); }
    setHeadEnchantIndex = (i) => { this.setState({headenchant: i}); }
    setNeckIndex = (i) => { this.setState({neck: i}); }
    setShouldersIndex = (i) => { this.setState({shoulders: i}); }
    setShoulderEnchantIndex = (i) => { this.setState({shoulderenchant: i}); }
    setBackIndex = (i) => { this.setState({back: i}); }
    setBackEnchantIndex = (i) => { this.setState({backenchant: i}); }
    setChestIndex = (i) => { this.setState({chest: i}); }
    setChestEnchantIndex = (i) => { this.setState({chestenchant: i}); }
    setWristsIndex = (i) => { this.setState({wrists: i}); }
    setWristEnchantIndex = (i) => { this.setState({wristenchant: i}); }
    setMainHandEnchantIndex = (i) => { this.setState({mainhandenchant: i}); }
    setOffHandEnchantIndex = (i) => { this.setState({offhandenchant: i}); }
    setRangedIndex = (i) => { this.setState({ranged: i}); }
    setRangedEnchantIndex = (i) => { this.setState({rangedenchant: i}); }
    setHandsIndex = (i) => { this.setState({hands: i}); }
    setHandEnchantIndex = (i) => { this.setState({handenchant: i}); }
    setWaistIndex = (i) => { this.setState({waist: i}); }
    setLegIndex = (i) => { this.setState({legs: i}); }
    setLegEnchantIndex = (i) => { this.setState({legenchants: i}); }
    setFeetIndex = (i) => { this.setState({feet: i}); }
    setFeetEnchantIndex = (i) => { this.setState({feetenchant: i}); }
    setFinger1Index = (i) => { this.setState({finger1: i}); }
    setFinger2Index = (i) => { this.setState({finger2: i}); }
    setTrinket1Index = (i) => { this.setState({trinket1: i}); }
    setTrinket2Index = (i) => { this.setState({trinket2: i}); }

    setMainHandIndex = (i) => {
        // remove off hand for 2H
        if (Weapons[i].weapon.twoh) {
            this.setState( {mainhand: i, offhand: 0, offhandenchant: 0});
        } else {
            this.setState( {mainhand: i});
        }
    }

    setOffHandIndex = (i) => {
        // check if off hand is selecting 2h
        if (Weapons[i].weapon.twoh) {
            this.setState( {mainhand: i, offhand: 0, offhandenchant: 0});
        } else {
            // check if main hand is 2H
            if (Weapons[this.state.mainhand].weapon.twoh) {
                // unequip it
                this.setState( {mainhand: 0, mainhandenchant: 0, offhand: i});
            } else {
                this.setState( {offhand: i});
            }
        }
    }

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
                       {this.gearRow("Head", Head, this.setHeadIndex,
                           this.state.head)}
                       {this.gearRow("Enchant", HeadEnchants,
                           this.setHeadEnchantIndex, this.state.headenchant)}
                       {this.gearRow("Neck", Neck, this.setNeckIndex,
                           this.state.neck)}
                       {this.gearRow("Shoulders", Shoulders,
                           this.setShouldersIndex, this.state.shoulders)}
                       {this.gearRow("Enchant", ShoulderEnchants,
                           this.setShoulderEnchantIndex, this.state.shoulderenchant)}
                       {this.gearRow("Back", Back, this.setBackIndex,
                           this.state.back)}
                       {this.gearRow("Enchant", BackEnchants,
                           this.setBackEnchantIndex, this.state.backenchant)}
                       {this.gearRow("Chest", Chest, this.setChestIndex,
                           this.state.chest)}
                       {this.gearRow("Enchant", ChestEnchants,
                           this.setChestEnchantIndex, this.state.chestenchant)}
                       {this.gearRow("Wrists", Wrists, this.setWristsIndex,
                           this.state.wrists)}
                       {this.gearRow("Enchant", WristEnchants,
                           this.setWristEnchantIndex, this.state.wristenchant)}
                       {this.gearRow("Main Hand", Weapons,
                           this.setMainHandIndex, this.state.mainhand)}
                       {this.gearRow("Enchant", WeaponEnchants,
                           this.setMainHandEnchantIndex, this.state.mainhandenchant)}
                       {this.gearRow("Off Hand", Weapons,
                           this.setOffHandIndex, this.state.offhand)}
                       {this.gearRow("Enchant", WeaponEnchants,
                           this.setOffHandEnchantIndex, this.state.offhandenchant)}
                       {this.gearRow("Ranged", Ranged,
                           this.setRangedIndex, this.state.ranged)}
                       {this.gearRow("Enchant", RangedEnchants,
                           this.setRangedEnchantIndex, this.state.rangedenchant)}
                       {this.gearRow("Hands", Hands,
                           this.setHandsIndex, this.state.hands)}
                       {this.gearRow("Enchant", HandEnchants,
                           this.setHandEnchantIndex, this.state.handenchant)}
                       {this.gearRow("Waist", Waist, this.setWaistIndex,
                           this.state.waist)}
                       {this.gearRow("Legs", Legs, this.setLegIndex,
                           this.state.legs)}
                       {this.gearRow("Enchant", LegEnchants,
                           this.setLegEnchantIndex, this.state.legenchant)}
                       {this.gearRow("Feet", Feet, this.setFeetIndex,
                           this.state.feet)}
                       {this.gearRow("Enchant", FeetEnchants,
                           this.setFeetEnchantIndex, this.state.feetenchant)}
                       {this.gearRow("Finger", Fingers, this.setFinger1Index,
                           this.state.finger1)}
                       {this.gearRow("Finger", Fingers, this.setFinger2Index,
                           this.state.finger2)}
                       {this.gearRow("Trinket", Trinkets, this.setTrinket1Index,
                           this.state.trinket1)}
                       {this.gearRow("Trinket", Trinkets, this.setTrinket2Index,
                           this.state.trinket2)}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default GearSelect;
