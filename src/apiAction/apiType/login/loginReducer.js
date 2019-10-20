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
      case userDataConsts.USER_LOGOUT:
      return {
          ...state,         
          userData: null
        };

    default:
      return state;
  }
}
