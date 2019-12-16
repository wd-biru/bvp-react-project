export const alertActionConstants = {
    SHOW_ALERT: 'SHOW_ALERT',
    HIDE_ALERT: 'HIDE_ALERT',
    SHOW_SAVE_POPUP : 'SHOW_SAVE_POPUP',
    CHANGE_DATA : 'CHANGE_DATA',
    SHOW_POPUP : 'SHOPOPUP'
};

export function showAlert(title, message) {
    return {
        type: alertActionConstants.SHOW_ALERT,
        title: title,
        message: message
    };
}

export function hideAlert() {
    return {
        type: alertActionConstants.HIDE_ALERT,
    };
}
export function showSavePopup(title,message){
    return {
        type: alertActionConstants.SHOW_SAVE_POPUP,
        title: title,
        message: message
    };
}
export default {
    alertActionConstants
};
