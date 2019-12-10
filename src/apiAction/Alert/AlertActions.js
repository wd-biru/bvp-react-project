export const alertActionConstants = {
    SHOW_ALERT: 'SHOW_ALERT',
    HIDE_ALERT: 'HIDE_ALERT'
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

export default {
    alertActionConstants
};
