import {widgetPopupActionConstants} from './WidgetPopupAction';

const initialState = {
    showPopup: false,
    message : 'test',
    title : 'IFrame',
    widgetType : null,
    popupData : null
};


export default function widgetPopupReducer(state = initialState, action) {
    switch (action.type) {
        case widgetPopupActionConstants.SHOW_ALERT:
            return {...state, ...{showPopup:true,message:action.message,title:action.title,widgetType:action.widgetType}};
        case widgetPopupActionConstants.HIDE_ALERT:
            return {...state, ...{showPopup:false}};
        default:
            return state;
    }
}