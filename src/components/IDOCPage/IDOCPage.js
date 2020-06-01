import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Checkbox, Grid, FormControlLabel } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import ReactTooltip from "react-tooltip";
import { Redirect } from 'react-router-dom';
import { get_idocData } from '../../stub-idoc';
import Mechanisms from '../../Mechanisms';
import '../../styles/styles.scss';


function EmailForm(props) {
    const { register, handleSubmit, errors } = useForm();
    const [computeData, setComputeData] = useState(null);

    const onSubmit = formData => {
        setComputeData(null);
        get_idocData(formData["IDOC_Number"]).then(response => {
            response.text().then(t => {
                var data = JSON.parse(t);
                console.log(data); // this line can be delete
                data.highRisk = formData["medical_furlough"];
                var computeData = { name: data.name, idocNumber: formData["IDOC_Number"], data: Mechanisms.compute(data) };
                console.log("computeData:")
                return (
                    computeData
                )
            }).then(computeData => {
                console.log("Computed Data");
                console.log(computeData);
                setComputeData(computeData);
            });
        });

    };
    let popup = (
        <React.Fragment>
            <div className="infoIconWrapper">
                Eligible for medical furlough?
            <a href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-at-higher-risk.html" target="_blank" data-tip data-for='popup'> <InfoIcon className="infoIcon" /> </a>
            </div>
            <ReactTooltip id='popup' type='error'>
                <span>Click to see who qualifies as eligible.</span>
            </ReactTooltip>
        </React.Fragment>
    )
    return (
        <div className="IDOCPage">
            <h1>Step 1 of 3</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="formContainer">
                    <h2>Please input the IDOC Number to determine if an individual is eligible for early release.</h2>
                    <div className="inputContainer">
                        <div className="inputContainer__input">
                            <Grid container justify="center">
                                <Grid item>
                                    <FormControlLabel
                                        className="label"
                                        control={<TextField className="error" name="IDOC_Number" inputRef={register({ required: true })} />}
                                        label="IDOC Number: &nbsp;"
                                        labelPlacement="start"
                                        Props={{ style: { color: "white", fontSize: '3vh' } }}
                                    />
                                    {errors.IDOC_Number && <p className="error">IDOC Number is required.</p>}
                                </Grid>
                            </Grid>
                            <Grid container justify="center">
                                <Grid item>
                                    <FormControlLabel
                                        control={<Checkbox name="medical_furlough" color="primary" inputRef={register} inputProps={{ 'aria-label': 'Checkbox A' }} />}
                                        label={popup}
                                        labelPlacement="start"
                                    />
                                </Grid>
                            </Grid>
                        </div>
                        <div className="flexCenter margin">
                            <Button className="button" type="submit" variant="contained" color="primary">View Eligibility</Button>
                            {computeData != null &&
                                <Redirect
                                    push
                                    to={{
                                        pathname: "/eligibility",
                                        state: { computeData }
                                    }}
                                />
                            }
                        </div>
                    </div>
                </div>

            </form>
        </div>
    );


}

export default EmailForm;