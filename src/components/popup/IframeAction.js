import React from "react";
import {Button} from "react-bootstrap";
import * as WidgetType from "../studio-me/playerSetting/WidgetType";
import {getWidgetNameByType} from "../studio-me/playerSetting/WidgetUtils";
import {bindActionCreators} from "redux";
import * as playerControlAction from "../../apiAction/Player/PlayerControlAction";
import * as widgetPopupActions from "../../apiAction/WidgetPopup/WidgetPopupAction";
import {connect} from "react-redux";

class IframeAction extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            iFrameUrl: this.props.iFrameUrl,
        }
    }

    render() {
        let show;
        if(WidgetType.WIDGET_TYPE_MAP === this.props.widgetType){
            show =  <input  type="text" style = {{width:350}} value={this.state.iFrameUrl} onChange={this.onUrlChangeHandler}></input>
        }else if(WidgetType.WIDGET_TYPE_IFRAME === this.props.widgetType){
            show = <textarea  rows="4" cols="50" style = {{resize:'none'}} name="comment" form="usrform" value={this.state.iFrameUrl}  onChange={this.onUrlChangeHandler}/>
        }

        return(
            <>
                <div className="text-container">
                    <label className="left-feild">{this.props.message}</label>
                    {show}
                </div>
                <Button disabled={!this.state.iFrameUrl} className='save-botton-button' onClick={this.onSaveHandler}>Submit</Button>
            </>
        );
    }

    onUrlChangeHandler =(event)=>{
        this.setState({iFrameUrl : event.target.value});
    }
    onSaveHandler =() => {
        const data = {
            widgetType: this.props.widgetType,
            name: getWidgetNameByType(this.props.widgetType),
            minWidth: 310,
            minHeight : 160,
            width : 310,
            height : 160,
            otherData: {
                iFrameUrl : this.state.iFrameUrl
            }
        }
        if (this.props.popupData) {
            data['xPosition'] = this.props.popupData.xPosition;
            data['yPosition'] = this.props.popupData.yPosition;
        }
        if(this.props.popupData && this.props.popupData.widgetIndex){
            this.props.editPlayerActionData(data,this.props.popupData.widgetIndex)
        }
        else{
            this.props.updatePlayerActionData(data);
        }
        this.props.hideWidgetPopupAlert();
    }
}



const mapDispatchToPropsChild = (dispatch)=>{
    return bindActionCreators({...playerControlAction,...widgetPopupActions},dispatch);
}

export default connect(null, mapDispatchToPropsChild)(IframeAction);