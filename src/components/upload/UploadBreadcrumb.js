import React from 'react';

const UploadBreadcrumb = () => {
    return (
      <div className="breadcrumb-holder container-fluid">
            <ul className="breadcrumb">
              <li className="breadcrumb-item"><a href="dashboard.html">Home</a></li>
              <li className="breadcrumb-item active">Upload</li>
            </ul>
            <div className="uload-close">
            <a href="#"><button type="button" class="close" data-dismiss="modal">×</button></a>
            </div>
    </div>
    );
}

export default UploadBreadcrumb;
