import { userDataConsts } from "./loginActions";

const initialState = {
  userData: null,
  createPwd: null
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
    case userDataConsts.CREATE_PWD_SUCCESS:
      return {
        ...state,
        createPwd: action.payload
      };

    case userDataConsts.CREATE_PWD_FAIL:
      return {
        ...state,
        error: action.payload,
        createPwd: null
      };
    default:
      return state;
  }
}
