import React, { useState } from 'react';
import ReleaseMechanismExpanded from '../ReleaseMechanisms/ReleaseMechanismExpanded';
import '../../styles/styles.scss';



function EligibilityCriteria(props) {

    var queryString = window.location.search
    const urlParams = new URLSearchParams(queryString);
    const computeData = JSON.parse(urlParams.get('computeData'));
    

    return (
        <div class="eligibilityCriteria">
            <div class="marginTop" style={{textAlign: "center"}}><h1>Eligibility Criteria</h1></div>
            <h2>The release mechanism that an individual can qualify for to be eligible to petition for early release is <b>Electronic Monitoring or Home Detention</b>.</h2>
            <h2>This release mechanism has certain requirements. Note that there are <i>two</i> ways an individual can qualify for Electric Monitoring or Home Detention.</h2>
            <h2>The person you searched for fulfills the following:</h2>
            <br/>
            <div>
                {computeData.data.map((rm, index) => {
                    return (
                        <ReleaseMechanismExpanded key={index} isPassed={rm.passed} conditions={rm.conditions} description={rm.text} />
                    )
                })}
            </div>
        </div>
    )

}

export default EligibilityCriteria;