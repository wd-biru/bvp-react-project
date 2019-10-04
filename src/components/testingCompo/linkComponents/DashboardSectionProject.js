import React from 'react';
import SectionImg2 from './images.jpg';

import PageSection2 from './PageSection2';
const DashboardSectionProject = () =>{
  return(
    <section className="tables">   
            <div className="container-fluid">
              <div className="tab-content">
                  <div className="tab-pane container active col-lg-12" id="home">
                    <div className="row">
                      <div className="col-lg-3">
                        <div className="cardss">
                          <div className="card-body">
                            <img src={SectionImg2} alt="John" />
                            <div className="cappadd">
                            <h5>John Doe</h5>
                              <p className="title">CEO &amp; Founder, Example</p>
                              <div className="cappadd-bot">
                                <a href="#"><i className="fa fa-gear">@@@</i></a>
                              </div>
                            </div>
                          </div>
                          <div className="card-close">
                            <div className="dropdown">
                              <button type="button" id="closeCard2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle"><i className="fa fa-ellipsis-v">+++</i></button>
                              <div aria-labelledby="closeCard2" className="dropdown-menu dropdown-menu-right has-shadow">
                                <a href="#" className="dropdown-item edit"> <i className="fa fa-plus-circle"></i>Open Editor</a>
                                <a href="#" className="dropdown-item edit"> <i className="fa fa-eye"></i>Preview</a>
                                <a href="#" className="dropdown-item edit"> <i className="fa fa-files-o"></i>Duplicate File</a>
                                <a href="#" className="dropdown-item edit"> <i className="fa fa-refresh"></i>Sync To</a>
                                <hr />
                                <a href="#" className="dropdown-item edit"> <i className="fa fa-eye"></i>Copy Video ID</a>
                                <a href="#" className="dropdown-item remove"> <i className="fa fa-times"></i>Close</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
         <PageSection2 />
         <PageSection2 />
         <PageSection2 />
         <PageSection2 /> 
        
         </div>
       </div>
      </div>
     </div>
    </section>
  );
}

export default DashboardSectionProject;