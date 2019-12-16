import React from 'react';
import Video from "../../../assets/img/me/video-test.mp4";
import MediaControlComponent from "./DesignArea/MediaControlComponent";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as playerControlAction from "../../../apiAction/Player/PlayerControlAction";
import * as alertActions from "../../../apiAction/Alert/AlertActions";
import '../../../assets/css/widget.css';
import CommonAlert from '../../CommonComponents/CommonAlert';

class PlayerSettingSection2 extends React.Component{
    constructor(props) {
        super(props);
        this.onDropHandler = this.onDropHandler.bind(this);
    }
    render() {
        return (
            <div>
                <div ref="dropContainer" style={{padding:'0px !important'}} onDrop={this.onDropHandler} onDragOver={this.onDragOverHandler} className="col-sm-9 createoverlay-two draggable-container">
                    <video id="videoTag" width="100%" >
                        <source src={Video} type="video/mp4" />
                    </video>
                    <MediaControlComponent/>
                    <CommonAlert/>
                </div>
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
                isNotPresent = widgetsList.find(element => element.widgetType == widgetDetail.widgetType);
            }
            if(!isNotPresent){
                let rect = event.target.getBoundingClientRect()

                widgetDetail['xPosition'] = rect.x;
                widgetDetail['yPosition'] = rect.y
                updatePlayerActionData(widgetDetail);
            }else{
                showAlert('error', 'adding duplicate action is not allowed');
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

