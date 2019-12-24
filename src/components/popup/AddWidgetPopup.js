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

    render() {
        const { showModel, alertTitle, hideWidgetPopupAlert,widgetType } = this.props;

        return(
            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                dialogClassName = "custom-modal-style"
                onHide = {hideWidgetPopupAlert}
                show = {showModel}
                onClick={this.handleOutSideClick}
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
        switch(widgetType){
            case WidgetTypes.WIDGET_TYPE_MAP :
                return <IframeAction popupData = {this.props.popupData} widget={this.props.widget} />;
            case WidgetTypes.WIDGET_TYPE_CIRCLE:
                return <ShapeColourPopup popupData = {this.props.popupData} widgetType = {this.props.widgetType} />
            case WidgetTypes.WIDGET_TYPE_SQUARE_BOX:
                return <ShapeColourPopup popupData = {this.props.popupData} widgetType = {this.props.widgetType} />
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
