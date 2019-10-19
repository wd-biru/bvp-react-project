import React from "react";

class UploadBreadcrumb extends React.Component {
  render() {
    return (
      <div className="breadcrumb-holder container-fluid">
        <ul className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="javascript:;" onClick={this.props.handleUploadClose}>
              Home
            </a>
          </li>
          <li className="breadcrumb-item active">Upload</li>
        </ul>
        <div className="uload-close">
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            onClick={this.props.handleUploadClose}
          >
            ×
          </button>
        </div>
      </div>
    );
  }
}

export default UploadBreadcrumb;
