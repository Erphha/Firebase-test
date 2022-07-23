import Img from "../../utilities/images/Online payment_Monochromatic.png";
import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

const User = ({ user, selectUser, user1, chat }) => {
  const user2 = user?.uid;
  const [data, setData] = useState("");

  useEffect(() => {
    const id = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}`;
    let unsub = onSnapshot(doc(db, "lastMsg", id), (doc) => {
      setData(doc.data());
    });
    return () => unsub();
  }, []);

  return (
    <>
    <div
      className={`user-wrapper ${chat.name === user.name && "selected-user"}`}
      onClick={() => selectUser(user)}
    >
      <div className="user-info">
        <div className="user-detail">
          <img src={user.avatar || Img} alt="avatar" className="avatar" />
          <h4>{user.name}</h4>
          {data?.from !== user1 && data?.unread && <small className="unread">New</small>}
        </div>
        <div
          className={`user-status ${user.isOnline ? "online" : "offline"}`}
        ></div>
      </div>
      {data && (
        <p className="truncate">
            <strong>{data.from === user1 ? 'من:':null}</strong>
            {data.text}</p>
      )}
    </div>
    <div
        onClick={() => selectUser(user)}
        className={`sm-container ${chat.name === user.name && "selected-user"}`}
      >
        <img
          src={user.avatar || Img}
          alt="avatar"
          className="avatar sm-screen"
        />
      </div>
    </>
  );
};

export default User;
