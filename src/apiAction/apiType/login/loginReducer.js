import { userDataConsts } from "./loginActions";

const initialState = {
  userData: null
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case userDataConsts.USER_DATA_SUCCESS:
      return {
        ...state,
        userData: action.payload
      };

    case userDataConsts.USER_DATA_FAIL:
      return {
        ...state,
        error: action.payload,
        userData: null
      };

    default:
      return state;
  }
}
