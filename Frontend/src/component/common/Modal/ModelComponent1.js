import React, { useState,useEffect } from "react";
import { Modal, Button } from "antd";
import "./index.scss";
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL,uploadBytesResumable,storageRef} from "firebase/storage";
import { v4 } from "uuid";
import { postData,getData} from "../../../services/user_service";


const ModalComponent1 = ({ modalOpen, closeModal }) => {
  const [status, setStatus] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [postImageUrl, setPostImageUrl] = useState("");

  const userJson = localStorage.getItem("user");
    const user = JSON.parse(userJson);
  
  const removeImg = () => {
    setSelectedImage(null);
  };
  const handlePost = (event) => {
    event.preventDefault();
    
    //console.log(postImageUrl);
    let postObject = {
      userId: user.id,
      userName: user.userName,
      likeCount: 0,
      postContent: status,
      timeStamp: new Date(),
      postImageUrl: postImageUrl,
    };
    console.log(postObject);
    postData(postObject)
      .then((resp) => {
        //console.log(resp);
        console.log(resp);
      })
      .catch((err) => {
        console.log(err);
      });

    setSelectedImage(null);
    setStatus("");
    
    closeModal();
    window.location.reload();
  };

  return (
    <>
      <Modal
        
        title="Create a Post"
        centered
        open={modalOpen}
        onOk={closeModal}
        onCancel={closeModal}
        footer={[
          selectedImage && (
            <div>
              <img
                alt="not found"
                width={"250px"}
                src={URL.createObjectURL(selectedImage)}
              />
              <br />
              <br />
              <button onClick={removeImg}>Remove</button>
            </div>
          ),

          <input
            type="file"
            name="myImage"
            onChange={(event) => {
             setSelectedImage(event.target.files[0]);
             
              event.preventDefault();
              let imageUpload = event.target.files[0];
              if (imageUpload != null) {
                console.log(imageUpload.name);
                const imageRef = ref(
                  storage,
                  `postImages/${v4() + imageUpload.name}`
                );
                
                uploadBytes(imageRef, imageUpload).then(() => {
                
                  //alert("Image uploaded successfully");
                  getDownloadURL(imageRef).then((downloadURL) => {
                    //setTimeout(()=>{},300);
                    console.log(downloadURL);
                    setPostImageUrl(downloadURL);
                    //console.log(postImageUrl);
                  });
                });
              }
            }}
          />,
          <Button
            key="submit"
            type="primary"
            disabled={postImageUrl !== "" ? false : true }
            onClick={handlePost}
          >
            Post
          </Button>,
        ]}
      >
        <input
          className="modal-input"
          placeholder="what do you want to talk about ?"
          onChange={(event) => setStatus(event.target.value)}
          value={status}
        ></input>
      </Modal>

      
    </>
  );
};

export default ModalComponent1;
