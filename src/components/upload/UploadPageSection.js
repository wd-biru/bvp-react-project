import React from 'react';

import Img from './img/uploadicon.png';



const UploadPageSection = () => {
    return (
    <section className="tables mb-0">   
       <div className="container-fluid">
        <div className="row">
          <div className="col-lg-5 mx-auto">
            <div className="p-1 rounded-lg"><img src={Img} 
            className="d-block mx-auto mb-4 rounded-pill uploadiconsty" />
                  <h6 className="text-center mb-4 text-muted">
                    Upload a file
                  </h6>
                  <h6 className="text-center mb-4 text-muted">
                    Drop files here or choose an upload option below
                  </h6>
                  <label for="fileUpload" className="file-upload btn btn-primary btn-block rounded-pill shadow">UPLOAD LOCAL FILE
                    <input id="fileUpload" type="file" />
                  </label>
                  <br />	
                  <h6 className="text-center mb-4 text-muted">
                    <b>or</b>
                  </h6>
                  <div className="custom-file overflow-hidden mb-2">
                    <input id="customFile" type="url" className="custom-file-input" 
                    placeholder="Paste a YouTube, Vimeo or Google Drive URL here" />
                  </div>
                    <label className="file-upload btn btn-primary btn-block
                     rounded-pill shadow upbtnfile mb-4">UPLOAD FROM URL
                    </label>
              </div>
             </div>
           </div> 
          </div>
    </section>
    );
}

export default UploadPageSection;
