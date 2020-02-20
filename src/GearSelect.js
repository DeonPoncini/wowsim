import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import {NoneItem} from './gear/gear.js';
import {Head, HeadEnchants} from './gear/head.js';
import {Neck} from './gear/neck.js';
import {Shoulders, ShoulderEnchants} from './gear/shoulders.js';
import {Back, BackEnchants} from './gear/back.js';
import {Chest, ChestEnchants} from './gear/chest.js';
import {Wrists, WristEnchants} from './gear/wrists.js';
import {Weapons, WeaponEnchants} from './gear/weapons.js';
import {Ranged, RangedEnchants} from './gear/ranged.js';
import {Ammo, Pouch} from './gear/ammo.js';
import {Hands, HandEnchants} from './gear/hands.js';
import {Waist} from './gear/waist.js';
import {Legs, LegEnchants} from './gear/legs.js';
import {Feet, FeetEnchants} from './gear/feet.js';
import {Fingers} from './gear/finger.js';
import {Trinkets} from './gear/trinkets.js';
import Picker from './Picker';
import {checkSets} from './itemsets.js';

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
            ammo: 0,
            pouch: 0,
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
    setAmmoIndex = (i) => { this.setState({ammo: i}); }
    setPouchIndex = (i) => { this.setState({pouch: i}); }
    setHandsIndex = (i) => { this.setState({hands: i}); }
    setHandEnchantIndex = (i) => { this.setState({handenchant: i}); }
    setWaistIndex = (i) => { this.setState({waist: i}); }
    setLegIndex = (i) => { this.setState({legs: i}); }
    setLegEnchantIndex = (i) => { this.setState({legenchant: i}); }
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

    add_gear = (item, gear, i) => {
        item.base.strength += gear[i].base.strength;
        item.base.agility += gear[i].base.agility;
        item.base.intellect += gear[i].base.intellect;
        item.base.stamina += gear[i].base.stamina;
        item.base.spirit += gear[i].base.spirit;
        item.attack.hit += gear[i].attack.hit;
        item.attack.crit += gear[i].attack.crit;
        item.attack.map += gear[i].attack.map;
        item.attack.rap += gear[i].attack.rap;
        item.caster.spellpower += gear[i].caster.spellpower;
        item.caster.healing += gear[i].caster.healing;
        item.caster.spellcrit += gear[i].caster.spellcrit;
        item.caster.mp5 += gear[i].caster.mp5;
        item.caster.spellpen += gear[i].caster.spellpen;
        item.resistance.fire += gear[i].resistance.fire;
        item.resistance.frost += gear[i].resistance.frost;
        item.resistance.arcane += gear[i].resistance.arcane;
        item.resistance.nature += gear[i].resistance.nature;
        item.resistance.shadow += gear[i].resistance.shadow;
        item.defense.armor += gear[i].defense.armor;
        item.defense.block += gear[i].defense.block;
        item.defense.dodge += gear[i].defense.dodge;
        item.defense.parry += gear[i].defense.parry;
        item.weapon.speed += gear[i].weapon.speed;
        item.weapon.dmgmin += gear[i].weapon.dmgmin;
        item.weapon.dmgmax += gear[i].weapon.dmgmax;
        item.weapon.twoh = gear[i].weapon.twoh;
        return item;
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state === prevState) {
            return;
        }
        // add up the equipped gear
        let item = this.add_gear(JSON.parse(JSON.stringify(NoneItem)),
            Head, this.state.head);
        item = this.add_gear(item, HeadEnchants, this.state.headenchant);
        item = this.add_gear(item, Neck, this.state.neck);
        item = this.add_gear(item, Shoulders, this.state.shoulders);
        item = this.add_gear(item, ShoulderEnchants, this.state.shoulderenchant);
        item = this.add_gear(item, Back, this.state.back);
        item = this.add_gear(item, BackEnchants, this.state.backenchant);
        item = this.add_gear(item, Chest, this.state.chest);
        item = this.add_gear(item, ChestEnchants, this.state.chestenchant);
        item = this.add_gear(item, Wrists, this.state.wrists);
        item = this.add_gear(item, WristEnchants, this.state.wristenchant);
        item = this.add_gear(item, Weapons, this.state.mainhand);
        item = this.add_gear(item, WeaponEnchants, this.state.mainhandenchant);
        item = this.add_gear(item, Weapons, this.state.offhand);
        item = this.add_gear(item, WeaponEnchants, this.state.offhandenchant);
        item = this.add_gear(item, Ranged, this.state.ranged);
        item = this.add_gear(item, RangedEnchants, this.state.rangedenchant);
        item = this.add_gear(item, Hands, this.state.hands);
        item = this.add_gear(item, HandEnchants, this.state.handenchant);
        item = this.add_gear(item, Waist, this.state.waist);
        item = this.add_gear(item, Legs, this.state.legs);
        item = this.add_gear(item, LegEnchants, this.state.legenchant);
        item = this.add_gear(item, Feet, this.state.feet);
        item = this.add_gear(item, FeetEnchants, this.state.feetenchant);
        item = this.add_gear(item, Fingers, this.state.finger1);
        item = this.add_gear(item, Fingers, this.state.finger2);
        item = this.add_gear(item, Trinkets, this.state.trinket1);
        item = this.add_gear(item, Trinkets, this.state.trinket2);

        // add the weapon enchants on to the weapons
        // this is just needed so we can calculate weapon damage
        let main = JSON.parse(JSON.stringify(Weapons[this.state.mainhand]));
        main = this.add_gear(main, WeaponEnchants, this.state.mainhandenchant);
        let off = JSON.parse(JSON.stringify(Weapons[this.state.offhand]));
        off = this.add_gear(off, WeaponEnchants, this.state.offhandenchant);
        let ranged = JSON.parse(JSON.stringify(Ranged[this.state.ranged]));
        ranged = this.add_gear(ranged, RangedEnchants, this.state.rangedenchant);
        // multiply by the pouch speed
        ranged.weapon.speed -= (ranged.weapon.speed*
            Pouch[this.state.pouch].weapon.speed);
        let weapons = {
            main: main,
            off: off,
            ranged: ranged,
            ammo: Ammo[this.state.ammo],
        };

        // check the set bonuses
        let sets = checkSets(this.state);

        // calculate the new gear after each update
        this.props.updateGear(item, weapons, sets);
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
            <div className="GearSelect">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th rowSpan="2">Slot</th>
                            <th rowSpan="2">Item</th>
                            <th colSpan="5">Base Stats</th>
                            <th colSpan="4">Attack Stats</th>
                            <th colSpan="5">Caster Stats</th>
                            <th colSpan="5">Resistances</th>
                            <th colSpan="5">Defense Stats</th>
                            <th colSpan="3">Weapon Stats</th>
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
                       {this.gearRow("Ammo", Ammo,
                           this.setAmmoIndex, this.state.ammo)}
                       {this.gearRow("Pouch", Pouch,
                           this.setPouchIndex, this.state.pouch)}
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
