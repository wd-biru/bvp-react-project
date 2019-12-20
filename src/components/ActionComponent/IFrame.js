import React from 'react';

const IFrameChild = (props) => {
    const {otherData} = props.widget;
    if(otherData.iFrameUrl.indexOf('iframe') >= 0){
        return <div className='iframe-child' dangerouslySetInnerHTML={{ __html: otherData.iFrameUrl }}/> 
    }
    return  <iframe style={{width : '100%', height : '100%'}} src={otherData.iFrameUrl}></iframe>;
}

export default IFrameChild;