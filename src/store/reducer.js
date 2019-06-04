import * as actionTypes from "./actions";

const initialSate = {
  unitTypeId: null,
  fromUnitRatio: null,
  toUnitRatio: null,
};

const reducer = (state = initialSate, action) => {
  
  switch (action.type) {
    case actionTypes.SELECT_UNIT_TYPE:
      return {
        ...state,
        unitTypeId: action.typeEvent.target.value
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
