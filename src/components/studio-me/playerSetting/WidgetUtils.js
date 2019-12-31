import React from 'react';
import * as WidgetTypes from './WidgetType';
import MediaControlChild from './WidgetChildrens/MediaControlChild';
import TextChild from './WidgetChildrens/TextChild';
import IFrameChild from "../../ActionComponent/IFrame";
import CircleChild from './WidgetChildrens/CircleChild';
import SquareChild from './WidgetChildrens/SquareChild';

import Video from "../../../assets/img/me/video-test.mp4";

const GetInnerChidrenByType = (props) => {
    const {widget} = props;
    if(widget.widgetType === WidgetTypes.WIDGET_TYPE_PALY_BUTTON ||
        widget.widgetType === WidgetTypes.WIDGET_TYPE_FORWARD_BUTTON ||
        widget.widgetType === WidgetTypes.WIDGET_TYPE_BACK_BUTTON  ||
        widget.widgetType === WidgetTypes.WIDGET_TYPE_SOUND_BUTTON  ||
        widget.widgetType === WidgetTypes.WIDGET_TYPE_FULL_SCREEN_BUTTON ){
        return <MediaControlChild isPlayer = {props.isPlayer} widget={widget}/>;
    }

    else if(widget.widgetType === WidgetTypes.WIDGET_TYPE_TEXT){
        return <TextChild widget={widget}/>;
    }
    else if(widget.widgetType === WidgetTypes.WIDGET_TYPE_MAP){
        return <IFrameChild widget={widget}/>;
    }else if(widget.widgetType === WidgetTypes.WIDGET_TYPE_IFRAME){
        return <IFrameChild widget={widget}/>;
    }else if(widget.widgetType === WidgetTypes.WIDGET_TYPE_DEFAULT_VIDEO){
        return <video id={props.isPlayer?'videoTagPreview':'videoTag'} width="100%" ><source src={Video} type="video/mp4" /></video>;
    }else if(widget.widgetType === WidgetTypes.WIDGET_TYPE_CIRCLE){
        return <CircleChild widget={widget}/>;
    }else if(widget.widgetType === WidgetTypes.WIDGET_TYPE_SQUARE_BOX){
        return <SquareChild widget={widget} />;
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
        case WidgetTypes.WIDGET_TYPE_DEFAULT_VIDEO:
            return 'default video layer';
        case WidgetTypes.WIDGET_TYPE_MAP:
            return 'map layer';
        case WidgetTypes.WIDGET_TYPE_IFRAME:
            return 'IFrame layer';


        default:
            return 'layer';

    }

}