import React from 'react';
import imgess from './me/images.jpg'

import StudioRightSideFrameForm from './StudioRightSideFrameForm';

function StudioRightSideFrame() {
    return (
        
            <div className="container">
								<div className="row">
									<div className="col-sm-5 p-0 rightframe">
										<label for="email">Poster Frame</label>
										<img src={imgess} className="img-w" />
										<div className="posterframe-btn-sec">
											<input type="button" value="UPLOAD NEW" className="UPNEW" />
											<input type="button" value="CURRENT FRAME" className="CRFR" />
										</div>
									</div>
                                    <StudioRightSideFrameForm />
                          </div>
                </div>

        
    )
}

export default StudioRightSideFrame ;
