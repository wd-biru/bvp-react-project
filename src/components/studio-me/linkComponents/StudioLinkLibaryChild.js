import React from "react";

// import ChildImg from "../../../assets/img/me/images.jpg";

import docuImg from "../../../assets/img/docimg.jpg";

class StudioLinkLibaryClild extends React.Component {
  render() {
    const filePath =
      this.props.data && this.props.data.type !== "youtube"
        ? `https://apiv2.bossvideoplayer.com/public/user/${this.props.data.file}`
        : this.props.data.file;
    return (
      <>
        {this.props.navActiveItem === "video" && (
          <div class="col-lg-4">
            <div class="card">
              <div class="card-body">
                <video controls>
                  <source src={filePath} type="video/mp4" />
                </video>
                <div class="cappadd">
                  <h5 className="title" title={this.props.data.actual_name}>
                    {this.props.data.actual_name}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        )}
        {this.props.navActiveItem === "image" && (
          <div class="col-lg-4">
            <div class="card">
              <div class="card-body">
                <img src={filePath} />
                <div class="cappadd">
                  <h5 className="title" title={this.props.data.actual_name}>
                    {this.props.data.actual_name}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        )}
        {this.props.navActiveItem === "docs" && (
          <div class="col-lg-4">
            <div class="card">
              <div class="card-body">
                <img src={docuImg} />
                <div class="cappadd">
                  <h5 className="title" title={this.props.data.actual_name}>
                    {this.props.data.actual_name}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}
export default StudioLinkLibaryClild;
