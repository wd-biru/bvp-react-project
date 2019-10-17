import React from 'react';

import StudioHeader from './StudioHeader';
import StudioPreviewModel from './StudioPreviewModel';
import StudioVideoSection from './StudioVideoSection';
import StudioPlayButton from './StudioPlayListButton';
import StudioTimeTools from './StudioTimeTools';

import '../../assets/css/me_studio.css';




const Studio = () => {
    return (
        <div>
            <body className="studio_page">
                <StudioHeader />
                <StudioPreviewModel />
                <StudioVideoSection />
                <StudioPlayButton />
                <StudioTimeTools />
                
            </body>
        </div>
    )
}

export default Studio;
