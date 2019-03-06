import React, { Component } from "react";
import PostHeader from "./PostHeader";

export default class Post extends Component {
  render() {
    return (
      <div>
        <PostHeader />
        <h3>Posts</h3>
      </div>
    );
  }
}
