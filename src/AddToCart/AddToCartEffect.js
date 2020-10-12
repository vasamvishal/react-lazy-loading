import BrowserService from "../BrowserService";

export const extractGetCartDetails=()=>{
    const token=BrowserService.getLocalStorageValue("token");
    if(token !==undefined){
    const url="http://localhost:8080/getCartDetails/74";
    return fetch(`${url}`,{
        mode:"cors",
        headers:{
            'Accept' : 'application/json',
        },
    })
    .then((response)=>{ 
        return response.json()
    }).then((data)=>{
            return data
    }).catch((err) => {
        console.log("err",err)
        return Promise.reject("Error Occured while Fetching Customers " + err);
    });
 }
}

export const cancelOrder=(payload)=>{
    console.log("EDEDEd");
    console.log(payload);
    // const token=BrowserService.getLocalStorageValue("token");
    // if(token !==undefined){
    const url="http://localhost:8080/delete/`${payload.phoneNumber}`/${payload._id}";
    console.log(url);
    return fetch(`${url}`,{
        mode:"cors",
        method: 'DELETE',
        // headers:{
        //     'Content-Type': 'application/json',
        // }
    })
    .then((response)=>{ 
        return response.json()
    }).then((data)=>{
        console.log(data)
            return data
    }).catch((err) => {
        console.log("err",err)
        return Promise.reject("Error Occured while Fetching Customers " + err);
    });
}


