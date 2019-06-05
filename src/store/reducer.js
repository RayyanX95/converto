import * as actionTypes from "./actions";
import { allUnits } from '../data/units';

const initialSate = {
  unitTypeId: null,
  fromUnitRatio: null,
  toUnitRatio: null,
  disableFromTo: true,
  disableFromInput: true

};

let fromToEnabledCount = 0;
let disableFromInput = true;
const reducer = (state = initialSate, action) => {

  switch (action.type) {
    case actionTypes.SELECT_UNIT_TYPE:
      let unitTypeId = action.typeEvent.target.value;
      let disableFromTo = false;

      // if the selected is the title of options not a proper option, say [slect unit type] 
      if (!+unitTypeId) {
        unitTypeId = 1;
        disableFromTo = true; // disable [from unit list again]
      }
      const chosenUnit = allUnits.find(unit => unit.id === +unitTypeId);
      const fromTo = chosenUnit.fromTo;
      return {
        ...state,
        chosenFromToUnit: fromTo,
        disableFromTo: disableFromTo
      };
    // ----------------------------------------------------------------------------------
    case actionTypes.SELECT_FROM_UNIT:
      fromToEnabledCount++;
      if (fromToEnabledCount === 2) {
        disableFromInput = false;
        fromToEnabledCount = 0;
      }
      
      return {
        ...state,
        fromUnitRatio: action.fromEvent.target.value,
        disableFromInput: disableFromInput
      };
    // ----------------------------------------------------------------------------------
    case actionTypes.SELECT_TO_UNIT:
      fromToEnabledCount++;
      if (fromToEnabledCount === 2) {
        disableFromInput = false
        fromToEnabledCount = 0;
      }
      return {
        ...state,
        toUnitRatio: action.toEvent.target.value,
        disableFromInput: disableFromInput
      };
    default:
      return state;
  }
};

export default reducer;
