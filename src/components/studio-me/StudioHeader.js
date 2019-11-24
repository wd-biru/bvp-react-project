import React from "react";
import Modal from "../../components/shared/modal/Modal";
import logo from "./img/studio-bvp-logo.png";
import ques from "./img/questions-circular.png";
import alarm from "./img/alarm.png";
import user from "./img/user.png";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "800px",
    paddingtop: "0px",
    padding: "0px"
  }
};

class StudioHeader extends React.Component {
  render() {
    return (
      <>
        <header>
          <nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
            <span className="navbar-brand">
              <img
                src={logo}
                alt="BVP"
                className="studio logo-menu2"
                onClick={this.handleGoHome}
              />
            </span>
            <button
              class="btn btn-primary BackBtn"
              onClick={this.props.handleBackBtn}
            >
              <i class="fa fa-angle-double-left"></i>
              Back
            </button>
            <div className="">
              <ul className="navbar-nav my-2 my-lg-0">
                <li className="nav-item d-flex align-items-center">
                  <span href="#" className="nav-link2">
                    <img src={ques} />
                  </span>
                </li>

                <li className="nav-item dropdown">
                  <span
                    id="notifications"
                    rel="nofollow"
                    data-target="#"
                    href="#"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    className="nav-link2"
                  >
                    <img src={alarm} />
                  </span>
                </li>

                <li className="nav-item">
                  <span
                    href="login.html"
                    className="nav-link2"
                    onClick={this.handleLogout}
                  >
                    <img src={user} />
                  </span>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        {this.props.showStudioAlert && (
          <Modal
            modalIsOpen={this.props.showStudioAlert}
            closeModal={this.props.closeMediaModal}
            customStyles={customStyles}
            contentLabel={"Create Folder"}
            pauseOnFocusLoss={false}
          >
            <div className="modal-header text-center">
              <h4 className="modal-title">Confirmation</h4>
              <button
                type="button"
                className="close"
                onClick={this.props.closeStudioModal}
                data-dismiss="modal"
              >
                &times;
              </button>
            </div>

            <div className="modal-body text-center">
              <br />
              {
                "Are you sure you want to go Dashboard?. You will lost unsaved data."
              }{" "}
              <br />
              <br />
              <div>
                <button
                  id="createFolder"
                  name="createName"
                  className="btn btn-info btn-md modal-btn text-center form-group"
                  onClick={this.props.closeStudioModal}
                >
                  {"Cancel"}
                </button>{" "}
              </div>
              <div>
                <button
                  id="createFolder"
                  name="createName"
                  className="btn btn-info btn-md modal-btn text-center form-group"
                  onClick={this.props.openStudio}
                >
                  {"Ok"}
                </button>{" "}
              </div>
              <br />
            </div>
          </Modal>
        )}
      </>
    );
  }
}

export default StudioHeader;
