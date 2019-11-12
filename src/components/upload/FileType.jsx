import React from "react";
import DashboardDropDown from "./DashboardDropDown";
import docuImg from "../../assets/img/docimg.jpg";
import moment from "moment";
import ThumbImg from "../../assets/img/me/bvp-logo.png";

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
const customStyles2 = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "700px",
    height: "300px",
    paddingtop: "0px",
    padding: "0px"
  }
};

class FileType extends React.Component {
  constructor(props) {
    super(props);
  }

  handleFileType = filePath => {
    return filePath.split(".").pop();
  };

  render() {
    const filePath =
      this.props.data && this.props.data.type !== "youtube"
        ? `https://apiv2.bossvideoplayer.com/public/user/${this.props.data.url}`
        : this.props.data.url;
    return (
      <>
        <div className="col-lg-3">
          <div className="cardss">
            {this.props.activeIndex === 0 && (
              <div
                className={`cardss ${this.props.activeClass ? "active" : ""}`}
                onClick={() =>
                  this.props.handleActiveProject(
                    this.props.data,
                    this.props.index
                  )
                }
              >
                <div className="card-body">
                  <img src={ThumbImg} className="thumbimglogo" />
                  <div className="cappadd2">
                    <h5>{this.props.data.folder_name}</h5>
                    <DashboardDropDown
                      handleProjectMove={() =>
                        this.props.handleProjectMove(this.props.data)
                      }
                      handleMediaDuplicate={this.props.handleMediaDuplicate}
                      handleMediaDelete={this.props.handleMediaDelete}
                      handlePreview={this.props.handlePreview}
                      data={this.props.data}
                      showEditor={this.props.showEditor}
                      handleEditor={this.props.handleEditor}
                    />
                  </div>
                </div>
              </div>
            )}
            {(this.props.userFileData && this.props.data.type === "video") ||
            this.props.data.type === "youtube" ? (
              <div className="card-body">
                <video controls>
                  <source src={filePath} type="video/mp4" />
                </video>
                <div className="cappadd2">
                  <h5 title={this.props.data.actual_name}>
                    {this.props.data.actual_name}
                  </h5>
                  <p className="title" title={this.props.data.date_time}>
                    {moment(this.props.data.date_time).format(
                      "MM/DD/YYYY, hh:mm:ss a"
                    )}
                  </p>
                  <DashboardDropDown
                    handleProjectMove={() =>
                      this.props.handleProjectMove(this.props.data)
                    }
                    handleMediaDuplicate={this.props.handleMediaDuplicate}
                    handleMediaDelete={this.props.handleMediaDelete}
                    handlePreview={this.props.handlePreview}
                    data={this.props.data}
                    showEditor={this.props.showEditor}
                  />
                </div>
              </div>
            ) : null}
            {this.props.userFileData && this.props.data.type === "image" && (
              <div className="cardss">
                <div className="card-body">
                  <img src={filePath} />
                  <div className="cappadd2">
                    <h5 title={this.props.data.actual_name}>
                      {this.props.data.actual_name}
                    </h5>
                    <p className="title" title={this.props.data.date_time}>
                      {moment(this.props.data.date_time).format(
                        "MM/DD/YYYY, hh:mm:ss a"
                      )}
                    </p>
                    <DashboardDropDown
                      handleProjectMove={() =>
                        this.props.handleProjectMove(this.props.data)
                      }
                      handleMediaDuplicate={this.props.handleMediaDuplicate}
                      handleMediaDelete={this.props.handleMediaDelete}
                      handlePreview={this.props.handlePreview}
                      data={this.props.data}
                      showEditor={this.props.showEditor}
                    />
                  </div>
                </div>
              </div>
            )}
            {this.props.userFileData && this.props.data.type === "docs" && (
              <div className="cardss">
                <div className="card-body">
                  <img src={docuImg} />
                  <div className="cappadd2">
                    <h5 title={this.props.data.actual_name}>
                      {this.props.data.actual_name}
                    </h5>
                    <p className="title" title={this.props.data.date_time}>
                      {moment(this.props.data.date_time).format(
                        "MM/DD/YYYY, hh:mm:ss a"
                      )}
                    </p>
                    <DashboardDropDown
                      handleProjectMove={this.props.handleProjectMove}
                      handleMediaDuplicate={this.props.handleMediaDuplicate}
                      handleMediaDelete={this.props.handleMediaDelete}
                      handlePreview={this.props.handlePreview}
                      data={this.props.data}
                      showEditor={this.props.showEditor}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default FileType;
