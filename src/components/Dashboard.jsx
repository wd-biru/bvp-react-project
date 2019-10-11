import React, { Component } from "react";
import styled from "styled-components";
import LeftNav from "../components/shared/nav/LeftNav";
import TopPageHeader from "../components/testingCompo/PageTopHeader";
import Breadcromb from "../components/testingCompo/Breadcromb";
import Footer from "../components/shared/footer/Footer";
import SectionImg2 from "../assets/img/me/images.jpg";
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
          activeIndex={this.state.activeIndex}
          userFolderDetails={this.props.userFolderDetails}
          folderDetails={this.props.folderDetails}
          getUserFolderData={this.props.getUserFolderData}
          createFolderData={this.props.createFolderData}
        />
        <div className="content-inner">
          <TopPageHeader userData={this.props.userData} />
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
                          {this.state.isActiveObject &&
                            this.state.isActiveObject.folder_name}
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
