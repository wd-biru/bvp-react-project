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
        const {widget} =  this.props;
        return (
            <Rnd style={style}
                 default={{
                     x: 0,
                     y: 0,
                     width: this.props.widget.width,
                     height: this.props.widget.height
                 }}
                 position={{ x: widget.xPosition, y: widget.yPosition }}

                 onDragStop={(mouseEvent, dragData)=>this.props.onDragStop(mouseEvent, dragData, this.props.positionIndex)}
                 bounds={'.createoverlay-two'}
            >
                {this.props.children}
            </Rnd>
        );
    }

}

export default DraggableCustomComponent;



