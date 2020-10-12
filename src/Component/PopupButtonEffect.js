import BrowserService from "../BrowserService";
export const logout=()=>{
    BrowserService.deleteLocalStorageItem("token");
    BrowserService.deleteLocalStorageItem("selectedBook");
    BrowserService.changeLocation("/home")
}