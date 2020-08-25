import {array} from "../Component/Def";

export const extractDataFromStorage = () => {
    return array;
}
export const searchBooksForData = (payload) => {
    console.log("DDDD",array.title);
    array.map((images)=>{
        return(images.title.toLowerCase.includes(payload));
    })
}