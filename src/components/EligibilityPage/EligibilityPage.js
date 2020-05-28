import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Tabs from '../Tabs/Tabs';
import { Button, RadioGroup, Radio, Checkbox, FormControlLabel } from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';
import { Redirect } from 'react-router-dom';
import ReleaseMechanismExpanded from '../ReleaseMechanisms/ReleaseMechanismExpanded'





function EligibilityPage(props) {

    let location = useLocation();

    var computeData = location.state.computeData;
    const { register, handleSubmit, errors, control } = useForm();
    var [statuteNumber, setStatuteNumber] = useState(null);
    var [submitClicked, setSubmitClicked] = useState(false);

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
            <div>
                {computeData.data.map((rm, index) => {
                    return (
                        <div>
                            {rm.text}
                            <Button
                                id={index}
                                onClick={() => {
                                    var statnum = getStatuteNumber(index, rm.conditions);
                                    setStatuteNumber(statnum);
                                    document.getElementById(index).style.backgroundColor = "gray";
                                }}
                                disabled={!rm.passed}>
                                Select
                            </Button>
                        </div>
                    )
                })}

                <Button variant="contained" color="primary" onClick={() => setSubmitClicked(true)}>Draft Email</Button>
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
    )

}

export default EligibilityPage;