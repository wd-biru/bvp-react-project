import {alertActionConstants} from '../apiAction/Alert/AlertActions';

const initialState = {
    showActionPopup: false,
    popupData : '',
    message : '',
    title : ''
};


export default function actionPopupReducer(state = initialState, action) {
    switch (action.type) {
        case alertActionConstants.SHOW_POPUP:
            return {...state, ...{showActionPopup:true,popupData:action.popupData,title:action.title}};
        case alertActionConstants.HIDE_ALERT:
            return {...state, ...{showActionPopup:false,popupData:''}};
        case alertActionConstants.CHANGE_DATA :
            return {...state,...{popupData : action.payload}}
        default:
            return state;
    }
}