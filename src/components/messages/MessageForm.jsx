import Attachment from "../../utilities/svg/Attachment";

const MessageForm = ({handleSubmit, text, setText}) => {
  return (
    
      <form className="message-form" onSubmit={handleSubmit}>
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
            <button type='submit' className="btn">send</button>
            <input type="text" placeholder="Enter Message" value={text}
          onChange={e=>setText(e.target.value)}/>
        </div>
      </form>
  );
};

export default MessageForm;
