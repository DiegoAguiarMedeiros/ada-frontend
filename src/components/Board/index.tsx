
import { CardType } from "../../types";
import Lane from "./Lane";
import * as Styled from "./styles";
import cardRest from '../../services/card/card-rest';
import { useEffect, useState } from "react";
import AddCard from "./AddCard";
    

const Board = () => {

  const [dados,setDados] = useState<CardType[]>([]);

  const [skeleton,setSkeleton] = useState(true);

  const loadCards = async () => {
    const cards = await cardRest.getAllCards();
    setDados(cards.data)

  }


  const handleAddCards = (card:CardType)=>{
    cardRest.addCard(card).then(()=>loadCards().then())
  }
  const handleEditCards = (cardId:string,card:CardType)=>{
    cardRest.editCard(cardId,card).then(()=>loadCards().then())
  }
  const handleDeleteCards = (cardId:string)=>{
    cardRest.deleteCard(cardId).then(()=>loadCards().then())
  }

  useEffect(()=>{
    loadCards().then();
  },[])

  useEffect(()=>{
    setSkeleton(false);
  },[dados])

    return (
        <Styled.Container>
            <Lane background="#59B4D1" color="#fff" handleEditCards={handleEditCards} handleDeleteCards={handleDeleteCards} cards={dados.filter((dado) => dado.lista === 'To Do')} skeleton={skeleton}>
             <p>To Do</p> 
             <AddCard handleAddCards={handleAddCards} coluna="To Do"/>
            </Lane>
            <Lane  background="#D0935A" color="#fff" handleEditCards={handleEditCards} handleDeleteCards={handleDeleteCards}   cards={dados.filter((dado) => dado.lista === 'Doing')}  skeleton={skeleton}>
            <p>Doing</p> 
             <AddCard handleAddCards={handleAddCards} coluna="Doing"/>
            </Lane>
            <Lane  background="#945AD1" color="#fff" handleEditCards={handleEditCards} handleDeleteCards={handleDeleteCards}   cards={dados.filter((dado) => dado.lista === 'Done')}  skeleton={skeleton}>
            <p>Done</p> 
             <AddCard handleAddCards={handleAddCards} coluna="Done"/>
            </Lane>

        </Styled.Container>
      );
}

export default Board;