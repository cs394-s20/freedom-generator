import React from 'react';

export default function ExampleEmail() {
    return (
        <div>
            <div className="ExampleEmail">
                <div className="ExampleEmailcontentBg">
                    <h1>Freedom Generator</h1>
                    <h5 class="instructions">Feel free to use this sample email to be sent to your warden. Don't know where to find the information needed in this email? Don't worry: you can refer to our <a href="./faq" style={{color: 'powderblue'}}>FAQs page</a>.</h5>
                    <div class="ExampleEmailcontent">
                        <h3>Example Email</h3>
                        <p>Dear [Warden],</p>
                        <div class="content">
                            <p>[Name of prisoner, IDOC #] is my [relation to writer], and is eligible for transfer to home detention pursuant to [statutory provision]. I am writing to urge you to place [name of prisoner] on home detention as soon as possible. [Name of prisoner] is an ideal candidate for home detention because [three reasons here related to institutional record, medical condition, family responsibilities].</p>  
                            <p>If [name of prisoner] is transferred to home detention, s/he can live with [insert name, relation to prisoner, phone number and address here].  [Name of prisoner] will receive support in the form of [assistance complying with parole requirements, groceries, job placement, assistance meeting medical needs] from the following individuals/entities [list support and contact information here].</p> 
                            <p>[Three Sentences here regarding how prisoner’s incarceration has affected family members and community and why/how prisoner will contribute positively to the community upon release. ]</p>
                            <p>If I can provide you with any further information about this request for transfer to home detention, please contact me at [insert email] or [insert phone number]. I will contact your office to set a time to discuss this request within the next week. </p>
                        </div>
                        <p>Thank you for your consideration.</p>
                        <p>[name of submitter]</p> 
                    </div>
                </div>
            </div>
        </div>
    );
}