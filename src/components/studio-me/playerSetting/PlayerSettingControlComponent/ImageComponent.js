import React from 'react';
import * as WidgetType from '../WidgetType';
const ImageComponent = (props) =>{
    const { images, type, onDoubleClickHandler } = props;

    return(
        <>
            {images.map( (image) =>{
                return <div draggable="true" onDragStart={(event) =>onDragHandler(event, type)} onDoubleClick={(e) => onDoubleClickHandler(e, image)} style={{display:'inline-block', padding:'5px'}}><img style={{height:'20px'}} src={image}/></div>;
            })}
        </>
    );
}


export default ImageComponent;

function onDragHandler(event, type) {
    const widgetDetail = {
        widgetType: type,
        imageData: event.target.src,
        width : 100,
        height: 100,
        name: 'layer'
    }
    event.dataTransfer.setData('widgetDetail', JSON.stringify(widgetDetail));

}


