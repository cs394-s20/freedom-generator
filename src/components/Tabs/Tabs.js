import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import './Tabs.scss';


function Tabs(props) {
    var computeData = props.computeData;
    var criteria = props.criteria;
    return (
        <div>

            <Grid className="tabs-fullscreen" direction="row">

                {/* COMPONENT is EligibilityCriteria.js */}
                <Link className="tabs-button" to={{
                    pathname: "/criteria" + "?computeData=" + JSON.stringify(computeData)
                }}
                    target="_blank">
                    Eligibility Criteria
                </Link>


                {/* COMPONENT is ExampleEmail.js */}
                <Link className="tabs-button" to={{
                    pathname: "/example"
                }}
                    target="_blank">
                    Example Email
                </Link>
                

                {/* COMPONENT is FAQ.js */}
                <Link className="tabs-button" to={{
                    pathname: "/faq"
                }}
                    target="_blank">
                    FAQ
                </Link>
            </Grid>

        </div>
    )

}

export default Tabs;