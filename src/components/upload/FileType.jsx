import React from "react";
import DashboardDropDown from "./DashboardDropDown";
import docuImg from "../../assets/img/docimg.jpg";

class FileType extends React.Component {
  constructor(props) {
    super(props);
  }

  handleFileType = filePath => {
    return filePath.split(".").pop();
  };

  render() {
    const filePath = "https://apiv2.bossvideoplayer.com/public/user";
    return (
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
                <div className="cappadd">
                  <h5>{this.props.data.folder_name}</h5>
                  <DashboardDropDown />
                </div>
              </div>
            </div>
          )}
          {this.props.data.type === "video" && (
            <div className="card-body">
              <video controls>
                <source
                  src={`${filePath}/${this.props.data.file}`}
                  type="video/mp4"
                />
              </video>
              <div className="cappadd">
                <h5>{this.props.isActiveObject.folder_name}</h5>
                <p className="title">
                  {this.handleFileType(`${filePath}/${this.props.data.file}`)}{" "}
                </p>
                <DashboardDropDown />
              </div>
            </div>
          )}
          {this.props.data.type === "image" && (
            <div className="cardss">
              <div className="card-body">
                <img src={`${filePath}/${this.props.data.file}`} alt="John" />
                <div className="cappadd">
                  <h5>{this.props.isActiveObject.folder_name}</h5>
                  <p className="title">
                    {this.handleFileType(`${filePath}/${this.props.data.file}`)}
                  </p>
                  <DashboardDropDown />
                </div>
              </div>
            </div>
          )}
          {this.props.data.type === "document" && (
            <div className="cardss">
              <div className="card-body">
                <img src={docuImg} />
                <div className="cappadd">
                  <h5>{this.props.isActiveObject.folder_name}</h5>
                  {this.handleFileType(`${filePath}/${this.props.data.file}`)}
                  <DashboardDropDown />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default FileType;
