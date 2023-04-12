import React, { Component } from 'react';
import "./NavBar.css";
import Grid from '@mui/material/Grid';
import insta_log from "../../images/logoinsta.png";
import home from "../../images/home.svg";
import message from "../../images/message.svg";
import Avatar from '@mui/material/Avatar';
import pp from "../../images/pp1.png";

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <div className="navbar__barContent">
                    <Grid container>
                        <Grid item xs={2}> </Grid>
                        <Grid item xs={3}>
                            <span className="navbar_logo" width="105px">Connect Window</span>
                        </Grid>
                        <Grid item xs={3}>
                           <input text="text" className="navbar__searchBar" placeholder="Search" />
                        </Grid>
                        <Grid item xs={3} style={{"display":"flex"}}>
                            <img className="navbar__img" src={home} width="25px"/>
                            <img className="navbar__img" src={message} width="25px" />
                            <Avatar src={pp} className="navbar__img" style={{"maxWidth":"25px","maxHeight":"25px"}} />
                        </Grid>
                        <Grid item xs={1}></Grid>
                    </Grid>
                </div>
            </div>
         );
    }
}
 
export default NavBar;