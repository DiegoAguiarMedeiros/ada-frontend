import { CardType } from "../../types";
import HttpClient from "../http-client";

const getAllCards = () => HttpClient.get(`cards`);

const addCard = (card:CardType) => HttpClient.post(`cards`,card);

const editCard = (cardId:string,card:CardType) => HttpClient.put(`cards/${cardId}`,card);

const deleteCard = (cardId:string) => HttpClient.delete(`cards/${cardId}`);

export default {getAllCards,addCard,editCard,deleteCard};