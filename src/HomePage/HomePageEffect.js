
export const extractDataFromStorage = () => {
    return fetch("https://springbootbackendjava.herokuapp.com/getAll",{
        mode:"cors",
        headers:{
        },
    })
    .then(result =>
         result.json()
    ).then(data=>{
        return data})
    .catch((err) => {
        return Promise.reject("Error Occured while Fetching Customers " + err);
    })
}