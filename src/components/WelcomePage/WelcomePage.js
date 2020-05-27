import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';



function EmailForm(props) {

    return (
        <div>
            <h1>Freedom Generator</h1>
            <p>A simple way to advocate for the early release of a loved one from the Illinois Department of Corrections.</p>
            <div>
                <Link to={{
                    pathname: "/idoc"
                }}>
                    <Button>Get Started</Button>
                </Link>
            </div>
        </div>
    );


}

export default EmailForm;