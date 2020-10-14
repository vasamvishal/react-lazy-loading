import BrowserService from "../BrowserService";
import jwt_decode from "jwt-decode";

export const postCartDetails = (payload) => {
    console.log(payload);
    const url = "http://localhost:8080/post/cart";
    const token = BrowserService.getLocalStorageValue("token");
    var decoded = jwt_decode(token);
    let phoneNumber = decoded.sub;
    console.log(phoneNumber);
    // let noOfBooks = payload.value;
    const data = Object.assign(payload.item, payload.noOfBooks, { phoneNumber })
    return fetch(`${url}`, {
        method: 'POST',
        mode: "cors",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(data)
    })
        .then((response) => {
            return response.json()
        }).then((data) => {
            console.log(data);
            return data
        }).catch((err) => {
            console.log("err", err)
            return Promise.reject("Error Occured while Fetching Customers " + err);
        });
}