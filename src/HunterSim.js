import React, { Component } from 'react';
import {Button, Col, Form, Jumbotron} from 'react-bootstrap';
import Autoshot from './spells/autoshot.js';
import AimedShot from './spells/aimedshot.js';
import Multishot from './spells/multishot.js';
import {TPS} from './spells/spell.js';
import * as data from './data.js';

class HunterSim extends Component {

    constructor(props) {
        super(props);

        this.state = {
            simout: [],
            total_dmg: 0,
            dps: 0,
            simlength: 100,
            hawk: 0,
            mark: 0,
            lethal: 0,
            aimed: 0,
            mortal: 0,
            barrage: 0,
            rws: 0,
            tsa: 0,
            slaying: 0,
            surefooted: 0,
            killer: 0,
            lightning: 0,
            giantstalker: 0,
            dragonstalker: 0,
        }

    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props === prevProps) {
            return;
        }
        // try and detect set bonus modifiers
        let gs = this.props.sets.get('Giantstalker Armor');
        this.setState({giantstalker: gs});
        let ds = this.props.sets.get('Dragonstalker Armor');
        this.setState({dragonstalker: ds});
    }

    calculateOutput = (spell, dmg, mods) => {
        // calculate hit chance including surefooted
        let hitpct = this.props.character.stats.attack.hit + mods.surefooted;
        let totalhit = data.lvl63_base_hit_rate + hitpct;
        if (totalhit > 100) {
            totalhit = 100;
        }
        let hit = Math.random()*100;
        if (hit > totalhit) {
            // we missed
            return {message: spell + " missed", dmg: 0};
        }

        // calculate crit chance
        let critpct = this.props.character.stats.attack.crit;
        if (critpct > 100) {
            critpct = 100;
        }
        let crit = Math.random()*100;
        if (crit > critpct) {
            // we did not crit
            return {message: spell + " hit for " + Math.round(dmg), dmg: dmg};
        } else {
            // we crit
            let slaying_mod = 1 + mods.slaying/100;
            let mortal_mod = mods.mortal/100;
            let critdmg = (data.melee_crit_multiplier + mortal_mod)*
                dmg*slaying_mod;
            return {message: spell + " crit for " + Math.round(critdmg),
                dmg: critdmg};
        }
    }


    runSim = () => {
        let autoshot = new Autoshot(this.props.character.weapons.ranged);
        let aimedshot = new AimedShot();
        let multishot = new Multishot();
        let simlength = this.state.simlength*TPS;
        let total_dmg = 0;
        let simout = [];
        for (let i = 0; i < simlength; i++) {
            // try and cast all abilities

            if (aimedshot.cast()) {
                multishot.activate_gcd();
            }
            if (multishot.cast()) {
                aimedshot.activate_gcd();
            }
            if (autoshot.cast()) {
                // does not trigger GCD
            }

            let ts = i/TPS;
            // then advance the simulation one step
            if (aimedshot.tick()) {
                let dmg = aimedshot.apply_effect(this.props.character, this.state);
                let out = this.calculateOutput("Aimed Shot", dmg, this.state);
                simout.push(<div>{ts} {out.message}</div>);
                total_dmg += out.dmg;
            }
            if (multishot.tick()) {
                let dmg = multishot.apply_effect(this.props.character, this.state);
                let out = this.calculateOutput("Multi Shot", dmg, this.state);
                simout.push(<div>{ts} {out.message}</div>);
                total_dmg += out.dmg;
            }
            if (autoshot.tick()) {
                let dmg = autoshot.apply_effect(this.props.character, this.state);
                let out = this.calculateOutput("Autoshot", dmg, this.state);
                simout.push(<div>{ts} {out.message}</div>);
                total_dmg += out.dmg;
            }
            let dps = total_dmg / ts;
            this.setState({simout: simout, total_dmg: total_dmg, dps: dps});
        }
    }

    hawkChange = (event) => { this.setState({hawk: event.target.value}); }
    markChange = (event) => { this.setState({mark: event.target.value}); }
    lethalChange = (event) => { this.setState({lethal: event.target.value}); }
    aimedChange = (event) => { this.setState({aimed: event.target.value}); }
    mortalChange = (event) => { this.setState({mortal: event.target.value}); }
    barrageChange = (event) => { this.setState({barrage: event.target.value}); }
    rwsChange = (event) => { this.setState({rws: event.target.value}); }
    tsaChange = (event) => { this.setState({tsa: event.target.value}); }
    slayingChange = (event) => { this.setState({slaying: event.target.value}); }
    surefootedChange = (event) =>
        { this.setState({surefooted: event.target.value}); }
    killerChange = (event) => { this.setState({killer: event.target.value}); }
    lightningChange = (event) => { this.setState({lightning: event.target.value}); }

    optionForm = (text, callback, count, span=1) => {
        let options = [];
        for (let i = 0; i <= count; i++) {
            options.push(<option key={i}>{i*span}</option>);
        }
        return(
        <Form.Row>
        <Form.Group as={Col}>
        <Form.Label>{text}</Form.Label>
        </Form.Group>
        <Form.Group as={Col}>
        <Form.Control as="select" onChange={callback}>
            {options}
        </Form.Control>
        </Form.Group>
        </Form.Row>
        )
    }

    render() {
        return (
            <div key="simulator">
            {this.state.giantstalker === 8 &&
                <div>Giantstalker Armor 8 set bonus detected</div>}
            <Form>
                {this.optionForm("Improved Aspect of the Hawk",
                    this.hawkChange, 5)}
                {this.optionForm("Improved Hunter's Mark",
                    this.markChange, 5, 3)}
                {this.optionForm("Lethal Shots", this.lethalChange, 5)}
                {this.optionForm("Aimed Shot", this.aimedChange, 1)}
                {this.optionForm("Mortal Shots", this.mortalChange, 5, 6)}
                {this.optionForm("Barrage", this.barrageChange, 3, 5)}
                {this.optionForm("Ranged Weapon Specialization",
                    this.rwsChange, 5)}
                {this.optionForm("Trueshot Aura", this.tsaChange, 1)}
                {this.optionForm("Monster Slaying", this.slayingChange, 3)}
                {this.optionForm("Surefooted", this.surefootedChange, 3)}
                {this.optionForm("Killer Instinct", this.killerChange, 3)}
                {this.optionForm("Lightning Reflexes", this.killerChange, 5, 3)}
            </Form>
            <Button key="start" variant="primary" onClick={this.runSim} >
                Start
            </Button>
            <div>Total Damage: {Math.round(this.state.total_dmg)}
                &nbsp; DPS: {Math.round(this.state.dps)}</div>
            <Jumbotron>
                {this.state.simout}
            </Jumbotron>
            </div>
        );
    }
}

export default HunterSim;
