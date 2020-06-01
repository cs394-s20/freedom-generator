import React from 'react';
import { Grid } from '@material-ui/core';
import '../../styles/styles.scss';

export default function FAQ() {
    return (
        <div>
            <div className="FAQ">
                    <h1 className="marginTop">Frequently Asked Questions</h1>
                    <div className="FAQ__content">
                        <div className="questionContainer">
                            <p class="question">Q:  What is Freedom Link?</p>
                            <p class="answer">Freedom Link connects people with loved ones in the custody of the Illinois Department of Corrections with information and access regarding Illinois Home Detention Program. Freedom Link will help you: 1) determine if your loved one is eligible for home detention; 2) draft a Request for Home Detention; and 3) distribute the request to the appropriate IDOC officials’ email. </p>
                            <p class="answer">Freedom Link is a joint project between Northwestern computer science students and The Community Justice and Civil Rights Clinic at the Northwestern Pritzker School of Law, the Illinois Prison Project </p>
                        </div>
                        <div className="questionContainer">
                            <p class="question">Q:  What is Illinois Home Detention Program</p>
                            <p class="answer">Under Illinois state law, certain people are eligible for home detention. The IDOC makes the final decision regarding who is eligible for home detention—and most people who are eligible for home detention are not released from prison. </p>
                            <p class="answer">The following people are eligible for home detention: </p>
                            <p class="answer">Under 730 ILCS 5/5-8A-3(d), <b>People over age 55 with 12 months or less</b> to serve who have served at least 25% of their sentenced prison term, and are serving a sentence for conviction of an offense other than for certain sex offenses. </p>
                            <p class="answer">Under 730 ILCS 5/5-8A-3(e), a <b>person of any age serving a sentence for conviction of a Class 2, 3, or 4</b> felony offense other than for certain sex offenses</p>
                        </div>
                        <div className="questionContainer">
                            <p class="question">Q:  How can someone apply for home detention?</p>
                            <p class="answer">At this point, there is no official application. Though Freedom Link, you can make IDOC officials aware that your loved one is eligible for this program and explain why your loved one should come home. </p>
                        </div>
                        <div className="questionContainer">
                            <p class="question">Q:  What information do I need to use Freedom Link? </p>
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
                            <p class="question">Q:  What happens after I submit a request for Home Detention through Freedom Link?</p>
                            <p class="answer">A request for home detention does not mean that the IDOC will grant your request. Once your request is submitted IDOC should consider it and respond back directly to you and your loved one.</p>
                        </div>
                        <div className="questionContainer">
                            <p class="question">Q:  What is the difference between clemency, commutation and home detention?</p>
                            <p class="answer">Clemency is the power of the Governor to change a criminal conviction or criminal sentence imposed by a court. Commutation is a type of clemency, specifically the modification of a sentence. If someone’s sentence is commuted, that means that it is changed, often to “time served” so that the person can be released.</p>
                            <p class="answer">Home detention is a transfer of an individual from a prison to their home to serve out the remainder of their sentence. They remain subject to rules and restrictions (including electronic monitoring) set by IDOC.</p>
                        </div>
                    </div>
                </div>
        </div >
    );
}