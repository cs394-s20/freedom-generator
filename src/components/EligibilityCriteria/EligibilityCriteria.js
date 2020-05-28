import React, { useState } from 'react';
import ReleaseMechanismExpand from '../ReleaseMechanismExpand';




function EligibilityCriteria(props) {

    var queryString = window.location.search
    const urlParams = new URLSearchParams(queryString);
    const computeData = JSON.parse(urlParams.get('computeData'));
    

    return (
        <div>
            <div>
                {computeData.data.map((rm, index) => {
                    return (
                        <ReleaseMechanismExpand key={index} isPassed={rm.passed} conditions={rm.conditions} description={rm.text} />
                    )
                })}
            </div>
        </div>
    )

}

export default EligibilityCriteria;