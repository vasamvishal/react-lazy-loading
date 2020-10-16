import BrowserService from "../BrowserService";

export const logout = () => {
    BrowserService.deleteLocalStorageItem("token");
    BrowserService.deleteLocalStorageItem("user");
    BrowserService.deleteLocalStorageItem("selectedBook");
    BrowserService.changeLocation("/home")
}