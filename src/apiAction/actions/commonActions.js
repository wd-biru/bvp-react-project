import{ alertActionConstants } from '../Alert/AlertActions';

export function popupAction(title,message){
    return {
        type: alertActionConstants.SHOW_POPUP,
        title: title,
        message: message
    };
}
export function hidePopup(title,message){
    return {
        type: alertActionConstants.HIDE_ALERT,
        title: title,
        message: message
    };
}