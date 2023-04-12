import React, { useState, useEffect } from 'react';
import "./MainPage.css";
import Post from '../Post/Post';
import PostStatus from '../common/PostUpdate';
//import {storage,auth} from "../firebase";
import { getData } from "../../services/user_service";
//It is containing Post ....will be embedded in Main Content
const MainPage=(props)=> {
    
    let data = [
        {
            "postId": "123456",
            "userName":"shvcs",
            "PostContent":"kygduagdluhlvkahk",
            "timeStamp": "12345",
            "likeCount": "1234",
            "postImageURL": "https://irixlens.com/new/wp-content/uploads/2018/11/IRX_5473.jpg",
        }
    ];


    const [postArray, setPostArray] = useState(data);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        fetchData();
      }, []);
    
   const fetchData = () => {
        setLoading(true);
        getData().then((data) => {
            // console.log(data);
             setPostArray(data);
             setLoading(false);
           }).catch((error) => {
            console.log(error);
            setLoading(false);
          });;
      };

        return (
            <div>
                <div>
                    
                </div>


                <div style={{"textAlign":'center' , 'margin':'10px'}}>
                  <PostStatus />
                </div>

                {
                    postArray.map((item, index) => (
                        <Post key={index} id={item.id} userName={item.userName} postContent={item.postContent}  postImageUrl={item.postImageUrl} likeCount={item.likeCount} />
                    ))
                }
            </div>
        );
    }

export default MainPage;