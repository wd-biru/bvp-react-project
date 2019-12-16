import React from 'react';
import WidgetUtils from './WidgetUtils';
import classNames from 'classnames';
import '../../../assets/css/widget.css';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as playerActions from "../../../apiAction/Player/PlayerControlAction";
class Widget extends React.Component {
    constructor(props) {
        super(props);
        this.onWidgetSelectHandler = this.onWidgetSelectHandler.bind(this);
    }

    render() {
        const layerStyle = classNames({
            'widget' : true,
            'widget-selected': this.props.index === this.props.selectedIndex
        })
        return (
            <div  className={layerStyle}   onClick={() => {
                this.onWidgetSelectHandler(this.props.index);
            }}>
{/*
                <i className="fa fa-pencil edit-button"/>
*/}
{/*
                <i className="fa fa-trash-o delete-button"/>
*/}

                <WidgetUtils widget={this.props.widget} />
            </div>
        );
    }

    // @TO-DO

    onWidgetSelectHandler(index){
        this.props.editSelection(index);
    }
}

function mapStateToProps(state) {
    return {
        selectedIndex: state.controlReducer.selectedWidget
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(playerActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps) (Widget);
