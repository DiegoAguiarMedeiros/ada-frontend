
import { CardType } from "../../types";
import Lane from "./Lane";
import * as Styled from "./styles";
import cardRest from '../../services/card/card-rest';
import { useEffect, useState } from "react";
    

const Board = () => {

  const [dados,setDados] = useState<CardType[]>([]);

  const [skeleton,setSkeleton] = useState(true);

  const loadCards = async () => {
    const cards = await cardRest.getAllCards();
    setDados(cards.data)

  }


  const handleEditCards = (cardId:string,card:CardType)=>{
    cardRest.editCard(cardId,card).then(()=>loadCards().then())
  }


  useEffect(()=>{
    loadCards().then();
  },[])

  useEffect(()=>{
    setSkeleton(false);
  },[dados])

    return (
        <Styled.Container>
            <Lane background="#59B4D1" color="#fff" handleEditCards={handleEditCards} cards={dados.filter((dado) => dado.lista === 'To Do')} skeleton={skeleton}>To Do</Lane>
            <Lane  background="#D0935A" color="#fff" handleEditCards={handleEditCards}  cards={dados.filter((dado) => dado.lista === 'Doing')}  skeleton={skeleton}>Doing</Lane>
            <Lane  background="#945AD1" color="#fff" handleEditCards={handleEditCards}  cards={dados.filter((dado) => dado.lista === 'Done')}  skeleton={skeleton}>Done</Lane>

        </Styled.Container>
      );
}

export default Board;