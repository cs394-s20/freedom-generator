function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    console.log(xmlHttp)
    return xmlHttp.responseText;
}




export function get_idocData(idocNum){
    return JSON.parse(httpGet(process.env.REACT_APP_API_URL + "?idoc=" + idocNum));
    let data;

    switch (idocNum) {
        case "A00147":
            data = {
                name: "MCCUTCHEON, JOHN",
                dob: new Date("6/14/1949"),
                sex: "Male",
                race: "White",
                veteran_status: true,
                admission_date: new Date("2/16/1983"),
                admission_type: "Discharged & recommitted",
                parent_institution: "Dixon",
                msr_date: new Date("10/6/2033"),
                discharge_date: new Date("10/6/2036"),
                custody_date: new Date("11/26/1982"),
                sentence_date: new Date("2/15/1983"),
                crime_class: "Class X",
                holding_offense: "ATTEMPT MURDER/INTENT TO KILL/INJURE",
                sentence_years: 50,
                sentence_months: 0,
                tis: "day-for-day",
                county: "Jasper"
            }
            break;

        case "A00367":
            data = {
                name: "GARVIN, RAYMOND",
                dob: new Date("1/12/1954"),
                sex: "Male",
                race: "Black",
                veteran_status: false,
                admission_date: new Date("1/21/2020"),
                admission_type: "Return additional mittimus",
                parent_institution: "Jacksonville",
                msr_date: new Date("5/20/2020"),
                discharge_date: new Date("5/20/2021"),
                custody_date: new Date("5/20/2019"),
                sentence_date: new Date("1/16/2020"),
                crime_class: "Class 3",
                holding_offense: "RET THEFT/DISP MERCH/>$300",
                sentence_years: 2,
                sentence_months: 0,
                tis: "day-for-day",
                county: "Cook"
            }
            break;

        case "A01054":
            data = {
                name: "TIPTON, DARNELL",
                dob: new Date("3/25/1954"),
                sex: "Male",
                race: "Black",
                veteran_status: false,
                admission_date: new Date("12/23/1988"),
                admission_type: "Parole violator, New sentence",
                parent_institution: "Western Illinois",
                msr_date: new Date("8/14/2065"),
                discharge_date: new Date("8/14/2068"),
                custody_date: new Date("9/29/1986"),
                sentence_date: new Date("8/7/1987"),
                crime_class: "Class X",
                holding_offense: "AGG CRIM SEX ASSAULT/WEAPON",
                sentence_years: 60,
                sentence_months: 0,
                tis: "day-for-day",
                county: "Cook"
            }
            break;
            
        default:
            data = "Invalid IDOC number input"
    }
    return data;
}