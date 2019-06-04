import React, { Component } from 'react';

import FromToInput from '../../components/FromToInput/FromToInput';
import { connect } from 'react-redux'

class InputHandling extends Component {
    state = {
        fromUnitVal: 0,
        toUnitVal: 0
    }

    unitConvertingHandler = (fromVal) => {
        setTimeout(() => {
            const fromUnitRatio = this.props.fromRatio;
            const toUnitRatio = this.props.toRatio;
            let toVal = fromVal * fromUnitRatio / toUnitRatio;
            this.setState({ toUnitVal: toVal })
        }, 1)
    }

    // function to handle typing in "fromUnit" input field
    fromChangeHandler = (e) => {
        let fromVal = e.target.value;
        this.unitConvertingHandler(fromVal)
        this.setState({ fromUnitVal: fromVal })
    }
    render() {
        return (
            <FromToInput fromChgHdl={this.fromChangeHandler} fromValue={this.state.fromUnitVal} toValue={this.state.toUnitVal} />
        )
    }
}

const mapStateToProps = state => {
    return {
        fromRatio: state.fromUnitRatio,
        toRatio: state.toUnitRatio,
    };
};

export default connect(mapStateToProps)(InputHandling)
