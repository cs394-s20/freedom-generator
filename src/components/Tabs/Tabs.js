import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import ReleaseMechanismButton from '../ReleaseMechanismButton';


function Tabs(props) {
    var computeData = props.computeData;
    return (
        <div>
            
            {/* COMPONENT is EligibilityCriteria.js */}
            <Link onClick={()=>window.open("/criteria" + "?computeData=" + JSON.stringify(computeData))}>
                Eligibility
            </Link>
            <br></br>

            {/* COMPONENT is ExampleEmail.js */}
            <Link to={{
                pathname: "/example",
            }}
            target="_blank">
                Example Email
            </Link>
            <br></br>

            {/* COMPONENT is FAQ.js */}
            <Link to={{
                pathname: "/faq",
            }}
            target="_blank">
                FAQ
            </Link>

        </div>
    )

}

export default Tabs;