import {get_idocData} from 'stub-idoc';

function age(data){
    var dob = data.dob;
    var parsedDOB = dob.split("/");
    var date = new Date();
    var day = date.getDay();
    var month = date.getMonth();
    var year = date.getFullYear();
    var yrsOld = 0;
    
    
    if (month > parsedDOB[0]) yrsOld++;
    else if (month = parsedDOB[0]){
        if (day>=parsedDOB[1]) yrsOld++;
    }
    yrsOld += year-parsedDOB[2];
    return yrsOld;
}

function sentenceRemaining(data){
    var discharge = data.discharge_date;
    var parsedDischarge = discharge.split("/");
    var date = new Date();
    var day = date.getDay();
    var month = date.getMonth();
    var year = date.getFullYear();
    var yrsLeft = 0;
    
    
    if (month > parsedDischarge[0]) yrsLeft++;
    else if (month = parsedDischarge[0]){
        if (day>=parsedDischarge[1]) yrsLeft++;
    }
    yrsLeft += year-parsedDischarge[2];
    return yrsLeft;
}

function sentenceServed(data){
    var start = data.sentence_date;
    var parsedStart = start.split("/");
    var date = new Date();
    var day = date.getDay();
    var month = date.getMonth();
    var year = date.getFullYear();
    var yrsServed = 0;
    
    
    if (month > parsedStart[0]) yrsServed++;
    else if (month = parsedStart[0]){
        if (day>=parsedStart[1]) yrsServed++;
    }
    yrsServed += year-parsedStart[2];
    return yrsServed;
}

function sexCrime(data){
    var crime = data.holding_offense;
    var parsedCrime = crime.split(" ");
    for (i = 0; i < parsedCrime.length; i++) {
        if (parsedCrime[i] == "SEX") return true
    }
    return false;
}

function crimeClass(data){
    var crime = data.crime_class;
    var parsedCrime = crime.split(" ");
    return parsedCrime[1];
}

function holdingOffense(data){
    var offense = data.holding_offense;
    var parsedCrime = offense.split(" ");
    for (i = 0; i < parsedCrime.length; i++){
        item = parsedCrime[i];
        if (item== "ABUSE" || item=="AGG" || item =="ARMED" || item =="ARSON" || item =="ASSAULT" || item=="BATTERY" || item=="BURGLARY" || item=="CANNABIS" || item=="CRIM" || item=="DOM" || item=="ENDANGERED" || item=="FORCE" || item=="HARM" || item=="HATE" || item=="HOME" || item=="INJURE" || item=="INJURY" || item=="KIDNAP" || item=="KIDNAPING" || item=="KILL" || item=="MANSL" || item=="MANSLAUGHTER" || item=="MURDER" || item=="MUTILATION" || item=="RAPE" || item=="ROBBERY" || item=="SUBS" || item=="SUBSTANCE" || item=="WEAPON"){
            return false;
        }
    }
    return true;
}

function check_eligibility(idocNum){
    let data = get_idocData(idocNum)
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
                if (sexCrime(data) == false){
                    outcome.push("Home Detention")
                }
            }
        }
    }

    //electronic monitoring or home detention program
    if (crimeClass(data) == 2 || crimeClass(data)==3 || crimeClass(data)==4){
        if (holdingOffense(data) == true){
            outcome.push("Electric Monitoring");
            for (i=0; i < outcome.length; i++){
                if (outcome[i] == ("Home Detention")) return
            }
            outcome.push("Home Detention")
        }
    }

    //nothing to implement for 180 Days of Good Conduct

    return outcome;
};

function format_eligibility(outcome){
    var i = 0;
    while (i < outcome.length) {
        print(outcome[i])
        i ++;
    }
};

function return_eligibility(idocNum){
    let data = get_idocData(idocNum);
    let outcome = check_eligibility(idocNum);
    return data.name + "may be eligible for:" + format_eligibility(outcome);
};

export default return_eligibility;