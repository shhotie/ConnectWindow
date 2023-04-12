import React, { Component } from 'react';
import "./InfoSection.css";
import Avatar from '@mui/material/Avatar';
import imageSrc from "../../images/pp1.png"
import {useNavigate} from 'react-router-dom';

const InfoSection=()=> {
   
    let navigate = useNavigate();

    const userJson = localStorage.getItem("user");
    const user = JSON.parse(userJson);

    console.log(user);
    
        return ( 
        <div>
            <div className="info__container">
                <Avatar src={imageSrc} className="info__image" onClick={()=>{navigate('/UserProfile')}}/>
                <div className="info_content">
                    <div className="info_username"> {user.userName}</div>
                    <div className="info_description"> Description</div>
                </div>
            </div>
        </div> );
    }

 
export default InfoSection;