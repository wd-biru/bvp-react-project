import React from 'react';

import StudioVideoSectionRight from './StudioVideoSectionRight';
import Video from '../../assets/img/me/video-test.mp4'

const StudioVideoSection = () => {
    return (
    <div class="container-fluid Studioed">
  		<div class="row">
			<div class="col-sm-7 Studioed-seund">
				<video width="100%" controls>
				  <source src={Video} type="video/mp4" />
				</video>
			</div>
          <StudioVideoSectionRight />
        </div>
      </div>

    )
}

export default StudioVideoSection
