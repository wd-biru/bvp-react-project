import {alertActionConstants} from './AlertActions';

const initialState = {
    showAlert: false,
    message : '',
    title : 'waring'
};


export default function alertReducer(state = initialState, action) {
    switch (action.type) {
        case alertActionConstants.SHOW_ALERT:
            return {...state, ...{showAlert:true,message:action.message,title:action.title,}};
        case alertActionConstants.HIDE_ALERT:
            return {...state, ...{showAlert:false}};
        default:
            return state;
    }
}