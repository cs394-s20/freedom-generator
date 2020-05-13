import {get_idocData} from './stub-idoc';

function age(data){
    var dob = JSON.stringify(data.dob);
    var parsedDOB = dob.split("/");
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var yrsOld = 0;
    
    if (month > parseInt(parsedDOB[0],10)) {
        yrsOld++;
    }
    else if (month === parseInt(parsedDOB[0], 10)){
        if (day>=parsedDOB[1]) {
            yrsOld++;
        }
    }
    yrsOld += year-parseInt(parsedDOB[2], 10);

    console.log("Age is " + yrsOld)
    return yrsOld;
}

function sentenceRemaining(data){
    var discharge = JSON.stringify(data.discharge_date);
    var parsedDischarge = discharge.split("/");
    var date = new Date();
    var day = date.getDay();
    var month = date.getMonth();
    var year = date.getFullYear();
    var yrsLeft = 0;
    
    if (month > parseInt(parsedDischarge[0],10)) yrsLeft--;
    else if (month === parseInt(parsedDischarge[0],10)){
        if (day>=parseInt(parsedDischarge[1],10)) {
            yrsLeft--;
        }
    }
    yrsLeft += Math.abs(year-parseInt(parsedDischarge[2],10));
    console.log("Years left: " + yrsLeft)
    return yrsLeft;
}

function sentenceServed(data){
    var start = JSON.stringify(data.sentence_date);
    var parsedStart = start.split("/");
    var date = new Date();
    var day = date.getDay();
    var month = date.getMonth();
    var year = date.getFullYear();
    var yrsServed = 0;
    
    if (month > parseInt(parsedStart[0],10)) yrsServed++;
    else if (month === parseInt(parsedStart[0],10)){
        if (day>=parseInt(parsedStart[1],10)) {
            yrsServed++;
        }
    }
    yrsServed += year-parseInt(parsedStart[2],10);
    console.log("Served " + yrsServed + " years")
    return yrsServed;
}

function sexCrime(data){
    var crime = JSON.stringify(data.holding_offense);
    var parsedCrime = crime.split(" ");
    var i;
    for (i = 0; i < parsedCrime.length; i++) {
        if (parsedCrime[i] === "SEX") {
            console.log("Is a sex offender")
            return true;
        }
    }
    console.log("Is NOT a sex offender")
    return false;
}

function crimeClass(data){
    var crime = JSON.stringify(data.crime_class);
    var parsedCrime = crime.split(" ");
    console.log("Crime class: " + parsedCrime[1])
    return parseInt(parsedCrime[1]);
}

function holdingOffense(data){
    var offense = JSON.stringify(data.holding_offense);
    var parsedCrime = offense.split(" ");
    var i;
    for (i = 0; i < parsedCrime.length; i++){
        var item = parsedCrime[i];
        if (item === "ABUSE" || item==="AGG" || item ==="ARMED" || item ==="ARSON" || item ==="ASSAULT" || item==="BATTERY" || item==="BURGLARY" || item==="CANNABIS" || item==="CRIM" || item==="DOM" || item==="ENDANGERED" || item==="FORCE" || item==="HARM" || item==="HATE" || item==="HOME" || item==="INJURE" || item==="INJURY" || item==="KIDNAP" || item==="KIDNAPING" || item==="KILL" || item==="MANSL" || item==="MANSLAUGHTER" || item==="MURDER" || item==="MUTILATION" || item==="RAPE" || item==="ROBBERY" || item==="SUBS" || item==="SUBSTANCE" || item==="WEAPON"){
            console.log("Violates holding offense")
            return false;
        }
    }
    console.log("Does not violate holding offenses")
    return true;
}

function check_eligibility(idocNum){
    console.log("Ran check_eligibility")
    let data = get_idocData(idocNum)
    if (data === "Invalid IDOC number input") return
    let outcome = [];
    //outcome is an array of what this person may be eligible for

    //release for medical furlough
    //NOT FINISHED: need to ask if the person has any pre-existing medical conditions through form - thinking should be checkboxes or strict guidlines on typing conditions
    // if (age(data) >= 65){
    //     //if have any of these medical conditions https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-at-higher-risk.html
    // }

    //release for home detention
    if (age(data) >= 55){
        if (sentenceRemaining(data)<=1){
            if (sentenceServed(data) >= 0.25*data.sentence_date){
                if (sexCrime(data) === false){
                    outcome.push(" Home Detention")
                }
            }
        }
    }

    //electronic monitoring or home detention program
    if (crimeClass(data) === 2 || crimeClass(data)===3 || crimeClass(data)===4){
        if (holdingOffense(data) === true){
            outcome.push(" Electric Monitoring");
            var i;
            for (i=0; i < outcome.length; i++){
                if (outcome[i] === ("Home Detention")) break;
            }
            if (i === outcome.length) {
                outcome.push(" Home Detention ");
            }
        }
    }

    //nothing to implement for 180 Days of Good Conduct
    console.log(outcome);
    return outcome;
};


function return_eligibility(idocNum){
    let data = get_idocData(idocNum);
    if (data === "Invalid IDOC number input") return
    let outcome = check_eligibility(idocNum);
    if (outcome.length === 0){
        outcome = "None"
    }

    return data.name + " may be eligible for: " + outcome;
};

export default return_eligibility;