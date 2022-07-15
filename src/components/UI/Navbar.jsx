import { Link, useHistory } from "react-router-dom";
import { auth, db } from "../../firebase";
import { signOut } from "firebase/auth";
import { updateDoc, doc } from "firebase/firestore";
import { useContext } from "react";
import { AuthContext } from "../../context/auth";
import "./Navbar.css";

const Navbar = () => {
  const history = useHistory();
  const {user} = useContext(AuthContext)
  const handleSignOut = async () => {
    await updateDoc(doc(db, "users", auth.currentUser.uid), {
      isOnline: false,
    });
    await signOut(auth);
    history.replace('/register-login')
  };
  return (
    <nav>
      <h3>
        <Link to="/">Messenger</Link>
      </h3>
      <div>
        {user ? (
          <>
            <Link to="/profile">Profile</Link>
            <button onClick={handleSignOut}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/register-login">Register/Login</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
