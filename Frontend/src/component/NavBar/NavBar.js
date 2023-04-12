import React, { Component } from 'react';
import "./NavBar.css";
import Grid from '@mui/material/Grid';
import home from "../../images/home.svg";
import message from "../../images/message.svg";

import {useNavigate} from 'react-router-dom';

const NavBar=()=>{

    let navigate = useNavigate();

    const logOutBtn = (event) =>{
        event.preventDefault();
        localStorage.clear();
        navigate("/FormComponent");
    }
    
        return ( 
            <div>
                <div className="navbar__barContent">
                    <Grid container>
                        <Grid item xs={1}> </Grid>
                        <Grid item xs={3}>
                            <span className="navbar_logo" width="120px">Connect Window</span>
                        </Grid>
                        <Grid item xs={3}>
                           <input text="text" className="navbar__searchBar" placeholder="Search" />
                        </Grid>
                        <Grid item xs={4} marginTop="10px">
                         <button onClick={logOutBtn}>Log Out</button>
                        </Grid>
                    </Grid>
                </div>

            </div>
         );
    }

 
export default NavBar;

