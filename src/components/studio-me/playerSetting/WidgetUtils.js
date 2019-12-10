import React from 'react';
import * as WidgetTypes from './WidgetType';
import MediaControlChild from './WidgetChildrens/MediaControlChild';


const GetInnerChidrenByType = (props) => {
    const {widget} = props;
    if(widget.widgetType === WidgetTypes.WIDGET_TYPE_PALY_BUTTON ||
        widget.widgetType === WidgetTypes.WIDGET_TYPE_FORWARD_BUTTON ||
        widget.widgetType === WidgetTypes.WIDGET_TYPE_BACK_BUTTON  ||
        widget.widgetType === WidgetTypes.WIDGET_TYPE_SOUND_BUTTON  ||
        widget.widgetType === WidgetTypes.WIDGET_TYPE_FULL_SCREEN_BUTTON ){
        return <MediaControlChild widget={widget}/>;
    }

    // if(widget.widgetType === WidgetTypes.WIDGET_TYPE_TEXT){
    //     return <input type="text">
    // }
    return <MediaControlChild widget={widget}/>;
}


export default GetInnerChidrenByType;