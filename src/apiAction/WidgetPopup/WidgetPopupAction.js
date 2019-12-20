export const widgetPopupActionConstants = {
    SHOW_ALERT: 'WIDGET_POPUP_SHOW_ALERT',
    HIDE_ALERT: 'WIDGET_POPUP_HIDE_ALERT',
    SHOW_SAVE_POPUP : 'WIDGET_POPUP_SHOW_SAVE_POPUP',
};

export function showWidgetPopupAlert(title, message,widgetType) {
    return {
        type: widgetPopupActionConstants.SHOW_ALERT,
        title: title,
        message: message,
        widgetType : widgetType
    };
}

export function hideWidgetPopupAlert() {
    return {
        type: widgetPopupActionConstants.HIDE_ALERT,
    };
}