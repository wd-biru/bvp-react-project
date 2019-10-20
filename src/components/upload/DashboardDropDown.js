import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';


function DashboardDropDown() {
    return (
        <div>
          <div class="cappadd-bot">
              <i class="fa fa-gear"></i>
           </div>
            <div className="card-close ellipsisdrop">
                <Dropdown className="ellipsisnn" >                                     
                    <Dropdown.Toggle variant="success2" id="dropdown-basic">
                        <i class="fa fa-ellipsis-v" ></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1" class="dropdown-item edit"> <i class="fa fa-plus-circle"></i>Open Editor</Dropdown.Item>
                            <Dropdown.Item href="#/action-2" class="dropdown-item edit"> <i class="fa fa-eye"></i>Preview</Dropdown.Item>
                            <Dropdown.Item href="#/action-3" class="dropdown-item edit"> <i class="fa fa-files-o"></i>Duplicate</Dropdown.Item>
                            <Dropdown.Item href="#/action-4" class="dropdown-item edit"> <i class="fa fa-arrows"></i>Move Project To</Dropdown.Item>
                            <hr />
                       <Dropdown.Item href="#/action-5" class="dropdown-item remove"> <i class="fa fa-trash"></i>Delete</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
    </div>
    )
}

export default DashboardDropDown
