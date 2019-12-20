import React from 'react';
import * as WidgetType from '../WidgetType';

const MediaControlChild = (props) => {
    const {widget, isPlayer} = props;
    return <img onClick={() =>playControl(widget, isPlayer)} style={{width: '100%', height: '100%'}} src={widget.imageData}/>;
}

export default MediaControlChild;


const playControl = (widget, isPlayer=false) => {
    if (isPlayer) {
        const mediaElenent = document.getElementById('videoTagPreview');
        if (widget.widgetType == WidgetType.WIDGET_TYPE_PALY_BUTTON) {
            if (mediaElenent.paused)
                mediaElenent.play();
            else
                mediaElenent.pause();

        } else if (widget.widgetType == WidgetType.WIDGET_TYPE_FORWARD_BUTTON) {
            mediaElenent.currentTime += 10;

        } else if (widget.widgetType == WidgetType.WIDGET_TYPE_BACK_BUTTON) {
            mediaElenent.currentTime -= 10;
        } else if (widget.widgetType == WidgetType.WIDGET_TYPE_SOUND_BUTTON) {
            if (mediaElenent.muted) {
                mediaElenent.muted = false;
            } else {
                mediaElenent.muted = true;
            }
        } else if (widget.widgetType == WidgetType.WIDGET_TYPE_FULL_SCREEN_BUTTON) {
            mediaElenent.requestFullscreen();
        }
    }
}