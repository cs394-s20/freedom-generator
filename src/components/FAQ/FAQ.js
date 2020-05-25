import React from 'react';
import { Grid } from '@material-ui/core';

export default function FAQ() {
    return (
        <div>
            <div className="FAQ">
                <div className="FAQcontentBg">
                    <h1>Freedom Generator</h1>
                    <div class="FAQcontent">
                        <h2>FAQ</h2>
                        {/* <Grid container direction="column" alignItems="flex-start" justify="flex-start">
                            <Grid item style={{fontWeight: "bold"}}>Question</Grid>
                            <br />
                            <Grid item >Answer</Grid>
                        </Grid> */}
                        <p style={{fontWeight: "bold"}}>Question</p>
                        <p>Answer</p>
                    </div>
                </div>
            </div>
        </div >
    );
}