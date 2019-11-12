import React from "react";

import detail from "./img/Details.png";
import library from "./img/Library.png";
import hotspots from "./img/Hotspots.png";
import timetrigger from "./img/TimeTriggers.png";
import subtitles from "./img/Subtitle.png";
import publish from "./img/Publish.png";
import metrics from "./img/Metrics.png";

import Studiolinkdetails from "./linkComponents/StudioLinkDetails";
import Studiolinklibary from "./linkComponents/StudioLinkLibary";
import Studiolinkhotsports from "./linkComponents/StudioLinkHotSports";
import StudioLinkTimeTrigger from "./linkComponents/StudioLinkTimeTrigger";
import StudioLinkSubtiles from "./linkComponents/StudioLinkSubtiles";
import StudioLinkPublish from "./linkComponents/StudioLinkPublish";
import StudioLinkMetrics from "./linkComponents/StudioLinkMetrics";

// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class StudioVideoSectionRight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navActiveItem: "detail"
    };
  }
  handleStudioNav = itemType => {
    this.setState({
      navActiveItem: itemType
    });
  };
  renderNavItem = type => {
    switch (type) {
      case "detail": {
        return (
          <Studiolinkdetails
            isActiveObject={this.props.isActiveObject}
            selectedMedia={this.props.selectedMedia}
          />
        );
      }
      case "library": {
        return (
          <Studiolinklibary
            isActiveObject={this.props.isActiveObject}
            selectedMedia={this.props.selectedMedia}
          />
        );
      }
      case "hotspots": {
        return (
          <Studiolinkhotsports
            isActiveObject={this.props.isActiveObject}
            selectedMedia={this.props.selectedMedia}
          />
        );
      }
      case "timetrigger": {
        return (
          <StudioLinkTimeTrigger
            isActiveObject={this.props.isActiveObject}
            selectedMedia={this.props.selectedMedia}
          />
        );
      }
      case "subtitles": {
        return (
          <StudioLinkSubtiles
            isActiveObject={this.props.isActiveObject}
            selectedMedia={this.props.selectedMedia}
          />
        );
      }
      case "publish": {
        return (
          <StudioLinkPublish
            isActiveObject={this.props.isActiveObject}
            selectedMedia={this.props.selectedMedia}
          />
        );
      }
      case "metrics": {
        return (
          <StudioLinkMetrics
            isActiveObject={this.props.isActiveObject}
            selectedMedia={this.props.selectedMedia}
          />
        );
      }
      default:
        break;
    }
  };
  render() {
    const studioNavItem = [
      {
        name: "Details",
        type: "detail",
        imgSrc: detail
      },
      {
        name: "Library",
        type: "library",
        imgSrc: library
      },
      {
        name: "Hot Spots",
        type: "hotspots",
        imgSrc: hotspots
      },
      {
        name: "Time Trigger",
        type: "timetrigger",
        imgSrc: timetrigger
      },
      {
        name: "Subtitle",
        type: "subtitles",
        imgSrc: subtitles
      },
      {
        name: "Publish",
        type: "publish",
        imgSrc: publish
      },
      {
        name: "Metrics",
        type: "metrics",
        imgSrc: metrics
      }
    ];

    return (
      <div class="col-sm-5 Studioed-three">
        <ul class="nav nav-pills">
          {studioNavItem &&
            studioNavItem.map((itemType, index) => {
              return (
                <li
                  key={index}
                  onClick={() => this.handleStudioNav(itemType.type)}
                  className={`nav-item nav-link2 ${
                    this.state.navActiveItem === itemType.type ? "active" : ""
                  }`}
                >
                  <img src={itemType.imgSrc} />
                  <br /> {itemType.name}
                </li>
              );
            })}
        </ul>
        {this.renderNavItem(this.state.navActiveItem)}
      </div>
    );
  }
}

export default StudioVideoSectionRight;
