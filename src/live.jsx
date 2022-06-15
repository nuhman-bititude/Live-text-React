import React from "react";
import { useState } from "react";

const LiveText = () => {
  const [text, setText] = useState("");
  return (
    <div>
      <form action="">
        <p>
          <b>Welcome</b>
          <i> {text} </i>
        </p>
        <label htmlFor="name">Enter Your Name :</label>
        <input
          type="text"
          name="name"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
    </div>
  );
};

export default LiveText;
