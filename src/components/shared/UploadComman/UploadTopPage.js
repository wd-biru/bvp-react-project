import React from 'react';


const UploadTopPage = () =>{
    return(
         <div className="breadcrumb-holder container-fluid" >
            <ul className="breadcrumb">
              <li className="breadcrumb-item"><a href="dashboard.html">Home</a></li>
              <li className="breadcrumb-item active">Upload</li>
            </ul>
            <div className="uload-close">
               	<a href="dashboard.html"><i className="material-icons icon-close"></i></a>
              </div>
          </div>
             );
         }
         export default UploadTopPage;