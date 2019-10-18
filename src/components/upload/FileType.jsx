import React from "react";

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
          {this.props.data.type === "video" && (
            <div className="card-body">
              <video width="400" controls>
                <source
                  src={`${filePath}/${this.props.data.file}`}
                  type="video/mp4"
                />
                Your browser does not support HTML5 video.
              </video>
              {this.props.isActiveObject.folder_name} <br />
              {this.handleFileType(`${filePath}/${this.props.data.file}`)}{" "}
            </div>
          )}
          {this.props.data.type === "image" && (
            <div className="cardss">
              <div className="card-body">
                <img src={`${filePath}/${this.props.data.file}`} alt="John" />
                {this.props.isActiveObject.folder_name}
                <br />
                {this.handleFileType(`${filePath}/${this.props.data.file}`)}
              </div>
            </div>
          )}
          {this.props.data.type === "document" && (
            <div className="cardss">
              <div className="card-body">
                <a href={`${filePath}/${this.props.data.file}`}>
                  {this.handleFileType(`${filePath}/${this.props.data.file}`)}
                </a>
                <br />
                {this.props.isActiveObject.folder_name}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default FileType;
