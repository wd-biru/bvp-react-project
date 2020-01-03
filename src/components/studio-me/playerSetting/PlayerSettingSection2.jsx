import React from 'react';
import MediaControlComponent from "./DesignArea/MediaControlComponent";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as playerControlAction from "../../../apiAction/Player/PlayerControlAction";
import { popupAction} from '../../../apiAction/actions/commonActions';
import * as alertActions from "../../../apiAction/Alert/AlertActions";
import '../../../assets/css/widget.css';
import CommonAlert from '../../CommonComponents/CommonAlert';
import PreviewPopup from "../../popup/PreviewPopup";
import * as WidgetTypes from "./WidgetType";
import * as widgetPopupActions from "../../../apiAction/WidgetPopup/WidgetPopupAction";
import * as constants from '../../Constants/Constant';

class PlayerSettingSection2 extends React.Component{
    constructor(props) {
        super(props);
        this.onDropHandler = this.onDropHandler.bind(this);
    }
    render() {
        return (
            <div>
                <div ref="dropContainer" style={{padding:'0px !important'}} onDrop={this.onDropHandler} onDragOver={this.onDragOverHandler} className="col-sm-9 createoverlay-two ">
                    <div className='draggable-container'>
                     {/*   <video width="100%" >
                            <source src={Video} type="video/mp4" />
                        </video>*/}
                    </div>
                    <MediaControlComponent/>
                </div>
                <CommonAlert/>
                <PreviewPopup/>
            </div>
        );
    }

    onDropHandler(event){
        const {updatePlayerActionData, widgetsList, showAlert} = this.props;
        let widgetDetail = event.dataTransfer.getData("widgetDetail");
        if(widgetDetail){
            widgetDetail = JSON.parse(widgetDetail);
            let isNotPresent = false;
            if(widgetsList && isPlayerActionWidgets(widgetDetail.widgetType)){
                isNotPresent = widgetsList.find(element => element.widgetType == widgetDetail.widgetType);
            }
            if(!isNotPresent){
                widgetDetail['xPosition'] = event.pageX - event.currentTarget.offsetLeft;
                widgetDetail['yPosition'] = event.pageY - event.currentTarget.offsetTop;
                if(widgetDetail.widgetType === WidgetTypes.WIDGET_TYPE_TEXT){
                    this.props.popupAction('Text Configuration',null,widgetDetail['xPosition'],widgetDetail['yPosition']);
                }
                else if(widgetDetail.widgetType === WidgetTypes.WIDGET_TYPE_IMAGE){
                    document.getElementById('file').click();
                }
                else if(widgetDetail.widgetType === WidgetTypes.WIDGET_TYPE_MAP){
                    this.props.showWidgetPopupAlert(constants.MAP_HEADING,constants.MAP_BODY_NAME,WidgetTypes.WIDGET_TYPE_MAP,widgetDetail);
                }
                else if(widgetDetail.widgetType === WidgetTypes.WIDGET_TYPE_IFRAME){
                    this.props.showWidgetPopupAlert(constants.I_FRAME_HEADING,constants.I_FRAME_BODY_NAME,WidgetTypes.WIDGET_TYPE_IFRAME,widgetDetail);
                }
                else if(widgetDetail.widgetType === WidgetTypes.WIDGET_TYPE_SQUARE_BOX){
                    this.props.showWidgetPopupAlert(constants.SQUARE_SHAPE_HEADING,null,WidgetTypes.WIDGET_TYPE_SQUARE_BOX,widgetDetail);
                }
                else if(widgetDetail.widgetType === WidgetTypes.WIDGET_TYPE_CIRCLE){
                    this.props.showWidgetPopupAlert(constants.CIRCLE_SHAPE_HEADING,null,WidgetTypes.WIDGET_TYPE_CIRCLE,widgetDetail);

                }else{
                    updatePlayerActionData(widgetDetail);
                }

            }else{
                showAlert('error', 'adding duplicate action is not allowed');
            }

        }
    }
    onDragOverHandler(event){
        event.preventDefault();
    }
}

const isPlayerActionWidgets= (widgetType) =>{
    if(widgetType === WidgetTypes.WIDGET_TYPE_PALY_BUTTON ||
        widgetType === WidgetTypes.WIDGET_TYPE_FORWARD_BUTTON ||
    widgetType === WidgetTypes.WIDGET_TYPE_BACK_BUTTON  ||
        widgetType === WidgetTypes.WIDGET_TYPE_SOUND_BUTTON  ||
        widgetType === WidgetTypes.WIDGET_TYPE_FULL_SCREEN_BUTTON
    ){
        return true;
    }
    return false;
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({...playerControlAction, ...alertActions,...widgetPopupActions,popupAction},dispatch );
}
const mapStateToProps = ( state )=>{
    return {
        widgetsList : state.controlReducer.widgetsList
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(PlayerSettingSection2);

