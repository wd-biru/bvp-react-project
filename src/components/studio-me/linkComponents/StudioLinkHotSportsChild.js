import React from 'react'
import UserImg from '../img/user.png';
import StudioLinkHotSportsChildLink from './StudioLinkHotSportsChildLink';
const StudioLinkHotSportsChild = () => {
    return (
    <div class="table-responsive two hotsportschild">
        <div class="wrapper center-block">
          <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                <div class="panel panel-default">
                  <div class="panel-heading active" role="tab" id="headingOne100">
                    <h4 class="panel-title">
                      <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne100" aria-expanded="true" aria-controls="collapseOne100">
                        <span><img src={UserImg} /> X1</span>
                        <span>Group John</span>
                        <span>Action</span>
                        <span>not defined</span>
                        <span>not saved</span>
                      </a>
                    </h4>
                  </div>
                  <StudioLinkHotSportsChildLink />
                  </div>
                </div>
            </div>
        </div>
    );
}

export default StudioLinkHotSportsChild;
