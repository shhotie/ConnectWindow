import Grid from '@mui/material/Grid';
import React from 'react';
import MainPage from '../MainPage/MainPage';
import InfoSection from '../InfoSection/InfoSection';
import Suggestions from '../Suggestions/Suggestions';

const MainContent=()=> {
 
        return (
            <div>
                <Grid container>

                    <Grid item xs={2}> </Grid>

                    <Grid item xs={6} className="maincontent__container">
                        <div>
                            <MainPage />
                        </div>
                    </Grid>

                    <Grid item xs={2}>
                        <InfoSection />
                        <Suggestions />
                    </Grid>
                    
                    <Grid item xs={2}></Grid>

                </Grid>
            </div>
        );
    }

export default MainContent;