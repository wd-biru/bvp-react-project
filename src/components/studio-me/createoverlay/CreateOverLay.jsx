import React, { Component } from 'react'

import Header from './CreateOverLayHeader';
import CreateOverLayOne from '../playerSetting/PlayerSettingSection1';

import CreateOverLayThree from './CreateOverLayThree';
import CreateOverLayTwo from './CreateOverLayTwo';

class CreateOverLay extends Component {    
    render() {
        return (
            <div>
                  <Header 
                    cancelPlayerSetting = {this.props.cancelPlayerSetting}
                    createOverLayModel ={this.props.createOverLayModel}
                  />
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

    
    

