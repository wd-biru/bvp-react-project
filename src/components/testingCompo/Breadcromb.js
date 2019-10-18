import React, { Component } from "react";

import '../../assets/css/Me_custom.css';

class Breadcromb extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const filterType = [
      { name: "Projects", type: "project" },
      { name: "Videos", type: "video" },
      { name: "Images", type: "image" },
      { name: "Documents", type: "document" },
      { name: "All", type: "all" }
    ];
    return (
      <>
        <div className="breadcrumb-holder container-fluid">
          <ul className="nav nav-pills">
            {filterType.map((itemType, index) => {
              return (
                
                <li
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
            <a href="">
              <i className="fa fa-sort"></i> Date Added
            </a>
            <a href="">
              <i className="fa fa-clock-o" aria-hidden="true"></i> All Time
            </a>
            <a href="">
              <i className="fa fa-bars"></i> List View
            </a>
          </div>
        </div>
      </>
    );
  }
}
export default Breadcromb;
