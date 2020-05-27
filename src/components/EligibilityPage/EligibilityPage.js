import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { useLocation } from 'react-router-dom';




function EligibilityPage(props) {
    let location = useLocation();
    console.log("this")
    console.log(location);
    return (
        <div>
            <h1>Eligibility</h1>
            
        </div>
    );


}

export default EligibilityPage;