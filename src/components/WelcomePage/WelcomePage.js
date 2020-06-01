import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import '../../styles/styles.scss';

function WelcomePage(props) {

    return (
        <div>
            <div className="welcomeContainer">
                <h1>Freedom Link</h1>
                <h2>A simple way to advocate for the early release of a loved one from the Illinois Department of Corrections.</h2>
            </div>
            <div className="getStarted">
                <Link className="getStartedLink" to={{
                    pathname: "/idoc"
                }}>
                    <Button className="button" variant="contained" color="primary">Get Started</Button>
                </Link>
            </div>
        </div>
    );
}

export default WelcomePage;