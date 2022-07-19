import { useEffect, useState } from "react";
import { db, auth } from "../firebase";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import User from '../components/users/User'

const Home = () => {
    const [users, setUsers] = useState([])
    const [chat, setChat] = useState('')
  useEffect(() => {
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("uid", "not-in", [auth.currentUser.uid]));
    const unsub = onSnapshot(q, (querySnapshot) => {
        let users = [];
        querySnapshot.forEach(doc=>{
            users.push(doc.data())
        })
        setUsers(users);
    });
    return ()=> unsub();
  }, []);

  const selectUser = (user) => {
    setChat(user)
    console.log(user);
  }

  return <div className="home-container">
    <div className="users-container">
        {users.map(user=><User key={user.uid} user={user} selectUser={selectUser}/>)}
    </div>
    <div className="messages-container">
        {chat? <div className="messages-user">
            <h3>{chat.name}</h3>
        </div>:<h3 className="no-conv">برای شروع مکالمه مخاطب خود را انتخاب کنید!</h3>}
    </div>
  </div>;
};

export default Home;
