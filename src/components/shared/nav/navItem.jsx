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
    const findHomeData =
      this.props.data && this.props.data.find(data => data.id === 0);

    this.setState({
      selectedItem: findHomeData
    });
    this.props.handleDefaultHomeActive(findHomeData);
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
                        {folderData.files.length > 0
                          ? folderData.files.length
                          : 0}
                      </span>
                      <span
                      >
                        {folderData.folder_status === 1 ? (
                          <img src={createproject} className="createproject" />
                        ) : (
                          <i className="far fa-folder"></i>
                        )}

                        {folderData.folder_name}
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
                            className="fa fa-remove"
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
