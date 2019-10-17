import React, { Component } from "react";
import styled from "styled-components";

import LeftNav from "../components/shared/nav/LeftNav";
import TopPageHeader from "../components/testingCompo/PageTopHeader";
import Breadcromb from "../components/testingCompo/Breadcromb";
import Footer from "../components/shared/footer/Footer";
import SectionImg2 from "../assets/img/me/images.jpg";
import Dropdown from 'react-bootstrap/Dropdown'
import util from "../apiAction/axios/utility";
import {
  getUserFolderData,
  createFolderData
} from "../apiAction/apiType/userFolder/folderActions";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActiveObject: null,
      activeIndex: null
    };
  }
  handleFolderData = selectedFolder => {
    this.setState({
      isActiveObject: selectedFolder
    });
  };

  render() {
    return (
      <>
        <LeftNav
          handleFolderData={this.handleFolderData}
          isActiveObject={this.state.isActiveObject}
          userFolderDetails={this.props.userFolderDetails}
          folderDetails={this.props.folderDetails}
          getUserFolderData={this.props.getUserFolderData}
          createFolderData={this.props.createFolderData}
        />
        <div className="content-inner">
          <TopPageHeader
            userData={this.props.userData}
            createFolderData={this.props.createFolderData}
            folderDetails={this.props.folderDetails}
            getUserFolderData={this.props.getUserFolderData}
            isActiveObject={this.state.isActiveObject}
          />
          <Breadcromb />
          <section className="tables">
            <div className="container-fluid">
              <div className="tab-content">
                <div className="tab-pane container active col-lg-12" id="home">
                  <div className="row">
                    <div className="col-lg-3">
                      <div className="cardss">
                        <div className="card-body">
                          <img src={SectionImg2} alt="John" />
                          {/* {this.state.isActiveObject &&
                            this.state.isActiveObject.folder_name} */}
                                {/* My dropdown Code */}
                                <div class="cappadd">
                                    <h2>{this.state.isActiveObject &&
                                        this.state.isActiveObject.folder_name}</h2>
                                    <div class="cappadd-bot">
                                      <a href="#"><i class="fa fa-gear"></i></a>
                                    </div>
                                  </div>
                                  <div class="card-close ellipsisdrop">
                                  <Dropdown className="ellipsisnn" >                                     
                                    <Dropdown.Toggle variant="success2" id="dropdown-basic">
                                        <i class="fa fa-ellipsis-v" ></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                          <Dropdown.Item href="#/action-1" class="dropdown-item edit"> <i class="fa fa-plus-circle"></i>Open Editor</Dropdown.Item>
                                          <Dropdown.Item href="#/action-2" class="dropdown-item edit"> <i class="fa fa-eye"></i>Preview</Dropdown.Item>
                                          <Dropdown.Item href="#/action-3" class="dropdown-item edit"> <i class="fa fa-files-o"></i>Duplicate</Dropdown.Item>
                                          <Dropdown.Item href="#/action-4" class="dropdown-item edit"> <i class="fa fa-arrows"></i>Move Project To</Dropdown.Item>
                                          <hr />
                                          <Dropdown.Item href="#/action-5" class="dropdown-item remove"> <i class="fa fa-trash"></i>Delete</Dropdown.Item>
                                        </Dropdown.Menu>
                                   </Dropdown>
                                  </div>

                                  {/* Close Mydropdown Code */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  userFolderDetails: state.folderData.userFolderData,
  folderDetails: state.folderData.folderData
});

export default util.storeConnect(Dashboard, mapStateToProps, {
  getUserFolderData,
  createFolderData
});
