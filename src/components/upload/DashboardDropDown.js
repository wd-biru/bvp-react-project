import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

class DashboardDropDown extends React.Component {
  render() {
    return (
      <div>
        <div class="cappadd-bot">
          <i class="fa fa-gear"></i>
        </div>
        <div className="card-close ellipsisdrop">
          <Dropdown className="ellipsisnn">
            <Dropdown.Toggle variant="success2" id="dropdown-basic">
              <i class="fa fa-ellipsis-v"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {this.props.data.type !== "docs" && (
                <Dropdown.Item class="dropdown-item edit">
                  <i class="fa fa-plus-circle"></i>Open Editor
                </Dropdown.Item>
              )}
              {this.props.data.type !== "docs" && (
                <Dropdown.Item
                  class="dropdown-item edit"
                  onClick={() => this.props.handlePreview(this.props.data)}
                >
                  <i class="fa fa-eye"></i>Preview
                </Dropdown.Item>
              )}
              <Dropdown.Item
                class="dropdown-item edit"
                onClick={() => this.props.handleMediaDuplicate(this.props.data)}
              >
                <i class="fa fa-files-o"></i>Duplicate
              </Dropdown.Item>
              <Dropdown.Item
                class="dropdown-item edit"
                onClick={() => this.props.handleProjectMove(this.props.data)}
              >
                <i class="fa fa-arrows"></i>Move Project To
              </Dropdown.Item>
              <hr />
              <Dropdown.Item
                class="dropdown-item remove"
                onClick={() => this.props.handleMediaDelete(this.props.data)}
              >
                <i class="fa fa-trash"></i>Delete
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    );
  }
}

export default DashboardDropDown;
