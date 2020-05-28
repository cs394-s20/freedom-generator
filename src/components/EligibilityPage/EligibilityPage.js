import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ReleaseMechanismButton from '../ReleaseMechanismButton';
import Tabs from '../Tabs/Tabs';
import { Button, Grid, Typography, Switch, Select, MenuItem, Checkbox } from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';
import { Redirect } from 'react-router-dom';





function EligibilityPage(props) {

    let location = useLocation();

    var computeData = location.state.computeData;
    const { register, handleSubmit, errors, control } = useForm();
    var [statuteNumber, setStatuteNumber] = useState(null);

    const onSubmit = data => {
        console.log(data);
        setStatuteNumber(data);
    }

    return (
        <div>
            <Tabs computeData={computeData} />
            <form onSubmit={handleSubmit(onSubmit)}>
                {computeData.data.map((rm, index) => {
                    return (
                        // <ReleaseMechanismButton key={index} isPassed={rm.passed} conditions={rm.conditions} description={rm.text} />
                        <div>
                            {rm.text}
                            <Checkbox id={index} name={index} inputRef={register} disabled={!rm.passed}></Checkbox>
                        </div>
                    )
                })}


                <Button type="submit" variant="contained" color="primary">Draft Email</Button>
                {statuteNumber != null &&
                    <Redirect
                        push
                        to={{
                            pathname: "/email",
                            state: {
                                computeData: computeData,
                                statuteNumber: statuteNumber
                            }
                        }}
                    />
                }

            </form>
        </div>
    )

}

export default EligibilityPage;