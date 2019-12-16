import React from "react";
import createproject from "./img/createproject.png";

class NavItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null
    };
  }

  componentDidMount() {
    const activeFolderData = JSON.parse(localStorage.getItem("selectedMedia"));
    const findHomeData =
      this.props.data && this.props.data.find(data => data.id === 0);
    this.setState({
      selectedItem: activeFolderData ? activeFolderData : findHomeData
    });
    !activeFolderData ? this.props.handleDefaultHomeActive(findHomeData) : null;
  }

  handleToggle = data => {
    this.setState(({ selectedItem }) => {
      return {
        selectedItem: selectedItem && selectedItem.id === data.id ? null : data
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
                  onClick={e => {
                    this.handleToggle(folderData);
                    e.stopPropagation();
                  }}
                >
                  <ul className="sub_folder">
                    <li>
                      <span>
                        <span className="number">
                          {folderData.files.length > 0
                            ? folderData.files.length
                            : 0}
                        </span>
                        <span className="folderName">
                          {folderData.folder_status === 1 ? (
                            <img
                              src={createproject}
                              className="createproject"
                            />
                          ) : (
                            <i className="far fa-folder"></i>
                          )}

                          {folderData.folder_name}
                        </span>
                      </span>
                      {selectedItem &&
                      selectedItem.id === folderData.id &&
                      folderData.id !== 0 ? (
                        <span className="temp-class">
                          <i
                            className="fa fa-edit"
                            onClick={e => {
                              this.props.handleEdit(this.props.isActiveObject);
                            }}
                          ></i>
                          <i
                            className="fa fa-trash"
                            onClick={e => {
                              this.props.handleDelete(
                                this.props.isActiveObject
                              );
                            }}
                          ></i>
                        </span>
                      ) : null}
                    </li>
                  </ul>
                </li>
              );
            })
          : null}
      </>
    );
  }
}

export default NavItems;
