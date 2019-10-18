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

  handleUpload = e => {
    const userId = localStorage.getItem("userId");
    e.preventDefault();
    let formData = new FormData(this.formRef);
    this.state.filesName.forEach(file => {
      formData.append("media[]", file, file.name);
      formData.append("user_id", Number(userId));
      formData.append("folder_id", this.props.isActiveObject.id );
    });
    // const userId = localStorage.getItem("userId");
    // const paylaod = {
    //   user_id: Number(userId),
    //   folder_id: this.props.isActiveObject.id,
    //   media: formData
    // };
    // console.log(paylaod);
    this.props.getUploadFolderData(formData);
  };
  render() {
    return (
      <section className="tables mb-0">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-5 mx-auto">
              <div className="p-1 rounded-lg">
                <Dropzone onDrop={this.onDrop}>
                  {({ getRootProps, getInputProps, isDragActive }) => (
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      {isDragActive ? (
                        "Drop it like it's hot!"
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
                  className="file-upload btn btn-primary btn-block rounded-pill shadow"
                >
                  <input
                    id="fileUpload"
                    type="button"
                    onClick={event => this.handleUpload(event)}
                    value={"Upload a Local file"}
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
