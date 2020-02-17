import React, { Component } from 'react';
import {Button, Col, Form} from 'react-bootstrap';
import Autoshot from './spells/autoshot.js';

class HunterSim extends Component {

    constructor(props) {
        super(props);

        // try and detect set bonus modifiers
        this.state = {
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
        }
    }

    runSim = () => {
        let autoshot = new Autoshot(this.props.character.weapons.ranged);
        for (let i = 0; i < 1000; i++) {
            // try and cast all abilities
            if (autoshot.cast()) {
                // does not trigger GCD
            }

            // then advance the simulation one step
            if (autoshot.tick()) {
                autoshot.apply_effect(this.props.character)
            }
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
            </div>
        );
    }
}

export default HunterSim;
