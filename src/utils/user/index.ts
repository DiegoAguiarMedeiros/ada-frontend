import { LoginType, UserType } from "../../types";
import Storage from "../storage";

const getUser = async ():Promise<UserType> => {

    const retorno = await Storage.getUser(); 
    const retornObj = JSON.parse(retorno!)
    const user : UserType = {...retornObj };
    return user;

};

const getUserToken = () => Storage.getToken();

const setUserToken = (token:string) => {
  Storage.setToken(token);
};


const setUserData = (data:LoginType) => {
  setUserToken(data.token);
  Storage.setUser(data.user);
};


const clearUserSession = () => {
  Storage.dropStorage();
};

export default {
  getUser,
  getUserToken,
  clearUserSession,
  setUserData,
};