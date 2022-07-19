import Attachment from "../../utilities/svg/Attachment";

const MessageForm = () => {
  return (
    <div>
      <form className="message-form">
        <label htmlFor="img">
          <Attachment />
        </label>
        <input
          type="file"
          id="img"
          accept="image/*"
          style={{ display: "none" }}
        />
        <div>
            <input type="text" placeholder="Enter Message" />
            <button className="btn">send</button>
        </div>
      </form>
    </div>
  );
};

export default MessageForm;
