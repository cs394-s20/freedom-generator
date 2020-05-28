import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Checkbox, Grid, FormControlLabel } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import ReactTooltip from "react-tooltip";
import { Link, Redirect } from 'react-router-dom';
import { get_idocData } from '../../stub-idoc';
import ReleaseMechanismButton from '../ReleaseMechanismButton';
import Mechanisms from '../../Mechanisms';


function EmailForm(props) {
    const { register, handleSubmit, errors } = useForm();
    const [loading, setLoading] = useState(false);
    const [computeData, setComputeData] = useState(null);

    // var mechanisms = <div></div>;
    // if (computeData != null) {
    //     mechanisms = computeData.data.map((rm, index) => {

    //         return (
    //             <ReleaseMechanismButton key={index} isPassed={rm.passed} conditions={rm.conditions} description={rm.text} />
    //         )
    //     });
    // }
    // const makeThing = t => {
    //     var data = JSON.parse(t)
    //     return (
    //         {name: data.name, idocNumber: formData["IDOC_Number"], data: Mechanisms.compute()}
    //     )
    // }
    const onSubmit = formData => {
        // setLoading(true);
        setComputeData(null);
        get_idocData(formData["IDOC_Number"]).then(response => {
            response.text().then(t => {
                var data = JSON.parse(t);
                console.log(data); // this line can be delete
                data.highRisk = formData["medical_furlough"];
                var computeData = { name: data.name, idocNumber: formData["IDOC_Number"], data: Mechanisms.compute(data) };
                console.log("computeData:")
                // console.log(thing);
                // setComputeData(thing);
                // setLoading(false);
                return (
                    computeData
                )
            }).then(computeData => {
                console.log(computeData)
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
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="formContainer">
                <p className="bold">Please input the IDOC Number to determine if an individual is eligible for early release.</p>
                <div>
                <Grid container justify="center">
                    <Grid item>
                        <FormControlLabel
                            control={<TextField InputProps={{ style: { background: 'white', paddingLeft: 10 } }} name="IDOC_Number" inputRef={register({ required: true })} />}
                            label="IDOC Number: &nbsp;"
                            labelPlacement="start"
                            Props={{ style: { color: "white" } }}
                        />
                        {errors.IDOC_Number && <p className="error">IDOC Number is required.</p>}
                    </Grid>
                </Grid>
                <Grid container justify="center">
                    <Grid item>
                        <FormControlLabel
                            control={<Checkbox name="medical_furlough" inputRef={register} inputProps={{ 'aria-label': 'Checkbox A' }} />}
                            label={popup}
                            labelPlacement="start"
                        />
                    </Grid>
                </Grid>

                <div className="flexCenter">
                <Button type="submit" variant="contained">View Eligibility</Button>
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
                <div>
                    {/* <Link to={{
                        pathname: "/eligibility",
                        state: { computeData }
                    }}>
                    </Link> */}
                </div>

                {/* {loading && <div id="Loading">Loading...</div>} */}
                {/* <br />
                <br />
                {computeData != null &&
                    mechanisms
                }
                {computeData != null &&
                    <div>
                        <Link to={{
                            pathname: "/email",
                            state: { computeData }
                        }}>
                            <Button type="submit" variant="contained" color="primary">Draft Petition</Button>
                        </Link>
                    </div>
                } */}
                </div>
            </form>
        </div>
    );


}

export default EmailForm;