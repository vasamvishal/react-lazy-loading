import BrowserService from "../BrowserService";
import jwt_decode from "jwt-decode";


export const extractGetCartDetails = () => {
    const token = BrowserService.getLocalStorageValue("token");
    var decoded = jwt_decode(token);
    let phoneNumber = decoded.sub;
    const url = `http://localhost:8080/getCartDetails/${phoneNumber}`;
    return fetch(`${url}`, {
        mode: "cors",
        headers: {
            'Accept': 'application/json',
        },
    })
        .then((response) => {
            return response.json()
        }).then((data) => {
            return data
        }).catch((err) => {
            console.log("err", err)
            return Promise.reject("Error Occured while Fetching Customers " + err);
        });
}

export const cancelOrder = (payload) => {
    const token = BrowserService.getLocalStorageValue("token");
    var decoded = jwt_decode(token);
    let phoneNumber = decoded.sub;
    const url = `http://localhost:8080/delete/${phoneNumber}/${payload._id}`;
    return fetch(`${url}`, {
        mode: "cors",
        method: 'DELETE'
    })
        .then((response) => {
            return response;
        }).catch((err) => {
            console.log("err", err)
            return Promise.reject("Error Occured while Fetching Customers " + err);
        });

}


