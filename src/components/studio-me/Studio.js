import React from 'react';

import StudioHeader from './StudioHeader';
import StudioPreviewModel from './StudioPreviewModel';
import StudioVideoSection from './StudioVideoSection';
import StudioPlayButton from './StudioPlayListButton';
import StudioToolsCompo from './StudioToolsCompo';

import './css/me_studio.css';
import './css/me_responsive.css';


const Studio = () => {
    return (
        <div>
            <body className="studio_page">
                <StudioHeader />
                <StudioPreviewModel />
                <StudioVideoSection />
                <StudioPlayButton /> 
                <StudioToolsCompo />
            </body>
        </div>
    )
}

export default Studio;
