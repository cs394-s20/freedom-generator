import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { useLocation } from 'react-router-dom';


function Tabs(props) {
    var computeData = props.computeData;
    var criteria = props.criteria;
    return (
        <div>

            {/* COMPONENT is EligibilityCriteria.js */}
            {/* <Link push onClick={()=>window.open("/criteria" + "?computeData=" + JSON.stringify(computeData))}>
                Eligibility
            </Link> */}

            <Link to={{
                pathname: "/criteria" + "?computeData=" + JSON.stringify(computeData)
            }}
                target="_blank">
                Eligibility Criteria
            </Link>

            <br></br>

            {/* COMPONENT is ExampleEmail.js */}
            <Link to={{
                pathname: "/example"
            }}
                target="_blank">
                Example Email
            </Link>
            <br></br>

            {/* COMPONENT is FAQ.js */}
            <Link to={{
                pathname: "/faq"
            }}
                target="_blank">
                FAQ
            </Link>

        </div>
    )

}

export default Tabs;