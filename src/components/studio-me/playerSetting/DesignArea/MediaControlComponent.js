import React from 'react';
import {connect} from 'react-redux';
import DraggableCustomComponent from './DraggableCustomComponent';
import Widget from '../Widget';
import {bindActionCreators} from "redux";
import * as PlayerControlAction from "../../../../apiAction/Player/PlayerControlAction";

class MediaControlComponent extends React.Component {
    constructor(props) {
        super(props);
        getDraggableElement = getDraggableElement.bind(this);
        onDragStopHandler = onDragStopHandler.bind(this);
        resizeHandler = resizeHandler.bind(this);
    }


    render() {
        return (
            <div>
                {getDraggableElement()}
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


function getDraggableElement() {
    return this.props.widgetsList.map((widget, index) => {
        return <DraggableCustomComponent key={index} widget={widget} positionIndex={index} bound='.draggable-container'
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

