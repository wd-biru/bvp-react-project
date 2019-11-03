import React, { Component } from "react";

import "../../assets/css/Me_custom.css";

class Breadcromb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultActive: "Project"
    };
  }
  render() {
    const filterType = [
      { name: "Projects", type: "project" },
      { name: "Videos", type: "video" },
      { name: "Images", type: "image" },
      { name: "Documents", type: "docs" },
      { name: "All", type: "all" }
    ];
    return (
      <>
        <div className="breadcrumb-holder container-fluid">
          <ul className="nav nav-pills">
            {filterType.map((itemType, index) => {
              return (
                <li
                  key={index}
                  className={this.props.activeIndex === index ? "active" : ""}
                  onClick={() =>
                    this.props.filterUserData(
                      itemType.type,
                      this.props.isActiveObject,
                      index
                    )
                  }
                >
                  {itemType.name}
                </li>
              );
            })}
          </ul>
          <div className="secund-menu-listview">
            <ul className="nav nav-pills">
              <li
                className={`fa fa-sort active ${
                  this.props.dataSortBy
                    ? " active fa-sort-asc"
                    : " active fa-sort-desc"
                }`}
                onClick={this.props.toogleDateTimeView}
              >
                Date Added
              </li>
              <li
                className={`fa fa-bars ${
                  this.props.handleListViewItem ? "active" : ""
                }`}
                onClick={this.props.handleListView}
              >
                {this.props.handleListViewItem ? "Thumb View" : "List View"}
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}
export default Breadcromb;
