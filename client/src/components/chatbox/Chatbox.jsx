import React from "react";
import "./chatbox.css";
function Chatbox() {
  return (
    <div className="chatbox">
      <div className="chatbox___message">
        <div className="chatbox___message--avatar"> me</div>
        <div className="chatbox___message--response">hello world</div>
      </div>
    </div>
  );
}

export default Chatbox;
