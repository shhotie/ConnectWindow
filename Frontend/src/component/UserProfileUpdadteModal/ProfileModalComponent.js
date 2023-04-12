import React, { useEffect, useState } from "react";
import { Modal, Button } from "antd";
import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import "./ProfileModalComponent.scss";
import { updateUser } from '../../services/user_service';
const ProfileModalComponent = ({ modalOpen, closeModal }) => {
  const userJson = localStorage.getItem("user");
  const user = JSON.parse(userJson);
  let data = {
    // userId: localStorage.getItem(user.userId),
    "userId" : "12",
    "userName" : "pvsfsd12",
    "email" : "pv@gmail.com",
    "type" : "student",
    "description" : " Please add your description ",
    "qualification" : "B-tech",
    "profileImgURL" :
      "https://irixlens.com/new/wp-content/uploads/2018/11/IRX_5473.jpg",
  };


  const [userProfile, setUserProfile] = useState(data);

  
// we need to call the get user profile api of that specific user who is currently logged in.
useEffect(() => {

  //let user = JSON.parse(localStorage.getItem("user"));

  setUserProfile(data);
}, []);


    const [userName, setUserName] = useState(userProfile.userName);
    const [email, setEmail] = useState(userProfile.email);
    const [type, setType] = useState(userProfile.type);
    const [qualification, setQualification] = useState(userProfile.qualification);
    const [description, setDescription] = useState(userProfile.description);
    const [profileImageUrl, setProfileImageUrl] = useState(null);
  
    const [selectedImage, setSelectedImage] = useState("");

    const removeImg = () => {
      setProfileImageUrl(null);
      setSelectedImage(null);
    };

  function handleSubmit(event) {
    event.preventDefault();

    let payload = {
      // userId: localStorage.getItem(user.userId),
      id: user.id,
      userName: userName,
      email: email,
      userType: type,
      description: description,
      qualification: qualification,
      userPhoto: profileImageUrl,
    };

    // console.log(post);
    console.log(payload);

    updateUser(payload)
      .then((resp) => {
        //console.log(resp);
        console.log(resp);
      })
      .catch((err) => {
        console.log(err);
      });

    setDescription("");
    setSelectedImage(null);
    setProfileImageUrl(null);
    setUserName("");
    setEmail("");
    setType("");
    setQualification("");
    closeModal();
  }

  const handleImageFile = (event) => {
    setSelectedImage(event.target.files[0]);
    let imageUpload = event.target.files[0];
    if (imageUpload === null) return;
    const imageRef = ref(storage, `profile/${v4() + imageUpload.name}`);
    uploadBytes(imageRef, imageUpload).then(() => {
      getDownloadURL(imageRef).then((downloadURL) => {
        console.log(downloadURL);
        setProfileImageUrl(downloadURL);

        //console.log(profileImageUrl);
      });
    });
  };

  return (
    <>
      <Modal
        title="Update Profile "
        centered
        open={modalOpen}
        onOk={closeModal}
        onCancel={closeModal}
        footer={[
          selectedImage && (
            <div>
              <img
                alt="not found"
                width={"200px"}
                height={"200px"}
                style={{"border-radius":"100px"}}
                src={URL.createObjectURL(selectedImage)}
              />
              <br />
              <br />
              <button onClick={removeImg}>Remove</button>
              <br />
              <br />
            </div>
          ),

          <input type="file" name="myImage" onChange={handleImageFile} />,
          <Button
            key="submit"
            type="primary"
            disabled={profileImageUrl !== null ? false : true}
            onClick={handleSubmit}
          >
            Update
          </Button>,
        ]}
      >
        <label htmlFor="user">User Name </label>
        <input
          className="modal-input"
          onChange={(event) => setUserName(event.target.value)}
          value={user.userName}
          id="user"
          readOnly
        ></input>

        
        <label htmlFor="e-m">Email-Id </label>
        <input className="modal-input"
          onChange={(event) => setEmail(event.target.value)}
          value={user.email}
          id="e-m"
          readOnly
        >
        </input>


        <label htmlFor="qual">Qualification </label>
        <input className="modal-input"
          onChange={(event) => setQualification(event.target.value)}
          value={user.qualification}
          id="qual"
        >
        </input>


        <label htmlFor="ty">Type </label>
        <input className="modal-input"
          onChange={(event) => setType(event.target.value)}
          value={user.userType}
          id="ty"
        >
        </input>

        <label htmlFor="des">Description </label>
        <textarea className="modal-input"
          onChange={(event) => setDescription(event.target.value)}
          value={user.description}
          id="des"
        >
        </textarea>
      </Modal>
    </>
  );
};

export default ProfileModalComponent;
