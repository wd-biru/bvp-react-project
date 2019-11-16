import React from "react";

import StudioLinkLibaryChild from "./StudioLinkLibaryChild";

class StudioLinkLibary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navActiveItem: "video"
    };
  }
  handleStudioNav = itemType => {
    this.setState({
      navActiveItem: itemType
    });
  };

  handleFileTypeData = () => {
    const activeFilterData =
      this.props.isActiveObject &&
      this.props.isActiveObject.files.filter(folderData => {
        if (folderData.file_type === this.state.navActiveItem) {
          return folderData;
        }
      });
    return activeFilterData;
  };
  render() {
    const activeFiles = this.handleFileTypeData();
    const libNavItem = [
      {
        name: "Videos",
        type: "video"
      },
      {
        name: "Images",
        type: "image"
      },
      {
        name: "Documents",
        type: "docs"
      }
    ];
    return (
      <div className="tab-content1">
      <div class="tab-pane container fade active" id="menu11">
        <div class="Library-sec">
          <div class="table-responsive two">
            <ul class="nav nav-pills">
              {libNavItem &&
                libNavItem.map((itemType, index) => {
                  return (
                    <li
                      key={index}
                      onClick={() => this.handleStudioNav(itemType.type)}
                      className={`nav-item ${
                        this.state.navActiveItem === itemType.type
                          ? "active"
                          : ""
                      }`}
                    >
                      {itemType.name}
                    </li>
                  );
                })}
            </ul>
            
              <form
                class="navbar-form navbar-left mb-2"
                action="/action_page.php"
              >
                <input
                  type="text"
                  class="form-control navsearch2"
                  placeholder="Search "
                  name="search"
                />
              </form>
            
         
          <div className="tab-content1">
            <div class="tab-pane container active col-lg-12">
              <div class="row">
                {this.props.isActiveObject &&
                  activeFiles.map((data, index) => {
                    return (
                      <StudioLinkLibaryChild
                        data={data}
                        navActiveItem={this.state.navActiveItem}
                      />
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
     </div>
    );
  }
}

export default StudioLinkLibary;
