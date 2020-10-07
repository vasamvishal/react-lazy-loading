import {array} from "../Component/Def";
// const url="http://localhost:8080/getAll";
export const extractDataFromStorage = () => {
    // return fetch(`${url}`)
    // .then((result) => {
    //     console.log("result",result);
    //     return result;
    // }).catch((err) => {
    //     return Promise.reject("Error Occured while Fetching Customers " + err);
    // });
    return array;
}
export const searchBooksForData = (payload) => {
    console.log("DDDD",array.title);
    array.map((images)=>{
        return(images.title.toLowerCase.includes(payload));
    })
}