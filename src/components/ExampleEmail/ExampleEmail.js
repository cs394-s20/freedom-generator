import React from 'react';
import '../../styles/styles.scss';

export default function ExampleEmail() {
    return (
        <div className="ExampleEmail">
            <h1 className="marginTop">Freedom Link</h1>
            <h2>Feel free to use this sample email to be sent to your warden. Don't know where to find the information needed in this email? Don't worry: you can refer to our <a href="./faq">FAQs page</a>.</h2>
            <div class="ExampleEmail__content">
                <p>Dear IDOC officials,</p>
                <div class="content">
                    <p>John Doe, IDOC # 111111 is my son. He is eligible for transfer to home detention pursuant to 730 ILCS 5/5-8A-3(e), because he was convicted of possession of a controlled substance. I am writing to urge you to place ohn on homedetention as soon as possible.</p>
                    <p>John is an ideal candidate for home detention because he has strong family support, he has used his time in custody productively and he is very motivated to make positive choices and help support his family. While John was in jail awaiting sentencing, he sought out GED classes and continued his studies through correspondence classes in the IDOC.  He is very devotedto his six year old son and wants to work as welder when he returns home.</p>
                    <p>If John is transferred to home detention, s/he can live with his mother,Jane Doe at 123 Freedom Lane, Chicago, IL 60606, 773-773-7333. John’s family will provide him with transportation to his GED classes, assistance complying with requirements of his mandatory supervised as well as housing and groceries.</p>
                    <p>John’s family and especially his son have been deeply affected by his absence during this time. John has always been an involved father—and his son misses playing basketball with his dad and reading with him in the evenings. The community college in John’s neighborhood offers a welding program and the program begins in early July. John meets the program’s eligibility requirements and would like to begin the program at that time. </p>
                    <p>If I can provide you with any further information about this request for transfer to home detention, please contact me at myname@gmail.com or773-773-7333 I will contact your office to set a time to discuss this request within the next week.  </p>
                    <p>Thank you for your consideration.</p>
                    <p>[name of submitter]</p>
                </div>
            </div>
        </div>
    );
}