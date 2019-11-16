import React, { Component } from 'react';
import SectionImg2 from './images.jpg';
import Dropdown from 'react-bootstrap/Dropdown';
import PageSection2 from './PageSection2';
//import DashboardSectionDocuDots from './DashboardSectionDocuDots';

//class DashboardSectionDocu extents Component {
  class DashboardSectionDocu extends Component {
    // constructor(props) {
    //   super(props);
    //   this.handleMouseHover = this.handleMouseHover.bind(this);
    //   this.state = {
    //     isHovering: false,
    //   };
    // }
  
    // handleMouseHover() {
    //   this.setState(this.toggleHoverState);
    // }
  
    // toggleHoverState(state) {
    //   return {
    //     isHovering: !state.isHovering,
    //   };
    // }
    render() {
      return (
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
                          <Dropdown>
                            <Dropdown.Toggle variant="success2" id="dropdown-basic">
                              ++
                            </Dropdown.Toggle>
                            <Dropdown.Menu>                     
                              <Dropdown.Item href="#/action-1"><a href="#" class="dropdown-item edit"> <i class="fa fa-plus-circle"></i>Open Editor</a></Dropdown.Item>
                              <Dropdown.Item href="#/action-2"><a href="#" class="dropdown-item edit"> <i class="fa fa-eye"></i>Preview</a></Dropdown.Item>
                              <Dropdown.Item href="#/action-3"><a href="#" class="dropdown-item edit"> <i class="fa fa-files-o"></i>Duplicate</a></Dropdown.Item>
                              <Dropdown.Item href="#/action-3"><a href="#" class="dropdown-item edit"> <i class="fa fa-arrows"></i>Move Project To</a></Dropdown.Item>
                              <hr />
                              <Dropdown.Item href="#/action-3"><a href="#" class="dropdown-item remove"> <i class="fa fa-trash"></i>Delete</a></Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                          </div>
                        </div>
                      </div>
                      
         <PageSection2 />
         <PageSection2 />
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
}
export default DashboardSectionDocu;