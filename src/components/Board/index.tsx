
import { CardType } from "../../types";
import Lane from "./Lane";
import * as Styled from "./styles";
import { v4 as uuidv4 } from 'uuid';


  
  const dados: CardType[] = [
    {
      id: uuidv4(),
      titulo: 'a1',
      conteudo: 'a1',
      lista: 'To Do',
    },
    {
      id: uuidv4(),
      titulo: 'a2',
      conteudo: 'a2',
      lista: 'To Do',
    },
    {
      id: uuidv4(),
      titulo: 'a3',
      conteudo: 'a3',
      lista: 'Doing',
    },
    {
      id: uuidv4(),
      titulo: 'a4',
      conteudo: 'a4',
      lista: 'Doing',
    },
    {
      id: uuidv4(),
      titulo: 'a5',
      conteudo: 'a5',
      lista: 'Done',
    },
    {
      id: uuidv4(),
      titulo: 'a6',
      conteudo: 'a6',
      lista: 'Done',
    },
  ];
  

const Board = () => {
    return (
        <Styled.Container>
            <Lane background="#59B4D1" color="#fff" cards={dados.filter((dado) => dado.lista === 'To Do')}>To Do</Lane>
            <Lane  background="#D0935A" color="#fff"  cards={dados.filter((dado) => dado.lista === 'Doing')}>Doing</Lane>
            <Lane  background="#945AD1" color="#fff"  cards={dados.filter((dado) => dado.lista === 'Done')}>Done</Lane>

        </Styled.Container>
      );
}

export default Board;