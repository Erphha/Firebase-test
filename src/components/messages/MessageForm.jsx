import React from "react";
import Attachment from "../../utilities/svg/Attachment";

const MessageForm = ({ handleSubmit, text, setText, setImg }) => {
  return (
    <form className="message-form" onSubmit={handleSubmit}>
      
      <div>
        <button className="btn">Send</button>
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter message"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <label htmlFor="img">
        <Attachment />
      </label>
      <input
        onChange={(e) => setImg(e.target.files[0])}
        type="file"
        id="img"
        accept="image/*"
        style={{ display: "none" }}
      />
    </form>
  );
};

export default MessageForm;