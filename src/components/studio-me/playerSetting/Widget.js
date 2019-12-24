import React from 'react';
import WidgetUtils from './WidgetUtils';
import classNames from 'classnames';
import '../../../assets/css/widget.css';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as playerActions from "../../../apiAction/Player/PlayerControlAction";
import * as popupActions from '../../../apiAction/actions/commonActions' 
import * as widgetTypes from './WidgetType';
import * as constants from '../../Constants/Constant';

class Widget extends React.Component {
    constructor(props) {
        super(props);
        this.onWidgetSelectHandler = this.onWidgetSelectHandler.bind(this);
    }

    render() {
        const layerStyle = classNames(this.getSelectedclassNames())
        return (
            <div  className={layerStyle}   onClick={() => {
                this.onWidgetSelectHandler(this.props.index);
            }}>
                <WidgetUtils isPlayer={this.props.isPlayer} widget={this.props.widget} />
            </div>
        );
    }

    getSelectedclassNames = () => {
        let selectedClass = {
            'widget' : true && !this.props.isPlayer,
            'widget-selected': (this.props.index === this.props.selectedIndex) && !this.props.isPlayer,
            'widget-cursor' : this.props.isPlayer,
        }
        if(this.props.isPlayer && this.props.widget && this.props.widget.animationData){
            if(this.props.widget.animationData.animation === constants.GLOBAL_ANIMATION_FADE){
                if (this.props.widget.animationData.direction === constants.DIRECTION_LEFT_TO_RIGHT) {
                    selectedClass['fade-animate-left'] = true;
                } else if (this.props.widget.animationData.direction === constants.DIRECTION_RIGHT_TO_LEFT) {
                    selectedClass['fade-animate-right'] = true;
                } else if (this.props.widget.animationData.direction === constants.DIRECTION_TOP_TO_BOTTOM) {
                    selectedClass['fade-animate-top'] = true;
                } else if (this.props.widget.animationData.direction === constants.DIRECTION_BOTTOM_TO_TOP) {
                    selectedClass['fade-animate-bottom'] = true;
                } else {
                    selectedClass['normal-fade'] = true;
                }
            }else if(this.props.widget.animationData.animation === constants.GLOBAL_ANIMATION_SLIDE){
                if (this.props.widget.animationData.direction === constants.DIRECTION_LEFT_TO_RIGHT) {
                    selectedClass['slide-animate-left'] = true;
                } else if (this.props.widget.animationData.direction === constants.DIRECTION_RIGHT_TO_LEFT) {
                    selectedClass['slide-animate-right'] = true;
                } else if (this.props.widget.animationData.direction === constants.DIRECTION_TOP_TO_BOTTOM) {
                    selectedClass['slide-animate-top'] = true;
                } else if (this.props.widget.animationData.direction === constants.DIRECTION_BOTTOM_TO_TOP) {
                    selectedClass['slide-animate-bottom'] = true;
                } else {
                    selectedClass['normal-slide'] = true;
                }
            }
        }


        // fade-right-to-left

        return selectedClass;
    }

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