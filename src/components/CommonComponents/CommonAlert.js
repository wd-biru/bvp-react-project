import React from 'react';
import { Modal} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as alertActions from '../../apiAction/Alert/AlertActions';

class CommonAlert extends React.Component{

    render() {

        return(
            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show = {this.props.showModel}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Modal heading
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Centered Modal</h4>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                        consectetur ac, vestibulum at eros.
                    </p>
                </Modal.Body>
                <Modal.Footer>
{/*
                    <Button onClick={props.onHide}>Close</Button>
*/}
                </Modal.Footer>
            </Modal>
        );
    }
}

const mapStateToProps=(state)=>{
    return {
        showModel : state.alertReducer.showAlert,
        alertMessage : state.alertReducer.alertMesssage,
        alertTitle : state.alertReducer.alertTitle,
    };
}

const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators(alertActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CommonAlert);