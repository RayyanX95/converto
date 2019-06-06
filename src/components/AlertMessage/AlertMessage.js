import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';

export default class AlertMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
        };
    }

    render() {
        const handleDismiss = () => this.setState({ show: false });
        if (this.state.show) {
            return (
                <div style={{position: "fixed", top: 60, right:0}}>
                    <Alert variant="info" onClose={handleDismiss} dismissible>
                        <Alert.Heading>How's it going?!</Alert.Heading>
                        <p>To start converting your units choose a <strong>unit type</strong> first 😆</p>
                    </Alert>
                </div>
            );
        }
        return <p></p>;
    }
}