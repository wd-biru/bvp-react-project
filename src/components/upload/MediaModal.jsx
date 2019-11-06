import React from "react";
import docuImg from "../../assets/img/docimg.jpg";
import Modal from "../shared/modal/Modal";
import Select from "react-select";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "500px",
    paddingtop: "0px",
    padding: "0px"
  }
};

class MediaModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Modal
          modalIsOpen={this.props.modalIsOpen}
          closeModal={this.props.closeMediaModal}
          customStyles={customStyles}
          contentLabel={"Create Folder"}
          pauseOnFocusLoss={false}
        >
          <div className="modal-header text-center">
            <h4 className="modal-title">{this.props.btnText} confirm</h4>
            <button
              type="button"
              className="close"
              onClick={this.props.closeMediaModal}
              data-dismiss="modal"
            >
              &times;
            </button>
          </div>

          <div className="modal-body text-center">
            <br />
            {this.props.consfirmMsg} <br />
            <br />
            <button
              id="createFolder"
              name="createName"
              className="btn btn-info btn-md modal-btn text-center form-group"
              onClick={() => this.props.handleClick()}
              disabled={this.props.actionBtnDisable}
            >
              {this.props.btnText}
            </button>
            <br />
            {this.props.actionBtnDisable && <span>Please Wait...</span>}
          </div>
        </Modal>
      </>
    );
  }
}

export default MediaModal;
