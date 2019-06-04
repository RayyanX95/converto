import React, { Component } from 'react';
import { connect } from "react-redux";

import UnitType from '../../components/UnitType/UnitType';
import FromToSelector from '../../components/FromToSelector/FromToSelector';
import { allUnits } from '../../data/units';

import * as actionTypes from "../../store/actions";

class UnitSelector extends Component {
    state = {
        units: allUnits,
        chosenUnitFromTo: allUnits[0].fromTo, // make length as default chosen
    }
    unitTypeHandler = () => {
        setTimeout(() => {
            const unitTypeId = this.props.unTypeId;
            console.log(unitTypeId);
            // search in all units to get the unit whose ID equals "unitTypeId"
            const chosenUnit = allUnits.find(unit => unit.id === +unitTypeId);
            const fromTO = chosenUnit.fromTo;
            this.setState({ chosenUnitFromTo: fromTO });
        }, 1)
    }

    render() {
        return (
            <React.Fragment>
                <UnitType units={this.state.units}
                    unitHandler={(e) => {
                        this.props.onSelectUnit(e);
                        this.unitTypeHandler()
                    }} />

                <FromToSelector
                    chosenUnits={this.state.chosenUnitFromTo}
                    fromUnitHandler={(e) => this.props.onSelectFromUnit(e)}
                    toUnitHandler={(e) => this.props.onSelectToUnit(e)} />
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        unTypeId: state.unitTypeId,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSelectUnit: (e) =>
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