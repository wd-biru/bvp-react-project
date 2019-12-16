import {widgetPopupActionConstants} from './WidgetPopupAction';

const initialState = {
    showPopup: false,
    message : 'test',
    title : 'IFrame'
};


export default function widgetPopupReducer(state = initialState, action) {
    switch (action.type) {
        case widgetPopupActionConstants.SHOW_ALERT:
            return {...state, ...{showPopup:true,message:action.message,title:action.title,}};
        case widgetPopupActionConstants.HIDE_ALERT:
            return {...state, ...{showPopup:false}};
        default:
            return state;
    }
}