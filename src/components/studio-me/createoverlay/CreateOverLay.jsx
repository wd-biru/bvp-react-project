import React, { Component } from 'react'

import Header from '../playerSetting/PlayerSettingHeader';
import CreateOverLayOne from '../playerSetting/PlayerSettingSection1';

import CreateOverLayThree from './CreateOverLayThree';
import CreateOverLayTwo from './CreateOverLayTwo';

class CreateOverLay extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid createoverlay-section mt-0">
                    <div className="row">
                        <CreateOverLayThree />
                        <CreateOverLayTwo />
                        <CreateOverLayOne />
                    </div>
                </div>
            </div>
        )
    }
}


export default CreateOverLay 

    
    

