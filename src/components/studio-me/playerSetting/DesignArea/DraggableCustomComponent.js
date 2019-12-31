import React from "react";
import {Rnd} from "react-rnd";
import {connect} from 'react-redux';

const style = {
    alignItems: 'center',
    justifyContent: 'center',
    background: 'transperent'
};

class DraggableCustomComponent extends React.Component {

    render() {
        const {widget, onResizeHandler, onDragStop, positionIndex, children, disableDragging, bound, maintainAspectRatio,zIndex} =  this.props;
        return (
            <Rnd style={{...style, ...{zIndex:zIndex}}}
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
                 lockAspectRatio = {maintainAspectRatio}
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

const mapStateToProps = (state) => {
    return {
        widgetsList: state.controlReducer.widgetsList
    };
}

export default connect(mapStateToProps,null)(DraggableCustomComponent);




DraggableCustomComponent.defaultProps = {
    disableDragging: false,
    maintainAspectRatio : false
};