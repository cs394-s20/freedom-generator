import React, { useState } from 'react';
import ReleaseMechanismExpanded from '../ReleaseMechanisms/ReleaseMechanismExpanded';
import '../../styles/styles.scss';



function EligibilityCriteria(props) {

    var queryString = window.location.search
    const urlParams = new URLSearchParams(queryString);
    const computeData = JSON.parse(urlParams.get('computeData'));
    

    return (
        <div class="eligibilityCriteria">
            <h1>Eligibility Criteria</h1>
            <h2>There are two possible release mechanisms that an individual can qualify for to be eligible to petition for early release. Those mechanisms are <b>Medical Furlow</b> and <b>Electric Monitoring or Home Detention</b>.</h2>
            <h2>Each release mechanism has certain requirements. Note that there are <i>two</i> ways an individual can qualify for Electric Monitoring or Home Detention.</h2>
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