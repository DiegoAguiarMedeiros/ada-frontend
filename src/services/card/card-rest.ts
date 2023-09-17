import HttpClient from "../http-client";

const getAllCards = () => HttpClient.get(`cards`);

export default {getAllCards};