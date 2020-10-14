export const registerUser = (item) => {
    console.log("payload",item);
    console.log("payload",JSON.stringify(item));
     const url="http://localhost:8080/post/customerInfoDetails";
    return fetch(`${url}`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept':"application/json"
          },
        mode:"cors",
        body: JSON.stringify(item)
    })
    .then((response)=>{ 
        console.log("response",response)
        return response;
    }).then((data)=>{
        return data;
    })
    .catch((err) => {
        return Promise.reject("Error Occured while Fetching Customers " + err);
    });
};
