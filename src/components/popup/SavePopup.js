import React from 'react';
import { Modal, Button ,Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as alertActions from '../../apiAction/Alert/AlertActions';
import { saveTemplate } from '../../apiAction/actions/headerActions';
import '../../assets/css/custom_modal.css';

class SavePopup extends React.Component{

    render() {
        const { showModel, saveAction, alertTitle, hideAlert,saveTemplate} = this.props
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
                    <Form>
                        <Form.Group controlId="formBasicTemplate">
                            <Form.Label>Enter Template Name</Form.Label>
                            <Form.Control type="text" placeholder="Template Name" onChange = {(event)=>saveTemplate(event.target.value)}/>
                        </Form.Group>
                    </Form>
                    </Modal.Body>
                <Modal.Footer>

                    <Button onClick={saveAction}>Save</Button>

                </Modal.Footer>
            </Modal>
        );
    }
}

const mapStateToProps=(state)=>{
    return {
        showModel : state.saveReducer.showSavePopup,
        alertMessage : state.saveReducer.message,
        alertTitle : state.saveReducer.title,
    };
}

const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators({...alertActions,saveTemplate}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SavePopup);