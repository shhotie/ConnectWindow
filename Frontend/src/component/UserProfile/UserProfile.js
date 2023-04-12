import React, { useEffect, useState, useContext } from "react";
import pp from "../../images/pp1.png";
import "../UserProfile/UserProfile.css";
import Post from "../Post/Post";
import ProfileUpdateButton from "../ProfileUpdateButton/ProfileUpdateButton";
import {getPostUserId} from "../../services/user_service";

const Profile = () => {

  const userJson = localStorage.getItem("user");
  const user = JSON.parse(userJson);

    //logged in user ki username ya userId se get user profile call kr k ....aage ka kaam hoga.
  let UserData = {
    id: user.id,
    userName: user.userName,
    email: user.email,
    type: "student",
    description: "Please add your description",
    qualification: "B-tech",
    profileImgURL:
      "https://irixlens.com/new/wp-content/uploads/2018/11/IRX_5473.jpg",
  };

  let postData = [
    // {
    //   postId : "123456",
    //   userName: "shvcs",
    //   PostContent: "kygduagdluhlvkahk",
    //   timeStamp: "12345",
    //   likeCount: "1234",
    //   postImageURL:
    //     "https://irixlens.com/new/wp-content/uploads/2018/11/IRX_5473.jpg",
    // },
    // {
    //   postId: "123456",
    //   userName: "shvcs",
    //   postContent: "kygduagdluhlvkahk",
    //   timeStamp: "12345",
    //   likeCount: "1234",
    //   postImageURL:
    //     "https://irixlens.com/new/wp-content/uploads/2018/11/IRX_5473.jpg",
    // }
  ];

  const [userProfile, setUserProfile] = useState(UserData);
  const [postArray, setPostArray] = useState(postData);

  const [loading, setLoading] = useState(false);
    useEffect(() => {
        fetchData();
      }, []);
    
   const fetchData = () => {
        setLoading(true);
        getPostUserId(Number(user.id)).then((data) => {
            console.log(data);
             setPostArray(data);
             setLoading(false);
           }).catch((error) => {
            console.log(error);
            setLoading(false);
          });;
      };

  //User data specific user ka lena h using username or userID
  // useEffect(() => {
  //     getData().then((data) => {
  //       console.log(data);
  //       setUserProfile(data);
  //     });
  //   });

  //Post data sara leke user Id basis pe filter kr denge
  //  useEffect(() => {
  //     getData().then((data) => {
  //       console.log(data);

  //       let userSpecificPost = data.filter((post) => {
  //         return post.userName === UserData.userName;
  //       });

  //       setPostArray(userSpecificPost);
  //     });
  //   });

  return (
    <div style={{ maxWidth: "650px", margin: "0px auto" }}>
      <div
        style={{
          margin: "20px 0px",
          borderBottom: "1px solid grey",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div>
            <img
              style={{ width: "200px", height: "200px", borderRadius: "100px" }}
              src={pp}
            />
          </div>
          <div>
            {/* <h4 className="userName">{userProfile.userName}</h4> */}
            <p className="userName">{user.userName}</p>
            <h5 className="email">{user.email}</h5>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                width: "108%",
              }}
            >
              <h6 style={{ fontSize: "12px" }}>Qualification : {userProfile.qualification}</h6>
              <h6 style={{  marginLeft: "20px",fontSize: "12px" }}>{postArray.length} posts</h6>
              <h6 style={{ marginLeft: "20px", fontSize: "12px" }}>
                {userProfile.type}
              </h6>
            </div>
          </div>
        </div>

        <div className="description">{userProfile.description}</div>

        {/* <button className="updateProfile_button" onClick={handleUpdateProfile}>
          Update Profile
        </button> */}
        <br/>
        <ProfileUpdateButton />
        <br/>
      </div>

      <div className="gallery">
     
        {postArray.map((item, index) => (
         
          <Post
            key={index}
            id={item.postId}
            userName={item.userName}
            postContent={item.postContent}
            postImageUrl={item.postImageUrl}
            likeCount={item.likeCount}
          />
        ))}
        
      </div>
    </div>
  );
};

export default Profile;
