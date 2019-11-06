import React from "react";
import Dropzone from "react-dropzone";
import Img from "./img/uploadicon.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "react-loader-spinner";
//import Studio from '../../components/studio-me/Studio';

class UploadPageSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filesName: "",
      fileUrl: "",
      showToastMsg: false,
      showLoader: false
    };
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

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

  handleUpload = (e, type) => {
    const userId = localStorage.getItem("userId");
    const activeId = this.props.isActiveObject
      ? this.props.isActiveObject.id
      : 0;
    e.preventDefault();
    if (type === "local") {
      let formData = new FormData(this.formRef);
      this.state.filesName.forEach(file => {
        formData.append("media[]", file, file.name);
        formData.append("user_id", Number(userId));
        formData.append("folder_id", activeId);
      });
      this.props.getUploadFolderData(formData);
    }
    if (type === "url") {
      let payload = {
        user_id: Number(userId),
        folder_id: activeId,
        isYoutube: 1,
        link: this.state.fileUrl
      };
      this.props.getUploadFolderData(payload);
    }
    this.setState({
      showLoader: true
    });
  };

  componentDidUpdate(prevProps) {
    {
      if (
        prevProps.uploadFolderData !== this.props.uploadFolderData &&
        this.props.uploadFolderData.code === 200
      ) {
        toast.success(this.props.uploadFolderData.message);
        this.setState({
          showToastMsg: true,
          filesName: "",
          showLoader: false
        });
        // this.props.handleUploadClose();
      }
      if (
        prevProps.uploadFolderData !== this.props.uploadFolderData &&
        this.props.uploadFolderData.code !== 200
      ) {
        toast.error(this.props.uploadFolderData.message);
        this.setState({
          showToastMsg: true,
          filesName: "",
          showLoader: false
        });
        
      }
    }
  }

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
                <h6 className="text-center mb-4 text-muted">
                  Upload Local Or Drag a file
                </h6>
                <h6 className="text-center mb-4 text-muted">
                  Drop files here then click on upload button below
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
                    onClick={event => this.handleUpload(event, "local")}
                    value={"Upload A Local File"}
                    disabled={this.state.filesName.length > 0 ? false : true}
                  />
                </label>
                <br />
                <ul className="col-md-12">
                  {this.state.filesName.length > 0 &&
                    this.state.filesName.map((acceptedFile, index) => (
                      <>
                        <li className="list-group-item list-group-item-success">
                          {acceptedFile.name}
                          <span
                            onClick={() =>
                              this.handleRemoveSelectedFile(acceptedFile)
                            }
                            className="spanremove"
                          >
                            <i className="fa fa-remove "></i>
                          </span>
                        </li>
                      </>
                    ))}
                </ul>
                <div className="Loader">
                  {this.state.showLoader && (
                    <Loader
                      type="Oval"
                      color="#00BFFF"
                      height={70}
                      width={70}
                    />
                  )}{" "}
                </div>
                <h6 className="text-center mb-4 text-muted">
                  <b>or</b>
                </h6>
                <div className="custom-file overflow-hidden mb-2">
                  <input
                    id="customFile"
                    type="url"
                    name="fileUrl"
                    className="custom-file-input"
                    onChange={this.handleInputChange}
                    placeholder="Paste a YouTube URL here"
                  />
                </div>
                <label
                  className="file-upload btn btn-primary btn-block
                     rounded-pill shadow upbtnfile mb-4"
                >
                  <input
                    id="urlUpload"
                    name="url"
                    type="button"
                    onClick={event => this.handleUpload(event, "url")}
                    value={"Upload From URL"}
                  />
                </label>
              </div>
            </div>
          </div>
          {this.state.showToastMsg && <ToastContainer />}
        </div>
        {/* <Studio /> */}
      </section>
    );
  }
}

export default UploadPageSection;
