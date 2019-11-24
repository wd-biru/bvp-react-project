import React from "react";
import Select from "react-select";
import StudioLinkLibaryChild from "./StudioLinkLibaryChild";

class StudioLinkLibary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navActiveItem: "video",
      folderOption: {
        label: this.props.isActiveObject.folder_name,
        value: this.props.isActiveObject.id
      }
    };
  }
  handleStudioNav = itemType => {
    this.setState({
      navActiveItem: itemType
    });
  };

  componentDidMount() {
    // this.setState({
    //   folderOption: {
    //     label: this.props.isActiveObject.folder_name,
    //     value: this.props.isActiveObject.id
    //   }
    // });
  }

  allFolderData() {
    const options =
      this.props.userFolderDetails &&
      this.props.userFolderDetails.folders.map(element => ({
        label: element.folder_name,
        value: element.id
      }));
    return options;
  }

  handleFileTypeData = () => {
    const activeFolderData =
      this.state.folderOption &&
      this.props.userFolderDetails.folders.find(folderData => {
        if (folderData.id === this.state.folderOption.value) {
          return folderData;
        }
      });
    // const activedata = this.props.libraryFolderData
    //   ? this.props.libraryFolderData
    //   : this.props.isActiveObject;
    const activeFilterData = activeFolderData.files.filter(folderData => {
      if (folderData.file_type === this.state.navActiveItem) {
        return folderData;
      }
    });
    return activeFilterData;
  };

  handleFolderchange = folderOption => {
    this.setState({
      folderOption: folderOption
    });
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
            <Select
              value={this.state.folderOption}
              onChange={this.handleFolderchange}
              options={this.allFolderData()}
              className="select-value"
            />
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

              <div className="tab-content1">
                <div class="tab-pane container active col-lg-12">
                  <div class="row">
                    {this.props.isActiveObject &&
                      activeFiles.map((data, index) => {
                        return (
                          <StudioLinkLibaryChild
                            data={data}
                            navActiveItem={this.state.navActiveItem}
                            handleDrag={this.props.handleDrag}
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
