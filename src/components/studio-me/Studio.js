import React from 'react';

import StudioHeader from './StudioHeader';
import StudioPreviewModel from './StudioPreviewModel';
import StudioVideoSection from './StudioVideoSection';

import './css/me_studio.css';
import './css/me_responsive.css';


const Studio = () => {
    return (
        <div>
            <body className="studio_page">
                <StudioHeader />
                <StudioPreviewModel />
                <StudioVideoSection />
            </body>
        </div>
    )
}

export default Studio;
