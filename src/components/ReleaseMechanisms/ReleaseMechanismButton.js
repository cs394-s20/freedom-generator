import React from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import { green, red } from '@material-ui/core/colors';


export default function ReleaseMechanismButton(props) {
    const description = props.description;
    const isPassed = props.isPassed;
    
    


    return (
        <div className="ReleaseMechanism">
            <div className="criteria">
                <div className="criterion">
                    {description}
                    {isPassed ? <CheckCircleIcon style={{ color: green[500] }} /> : <CloseRoundedIcon style={{ color: red[500] }} />}
                
                </div>
                
            </div>
        </div>
    )
}