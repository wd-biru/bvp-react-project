import React, { Component } from "react";
import Dashboard from "../components/Dashboard";

class DashboardContainer extends Component {
  renderPage() {
    return <Dashboard />;
  }

  render() {
    return <section>{this.renderPage()}</section>;
  }
}

export default DashboardContainer;
