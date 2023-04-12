import React, { useState,useEffect } from "react";
import { Modal, Button } from "antd";
import "./index.scss";
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL,uploadBytesResumable,storageRef} from "firebase/storage";
import { v4 } from "uuid";
import { postData,getData} from "../../../services/user_service";


const ModalComponent = ({ modalOpen, closeModal }) => {
  const [status, setStatus] = useState("");
  const [selectedImage, setSelectedImage] = useState("");

  const userJson = localStorage.getItem("user");
    const user = JSON.parse(userJson);
  
  const removeImg = () => {
    setSelectedImage(null);
  };
  const handlePost = (event) => {
    event.preventDefault();
    
   
    let postObject = {
      id: user.id,
      userName: user.userName,
      likeCount: 0,
      postContent: status,
      timeStamp: new Date(),
      postImageUrl: "",
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
          <Button
            key="submit"
            type="primary"
            disabled={status.length > 0 ? false : true }
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

export default ModalComponent;
