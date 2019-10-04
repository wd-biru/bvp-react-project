import React from 'react';

import StudioVideoSectionRight from './StudioVideoSectionRight';

const StudioVideoSection = () => {
    return (
    <div class="container-fluid Studioed">
  		<div class="row">
			<div class="col-sm-7 Studioed-seund">
				<video width="100%" controls>
				  <source src="img/me/video-test.mp4" type="video/mp4" />
				</video>
			</div>
            {/* this is video part col-sm-05 section */}
            <StudioVideoSectionRight />
          </div>
      </div>

    )
}

export default StudioVideoSection
