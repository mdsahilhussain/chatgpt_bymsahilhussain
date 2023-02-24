import React from "react";
import "./chatinput.css";
function Chatinput() {
  return (
    <div className="chatinput___input--holder">
      <textarea
        className="chatinput___input--textarea"
        rows="1"
        required
      ></textarea>
    </div>
  );
}

export default Chatinput;
