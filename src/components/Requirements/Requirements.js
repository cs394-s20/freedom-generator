import React from 'react';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import '../../styles/styles.scss';

export default function Requirements() {
    return (
        <div className="reqContainer">
            <div className="FAQ">
                    <h1 className="marginTop">Before you Begin</h1>
                    <div className="FAQ__content">
                        <div className="questionContainer">
                            <p class="question">What you will need:</p>
                            <p class="answer">In order to determine your loved one’s eligibility, you need their IDOC number.</p>
                            <p class="answer">A strong request for home detention should include the following information:</p>
                            <ul>
                                <li>A picture of your loved one’s prison disciplinary history</li>
                                <li>Information about what your loved will do if they are released. Will they attend school? Take care of family members? Do they have a job to return to?</li>
                                <li>Information about how your loved one will support him or herself. Where will your loved one live? How will he or she pay for food and other expenses? </li>
                                <li>Any other information you think IDOC officials may need to fully understand why your loved one should return home. For example, is a family member sick? Does your loved one have young children to care for? Does your loved one live with addiction and/or mental illness that is better treated in his or her home community? </li>
                            </ul>
                            <p class="answer">You are not required to have all this information—but the more information you have the stronger your application will be.</p>
                        </div>
                        
                        <div className="questionContainer">
                            <p class="question">Disclaimers:</p>
                            <p class="answer">Under Illinois state law, certain people are eligible for home detention. The IDOC makes the final decision regarding who is eligible for home detention—and most people who are eligible for home detention are not released from prison. </p>
                            <p class="answer">The following people are eligible for home detention: </p>
                            <p class="answer">Under 730 ILCS 5/5-8A-3(d), <b>People over age 55 with 12 months or less</b> to serve who have served at least 25% of their sentenced prison term, and are serving a sentence for conviction of an offense other than for certain sex offenses. </p>
                            <p class="answer">Under 730 ILCS 5/5-8A-3(e), a <b>person of any age serving a sentence for conviction of a Class 2, 3, or 4</b> felony offense other than for certain sex offenses</p>
                        </div>

                        <div className="faqReference">
                            <p>Still unsure about the process, or have any questions before you begin? Don't worry: you can refer to our <a href="./faq">FAQs page</a>.</p>
                        </div>
                        <div className="getStarted">
                            <Link className="getStartedLink" to={{
                                    pathname: "/idoc"
                                }}>
                                    <Button className="button" variant="contained" color="primary">I'm Ready</Button>
                            </Link>
                        </div>
                    </div>
                </div>
        </div >
    );
}