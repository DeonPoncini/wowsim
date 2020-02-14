import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

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
                <div>
                <Button key={i} onClick={() => {
                    this.props.callback(i);
                    this.handleClose();
                }}>
                {this.props.gear[i].name}
            </Button><br /></div>);
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

export default Picker;
