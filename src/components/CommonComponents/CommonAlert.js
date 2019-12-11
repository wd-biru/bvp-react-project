import React from 'react';
import { Modal, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as alertActions from '../../apiAction/Alert/AlertActions';
import '../../assets/css/custom_modal.css';

class CommonAlert extends React.Component{

    render() {
        const { showModel, alertMessage, alertTitle, hideAlert} = this.props
        return(
            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                dialogClassName = "custom-modal-style"
                onHide = {hideAlert}
                show = {showModel}  
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {alertTitle}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        {alertMessage}
                    </p>
                </Modal.Body>
                <Modal.Footer>

                    <Button onClick={hideAlert}>Close</Button>

                </Modal.Footer>
            </Modal>
        );
    }
}

const mapStateToProps=(state)=>{
    return {
        showModel : state.alertReducer.showAlert,
        alertMessage : state.alertReducer.message,
        alertTitle : state.alertReducer.title,
    };
}

const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators(alertActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CommonAlert);