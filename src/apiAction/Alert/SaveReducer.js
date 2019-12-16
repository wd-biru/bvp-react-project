import {alertActionConstants} from './AlertActions';

const initialState = {
    showSavePopup: false,
    popupData : '',
    message : '',
    title : ''
};


export default function saveReducer(state = initialState, action) {
    switch (action.type) {
        case alertActionConstants.SHOW_SAVE_POPUP:
            return {...state, ...{showSavePopup:true,message:action.message,title:action.title,}};
        case alertActionConstants.HIDE_ALERT:
            return {...state, ...{showSavePopup:false}};
        case alertActionConstants.CHANGE_DATA :
            return {...state,...{popupData : action.payload}}
        default:
            return state;
    }
}