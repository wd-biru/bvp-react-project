import React from 'react';

import StudioHeader from './StudioHeader';
import StudioPreviewModel from './StudioPreviewModel';
import StudioVideoSection from './StudioVideoSection';
import StudioPlayButton from './StudioPlayListButton';

import './css/me_studio.css';
import './css/me_responsive.css';


const Studio = () => {
    return (
        <div>
            <body className="studio_page">
                <StudioHeader />
                <StudioPreviewModel />
                <StudioVideoSection />
                {/* <StudioPlayButton /> */}
            </body>
        </div>
    )
}

export default Studio;
