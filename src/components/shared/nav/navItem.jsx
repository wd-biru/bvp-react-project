import React from "react";

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
        <nav className="side-navbar">
          <ul className="list-unstyled">
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
                      <span>
                        {folderData.children ? folderData.children.length : 0}
                      </span>
                      <i className="far fa-folder"></i>
                      {folderData.folder_name}
                      {selectedItem &&
                        selectedItem.id === folderData.id &&
                        selectedItem.children && (
                          <NavItems
                            data={selectedItem.children}
                            handleFolderData={this.props.handleFolderData}
                          />
                        )}
                    </li>
                  );
                })
              : "Loading..."}
          </ul>
        </nav>
      </>
    );
  }
}

export default NavItems;
