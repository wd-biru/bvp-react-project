import React from 'react';
import * as WidgetType from "../studio-me/playerSetting/WidgetType";

const IFrameChild = (props) => {
    const {otherData} = props.widget;
    let url = otherData.iFrameUrl;
    const url_pattern = new RegExp('https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,}');
    const htmlTagPattern = new RegExp(/<[a-z/][\s\S]*>/i);

    if(WidgetType.WIDGET_TYPE_IFRAME === props.widget.widgetType){
        if(otherData.iFrameUrl.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/)){
            url = getYouTubeId(otherData.iFrameUrl);
        }else if(url_pattern.test(otherData.iFrameUrl.test)){
            url = otherData.iFrameUrl;
        }else if(htmlTagPattern.test(otherData.iFrameUrl)){
            return <div className='iframe-child' dangerouslySetInnerHTML={{ __html: otherData.iFrameUrl }}/>;
        }
    }

    if(otherData.iFrameUrl.indexOf('iframe') >= 0){
        return <div className='iframe-child' dangerouslySetInnerHTML={{ __html: url }}/>;
    }
    return  <iframe style={{width : '100%', height : '100%'}} src={url} frameborder="0" allowfullscreen></iframe>;
}
const getYouTubeId = (url) =>{
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return (match && match[2].length === 11)
        ?'//www.youtube.com/embed/'+ match[2]
        : url;

}
export default IFrameChild;