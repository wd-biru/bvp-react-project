import {alertActionConstants} from './AlertActions';

const initialState = {
    showAlert: false,
    message : '',
    title : 'waring',
    showPlayerPreviewPopup : false
};


export default function alertReducer(state = initialState, action) {
    switch (action.type) {
        case alertActionConstants.SHOW_ALERT:
            return {...state, ...{showAlert:true,message:action.message,title:action.title,}};
        case alertActionConstants.HIDE_ALERT:
            return {...state, ...{showAlert:false}};
        case alertActionConstants.SHOW_PLAYER_PREVIEW_POPUP:
            return { ...state, ...{showPlayerPreviewPopup: true}}
        case alertActionConstants.HIDE_PLAYER_PREVIEW_POPUP:
            return { ...state, ...{showPlayerPreviewPopup: false}};


        default:
            return state;
    }
}