import ExcludedOffenses from "./excluded_offenses";

function getRidofQuote(str){
    var i;
    var fixed = "";
    for (i=0;i<str.length;i++){
        if (str[i] === '"'){
        }
        else{
            fixed += str[i]
        }
    }
    return fixed;
}

function age(data){
    var dob = JSON.stringify(data.dob);
    var parsedDOB = dob.split("/");
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var yrsOld = 0;
    
    if (month > parseInt(getRidofQuote(parsedDOB[0]),10)) {
        yrsOld++;
    }
    else if (month === parseInt(getRidofQuote(parsedDOB[0]), 10)){
        if (day>=parsedDOB[1]) {
            yrsOld++;
        }
    }
    yrsOld += year-parseInt(parsedDOB[2], 10);

    return yrsOld;
}

function sentenceRemaining(data){
    var discharge = JSON.stringify(data.discharge_date);
    var parsedDischarge = discharge.split("/");
    var date = new Date();
    var month = date.getMonth()+1;
    var year = date.getFullYear();
    var yrsLeft = 0;
    var months = 0;
    
    if (month > parseInt(getRidofQuote(parsedDischarge[0]),10)) {
        months = month - parseInt(getRidofQuote(parsedDischarge[0]),10); 
        yrsLeft--;
    }
    else if (month < parseInt(getRidofQuote(parsedDischarge[0]),10)){
        months = 12-month + parseInt(getRidofQuote(parsedDischarge[0]),10);
        yrsLeft--;
    }
    else if (month === parseInt(getRidofQuote(parsedDischarge[0]),10)){
        yrsLeft--;
        months = 11;
    }
    yrsLeft += Math.abs(year-parseInt(parsedDischarge[2],10)) + months/12 ;
    return yrsLeft;
}

function sentenceServed(data){
    var start = JSON.stringify(data.custody_date);
    var parsedStart = start.split("/");
    var date = new Date();
    var month = date.getMonth()+1;
    var year = date.getFullYear();
    var yrsServed = 0;
    var monthsServed = 0;
    
    if (month > parseInt(getRidofQuote(parsedStart[0]),10)) {
        monthsServed = month-parseInt(getRidofQuote(parsedStart[0]),10);
    }
    else if (month < parseInt(getRidofQuote(parsedStart[0]),10)){
        yrsServed--;
        monthsServed = 12-month+parseInt(getRidofQuote(parsedStart[0]),10);   
    }
    yrsServed += year-parseInt(parsedStart[2],10) + monthsServed/12;
    return yrsServed;
}

function crimeClass(data){
    var crime = JSON.stringify(data.crime_class);
    var parsedCrime = crime.split(" ");
    return parseInt(parsedCrime[1]);
}

export default class ConditionChecker {
    
    static isOver55(data) {
        var out = {
            passed: false,
            text: 'Over 55 years of age'
        }
        if (age(data) > 55) {
            out.passed = true;
        }
        return out;
    }
    static sentenceLessThanYear(data) {
        var out = {
            passed: false,
            text: 'Less than 12 months left on sentence'
        }
        if (sentenceRemaining(data) < 1) {
            out.passed = true;
        }
        return out;
    }
    static oneQuarterServed(data) {
        var out = {
            passed: false,
            text: 'Served at least 25% of prison term'
        }
        if (sentenceServed(data) >= 0.25*(data.sentence_years + data.sentence_months/12)) {
            out.passed = true;
        }
        return out;
    }
    static isNotExcludedOffense(data) {
        var out = {
            passed: true,
            text: 'Is not an excluded offense'
        }
        // Write code to check against new guidelines here
        out.passed=!ExcludedOffenses.isExcluded(data);
        console.log(out.passed)
        return out;
    }
    static convictedOfClassOffense(data) {
        var out = {
            passed: false,
            text: 'Convicted of Class 2, 3, or 4 felony offense'
        }
        if (crimeClass(data) === 2 || crimeClass(data)===3 || crimeClass(data)===4) {
            out.passed = true;
        }
        return out;
    }
    static eligibleForMedicalFurlough(data) {
        var out = {
            passed: data.highRisk,
            text: 'At a high risk for illness'
        }
        return out;
    }



}
