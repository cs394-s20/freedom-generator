export function get_idocData(idocNum){
    return fetch(process.env.REACT_APP_API_URL + "?idoc=" + idocNum);
}