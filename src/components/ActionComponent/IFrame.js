import React from 'react';

const IFrameChild = (props) => {
    const {otherData} = props.widget;
    return  <iframe style={{width : '100%', height : '100%'}} src={otherData.iFrameUrl}></iframe>;
}

export default IFrameChild;