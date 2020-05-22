function pred_crim_sexual_assault(data){
    var offense = JSON.stringify(data.holding_offense);
    console.log("offense")
    console.log(offense)
    var n = offense.search(/((PRED.*|AGG.*|)CRIM.* SEX.*)|(ESC\W)|((?!ATT).*BATT.*\/FIREARM)|(POSSESS.*(HANDGUN|FIREARM))|(DRUG.*CONSP)/i);
    console.log(n);
    return n >= 0;
}

function murder(data){
    var crimeclass = data.crime_class
    console.log("Crime class: ");
    console.log(crimeclass);
    if (crimeclass==="Class M"){
        return true;
    }
    else return false;
}





export default class ExcludedOffenses{
    static isExcluded(data){
       return pred_crim_sexual_assault(data) || murder(data);
    }
};