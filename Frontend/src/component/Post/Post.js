import React, { useEffect, useState } from 'react';
import "./Post.css";
import Avatar from '@mui/material/Avatar';
import postimage from "../../images/post.jpg"; 



const Post = (props) => {

    // useEffect(() => {
    //     getComments().then((data) => {
    //         //console.log(data);
    //         setCommentList(data);
    //     });
    // });

    let data = [
        {
            "username": "ASD",
            "commentId": "1234",
            "timeStamp": "123456",
            "description": "Comment 1"
        },
        
    ];

    const [commentList, setCommentList] = useState(data);
    const [clicked, setClicked] =useState(false);
    const handleClick = ()=>{
        setClicked(!clicked);
    }


    return (
        <div className="post__container">
            {/* Header */}
            <div className="post__header">
                <Avatar className="post__image" src="" />
                <div className="post__username">{props.userName}</div>
            </div>

            {/* Text and Image */}
            <div>
                <p width="615px">{props.postContent}</p>
            </div>

            <div>
                <img src={props.postImageUrl} width="615px" /> 
                {/* <img src={postimage} width="615px" /> */}

            </div>

            {/* Analytics */}
            <div>
            
                    
             
                <div className='analytics_icon'>
                <i onClick={handleClick} 
                className={clicked ? "fa-regular fa-heart" : "fa-solid fa-heart"}></i>
                <i class="fa-regular fa-comment"></i>
                <i class="fa-solid fa-share"></i>
                </div>
                <div style={{ "fontWeight": "bold", "marginLeft": "20px  " }}>
                    {props.likeCount} likes
                </div>
            </div>

            {/* Comment Section */}
            <div >
                {
                    commentList.map((item, index) => (

                        <div className="post_comment" style = {{ "textAlign":"initial" }} key={index}>{item.username}: {item.description}</div>
                    ))
                }
                <input text="text" className="post__commentbox" placeholder="Add a comment..." />
            </div>

        </div>
    );
}


export default Post;