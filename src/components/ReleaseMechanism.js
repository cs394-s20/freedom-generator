import React, { useState } from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import { green, red } from '@material-ui/core/colors';

function ConditionList(props) {
    const conditions = props.condition.map((c) => {
        return(
            <div className="sub-criterion">{c.text}
                {c.passed ? <CheckCircleIcon style={{ color: green[500] }} /> : <CloseRoundedIcon style={{ color: red[500] }} />}
            </div>
        )
    });
    return (<div>{conditions}</div>)
}

export default function ReleaseMechanism(props) {
    const conditions = props.conditions;
    const description = props.description;
    const isPassed = props.isPassed;
    const conditionLists = conditions.map((condition,index) => {
        return (
            <div>
                <ConditionList condition={condition} />
                {(index<conditions.length-1) && 
                'or'
                }
            </div>
        )
    });


    return (
        <div className="ReleaseMechanism">
            <div className="criteria">
                <div className="criterion">
                    {props.description}
                    {isPassed ? <CheckCircleIcon style={{ color: green[500] }} /> : <CloseRoundedIcon style={{ color: red[500] }} />}
                </div>
                {conditionLists}
            </div>
        </div>
    )
}