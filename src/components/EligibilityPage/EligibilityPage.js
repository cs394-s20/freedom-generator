import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import ReleaseMechanismButton from '../ReleaseMechanismButton';




function EligibilityPage(props) {

    let location = useLocation();
    console.log("this")
    console.log(location);

    var computeData = location.state.computeData;



    return (
        computeData.data.map((rm, index) => {
            return (
                <ReleaseMechanismButton key={index} isPassed={rm.passed} conditions={rm.conditions} description={rm.text} />
            )
        })
    )

}

export default EligibilityPage;