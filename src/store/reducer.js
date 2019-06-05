import * as actionTypes from "./actions";
import { allUnits } from '../data/units';

const initialSate = {
  unitTypeId: null,
  fromUnitRatio: null,
  toUnitRatio: null,
  disableFromTo: true
};

const reducer = (state = initialSate, action) => {

  switch (action.type) {
    case actionTypes.SELECT_UNIT_TYPE:
      let unitTypeId = action.typeEvent.target.value;
      let disableFromTo = false;
      console.log('typeID: ', unitTypeId);

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
