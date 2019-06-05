import React, { Component } from 'react';

import FromToInput from '../../components/FromToInput/FromToInput';
import { connect } from 'react-redux'

class InputHandling extends Component {
    state = {
        fromUnitVal: '',
        toUnitVal: ''
    }

    unitConvertingHandler = (fromVal) => {
        setTimeout(() => {
            let toVal;
            const fromUnitRatio = this.props.fromRatio;
            const toUnitRatio = this.props.toRatio;
            
            /* we get unit Id to handle units that have special converting equation such
             temperature units where 0 Celsius = 273.15 Kelvin*/
            const unitTypeId = this.props.unTypeId;
            // unitTypeId = 4 for Temperature
            if (+unitTypeId === 4) {
                if (+toUnitRatio === 32) {
                    // from C to F
                    if (+fromUnitRatio === 0)
                        toVal = fromVal * 1.8 + 32
                    // from K to F
                    else
                        toVal = fromVal * 9 / 5 - 459.67;
                }
                else if (+fromUnitRatio === 32) {
                    // from F to C
                    if (+toUnitRatio === 0)
                        toVal = (fromVal + 459.67) * 5 / 9;
                    // from F to K
                    else
                        toVal = fromVal * 9 / 5 - 459.67;
                }
            }
            // C to K or K to C
            else {
                toVal = fromVal * fromUnitRatio / toUnitRatio;
            }
            toVal = toVal.toFixed(2);
            this.setState({ toUnitVal: toVal })
        }, 1)
    }

    // function to handle typing in "fromUnit" input field
    fromChangeHandler = (e) => {
        let fromVal = e.target.value;
        this.unitConvertingHandler(fromVal);
        this.setState({ fromUnitVal: fromVal });
    }
    render() {
        return (
            <FromToInput
                fromChgHdl={this.fromChangeHandler}
                fromValue={this.state.fromUnitVal}
                toValue={this.state.toUnitVal}
                disableFromInput={this.props.disableFromInput} />
        )
    }
}

const mapStateToProps = state => {
    return {
        unTypeId: state.unitTypeId,
        fromRatio: state.fromUnitRatio,
        toRatio: state.toUnitRatio,
        disableFromInput: state.disableFromInput
    };
};

export default connect(mapStateToProps)(InputHandling)
