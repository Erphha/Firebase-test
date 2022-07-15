import { useState, useEffect } from "react";
import Img from "../utilities/images/erphha.jpg";
import Camera from "../utilities/svg/Camera";
import { storage } from "../firebase";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";

const Profile = () => {
  const [img, setImg] = useState("");

  useEffect(() => {
    if (img) {
      const uploadImg = async () => {
        const imgRef = ref(
          storage,
          `avatar/${new Date().getTime()} - ${img.name}`
        );
        const snap = await uploadBytes(imgRef, img)
        console.log(snap.ref.fullPath);
      };

      uploadImg()
    }
  }, [img]);

  return (
    <section>
      <div className="profile-container">
        <div className="img-container">
          <img src={Img} alt="avatar" />
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
          <h3>نام کاربری</h3>
          <p>ایمیل</p>
          <hr />
          <small>عضویت در تاریخ: ...</small>
        </div>
      </div>
    </section>
  );
};

export default Profile;
