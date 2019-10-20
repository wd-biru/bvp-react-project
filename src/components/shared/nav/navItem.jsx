import React from "react";
import createproject from "./img/createproject.png";

class NavItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null
    };
  }

  handleToggle = data => {
    this.setState(({ selectedItem }) => {
      return {
        selectedItem: selectedItem && selectedItem.id === data.id ? null : data,
        isActive: selectedItem && selectedItem.id === data.id ? true : false
      };
    });
    this.props.handleFolderData(data);
  };

  render() {
    const { selectedItem } = this.state;
    return (
      <>
        {this.props.data
          ? this.props.data.map(folderData => {
              return (
                <li
                  className={
                    selectedItem && selectedItem.id === folderData.id
                      ? "active"
                      : ""
                  }
                  key={folderData.id}
                >
                  <ul className="sub_folder">
                    <li>
                      <span>
                        {folderData.children ? folderData.children.length : 0}
                      </span>
                      <span
                        onClick={e => {
                          this.handleToggle(folderData);
                          e.stopPropagation();
                        }}
                      >
                        {folderData.folder_status === 1 ? (
                          <img src={createproject} className="createproject" />
                        ) : (
                          <i className="far fa-folder"></i>
                        )}

                        {folderData.folder_name}
                      </span>
                      {selectedItem && selectedItem.id === folderData.id && (
                        <span className="temp-class">
                          <i
                            className="fa fa-edit"
                            onClick={e => {
                              this.props.handleEdit(this.props.isActiveObject);
                            }}
                          ></i>
                          <i
                            className="fa fa-remove"
                            onClick={e => {
                              this.props.handleDelete(
                                this.props.isActiveObject
                              );
                            }}
                          ></i>
                        </span>
                      )}
                    </li>
                  </ul>
                </li>
              );
            })
          : "Loading..."}
      </>
    );
  }
}

export default NavItems;
