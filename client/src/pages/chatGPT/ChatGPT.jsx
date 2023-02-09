import React, { useState } from "react";
import "./chatgpt.css";
import sendIcon from "../../assets/send.svg";
import { Asider } from "../../components";
function ChatGPT() {
  const [inputValue, setInputValue] = useState("");
  let loadInterval;

  return (
    <div className="container">
      <aside className="container___sidemenu">
        <Asider />
      </aside>
      <section className="container___chatbox"></section>
    </div>
  );
}

export default ChatGPT;