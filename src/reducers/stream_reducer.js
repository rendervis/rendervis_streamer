import * as actionType from "../actions/types";
import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case actionType.FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case actionType.FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case actionType.CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case actionType.EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case actionType.DELETE_STREAM:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
