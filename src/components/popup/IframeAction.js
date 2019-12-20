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
            iFrameUrl: '',
        }
    }

    render() {
        return(
            <>
                <div className="text-container">
                    <label className="left-feild">IFrame</label>
                    <input type="text" value={this.state.iFrameUrl} onChange={this.onUrlChangeHandler}></input>
                </div>
                <Button className='save-botton-button' onClick={this.onSaveHandler}>Submit</Button>
            </>
        );
    }

    onUrlChangeHandler =(event)=>{
        this.setState({iFrameUrl : event.target.value});
    }

    onSaveHandler =() => {
        const data = {
            widgetType: WidgetType.WIDGET_TYPE_MAP,
            name: getWidgetNameByType(WidgetType.WIDGET_TYPE_MAP),
            minWidth: 310,
            minHeight : 160,
            otherData: {
                iFrameUrl : this.state.iFrameUrl
            }
        }
        this.props.updatePlayerActionData(data);
        this.props.hideWidgetPopupAlert();
    }
}

const mapDispatchToPropsChild = (dispatch)=>{
    return bindActionCreators({...playerControlAction,...widgetPopupActions},dispatch);
}

export default connect(null, mapDispatchToPropsChild)(IframeAction);