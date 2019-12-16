import React from 'react';
import { Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import '../../assets/css/custom_modal.css';
import '../../assets/css/TextAction.css';
import * as widgetPopupActions from "../../apiAction/WidgetPopup/WidgetPopupAction";
import IframeAction from "./IframeAction";
class ActionPopup extends React.Component{

    render() {
        const { showModel, alertTitle, hideWidgetPopupAlert} = this.props;
        return(
            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                dialogClassName = "custom-modal-style"
                onHide = {hideWidgetPopupAlert}
                show = {showModel}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {alertTitle}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div >
                        <IframeAction widget={this.props.widget} />
                    </div>
                </Modal.Body>
            </Modal>
        );
    }
}

const mapStateToProps=(state)=>{
    return {
        showModel : state.widgetPopupReducer.showPopup,
        alertMessage : state.widgetPopupReducer.message,
        alertTitle : state.widgetPopupReducer.title,
    };
}

const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators(widgetPopupActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionPopup);
