import React, { useState } from 'react';
import './Modal.scss';
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { gapi }  from 'gapi-script';
import { Base64 }  from 'js-base64'

const CLIENT_ID = '599434271054-0r34mipsobtakroniq4brsr99a6tlrls.apps.googleusercontent.com';
const API_KEY = 'AIzaSyA1eRqEnxINz0ZwtqPVpkiHp7Phds54G5Y';
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"];
const SCOPES = 'https://www.googleapis.com/auth/gmail.compose';

function createEmail(to, from, subject, message) {
    let email = ["Content-Type: text/plain; charset=\"UTF-8\"\n",
      "MIME-Version: 1.0\n",
      "Content-Transfer-Encoding: 7bit\n",
      "to: ", to, "\n",
      "from: ", from, "\n",
      "subject: ", subject, "\n\n",
      message
    ].join('');
  
    return Base64.encodeURI(email);
}

function loadClient() {
    gapi.load('client:auth2', initClient);
}

function initClient(){
    gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES
      }).then(function () {
        // Listen for sign-in state changes.
        console.log("Google API initialized");
      }, function(error) {
        console.log("error initializing api");
      });
}
loadClient();

function Modal(props){

    const [isSignedIn, setIsSignedIn] = useState(false);
    // add by Zhu
    const [sendEmailConfirmationOpen, setSendEmailConfirmationOpen] = useState(false);
    console.log(isSignedIn);
    function signIn() {
        gapi.auth2.getAuthInstance().isSignedIn.listen(setIsSignedIn);
        if (gapi.auth2.getAuthInstance().isSignedIn.get()){
            setIsSignedIn(true);
        } else {
            gapi.auth2.getAuthInstance().signIn()
        }
        
    }
    function exportDraft(){
        const userId = gapi.auth2.getAuthInstance().currentUser.get().getId();

        gapi.client.gmail.users.getProfile({'userId': userId}).execute((response) => {
            var request = gapi.client.gmail.users.drafts.create({
                'userId': userId,
                'resource': {
                    'message': {
                        'raw': createEmail(
                            response.emailAddress, 
                            response.emailAddress, 
                            "IDOC Petition", 
                            emailContent
                        )
                    }
                }
            });
            request.execute((response) => {
                gapi.auth2.getAuthInstance().signOut();
            })
        })
        
    }

    function handleSendEmailConfirmationOpen() {
        setSendEmailConfirmationOpen(true);
    }

    function handleSendEmailConfirmationProceed() {
        // send email here
        setSendEmailConfirmationOpen(false);
    }

    function handleSendEmailConfirmationCancel() {
        // cancel
        setSendEmailConfirmationOpen(false);
    }

    var parole = props.data.parole ? "Assistance complying with parole requirements" : null;
    var checkboxContent = "";
    var nameArr = props.data.idocData.name.split(', ');
    var inmateName = nameArr[1] + " " + nameArr[0];

    checkboxContent += parole + (props.data.groceries ? ", groceries" : "") + (props.data.job ? ", job placement" : "") + (props.data.medical ? ", assistance meeting medical needs" : "");

    let emailContent = "Dear " + props.data.wardenName + "\n\n" +  inmateName + " (" + props.data.idocData["idocNumber"] + ") is my " + props.data.relation + 
    " and is eligible for transfer to home detention pursuant to " + props.data.statuteNumber + "." + 
    " I am writing to urge you to place " + inmateName + " on home detention as soon as possible. " + 
    inmateName + " is an ideal candidate for home detention because " + props.data.reason1 + ", " + props.data.reason2 + ", and " + props.data.reason3 + "." + "\n\nIf " +
    inmateName + " is transferred to home detention, they can live with " + props.data.liveWith + ", " + props.data.relationLiveWith + ", " +
    props.data.phoneLiveWith + ", " + props.data.addressLiveWith + ". " + inmateName + " will receive support in the form of " + checkboxContent +
    " from the following individuals/entities: " + props.data.supportAndContact + ". \n\n" + props.data.threeSentences +
    "\n\nIf I can provide you with any further information about this request for transfer to home detention, please contact me at " +
    props.data.email + " or " + props.data.phone + ". I will contact your office to set a time to discuss this request within the next week. \n\n" +
    "Thank you for your consideration. \n\n" + props.data.submitter;
    
    
    
    

    return(
        <div className="modal">
            <div className="modal__close">
                <span className="x" onClick={()=>props.setModalOpen(false)}>x</span>
            </div>
            <div className="title">Email Draft</div>
            <TextField
                id="previewEmailTextField"
                multiline
                variant="outlined"
                rows={13}
                defaultValue={emailContent}
                fullWidth
            />
            <br />
            <br />
            {!isSignedIn && <Button id="sign-in" variant="contained" color="secondary" className="export-button" onClick={signIn}>Sign in to Google</Button>}
            {isSignedIn && <Button id="export-button" variant="contained" color="secondary" className="export-button" onClick={exportDraft}>Export</Button> }
            {" "}
            {isSignedIn && <Button id="send-button" variant="contained" color="secondary" className="export-button" onClick={handleSendEmailConfirmationOpen}>Send</Button>}
            <Dialog open={sendEmailConfirmationOpen} onClose={handleSendEmailConfirmationOpen} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">{"Send Email Conformation"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        This email will be sent to the warden. Do you want to proceed?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleSendEmailConfirmationCancel} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleSendEmailConfirmationProceed} color="primary" autoFocus>
                    Proceed
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Modal;