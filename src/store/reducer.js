import * as actionTypes from "./actions";
import { allUnits } from '../data/units';

const initialSate = {
  unitTypeId: null,
  fromUnitRatio: null,
  toUnitRatio: null,
};

const reducer = (state = initialSate, action) => {

  switch (action.type) {
    case actionTypes.SELECT_UNIT_TYPE:
      let unitTypeId = action.typeEvent.target.value;
      if (!unitTypeId)
        unitTypeId = 1;
      console.log('typeID: ', unitTypeId);
      
      const chosenUnit = allUnits.find(unit => unit.id === +unitTypeId);
      const fromTO = chosenUnit.fromTo;
      return {
        ...state,
        chosenFromToUnit: fromTO
      };

    case actionTypes.SELECT_FROM_UNIT:
      return {
        ...state,
        fromUnitRatio: action.fromEvent.target.value
      };

    case actionTypes.SELECT_TO_UNIT:
      return {
        ...state,
        toUnitRatio: action.toEvent.target.value
      };
    default:
      return state;
  }
};

export default reducer;
