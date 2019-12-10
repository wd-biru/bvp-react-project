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
        return <DraggableCustomComponent key={index} widget={widget} positionIndex={index} bound='draggableContainer'
                                         onDragStop={onDragStopHandler}><Widget
            widget={widget}/></DraggableCustomComponent>;
    });
}


function onDragStopHandler(event, data, position) {
    this.props.updateDragPosition(data.x, data.y, position)
    console.log(event, data, position);
    // data.x, data.y
}

