import { useState, useEffect } from "react";
import Img from "../utilities/images/erphha.jpg";
import Camera from "../utilities/svg/Camera";
import { storage, db, auth } from "../firebase";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { getDoc, doc, updateDoc } from "firebase/firestore";

const Profile = () => {
  const [img, setImg] = useState("");
  const [user, setUser] = useState();

  useEffect(() => {
    getDoc(doc(db, "users", auth.currentUser.uid)).then((docSnap) => {
      if (docSnap.exists) {
        setUser(docSnap.data());
      }
    });
    if (img) {
      const uploadImg = async () => {
        const imgRef = ref(
          storage,
          `avatar/${new Date().getTime()} - ${img.name}`
        );

        try {
          const snap = await uploadBytes(imgRef, img);
          const url = await getDownloadURL(ref(storage, snap.ref.fullPath));

          await updateDoc(doc(db, "users", auth.currentUser.uid), {
            avatar: url,
            avatarPath: snap.ref.fullPath,
          });
          console.log(url);
          setImg("");
        } catch (error) {
          console.log(error.message);
        }
      };

      uploadImg();
    }
  }, [img]);

  return user ? (
    <section>
      <div className="profile-container">
        <div className="img-container">
          <img src={user.avatar || Img} alt="avatar" />
          <div className="overlay">
            <label htmlFor="photo">
              <Camera />
            </label>
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              id="photo"
              onChange={(e) => setImg(e.target.files[0])}
            />
          </div>
        </div>
        <div className="text-container">
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <hr />
          <small>عضویت در تاریخ: ...</small>
        </div>
      </div>
    </section>
  ) : null;
};

export default Profile;
