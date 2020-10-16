import BrowserService from "../BrowserService"
export const loginToStorage = (item) => {
     const url="http://localhost:8080/login";
    return fetch(`${url}`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept':"application/json"
          },
        mode:"cors",
        credentials:"include",
        body: JSON.stringify(item)
    })
    .then((response)=>{ 
        for (var pair of response.headers.entries()) { 
            if (pair[0] === 'token'){
                BrowserService.setLocalStorageValue("token",pair[1])
            }
        }
        return response.text();
    }).then((data)=>{
        BrowserService.setLocalStorageValue("user",data)
        return data;
    })
    .catch((err) => {
        return Promise.reject("Error Occured while Fetching Customers " + err);
    });
};