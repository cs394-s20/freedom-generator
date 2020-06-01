import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Tabs from '../Tabs/Tabs';
import { Button, RadioGroup, Radio, Checkbox, FormControlLabel } from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';
import { Redirect } from 'react-router-dom';
import ReleaseMechanismExpanded from '../ReleaseMechanisms/ReleaseMechanismExpanded';
import '../../styles/styles.scss';



function EligibilityPage(props) {

    let location = useLocation();

    var computeData = location.state.computeData;
    const { register, handleSubmit, errors, control } = useForm();
    var [statuteNumber, setStatuteNumber] = useState(null);
    var [submitClicked, setSubmitClicked] = useState(false);
    var [checked, setChecked] = useState(false);

    var getStatuteNumber = (index, conditions) => {
        var statnum = null;
        if (index === 0) {
            statnum = "730 ILCS 5/3-11-1(a)(2)"
        }
        else {
            console.log(conditions);
            var path1 = true;
            var path2 = true;
            for(var i = 0; i < conditions[0].length; i++){
                if(conditions[0][i].passed === false) {
                    path1 = false;
                }
            }
            for(var i = 0; i < conditions[1].length; i++){
                if(conditions[1][i].passed === false) {
                    path2 = false;
                }
            }
            if (path1 && path2) statnum = "730 ILCS 5/5-8A-3(d) and 730 ILCS 5/5-8A-3(e)";
            else if (path1) statnum = "730 ILCS 5/5-8A-3(d)";
            else if (path2) statnum = "730 ILCS 5/5-8A-3(e)";
        }
        return statnum;
    }

    return (
        <div>
            <Tabs computeData={computeData} />
            <div class="eligibilityPage">
                <h1>Step 2 of 3</h1>
                <div id= "name"><h2>Found data for: <b style={{color: 'black'}}>{computeData.name}</b></h2></div>
                <br/>
                <h2>Please select one of the following release mechanisms. If an option is unselectable, that means this individual is ineligible. Click on ‘Eligibility Criteria’ above for more information.</h2>
                <h2></h2>
                <br/>
                <br/>
                <div class="eligibilityContent">
                    {computeData.data.map((rm, index) => {
                        return (
                            <div class = "options">
                                <Checkbox
                                    id={index}
                                    variant = "contained"
                                    color = "primary"
                                    onClick={() => {
                                        var statnum = getStatuteNumber(index, rm.conditions);
                                        setStatuteNumber(statnum);
                                        document.getElementById(index).style.backgroundColor = "gray";
                                        if (!checked){setChecked(true)};
                                        if (checked){setChecked(false)};
                                    }}
                                    disabled={!rm.passed}>
                                    Select
                                </Checkbox>
                                <h3 id="criteria">{rm.text}</h3>
                            </div>
                        )
                    })}
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div className="flexCenter">
                        <Button className="button" disabled={!checked}variant="contained" color="primary" onClick={() => setSubmitClicked(true)}>Draft Email</Button>
                        {submitClicked &&
                            <Redirect
                                to={{
                                    pathname: "/email",
                                    state: {
                                        computeData: computeData,
                                        statuteNumber: statuteNumber
                                    }
                                }}
                            />
                        }
                    </div>
                </div>
            </div>
        </div>
    )

}

export default EligibilityPage;