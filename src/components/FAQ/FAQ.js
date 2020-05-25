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
                        <p class="question">Q:  What is an IDOC number?</p>
                        <p class="answer">Every prisoner in Illinois has a unique id called an IDOC number. You can find any prisoner's IDOC number on the <a href="https://www2.illinois.gov/idoc/Offender/pages/inmatesearch.aspx">illinois.gov</a> website.</p>
                        <p class="question">Q:  What is an IDOC number?</p>
                        <p class="answer">Every prisoner in Illinois has a unique id called an IDOC number. You can find any prisoner's IDOC number on the <a href="https://www2.illinois.gov/idoc/Offender/pages/inmatesearch.aspx">illinois.gov</a> website.</p>
                        <p class="question">Q:  What is an IDOC number?</p>
                        <p class="answer">Every prisoner in Illinois has a unique id called an IDOC number. You can find any prisoner's IDOC number on the <a href="https://www2.illinois.gov/idoc/Offender/pages/inmatesearch.aspx">illinois.gov</a> website.</p>
                        <p class="question">Q:  What is an IDOC number?</p>
                        <p class="answer">Every prisoner in Illinois has a unique id called an IDOC number. You can find any prisoner's IDOC number on the <a href="https://www2.illinois.gov/idoc/Offender/pages/inmatesearch.aspx">illinois.gov</a> website.</p>
                    </div>
                </div>
            </div>
        </div >
    );
}