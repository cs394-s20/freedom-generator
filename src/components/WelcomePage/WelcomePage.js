import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import '../../styles/styles.scss';



function WelcomePage(props) {

    return (
        <div className="welcomeContainer">
            <h1>Freedom Generator</h1>
            <p>A simple way to advocate for the early release of a loved one from the Illinois Department of Corrections.</p>
            <div className="getStartedButton">
                <Link to={{
                    pathname: "/idoc"
                }}>
                    <Button variant="contained" color="primary">Get Started</Button>
                </Link>
            </div>
        </div>
    );


}

export default WelcomePage;