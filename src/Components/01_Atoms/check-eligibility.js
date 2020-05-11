import {get_idocData} from 'stub-idoc';


function check_eligibility(idocNum){
    let data = get_idocData(idocNum)
    let outcome;
    //outcome is an array of what this person may be eligible for

    //depends on release criteria which waiting on

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