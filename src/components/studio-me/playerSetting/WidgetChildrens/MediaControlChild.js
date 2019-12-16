import React from 'react';
import * as WidgetType from '../WidgetType';

const MediaControlChild = (props) => {
    const {widget} = props;
    return <img onClick={() =>playControl(widget)} style={{width: '100%', height: '100%'}} src={widget.imageData}/>;
}

export default MediaControlChild;


const playControl = (widget) =>{
    /*const mediaElenent = document.getElementById('videoTag');
    if(widget.widgetType == WidgetType.WIDGET_TYPE_PALY_BUTTON){
        if(mediaElenent.paused)
            mediaElenent.play();
        else
            mediaElenent.pause();

    }else if(widget.widgetType == WidgetType.WIDGET_TYPE_FORWARD_BUTTON){
        mediaElenent.play();
    }else if(widget.widgetType == WidgetType.WIDGET_TYPE_BACK_BUTTON){
        mediaElenent.play();
    }else if(widget.widgetType == WidgetType.WIDGET_TYPE_SOUND_BUTTON){
        mediaElenent.play();
    }else if(widget.widgetType == WidgetType.WIDGET_TYPE_FULL_SCREEN_BUTTON){
        mediaElenent.play();
    }*/
};