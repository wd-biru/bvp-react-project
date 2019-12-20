import React from 'react';
import { Modal, Button ,Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as alertActions from '../../apiAction/Alert/AlertActions';
import { saveTemplate } from '../../apiAction/actions/headerActions';
import '../../assets/css/custom_modal.css';
import VideoPreview from "./VideoPreview";

class PreviewPopup extends React.Component{

    render() {
        const { showModel, hidePlayerPreviewPopup, widgetList} = this.props
        return(
            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                dialogClassName="custom-modal-full-width"
                onHide = {hidePlayerPreviewPopup}
                show = {showModel}
            >
                <Modal.Body>
                    <VideoPreview widgetsList = {widgetList} />
                </Modal.Body>
            </Modal>
        );
    }
}

const mapStateToProps=(state)=>{
    return {
        showModel : state.alertReducer.showPlayerPreviewPopup,
        widgetList : state.controlReducer.widgetsList
    };
}

const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators(alertActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PreviewPopup);