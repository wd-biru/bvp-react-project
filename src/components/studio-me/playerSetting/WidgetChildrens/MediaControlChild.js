import React from 'react';

const MediaControlChild = (props) => {
    const {widget} = props;
    return <div><img style={{width: '100%', height: '100%'}} src={widget.imageData}/></div>;
}

export default MediaControlChild;