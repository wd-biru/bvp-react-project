import React from 'react';

import StudioHeader from './StudioHeader';
import StudioPreviewModel from './StudioPreviewModel';
import StudioVideoSection from './StudioVideoSection';
import StudioPlayButton from './StudioPlayListButton';
import StudioToolsCompo from './StudioToolsCompo';
import StudioToolsTime from './StudioToolsTime';
import StudioPageFooterSection from './StudioPageFooterSection';

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
                
                <div className="container-fluid Studioed-section2">
                  <StudioToolsCompo />
                  <StudioToolsTime />
                  <StudioPageFooterSection />
                </div>
            </body>
        </div>
    )
}

export default Studio;
