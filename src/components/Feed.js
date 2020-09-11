import React from "react";
import "./Feed.css";
import StoryReelComp from "./StoryReel";
import MessageSender from "./MessageSender";

function Feed() {
  return (
    <div className="feed">
      <StoryReelComp />
      <MessageSender />
    </div>
  );
}

export default Feed;
