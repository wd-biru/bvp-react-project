import{ alertActionConstants } from '../Alert/AlertActions';

export function popupAction(title,popupData){
    return {
        type: alertActionConstants.SHOW_POPUP,
        title: title,
        popupData: popupData
    };
}
export function hidePopup(title,message){
    return {
        type: alertActionConstants.HIDE_ALERT,
        title: title,
        message: message
    };
}