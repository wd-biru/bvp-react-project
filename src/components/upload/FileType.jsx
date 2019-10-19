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
              
              <video controls>
                <source
                  src={`${filePath}/${this.props.data.file}`}
                  type="video/mp4"
                />
              </video>
              <div className="cappadd">
              <h5>{this.props.isActiveObject.folder_name}</h5>
              <p className="title">{this.handleFileType(`${filePath}/${this.props.data.file}`)}{" "} </p>
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
                </div>
              </div>
            </div>
          )}
          {this.props.data.type === "document" && (
            <div className="cardss">
              <div className="card-body">
                <a href={`${filePath}/${this.props.data.file}`}>
                  {this.handleFileType(`${filePath}/${this.props.data.file}`)}
                </a>
                <div className="cappadd">
                <br />
                <h5>{this.props.isActiveObject.folder_name}</h5>
                <p className="title">doc</p>
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
