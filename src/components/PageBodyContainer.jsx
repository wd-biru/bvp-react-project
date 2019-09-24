import React, { Component } from "react";
import Dashboard from "../components/dashboard/Dashboard";

class PageBodyContainer extends Component {
  renderMainPage() {
    return <Dashboard />;
  }

  render() {
    return <section>{this.renderMainPage()}</section>;
  }
}

export default PageBodyContainer;
