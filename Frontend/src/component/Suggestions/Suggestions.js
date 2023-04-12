import React, { Component } from 'react';
import "./Suggestions.css"
import Avatar from '@mui/material/Avatar';
import iitb from '../../images/iitb.png'
import iitm from '../../images/iitm.png'
import { useNavigate } from 'react-router-dom';


function Suggestions (){   

    
    
        return ( 
        <div>
            <div className="suggestions__container">
                <div className="suggestions__header">
                    <div>Suggestions For You</div>
                </div>
                <div className="suggestions__body">
                    <div className="suggestions__friends">
                        <Avatar src={iitb} className="suggestions__image"/>
                        <div className="suggestions__username">IIT Bombay</div>
                    </div>
                    <div className="suggestions__friends">
                        <Avatar src={iitm} className="suggestions__image"/>
                        <div className="suggestions__username">IIT Madras</div>
                    </div>
                   
                </div>
            </div>
        </div> );
    }

 
export default Suggestions;