import React, { Component } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/Custom.css";
import "./assets/css/Me_custom.css";
import Header from "./components/shared/header/Header";
import Footer from "./components/shared/footer/Footer";
import LeftNav from "./components/shared/nav/LeftNav";

class App extends Component {
  render() {
    return (
      <section>
        <Header />
        <div>
          <LeftNav />
          <div>{this.props.children}</div>
        </div>
        <Footer />
      </section>
    );
  }
}

export default App;
