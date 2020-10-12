// import {array} from "../Component/Def";
// const array=[];
export const extractDataFromStorage = () => {
    return fetch("http://localhost:8080/getAll",{
        mode:"cors",
        headers:{
            'Access-Control-Allow-Origin':'*'
        },
    })
    .then(result =>
         result.json()
    ).then(data=>{return data})
    .catch((err) => {
        return Promise.reject("Error Occured while Fetching Customers " + err);
    })
}