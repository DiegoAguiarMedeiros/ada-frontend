import { UserDataType } from "../../types";
import HttpClient from "../http-client";

const login = (data:UserDataType) => HttpClient.post(`login`,data);

export default {login};