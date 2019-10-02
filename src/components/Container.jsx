import React, { Component } from "react";
import Dashboard from "./dashboard/Dashboard";

class Container extends Component {
  renderPage() {
    return <Dashboard />;
  }

  render() {
    return <section>{this.renderPage()}</section>;
  }
}

export default Container;
