import React from 'react';
import { Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import '../../assets/css/custom_modal.css';
import '../../assets/css/TextAction.css';
import * as widgetPopupActions from "../../apiAction/WidgetPopup/WidgetPopupAction";
import IframeAction from "./IframeAction";
import ShapeColourPopup from "./ShapeColourPopup";
import * as WidgetTypes from '../studio-me/playerSetting/WidgetType';
class ActionPopup extends React.Component{
    state = {
        colorPicker: false
    }

    handleColorPickerOpen = (e) => {
        this.setState({
            colorPicker: false
        })
    }

    openColorPicker = (event)=>{
        event.stopPropagation();
        this.setState({
            colorPicker: true
        })
    }

    render() {
        const { showModel, alertTitle, hideWidgetPopupAlert,widgetType } = this.props;

        return(
            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                dialogClassName = "custom-modal-style"
                onHide = {hideWidgetPopupAlert}
                show = {showModel}
                onClick={this.handleColorPickerOpen}
                onExited = {this.handleColorPickerOpen}

            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {alertTitle}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div >
                        {this.getRespectiveChild(widgetType)}
                    </div>
                </Modal.Body>
            </Modal>
        );
    }



    getRespectiveChild = (widgetType) =>{
        let iFrameUrl = '';
        if(this.props.popupData){
                iFrameUrl = this.props.popupData.otherData.iFrameUrl
            }
        else{
            iFrameUrl = '';
        }
        switch(widgetType){
            case WidgetTypes.WIDGET_TYPE_MAP :
                return <IframeAction popupData = {this.props.popupData} widget={this.props.widget} widgetType = {WidgetTypes.WIDGET_TYPE_MAP}/>;
            case WidgetTypes.WIDGET_TYPE_IFRAME :
                return <IframeAction popupData = {this.props.popupData} widget={this.props.widget} widgetType = {WidgetTypes.WIDGET_TYPE_IFRAME}/>;
            case WidgetTypes.WIDGET_TYPE_CIRCLE:
                return <ShapeColourPopup iFrameUrl = {iFrameUrl} openColorPicker={this.openColorPicker} widgetType = {this.props.widgetType} popupData = {this.props.popupData}  isColorPickerOpen={this.state.colorPicker} openColorPicker={this.openColorPicker} />
            case WidgetTypes.WIDGET_TYPE_SQUARE_BOX:
                return <ShapeColourPopup iFrameUrl = {iFrameUrl} openColorPicker={this.openColorPicker} widgetType = {this.props.widgetType} popupData = {this.props.popupData}  isColorPickerOpen={this.state.colorPicker} openColorPicker={this.openColorPicker} />
            default:
                return null;
        }
    }

}

const mapStateToProps=(state)=>{
    return {
        showModel : state.widgetPopupReducer.showPopup,
        alertMessage : state.widgetPopupReducer.message,
        alertTitle : state.widgetPopupReducer.title,
        widgetType :state.widgetPopupReducer.widgetType,
        popupData:state.widgetPopupReducer.popupData
    };
}

const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators(widgetPopupActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionPopup);
