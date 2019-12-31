import React from 'react';
import {connect} from 'react-redux';
import DraggableCustomComponent from './DraggableCustomComponent';
import Widget from '../Widget';
import {bindActionCreators} from "redux";
import * as PlayerControlAction from "../../../../apiAction/Player/PlayerControlAction";
import * as widgetTypes from '../WidgetType';

class MediaControlComponent extends React.Component {
    constructor(props) {
        super(props);
        onDragStopHandler = onDragStopHandler.bind(this);
        resizeHandler = resizeHandler.bind(this);
    }


    render() {
        return (
            <div>
                {getDraggableElement(this.props.widgetsList)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        widgetsList: state.controlReducer.widgetsList
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(PlayerControlAction, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MediaControlComponent);


function getDraggableElement(widgetsList) {
    return widgetsList.map((widget, index) => {
        return <DraggableCustomComponent maintainAspectRatio={isAspectRationNeeded(widget)}  key={index} widget={widget} zIndex={widgetsList.length - index} positionIndex={index} bound='.draggable-container'
                                         onDragStop={onDragStopHandler} onResizeHandler={resizeHandler}>
            <Widget widget={widget} index={index}/>
        </DraggableCustomComponent>;
    });
}


function onDragStopHandler(event, data, position) {
    this.props.updateDragPosition(data.x, data.y, position);
}

function resizeHandler(ref, position) {
    this.props.updateReSizePosition(ref.offsetWidth, ref.offsetHeight, position);

}

const isAspectRationNeeded = (widget) => {

    switch(widget.widgetType){
        case widgetTypes.WIDGET_TYPE_DEFAULT_VIDEO:
            return true;
        case widgetTypes.WIDGET_TYPE_IMAGE :
            return true;
        case widgetTypes.WIDGET_TYPE_PALY_BUTTON:
            return true;
        case widgetTypes.WIDGET_TYPE_FORWARD_BUTTON:
            return true;
        case widgetTypes.WIDGET_TYPE_BACK_BUTTON:
            return true;
        case widgetTypes.WIDGET_TYPE_SOUND_BUTTON:
            return true;
        case widgetTypes.WIDGET_TYPE_FULL_SCREEN_BUTTON:
            return true;
        default :
            return false;
    }
}