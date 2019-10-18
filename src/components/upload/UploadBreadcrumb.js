import React from 'react';

const UploadBreadcrumb = () => {
    return (
      <div className="breadcrumb-holder container-fluid">
            <ul className="breadcrumb">
              <li className="breadcrumb-item"><a href="dashboard.html">Home</a></li>
              <li className="breadcrumb-item active">Upload</li>
            </ul>
            <div className="uload-close">
            <button type="button" class="close" data-dismiss="modal">×</button>
            </div>
    </div>
    );
}

export default UploadBreadcrumb;
