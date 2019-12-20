export const alertActionConstants = {
    SHOW_ALERT: 'SHOW_ALERT',
    HIDE_ALERT: 'HIDE_ALERT',
    SHOW_SAVE_POPUP : 'SHOW_SAVE_POPUP',
    CHANGE_DATA : 'CHANGE_DATA',
    SHOW_POPUP : 'SHOPOPUP',
    SHOW_PLAYER_PREVIEW_POPUP : 'SHOW_PLAYER_PREVIEW_POPUP',
    HIDE_PLAYER_PREVIEW_POPUP : 'HIDE_PLAYER_PREVIEW_POPUP'
};

export function showPlayerPreviewPopup (){
    return {
        type : alertActionConstants.SHOW_PLAYER_PREVIEW_POPUP
    };
}

export function hidePlayerPreviewPopup(){
    return {
        type : alertActionConstants.HIDE_PLAYER_PREVIEW_POPUP
    }
}


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
