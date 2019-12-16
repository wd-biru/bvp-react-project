import React from 'react';
import * as WidgetTypes from './WidgetType';
import MediaControlChild from './WidgetChildrens/MediaControlChild';
import TextChild from './WidgetChildrens/TextChild';
import IFrameChild from "../../ActionComponent/IFrame";

const GetInnerChidrenByType = (props) => {
    const {widget} = props;
    if(widget.widgetType === WidgetTypes.WIDGET_TYPE_PALY_BUTTON ||
        widget.widgetType === WidgetTypes.WIDGET_TYPE_FORWARD_BUTTON ||
        widget.widgetType === WidgetTypes.WIDGET_TYPE_BACK_BUTTON  ||
        widget.widgetType === WidgetTypes.WIDGET_TYPE_SOUND_BUTTON  ||
        widget.widgetType === WidgetTypes.WIDGET_TYPE_FULL_SCREEN_BUTTON ){
        return <MediaControlChild widget={widget}/>;
    }

    else if(widget.widgetType === WidgetTypes.WIDGET_TYPE_TEXT){
        return <TextChild widget={widget}/>;
    }
    else if(widget.widgetType === WidgetTypes.WIDGET_TYPE_MAP){
        return <IFrameChild widget={widget}/>;
    }else if(widget.widgetType === WidgetTypes.WIDGET_TYPE_WEB_PROGRAM){
        return <IFrameChild widget={widget}/>;
    }


    return <MediaControlChild widget={widget}/>;
}


export default GetInnerChidrenByType;

export const getWidgetNameByType = (type) =>{
    switch (type) {
        case  WidgetTypes.WIDGET_TYPE_PALY_BUTTON :
            return  'play button';
        case WidgetTypes.WIDGET_TYPE_FORWARD_BUTTON:
            return  'forward button';
        case WidgetTypes.WIDGET_TYPE_BACK_BUTTON:
            return  'back button';
        case WidgetTypes.WIDGET_TYPE_SOUND_BUTTON:
            return  'sound button';
        case WidgetTypes.WIDGET_TYPE_FULL_SCREEN_BUTTON:
            return  'full screen button';
        case WidgetTypes.WIDGET_TYPE_SQUARE_BOX:
            return  'square button';
        case WidgetTypes.WIDGET_TYPE_CIRCLE:
            return  'circle';
        case WidgetTypes.WIDGET_TYPE_TEXT:
            return 'text layer';
        case WidgetTypes.WIDGET_TYPE_IMAGE:
            return 'image layer';

        default:
            return 'layer';

    }

}