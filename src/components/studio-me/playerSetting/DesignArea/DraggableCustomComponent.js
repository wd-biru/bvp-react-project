import React from "react";
import {Rnd} from "react-rnd";

const style = {
    alignItems: 'center',
    justifyContent: 'center',
    border: 'solid 1px #ddd',
    background: 'transperent'
};

class DraggableCustomComponent extends React.Component {

    render() {
        const {widget, onResizeHandler, onDragStop, positionIndex, children} =  this.props;
        return (
            <Rnd style={style}
                 default={{
                     x: 0,
                     y: 0,
                     width: widget.width,
                     height: widget.height
                 }}
                 position={{ x: widget.xPosition, y: widget.yPosition }}
                 onResizeStop = {(e, direction, ref)=>onResizeHandler(ref,positionIndex)}
                 onDragStop={(mouseEvent, dragData)=>onDragStop(mouseEvent, dragData, positionIndex)}
                 bounds={'.draggable-container'}
            >
                {children}
            </Rnd>
        );
    }

}

export default DraggableCustomComponent;



