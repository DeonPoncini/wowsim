import React, { Component } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import './App.css';
import {Belts, Boots} from './gear.js';

class Picker extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.gear);
        this.state = {
            show: false,
        };
    }

    setShow = (s) => {
        this.setState({show: s});
    }

    handleShow = () => {
        this.setShow(true);
    }

    handleClose = () => {
        this.setShow(false);
    }

    render() {
        const rows = []
        for (let i = 0; i < this.props.gear.length; i++) {
            rows.push(
                <Button key={i} onClick={() => {
                    this.props.callback(i);
                    this.handleClose();
                }}>
                {this.props.gear[i].name}
            </Button>);
        }
        return(
            <div className="Picker">
                <Button variant="primary" onClick={this.handleShow}>
                    {this.props.slot}
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        {this.props.slot}
                    </Modal.Header>
                    <Modal.Body>
                        {rows}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            belt: 0,
            boots: 0,
        };
    }

    setBeltIndex = (i) => {
        console.log(i);
        console.log(this.state.belt);
        console.log(Belts);
        this.setState({belt: i});
    }

    render() {
        return(
            <div className="App">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Slot</th>
                            <th>Item</th>
                            <th>Hit %</th>
                            <th>Crit %</th>
                            <th>AP</th>
                            <th>Agility</th>
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
                        <tr>
                            <td>Head Enchant</td>
                            <td>Lesser Arcanum of Voracity</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>8</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }

}

export default App;
