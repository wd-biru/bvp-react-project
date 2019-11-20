import React from "react";
import Model from 'react-modal';

const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "200px",
      height: "650px",
      paddingtop: "0px",
      padding: "0px"
    }
}
class CreateOverModel extends React.Component{
    render(){
        return(
            <Model 
                isOpen={this.state.showCreateOverLayModel}
                onRequestClose={this.createOverLayModel}
                style={customStyles}
            >
           <button type="button" class="close" data-dismiss="modal" onClick={this.createOverLayModel}>×</button>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="nav-select-temp">
                              <div class="col-sm-4 inlinediv border-r-2">
                                <h5>Select a template</h5>
                                <p>Pick from library of templates</p>
                              </div>
                              <div class="col-sm-8 inlinediv center-pabs" id="myDIV">
                                <ul class="nav nav-pills">
                                    <li class="btns active"><a data-toggle="pill" href="#home">Standard templates</a></li>
                                    <li class="btns"><a data-toggle="pill" href="#menu1">My templates</a></li>
                                </ul>                               
                              </div>
                            </div>
                        </div>
                        <div class="body-select-temp">                                
                                <div class="tab-content">
                                    <div id="home" class="tab-pane in active">
                                      <div class="row">
                                          <ModelImage />
                                          <ModelImage />
                                          <ModelImage />
                                          <ModelImage />
                                          <ModelImage />
                                          <ModelImage />
                                          <ModelImage />
                                          <ModelImage />
                                          <ModelImage />
                                          <ModelImage />
                                          <ModelImage />
                                          <ModelImage />
                                     </div>
                                 </div>
                             </div>
                         </div>
                    </div>
                  </div>               
    </Model>
        )
    }
}
export default CreateOverModel;
