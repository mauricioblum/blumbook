import React, { Component, Fragment } from "react";
import Post from "./components/Post";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Post />
      </Fragment>
    );
  }
}

export default App;
