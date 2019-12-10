import React from 'react';

const MediaControlChild = (props) => {
    const {widget} = props;
    return <img style={{width: '100%', height: '100%'}} src={widget.imageData}/>;
}

export default MediaControlChild;