import React, { Component } from 'react';
import { connect } from "react-redux";

import UnitType from '../../components/UnitType/UnitType';
import FromToSelector from '../../components/FromToSelector/FromToSelector';
import { allUnits } from '../../data/units';

import * as actionTypes from "../../store/actions";

let CHOSEN_UNIT;
class UnitSelector extends Component {
    // unitTypeHandler = () => {
    //     setTimeout(() => {
    //         const unitTypeId = this.props.unTypeId;
    //         console.log(unitTypeId);
    //         // search in all units to get the unit whose ID equals "unitTypeId"
    //         const chosenUnit = allUnits.find(unit => unit.id === +unitTypeId);
    //         const fromTO = chosenUnit.fromTo;
    //         this.setState({ chosenUnitFromTo: fromTO });
    //     }, 1)
    // }

    render() {
        CHOSEN_UNIT = this.props.chosenUnit;
        if(!CHOSEN_UNIT)
            CHOSEN_UNIT = allUnits[0].fromTo
        return (
            <React.Fragment>
                <UnitType 
                units={allUnits}
                unitHandler={(e) => this.props.onSelectUnitType(e)} />

                <FromToSelector
                    chosenUnits={CHOSEN_UNIT}
                    fromUnitHandler={(e) => this.props.onSelectFromUnit(e)}
                    toUnitHandler={(e) => this.props.onSelectToUnit(e)}
                    disableFromTo={this.props.disableFromTo} />
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        chosenUnit: state.chosenFromToUnit,
        disableFromTo: state.disableFromTo
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSelectUnitType: (e) =>
            dispatch({ type: actionTypes.SELECT_UNIT_TYPE, typeEvent: e }),
        onSelectFromUnit: (e) =>
            dispatch({ type: actionTypes.SELECT_FROM_UNIT, fromEvent: e }),
        onSelectToUnit: (e) =>
            dispatch({ type: actionTypes.SELECT_TO_UNIT, toEvent: e }),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UnitSelector);


// export default UnitSelector