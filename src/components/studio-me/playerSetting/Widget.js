import React from 'react';
import WidgetUtils from './WidgetUtils';
import classNames from 'classnames';
import '../../../assets/css/widget.css';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as playerActions from "../../../apiAction/Player/PlayerControlAction";
import * as popupActions from '../../../apiAction/actions/commonActions' 
import * as widgetTypes from './WidgetType';
class Widget extends React.Component {
    constructor(props) {
        super(props);
        this.onWidgetSelectHandler = this.onWidgetSelectHandler.bind(this);
    }
    isAllowedToEdit = (widgetType) => {
        if(widgetTypes.WIDGET_TYPE_TEXT === widgetType){
            return true;
        }
        return false;
    }
    editWidget = (widgetData) =>{
        widgetData["widgetIndex"] = this.props.selectedIndex;
        this.props.popupAction("Text Configuration",widgetData);
    }
    render() {
        const layerStyle = classNames({
            'widget' : true && !this.props.isPlayer,
            'widget-selected': (this.props.index === this.props.selectedIndex) && !this.props.isPlayer,
            'widget-cursor' : this.props.isPlayer
        })
        return (
            <div  className={layerStyle}   onClick={() => {
                this.onWidgetSelectHandler(this.props.index);
            }}>

                {this.isAllowedToEdit(this.props.widget.widgetType)  && !this.props.isPlayer&& <i onClick = {()=>this.editWidget(this.props.widget)} className="fa fa-pencil edit-button"/> }


                {!this.props.isPlayerv && <i className="fa fa-trash-o delete-button"/>}


                <WidgetUtils isPlayer={this.props.isPlayer} widget={this.props.widget} />
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
    return bindActionCreators({...playerActions,...popupActions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps) (Widget);



Widget.defaultProps = {
    isPlayer: false,
};