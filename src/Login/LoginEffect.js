export const loginToStorage = (item) => {
    console.log(item);
     const url="http://localhost:8080/login";
    return fetch(`${url}`,{
        method: 'POST',
        headers: {
            // 'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        mode:"cors",
        body: JSON.stringify(item)
    })
    // .then((result) => {
    .then((Response)=>{ 
        let value="";
        for (var pair of Response.headers.entries()) { 
            if (pair[0] === 'response'){
                value=pair[1];
            }
        }
        let response=response.json();
        return {response,pair}
    }).catch((err) => {
        console.log("err",err)
        return Promise.reject("Error Occured while Fetching Customers " + err);
    });
};