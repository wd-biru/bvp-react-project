import React from "react";
import Dropzone from "react-dropzone";
import Img from "./img/uploadicon.png";

class UploadPageSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filesName: ""
    };
  }

  onDrop = acceptedFiles => {
    this.setState({
      filesName: acceptedFiles
    });
  };

  getUploadParams = ({ meta }) => {
    const url = "https://apiv2.bossvideoplayer.com/public/user";
    return {
      url,
      meta: { fileUrl: `${url}/${encodeURIComponent(meta.name)}` }
    };
  };

  handleUpload = e => {
    const userId = localStorage.getItem("userId");
    e.preventDefault();
    let formData = new FormData(this.formRef);
    this.state.filesName.forEach(file => {
      formData.append("media[]", file, file.name);
      formData.append("user_id", Number(userId));
      formData.append("folder_id", this.props.isActiveObject.id);
    });

    this.props.getUploadFolderData(formData);
  };

  handleRemoveSelectedFile = acceptedFile => {
    const filterArray = this.state.filesName.filter(
      item => item.name !== acceptedFile.name
    );
    this.setState({
      filesName: filterArray
    });
  };

  render() {
    return (
      <section className="tables mb-0">
        <div className="container-fluid">
          <ul className="col-md-4">
            {this.state.filesName.length > 0 &&
              this.state.filesName.map((acceptedFile, index) => (
                <>
                  <li className="list-group-item list-group-item-success">
                    {acceptedFile.name}
                    <span
                      onClick={() =>
                        this.handleRemoveSelectedFile(acceptedFile)
                      }
                    >
                      Remove
                    </span>
                  </li>
                </>
              ))}
          </ul>
          <div className="row">
            <div className="col-lg-5 mx-auto">
              <div className="p-1 rounded-lg">
                <Dropzone
                  onDrop={this.onDrop}
                  accept={"image/*,video/*,.pdf,.docx,"}
                  getUploadParams={() => this.getUploadParams}
                >
                  {({ getRootProps, getInputProps, isDragActive }) => (
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      {isDragActive ? (
                        "Drop Here"
                      ) : (
                        <img
                          src={Img}
                          className="d-block mx-auto mb-4 rounded-pill uploadiconsty"
                        />
                      )}
                    </div>
                  )}
                </Dropzone>
                <h6 className="text-center mb-4 text-muted">Upload a file</h6>
                <h6 className="text-center mb-4 text-muted">
                  Drop files here or choose an upload option below
                </h6>
                <label
                  for="fileUpload"
                  className={`file-upload btn btn-primary btn-block rounded-pill shadow ${
                    this.state.filesName.length > 0 ? "" : "disabled"
                  }`}
                >
                  <input
                    id="fileUpload"
                    type="button"
                    onClick={event => this.handleUpload(event)}
                    value={"Upload a Local file"}
                    disabled={this.state.filesName.length > 0 ? false : true}
                  />
                </label>
                <br />
                <h6 className="text-center mb-4 text-muted">
                  <b>or</b>
                </h6>
                <div className="custom-file overflow-hidden mb-2">
                  <input
                    id="customFile"
                    type="url"
                    className="custom-file-input"
                    placeholder="Paste a YouTube, Vimeo or Google Drive URL here"
                  />
                </div>
                <label
                  className="file-upload btn btn-primary btn-block
                     rounded-pill shadow upbtnfile mb-4"
                >
                  UPLOAD FROM URL
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default UploadPageSection;
