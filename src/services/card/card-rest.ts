import { CardType } from "../../types";
import HttpClient from "../http-client";

const getAllCards = () => HttpClient.get(`cards`);

const editCard = (cardId:string,card:CardType) => HttpClient.put(`cards/${cardId}`,card);

export default {getAllCards,editCard};