import React from "react";
import {Rnd} from "react-rnd";

const style = {
    alignItems: 'center',
    justifyContent: 'center',
    background: 'transperent'
};

class DraggableCustomComponent extends React.Component {

    render() {
        const {widget, onResizeHandler, onDragStop, positionIndex, children, disableDragging, bound} =  this.props;
        return (
            <Rnd style={style}
                 default={{
                     x: 0,
                     y: 0,
                     width: widget.width,
                     height: widget.height
                 }}
                 minWidth={widget.minWidth || 10}
                 minHeight={widget.minHeight || 10}
                 enableResizing={{
                     top: false,
                     right: true && !disableDragging,
                     bottom: true && !disableDragging,
                     left: false,
                     topRight: false,
                     bottomRight: true && !disableDragging,
                     bottomLeft: false,
                     topLeft: false
                 }}
                 disableDragging = {disableDragging}
                 size={{ width: widget.width,  height: widget.height }}
                 position={{ x: widget.xPosition, y: widget.yPosition }}
                 onResizeStop = {(e, direction, ref)=>onResizeHandler(ref,positionIndex)}
                 onDragStop={(mouseEvent, dragData)=>onDragStop(mouseEvent, dragData, positionIndex)}
                 bounds={bound}
            >
                {children}
            </Rnd>
        );
    }

}

export default DraggableCustomComponent;




DraggableCustomComponent.defaultProps = {
    disableDragging: false,
};