import React from 'react'

function StudioPreviewModel() {
    return (
        <div className="modal fade" id="myModal">
            <div className="modal-dialog modal-lg">
            <div className="modal-content">
            
                <div className="modal-header">
                <h6 className="modal-title">Preview</h6>
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>
                
                <div className="modal-body">
                    <video width="100%" height="100%" controls>
                        <source src="img/me/video-test.mp4" type="video/mp4" />
                    </video>
                </div>
                        
            </div>
            </div>
        </div>
    )
}

export default StudioPreviewModel;
