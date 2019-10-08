import React from 'react';
import SectionImg2 from './images.jpg';
import Dropdown from 'react-bootstrap/Dropdown';


//import DashboardSectionDocuDots from './DashboardSectionDocuDots'; 
const PageSection2 = () =>{
  return(      
                      <div className="col-lg-3 dashboard">
                        <div className="card">
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

                  
  );
}
export default PageSection2;