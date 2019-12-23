import React from 'react';
import { getWidgetNameByType } from '../WidgetUtils';
const ImageComponent = (props) =>{
    const { images, type, onDoubleClickHandler } = props;

    return(
        <>
            {images.map( (image, index) =>{
                return <div key={index} draggable="true" onDragStart={(event) =>onDragHandler(event, type)} onClick={(e) => onDoubleClickHandler(e, image)} style={{display:'inline-block', padding:'5px'}}><img style={{height:'20px'}} src={image}/></div>;
            })}
        </>
    );
}


export default ImageComponent;

function onDragHandler(event, type) {
    const widgetDetail = {
        widgetType: type,
        imageData: event.target.src,
        width : 50,
        height: 50,
        name: getWidgetNameByType(type)
    }
    event.dataTransfer.setData('widgetDetail', JSON.stringify(widgetDetail));

}


