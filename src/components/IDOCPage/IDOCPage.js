import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Checkbox, Grid, FormControlLabel, Typography, Paper, Container } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import ReactTooltip from "react-tooltip";
import { Redirect } from 'react-router-dom';
import { get_idocData } from '../../stub-idoc';
import Mechanisms from '../../Mechanisms';
import '../../styles/styles.scss';


function EmailForm(props) {
    const { register, handleSubmit, errors } = useForm();
    const [computeData, setComputeData] = useState(null);
    const [rawData, setRawData] = useState(null);
    const [loadingText, setLoadingText] = useState("");
    const [showResults, setShowResults] = useState(false);

    const onSubmit = formData => {
        setLoadingText("Loading...");
        setComputeData(null);
        get_idocData(formData["IDOC_Number"]).then(response => {
            response.text().then(t => {
                var data = JSON.parse(t);
                console.log(data); // this line can be delete
                data.highRisk = formData["medical_furlough"];
                setRawData(data);
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
                Is this individual at high risk for severe illness?
            <a href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-at-higher-risk.html" target="_blank" data-tip data-for='popup'> <InfoIcon className="infoIcon" /> </a>
            </div>
            <ReactTooltip id='popup' type='error'>
                <span>Click to see who qualifies as "at high risk".</span>
            </ReactTooltip>
        </React.Fragment>
    )
    let Results = (data) => {
        const [redirect, setRedirect] = useState(false);
        setLoadingText("");
        return (
            <div className = "formLike">
                <Grid container direction="column" spacing={2} >
                    <Grid item>
                        <h2>Is this the person you're looking for?</h2>
                        <Paper elevation={3} className="results">
                            <Container className="resultContainer">
                                <Typography variant="h6">Name: {data.data.name}</Typography>
                                <Typography variant="h6">Sex: {data.data.sex}</Typography>
                                <Typography variant="h6">Race: {data.data.race}</Typography>
                                <Typography variant="h6">Date of Birth: {data.data.dob}</Typography>
                            </Container>
                        </Paper>
                        
                    </Grid>
                    <Grid container item direction="row" justify="space-evenly">
                        <Grid item>
                            <Button onClick={() => setComputeData(null)} variant="contained" className="button" color="primary">Back</Button>
                        </Grid>
                        <Grid item>
                            <Button onClick={() => {setRedirect(true)}} className="button" type="submit" variant="contained" color="primary">Continue</Button>
                        </Grid>
                    </Grid>
                </Grid>
                
                
                
                
                    {redirect &&
                        <Redirect
                            push
                            to={{
                                pathname: "/eligibility",
                                state: { computeData }
                            }}
                        />
                    }
            </div>
            
        )
    }
    let search = (
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
                            {computeData === null && <Button className="button" type="submit" variant="contained" color="primary">View Eligibility</Button>}
                            {/*computeData != null &&
                                <Redirect
                                    push
                                    to={{
                                        pathname: "/eligibility",
                                        state: { computeData }
                                    }}
                                />
                                */}
                        </div>
                        <div style={{textAlign: "center", color: '#303F9F', fontWeight: 'bold'}}>{loadingText}</div>
                    </div>
                </div>

            </form>
    )

    return (
        <div className="IDOCPage">
            <h1>Step 1 of 3</h1>
            {computeData != null ? <Results data={rawData} />: search}
        </div>
    );


}

export default EmailForm;