import React from 'react';
import Video from "../../../assets/img/me/video-test.mp4";
import MediaControlComponent from "./DesignArea/MediaControlComponent";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as playerControlAction from "../../../apiAction/Player/PlayerControlAction";
import * as alertActions from "../../../apiAction/Alert/AlertActions";

import CommonAlert from '../../CommonComponents/CommonAlert';

class PlayerSettingSection2 extends React.Component{
    constructor(props) {
        super(props);
        this.onDropHandler = this.onDropHandler.bind(this);
    }
    render() {
        return (
            <div onDrop={this.onDropHandler} onDragOver={this.onDragOverHandler} className="col-sm-9 createoverlay-two playerSetting-two">
                <video id="videoTag" width="100%" >
                    <source src={Video} type="video/mp4" />
                </video>
                <MediaControlComponent/>
                <CommonAlert/>
            </div>
        );
    }

    onDropHandler(event){
        const {updatePlayerActionData, widgetsList, showAlert} = this.props;
        let widgetDetail = event.dataTransfer.getData("widgetDetail");
        if(widgetDetail){
            widgetDetail = JSON.parse(widgetDetail);
            let isNotPresent = false;
            if(widgetsList){
                isNotPresent = widgetsList.every((widget) =>{
                    if(widget && widget.widgetType === widgetDetail.widgetType)
                        return false
                    return true;
                });
            }
            if(isNotPresent){
                widgetDetail['xPosition'] = event.clientX;
                widgetDetail['yPosition'] = event.clientY
                updatePlayerActionData(widgetDetail);
            }else{
                showAlert();
            }

        }
    }
    onDragOverHandler(event){
        event.preventDefault();
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({...playerControlAction, ...alertActions},dispatch );
}
const mapStateToProps = ( state )=>{
    return {
        widgetsList : state.controlReducer.widgetsList
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(PlayerSettingSection2);

