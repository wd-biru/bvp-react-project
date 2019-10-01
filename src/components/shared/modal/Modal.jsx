import React from "react";
import Modal from "react-modal";

class PopUpModal extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Modal
          isOpen={this.props.modalIsOpen}
          onRequestClose={this.props.closeModal}
          style={this.props.customStyles}
          contentLabel={this.props.contentLabel}
          ariaHideApp={false}
        >
          {this.props.children}
        </Modal>
      </>
    );
  }
}

export default PopUpModal;
