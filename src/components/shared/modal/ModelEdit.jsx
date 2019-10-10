import React from "react";
import ModalEdit from "react-modal";


class PopUpModal extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
     
        <ModalEdit
          isOpen={this.props.modalIsOpen2}
          onRequestClose={this.props.closeModal2}
          style={this.props.customStyles}
          ariaHideApp={false}
        >
          {this.props.children}
        </ModalEdit>
       
      </>
    );
  }
}

export default PopUpModal;
