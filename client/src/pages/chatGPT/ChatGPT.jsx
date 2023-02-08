import React, { useState } from "react";
import "./chatgpt.css";
import sendIcon from "../../assets/send.svg";
function ChatGPT() {
  const [inputValue, setInputValue] = useState("");
  let loadInterval;

  function loader(element) {
    element.textContent = "";
    loadInterval = setTimeout(() => {
      element.textContent += ".";
      if (element.textContent === "...") {
        element.textContent = "";
      }
    }, 300);
    console.log(loadInterval);
  }

  loader();

  return (
    <div id="app">
      <div id="chat___container"></div>
      <form>
        <textarea name="prompt" rows="1" cols="1"></textarea>
        <button type="submit">
          <img src={sendIcon} alt="sendIcon" />
        </button>
      </form>
    </div>
  );
}

export default ChatGPT;
