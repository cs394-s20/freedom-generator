import React from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import { green, red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Collapse } from '@material-ui/core';

function ConditionList(props) {
    const conditions = props.condition.map((c, index) => {
        return(
            <div key={index} className="sub-criterion">{c.text}
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
    const [expanded, setExpanded] = React.useState(false);
    const toggleExpanded = function(){
        setExpanded(!expanded);
    }

    var conditionLists = conditions.map((condition,index) => {
        return (
            <div key={index}>
                <ExpandMoreIcon />
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
                    {description}
                    {isPassed ? <CheckCircleIcon style={{ color: green[500] }} /> : <CloseRoundedIcon style={{ color: red[500] }} />}
                
                </div>
                <Collapse in={expanded}>
                {conditionLists}
                </Collapse>
            </div>
        </div>
    )
}