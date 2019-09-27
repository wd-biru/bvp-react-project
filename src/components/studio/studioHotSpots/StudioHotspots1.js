import React from 'react';
import user from './user.png';

const StudioHotspots1 = () => {
    return (
				  		<div className="table-responsive two">
				  			<div className="wrapper center-block">
								<div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
								  	<div className="panel panel-default">
									    <div className="panel-heading active" role="tab" id="headingOne100">
									      <h4 className="panel-title">
									        <a className="hotsprta" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne100" aria-expanded="true" aria-controls="collapseOne100">
									          <span><img src={user} /> X1</span>
									          <span>Group John</span>
									          <span>Edit</span>
									          <span>not defined</span>
									          <span>not saved</span>
									        </a>
									      </h4>
									    </div>
                                </div>
                      </div>
            </div>

        </div>
    )
}

export default StudioHotspots1;
