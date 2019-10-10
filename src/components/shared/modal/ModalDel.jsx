import React from "react";
import ModalDel from "react-modal";


class PopUpModal extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
     
        <ModalDel
          isOpen={this.props.modalIsOpen}
          onRequestClose={this.props.closeModal}
          style={this.props.customStyles}
          contentLabel={this.props.contentLabel}
          ariaHideApp={false}
        >
          {this.props.children}
        </ModalDel>
       
      </>
    );
  }
}

export default PopUpModal;
