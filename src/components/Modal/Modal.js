import React from 'react';
import './Modal.scss';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { useForm, Controller } from 'react-hook-form';

function Modal(props) {
    var name = props.data.name;




    let emailContent = "Dear " + props.data.wardenName + "\n\n" + props.data.idocData.name + ", " + props.data.idocData["IDOC_Number"] + ", is my " + props.data.relation +
        ", and is eligible for transfer to home detention pursuant to {statutory provision variable}. " +
        " I am writing to urge you to place " + props.data.idocData.name + " on home detention as soon as possible. " +
        props.data.idocData.name + " is an ideal candidate for home detention because " + props.data.reasonsWhy + "\n\n If " +
        props.data.idocData.name + " is transferred to home detention, s/he can live with " + props.data.personName + ", " + props.data.relation +
        props.data.contactInfo + ", " + props.data.idocData.name + " will receive support in the form of " + "Assistance complying with parole requirements, Groceries, Job placement, Assistance meeting medical needs" +
        " from the following individuals/entities " + props.data.supportContactInfo + ". \n\n" + props.data.community + "\n" +
        "\n\nIf I can provide you with any further information about this request for transfer to home detention, please contact me at " +
        props.data.contactInfo + ". I will contact your office to set a time to discuss this request within the next week. \n\n" +
        "Thank you for your consideration. \n\n" + props.data.personName;

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data.emailContent)
        
    }

    return (
        // <div className="modal">
        //     <div className="modal__close">
        //         <span className="x" onClick={()=>props.setModalOpen(false)}>x</span>
        //     </div>
        //     <p><strong>To:</strong> idoc@idoc.com</p>
        //     <p><strong>From: </strong> {props.data.emailAddress}</p>
        //     <p><strong>Shelter: </strong>{props.data.shelter}</p>
        //     <p><strong>Relationship: </strong>{props.data.relationship}</p>
        //     <p><strong>Character: </strong>{props.data.character}</p>
        //     <br/>
        //     <br/>
        //     <Button variant="contained" color="secondary" className="export-button">Export</Button>
        // </div>

        <div className="modal">
            <div className="modal__close">
                <span className="x" onClick={() => props.setModalOpen(false)}>x</span>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="title">Email Draft</div>
                <TextField
                    id="previewEmailTextField"
                    multiline
                    variant="outlined"
                    rows={13}
                    defaultValue={emailContent}
                    name="emailContent"
                    fullWidth
                    inputRef={register({
                        required: true
                      })}
                />
                <br />
                <br />
                <Button type="submit" variant="contained" color="secondary" className="export-button">Export</Button>
            </form>
        </div>
    )
}

export default Modal;